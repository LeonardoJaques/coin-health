import Candle from "../../domino/Candle";
export default interface NucRepository {
  saveNuc(input: Candle): Promise<string>;
  getNuc(nucid: String): Promise<Candle>;
  deleteNuc(nucid: String): Promise<any>;
}
