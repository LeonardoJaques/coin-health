import "dotenv/config";
import ExpressAdapter from "./infra/ExpressAdapter";

async function Main() {
  const httpServer = new ExpressAdapter();
  const port = process.env.LOCALPORT ?? 4000;
  httpServer.listen(port);
}
Main();
