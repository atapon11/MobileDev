const db = require("../models");
const config = require("../configs/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  //Insert User to database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      //กำหนดบทบาท roles ตอนสมัครสมาชิก
      if (req.body.roles) {
        //Select * from roles where name = req.body.roles
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({
              message:
                "User was registered successfully สมัครเสร็จแล้วนะจ้ะพ่อหนุ่ม",
            });
          });
        });
      }
      //ไม่ได้กำหนด roles
      else {
        //user role = 1
        user.setRoles([1]).then(() => {
          res.send({
            message:
              "User was registered successfully สมัครเสร็จแล้วนะจ้ะพ่อหนุ่ม",
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


exports.signin = (req, res) => {
  //select * from user where username = req.body.username
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ message: "User Not Found บ่เจอผู้นี้เเด้อ" });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res
          .status(401)
          .send({
            accessToken: null,
            message: "Invalid Password! รหัสบ่ถูกจ้า",
          });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 8640, //24 ชม หรือ 1 วัน 8640 วินาที 24*60*60 หน่วยเป็นวินาที
      });

      let authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase()); //toUpper ทำให้อักษรตัวใหญ่หมดทุกตัว ถ้าเป็นตัวเล็กก็ low
        }
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
