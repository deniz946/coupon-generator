import { ICouponGenerator } from "../ICouponGenerator";

export class Randomer implements ICouponGenerator {
  coupons: string[];

  private qty: number;
  private maxChars: number;
  private charsets: string[];

  constructor(qty: number, maxChars: number, charsets: string[]) {
    this.qty = qty;
    this.maxChars = maxChars;
    this.charsets = charsets;
    this.coupons = [];
  }

  generate() {
    var count = this.qty;
    var codes: { [index: string]: boolean } = {};
    
    while (count > 0) {
      var code = this.generateSingle();
      if (!codes[code]) {
        codes[code] = true;
        count--;
      }
    }
    return Object.keys(codes);
  }

  private generateSingle() {
    const coupon = [];
    while (coupon.length < this.maxChars) {
      coupon.push(this.randomCharFrom(this.charsets));
    }
    return coupon.join("");
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomCharFrom(chars: string[]) {
    return chars[this.randomNumber(0, chars.length - 1)];
  }
}
