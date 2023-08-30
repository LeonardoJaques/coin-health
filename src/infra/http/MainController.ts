import GetCandle from "../../application/usecase/GetCandle";
import ProcessCandle from "../../application/usecase/ProcessCandle";
import { EnumRoutes } from "../../enuns/enumRoutes";
import inject from "../di/Inject";
import HttpServer from "./HttpServer";

export default class MainController {
  @inject("processCandle")
  processCandle?: ProcessCandle;
  @inject("getCandle")
  getCandle?: GetCandle;
  constructor(httpServer: HttpServer) {
    httpServer.on(
      "get",
      `${EnumRoutes.GET}/:nucid`,
      async (params: any, body: any) => {
        if (!this.getCandle) return;
        const output = await this.getCandle.execute(params.nucid);
        return output;
      }
    );
    httpServer.on("post", EnumRoutes.SAVE, async (params: any, body: any) => {
      const input = await body;
      if (!this.processCandle) return;
      return await this.processCandle.execute(input);
    });
  }
}
