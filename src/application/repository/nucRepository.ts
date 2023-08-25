import Candle from "../../domino/Candle";
export default interface NucRepository {
  save(input: Candle): Promise<void>;
  getNuc(nuc_id: String): Promise<Candle>;
}
