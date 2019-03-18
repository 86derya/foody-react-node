const MENU_ITEM = require("../../modules/db/schemas/menu-item");

const {
  allMenuItemsfromDbFailed,
  allMenuItemsfromDbSuccess,
  ctgryQueryFailed,
  ctgryQuerySuccess,
  idsQuerySuccess,
  idsQueryFailed
} = require("./configs/responses");

const getMenuItems = (request, response) => {
  const {
    query: { category, ids }
  } = request;

  const getCleanQuery = query =>
    query.split(",").map(i => i.replace(/["\<>\s\ \\\'']/gm, ""));

  if (category || ids) {
    if (category) {
      const cleanCategoryQry = getCleanQuery(category);
      Product.find({ categories: { $in: cleanCategoryQry } }, function(
        err,
        products
      ) {
        if (err || products.length === 0) {
          ctgryQueryFailed(response);
        } else {
          ctgryQuerySuccess(response, products);
        }
      });
    }
    if (ids) {
      const cleanIdsQry = getCleanQuery(ids);
      Product.find({ _id: { $in: cleanIdsQry } }, function(err, products) {
        if (err) {
          idsQueryFailed(response);
        } else {
          idsQuerySuccess(response, products);
        }
      });
    }
  } else {
    MENU_ITEM.find({}, function(err, menuItems) {
      if (err) {
        allMenuItemsfromDbFailed(response);
      } else {
        allMenuItemsfromDbSuccess(response, menuItems);
      }
    });
  }
};
module.exports = getMenuItems;
