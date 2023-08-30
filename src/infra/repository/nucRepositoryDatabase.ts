import NucRepository from "../../application/repository/nucRepository";
import Candle from "../../domino/Candle";
import DatabaseConnection from "../database/DatabaseConnection";
export default class NucRepositoryDatabase implements NucRepository {
  constructor(readonly connection: DatabaseConnection) {}

  async saveNuc(input: Candle): Promise<any> {
    if (!input.nucId) return this.connection.close();
    await this.connection.query(
      "insert into health_coin.nubank (nuc_id, dollar_price, br_price, created_at) VALUES ($1, $2, $3, $4)",
      [input.nucId, input.dollarPrice, input.brPrice, input.createdAt]
    );
    return { nucId: "test" };
  }
  async getNuc(nucId: String): Promise<any> {
    const [nucData] = await this.connection.query(
      "select * from health_coin.nubank where nuc_id = $1",
      [nucId]
    );
    return nucData;
  }

  async deleteNuc(nucid: String): Promise<any> {
    await this.connection.query(
      "delete from health_coin.nubank where nuc_id = $1",
      [nucid]
    );
    return { message: "deleted" };
  }
}
