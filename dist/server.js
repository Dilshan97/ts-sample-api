"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
/**
 * Start Express server.
 */
const server = app_1.default.listen(8080, () => {
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=server.js.map