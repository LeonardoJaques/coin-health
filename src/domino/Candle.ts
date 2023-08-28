export default class Candle {
  nucId: string;
  constructor(
    nucId: string,
    public dollarPrice: string,
    public brPrice: string,
    public createdAt: string
  ) {
    this.nucId = nucId;
  }
}
