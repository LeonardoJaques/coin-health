import ProcessCandle from "../../application/usecase/ProcessCandle";
import { EnumRoutes } from "../../enuns/enumRoutes";
import inject from "../di/Inject";
import HttpServer from "./HttpServer";

export default class MainController {
  @inject("processCandle")
  processCandle?: ProcessCandle;
  constructor(httpServer: HttpServer) {
    httpServer.on(
      "get",
      EnumRoutes.HEALTHCHECK,
      async (param: any, body: any) => {
        const output = await body;
        return output;
      }
    );
    httpServer.on("post", EnumRoutes.NUC, async (params: any, body: any) => {
      const input = await body;
      if (!this.processCandle) return;
      return await this.processCandle.execute(input);
    });
  }
}
