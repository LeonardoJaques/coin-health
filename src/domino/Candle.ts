export default class Candle {
  nucId: string;
  constructor(
    nucId: string,
    readonly dollarPrice: string,
    readonly brPrice: string,
    readonly createdAt: string
  ) {
    this.nucId = nucId;
  }
}
