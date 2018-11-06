"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("../../models/item");
function getItems(req, res) {
    res.send(item_1.Item.get());
}
exports.getItems = getItems;
//# sourceMappingURL=ItemController.js.map