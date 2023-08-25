import Candle from "../../domino/Candle";

export default interface CandleGateway {
  createRegistry(input: Candle): Promise<Candle>;
}
