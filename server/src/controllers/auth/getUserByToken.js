const User = require("../../modules/db/schemas/user");
const app = require("../../modules/app");
var jwt = require("jsonwebtoken");

const { idSerchSuccess, idSearchFailed } = require("./configs/responses");

const getUserByToken = (request, response) => {
  console.log(request.headers["authorization"]);
  const token = request.headers["authorization"];
  const cleanToken = token.replace("Bearer ", "").trim();
  console.log(cleanToken);
  const secretKey = app.get("superSecret");
  let userId;

  jwt.verify(cleanToken, secretKey, (err, decoded) => {
    if (err) {
      return response.json({
        success: false,
        message: "Failed to authenticate token."
      });
    }

    userId = decoded.userid;
    console.log("userId", decoded);
    User.findById(userId)
      .then(user => idSerchSuccess(response, user))
      .catch(err => {
        console.error("ERROR: ", err.message), idSearchFailed(response);
      });
  });
};

module.exports = getUserByToken;
