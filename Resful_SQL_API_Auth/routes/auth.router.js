const { verifySignUp } = require("../middleware");
const controller = require("../controller/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Header",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //signup
  //http://localhost:5000/apis/auth/signup
  app.post(
    "/apis/auth/signup",
    [verifySignUp.checkDuplicateUserOrEmail, verifySignUp.checkRolesExisted], //middleware
    controller.signup // function
  );
  //signin
  //http://localhost:5000/apis/auth/signin
  app.post(
    "/apis/auth/signin", //Path
    controller.signin // function
  );
};
