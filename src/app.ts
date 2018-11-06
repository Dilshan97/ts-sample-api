let express = require('express');

import * as InvoicesController from "./controllers/invoices/invoiceController";
import * as ItemsController from "./controllers/items/ItemController";

let app = express();

app.get('/invoices', InvoicesController.getInvoices);
app.get('/items', ItemsController.getItems);


export default app;