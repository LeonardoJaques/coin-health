import Candle from "../../domino/Candle";
import CandleGateway from "../gateway/CandleGateway";
import NucRepository from "../repository/nucRepository";

export default class ProcessCandle {
  constructor(
    readonly candleGateway: CandleGateway,
    readonly nubankRepository: NucRepository
  ) {}
  async execute(input: Candle[]): Promise<any> {
    input.map(async (candle) => {
      const outputCandle = await this.candleGateway.createRegistry([candle]);
      const nucId = await this.nubankRepository.save(outputCandle);
      return nucId;
    });
  }
}
