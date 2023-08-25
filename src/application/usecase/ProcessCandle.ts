import Candle from "../../domino/Candle";
import CandleGateway from "../gateway/CandleGateway";
import NucRepository from "../repository/nucRepository";

export default class ProcessCandle {
  constructor(
    readonly candleGateway: CandleGateway,
    readonly nubankRepository: NucRepository
  ) {}
  async execute(input: Candle): Promise<Candle> {
    const outputCandle = await this.candleGateway.createRegistry(input);
    await this.nubankRepository.save(outputCandle);
    console.log("outputCandle", outputCandle);
    return outputCandle;
  }
}
