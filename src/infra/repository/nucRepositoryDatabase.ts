import NucRepository from "../../application/repository/nucRepository";
import Candle from "../../domino/Candle";

import DatabaseConnection from "../database/DatabaseConnection";

export default class NucRepositoryDatabase implements NucRepository {
  constructor(readonly connection: DatabaseConnection) {}
  async save(input: Candle): Promise<void> {
    console.info("NucRepositoryDatabase", "save", "start");
    await this.connection.query(
      "insert into health_coin.nubank (nuc_id, dollar_price, br_price, created_at) VALUES ($1, $2, $3, $4)",
      [input.nucId, input.dollarPrice, input.brPrice, input.createdAt]
    );
    console.info("NucRepositoryDatabase", "save", "success");
    this.connection.close();
  }
  async getNuc(nucId: String): Promise<Candle> {
    throw new Error("Method not implemented.");
  }
}
