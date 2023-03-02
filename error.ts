import { NitroErrorHandler } from "nitropack";

export default <NitroErrorHandler>function (error, event) {
  console.log("Error", error);
  event.res.end("[custom error handler] " + error.stack);
}
