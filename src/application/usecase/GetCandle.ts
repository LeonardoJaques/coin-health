import Candle from "../../domino/Candle";
import NucRepository from "../repository/nucRepository";

export default class GetCandle {
  constructor(readonly nubankRepository: NucRepository) {}
  async execute(nucId: string): Promise<Candle> {
    return await this.nubankRepository.getNuc(nucId);
  }
}
