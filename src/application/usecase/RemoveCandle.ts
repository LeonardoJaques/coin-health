import NucRepository from "../repository/nucRepository";
export default class RemoveCandle {
  constructor(readonly nubankRepository: NucRepository) {}
  async execute(nucId: string): Promise<any> {
    return await this.nubankRepository.deleteNuc(nucId);
  }
}
