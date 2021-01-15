import { ICouponGenerator } from "../ICouponGenerator";

export class Secuential implements ICouponGenerator {
  private qty: number;
  private coupons: string[];
  private maxChars: number;

  constructor(qty: number, maxChars: number) {
    this.qty = qty;
    this.maxChars = maxChars;
    this.coupons = [];
  }

  generate() {
    for (let i = 0; i < this.qty; i++) {
      this.coupons.push(i.toString());
    }
    this.fillWithZeros();
    return this.coupons;
  }

  private fillWithZeros() {
    this.coupons = this.coupons.map((coupon) => {
      const offset = `${coupon}`.length;
      const zeros = this.maxChars - offset;
      return `${"0".repeat(zeros)}${coupon}`;
    });
  }
}
