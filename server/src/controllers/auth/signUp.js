const USER = require("../../modules/db/schemas/user");
const bcrypt = require("bcrypt");

const { userCreatedFail, userCreatedSuccess } = require("./configs/responses");

const signUp = (request, response) => {
  const user = request.body;

  const hashedPassword = bcrypt.hashSync(user.password, 10);

  let userData = {};
  userData = { ...user, password: hashedPassword };

  const newUser = new USER(userData);

  newUser.save(function(err) {
    if (err) {
      userCreatedFail(response, (reason = err.message));
    } else {
      userCreatedSuccess(response, newUser);
    }
  });
};

module.exports = signUp;
