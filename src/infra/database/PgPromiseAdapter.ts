import "dotenv/config";
import pgPromise from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";
//framework and Drivers
export default class PgPromiseAdapter implements DatabaseConnection {
  private connection: any;
  constructor() {
    this.connection = pgPromise()(`${process.env.DATABASE_URL}`);
  }
  async query(statements: string, params: any): Promise<any> {
    return await this.connection.query(statements, params);
  }
  async close(): Promise<void> {
    await this.connection.$pool.end();
  }
}
