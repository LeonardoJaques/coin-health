import axios from "axios";
import "dotenv/config";
import { EnumRoutes } from "../../src/enuns/enumRoutes";
import AxiosAdapter from "../../src/infra/AxiosAdapter";
axios.defaults.validateStatus = () => true;

describe("/api.test/", () => {
  const axiosAdapter = new AxiosAdapter();
  test("Should local api return heath and status 404 ", async () => {
    const output = await axiosAdapter.get(
      `http://localhost:3000/${EnumRoutes.HEALTHCHECK}`
    );
    expect(output.status).toBe(404);
  });
  test("Should api investidor10 return a json and save", async () => {
    const output1 = await axiosAdapter.get(process.env.API_URL || "");
    expect(output1.data.length).toBeGreaterThan(50);

    const input = [output1.data[0]];
    const output2 = await axiosAdapter.post(
      `http://localhost:3000${EnumRoutes.NUC}`,
      input
    );

    expect(output2.status).toBe(200);
  });
});
