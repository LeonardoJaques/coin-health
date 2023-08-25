export default class Candle {
  constructor(
    readonly nucId: string,
    readonly dollarPrice: string,
    readonly brPrice: string,
    readonly createdAt: string
  ) {}
}
