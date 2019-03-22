const USER = require("../../modules/db/schemas/user");
const bcrypt = require("bcrypt");

const { userCreatedFail, userCreatedSuccess } = require("./configs/responses");

const signUp = (request, response) => {
  const user = request.body;
  console.log("revr", user);
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  console.log("hashedPassword " + hashedPassword);
  let userData = {};
  userData = { ...user, password: hashedPassword };
  console.log("nfdnvodnfvn", userData);

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
