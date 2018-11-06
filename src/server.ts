import app from "./app";


/**
 * Start Express server.
 */

const server = app.listen(8080, () => {
  console.log("  Press CTRL-C to stop\n");
});

export default server;