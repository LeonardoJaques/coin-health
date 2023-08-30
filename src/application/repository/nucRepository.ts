import Candle from "../../domino/Candle";
export default interface NucRepository {
  save(input: Candle): Promise<string>;
  getNuc(nucid: String): Promise<Candle>;
}
