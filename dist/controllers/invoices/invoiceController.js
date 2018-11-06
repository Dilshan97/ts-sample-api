"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = require("../../models/invoice");
function getInvoices(req, res) {
    res.send(invoice_1.Invoice.get());
}
exports.getInvoices = getInvoices;
//# sourceMappingURL=invoiceController.js.map