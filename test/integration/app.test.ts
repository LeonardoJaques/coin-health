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
  test("Should api investidor10 return a json", async () => {
    const output = await axiosAdapter.get(process.env.API_URL || "");
    expect(output.data.length).toBeGreaterThan(50);
  });
  test("Should api investidor10 save in database", async () => {
    const input = [
      {
        dolar_price: "1.150007",
        brl_price: "0.780000",
        created_at: "13/09/2022",
      },
      {
        dolar_price: "0.150007",
        brl_price: "0.780000",
        created_at: "13/09/2022",
      },
    ];
    const output = await axiosAdapter.post(
      `http://localhost:3000${EnumRoutes.NUC}`,
      input
    );
    expect(output.status).toBe(200);
    expect(output.data.nucId[0].length).toBeGreaterThan(35);
    expect(output.data.nucId.length).toBeGreaterThan(1);
  });
});
