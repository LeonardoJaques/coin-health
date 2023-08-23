import { EnumRoutes } from "../../enuns/enumRoutes";
import HttpServer from "./HttpServer";

export default class MainController {
  constructor(httpServer: HttpServer) {
    httpServer.on("get", EnumRoutes.NUC, async (param: any) => {
      // const output = await this.nucService.execute(param);
      // return output;
    });
  }
}
