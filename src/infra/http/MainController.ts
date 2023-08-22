import HttpServer from "./HttpServer";

export default class MainController {
  constructor(httpServer: HttpServer) {
    httpServer.on("get", "/api/nuc", async (param: any) => {
      // const output = await this.nucService.execute(param);
      // return output;
    });
  }
}
