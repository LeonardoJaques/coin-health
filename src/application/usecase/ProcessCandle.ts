import Candle from "../../domino/Candle";
import CandleGateway from "../gateway/CandleGateway";
import NucRepository from "../repository/nucRepository";

export default class ProcessCandle {
  constructor(
    readonly candleGateway: CandleGateway,
    readonly nubankRepository: NucRepository
  ) {}

  async execute(input: Candle[]): Promise<any> {
    let nucId = [];
    for (const candle in input) {
      const registered = await this.candleGateway.createRegistry([
        input[candle],
      ]);
      await this.nubankRepository.save(registered);
      nucId.push(registered.nucId);
    }
    return { nucId };
  }
}
