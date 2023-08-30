import NucRepository from "../repository/nucRepository";

export default class GetCandle {
  constructor(readonly nubankRepository: NucRepository) {}
  async execute(nucId: string): Promise<any> {
    return await this.nubankRepository.getNuc(nucId);
  }
}
