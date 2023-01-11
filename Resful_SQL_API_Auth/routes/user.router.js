const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Header",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //http://localhost:5000/apis/test/all
  app.get("/apis/test/all",controller.allAccess);

  //http://localhost:5000/apis/test/user
  app.get("/apis/test/user",[authJwt.verifyToken],controller.allBoard);

  //http://localhost:5000/apis/test/admin
  app.get("/apis/test/admin",[authJwt.verifyToken],controller.adminBoard);

  //http://localhost:5000/apis/test/moderator
  app.get("/apis/test/moderator",[authJwt.verifyToken],controller.moderatorBoard);
};
