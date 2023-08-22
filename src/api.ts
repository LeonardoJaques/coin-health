import "dotenv/config";
import AxiosAdapter from "./infra/AxiosAdapter";

async function Main() {
  const httpServer = new AxiosAdapter();
  const port = process.env.LOCALPORT ?? 4000;
  httpServer.listen(port).then(() => {
    console.log(`Server is running on port ${port}`);
  });
}
Main();
