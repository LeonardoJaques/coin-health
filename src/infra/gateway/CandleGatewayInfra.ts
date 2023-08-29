import CandleGateway from "../../application/gateway/CandleGateway";
import Candle from "../../domino/Candle";
export default class CandleGatewayInfra implements CandleGateway {
  async createRegistry(input: Candle[]): Promise<Candle> {
    const crypto = await import("crypto");
    const outPut = {} as Candle;
    input.flatMap(async (candle) => {
      outPut.nucId = crypto.randomUUID().toString();
      outPut.brPrice = JSON.parse(JSON.stringify(candle)).brl_price;
      outPut.dollarPrice = JSON.parse(JSON.stringify(candle)).dolar_price;
      outPut.createdAt = JSON.parse(JSON.stringify(candle)).created_at;
    });
    return outPut;
  }
}
