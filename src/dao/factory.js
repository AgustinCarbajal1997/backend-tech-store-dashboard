const { productDao, userDao } = require("./subClassesDAO");
class Factory {
  models(model) {
    if (model === "product") return productDao;
    if (model === "user") return userDao;
  }
}
const factory = new Factory();
module.exports = factory;
