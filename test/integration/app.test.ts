import axios from "axios";
import "dotenv/config";
import { EnumRoutes } from "../../src/enuns/enumRoutes";
import AxiosAdapter from "../../src/infra/AxiosAdapter";
axios.defaults.validateStatus = () => true;

describe("/api.test/", () => {
  const axiosAdapter = new AxiosAdapter();
  test("Should api investidor10 return a json", async () => {
    const output = await axiosAdapter.get(process.env.API_URL || "");
    expect(output.data.length).toBeGreaterThan(50);
  });
  test("Should api investidor10 save in database and return nuc_id", async () => {
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
      `http://localhost:3000${EnumRoutes.SAVE}`,
      input
    );
    expect(output.status).toBe(200);
    expect(output.data.nucId[0].length).toBeGreaterThan(35);
    expect(output.data.nucId.length).toBeGreaterThan(1);
  });
  test.only("Should get information in database and delete this information", async () => {
    const input = [
      {
        dolar_price: "1.150007",
        brl_price: "0.780000",
        created_at: "13/09/2022",
      },
    ];
    const output = await axiosAdapter.post(
      `http://localhost:${process.env.LOCALPORT}${EnumRoutes.SAVE}`,
      input
    );
    const nucId = output.data.nucId[0];
    const result = await axiosAdapter.get(
      `http://localhost:${process.env.LOCALPORT}${EnumRoutes.GET}/${nucId}`
    );
    expect(result.status).toBe(200);
    expect(result.data.nuc_id).toBe(nucId);
    const deleted = await axiosAdapter.get(
      `http://localhost:${process.env.LOCALPORT}${EnumRoutes.DELETE}/${nucId}`
    );
    expect(deleted.status).toBe(200);
    expect(deleted.data.message).toBe("deleted");
  });
});
