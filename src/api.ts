import "dotenv/config";
import ProcessCandle from "./application/usecase/ProcessCandle";
import ExpressAdapter from "./infra/ExpressAdapter";
import PgPromiseAdapter from "./infra/database/PgPromiseAdapter";
import Registry from "./infra/di/Registry";
import CandleGatewayInfra from "./infra/gateway/CandleGatewayInfra";
import MainController from "./infra/http/MainController";
import NucRepositoryDatabase from "./infra/repository/nucRepositoryDatabase";

async function Main() {
  const connection = new PgPromiseAdapter();
  const nucRepository = new NucRepositoryDatabase(connection);
  const registry = Registry.getInstance();
  const httpServer = new ExpressAdapter();
  const candleGateway = new CandleGatewayInfra();
  const processCandle = new ProcessCandle(candleGateway, nucRepository);
  registry.provide("processCandle", processCandle);
  new MainController(httpServer);
  const port = process.env.LOCALPORT ?? 4000;
  httpServer.listen(port);
}
Main();
