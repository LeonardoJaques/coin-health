import "dotenv/config";
import AxiosAdapter from "../src/infra/AxiosAdapter";
describe("/api.test/", () => {
  const axiosAdapter = new AxiosAdapter();
  test("Should local api return heath and status 200 ", async () => {
    const output = await axiosAdapter.get("http://localhost:3000");
    expect(output.data).toEqual("health\n");
    expect(output.status).toBe(200);
  });
  test("Should api investidor10 return a json", async () => {
    const output = await axiosAdapter.get(`${process.env.API_URL}`);
    expect(output.data.length).toBeGreaterThan(71);
  });
});
