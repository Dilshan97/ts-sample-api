"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
const InvoicesController = require("./controllers/invoices/invoiceController");
const ItemsController = require("./controllers/items/ItemController");
let app = express();
app.get('/invoices', InvoicesController.getInvoices);
app.get('/items', ItemsController.getItems);
exports.default = app;
//# sourceMappingURL=app.js.map