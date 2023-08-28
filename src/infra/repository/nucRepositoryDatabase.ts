import NucRepository from "../../application/repository/nucRepository";
import Candle from "../../domino/Candle";

import DatabaseConnection from "../database/DatabaseConnection";

export default class NucRepositoryDatabase implements NucRepository {
  constructor(readonly connection: DatabaseConnection) {}
  async save(input: Candle): Promise<any> {
    if (!input.nucId) return this.connection.close();
    try {
      await this.connection.query(
        "insert into health_coin.nubank (nuc_id, dollar_price, br_price, created_at) VALUES ($1, $2, $3, $4)",
        [input.nucId, input.dollarPrice, input.brPrice, input.createdAt]
      );
      return input.nucId;
    } catch (err) {
      console.error(err);
    }
  }
  async getNuc(nucId: String): Promise<any> {
    try {
      const result = await this.connection.query(
        "select * from health_coin.nubank where nuc_id = $1",
        [nucId]
      );
      console.log(result.rows[0]);
      return result.rows[0];
    } catch (err) {
      console.error(err);
    }
  }
}
