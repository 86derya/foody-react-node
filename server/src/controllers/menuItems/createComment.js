const MENU_ITEM = require("../../modules/db/schemas/menu-item");
const {
  productUpdateSuccess,
  productUpdateFailed
} = require("./configs/responses");

const createComment = (request, response) => {
  const id = request.params.id;
  const comment = request.body;

  console.log(id);
  console.log(comment);

  MENU_ITEM.findOneAndUpdate(
    { _id: id },
    { $push: { comments: comment } },
    { new: true },
    function(error, product) {
      if (error) {
        productUpdateFailed(response);
      } else {
        productUpdateSuccess(response, product);
      }
    }
  );
};

module.exports = createComment;
