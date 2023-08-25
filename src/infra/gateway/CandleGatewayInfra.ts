import CandleGateway from "../../application/gateway/CandleGateway";
export default class CandleGatewayInfra implements CandleGateway {
  async createRegistry(): Promise<any> {
    return {
      nucId: crypto.randomUUID().toString(),
    };
  }
}
