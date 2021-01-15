import { ICouponGenerator } from "./ICouponGenerator";
import { Randomer } from "./algorithms/Randomer";
import { Secuential } from "./algorithms/Secuential";

enum ALGORITHMS {
  secuential,
  randomNumber,
  randomAlphabetic,
  randomAlphanumeric,
  randomalphanumericSymbols,
}

interface ICharsets {
  alphanumeric: string[];
  alphabetic: string[];
  alphanumericSymbols: string[];
  numbers: string[];
}

export class CouponGenerator implements ICouponGenerator {
  private generator: Secuential | Randomer;
  private qty: number;
  private maxChars: number;
  private charsets: ICharsets;
  prefix: string;
  sufix: string;

  constructor(
    qty: number,
    maxChars: number,
    algorithm: string,
    charsets: ICharsets,
    prefix = "",
    sufix = ""
  ) {
    this.qty = qty;
    this.maxChars = maxChars;
    this.charsets = charsets;
    this.prefix = prefix;
    this.sufix = sufix;
    this.generator = this.getGenerator(algorithm);
  }

  generate(): string[] {
    const generatedCoupons = this.generator.generate();
    return this.addPrefixSufix(generatedCoupons);
  }
  private addPrefixSufix(generatedCoupons: string[]): string[] {
    const isTherePrefix = !!this.prefix;
    const isThereSufix = !!this.sufix;

    const prefixText = this.prefix.concat("-");
    const sufixText = "-".concat(this.sufix);

    return generatedCoupons.map(
      (coupon) =>
        `${isTherePrefix ? prefixText : this.prefix}${coupon}${
          isThereSufix ? sufixText : this.sufix
        }`
    );
  }

  private getGenerator(algorithm: string): Secuential | Randomer {
    switch (algorithm) {
      case ALGORITHMS[ALGORITHMS.secuential]:
        return new Secuential(this.qty, this.maxChars);
        break;
      case ALGORITHMS[ALGORITHMS.randomAlphanumeric]:
        return new Randomer(
          this.qty,
          this.maxChars,
          this.charsets.alphanumeric
        );
        break;
      case ALGORITHMS[ALGORITHMS.randomAlphabetic]:
        return new Randomer(this.qty, this.maxChars, this.charsets.alphabetic);
        break;
      case ALGORITHMS[ALGORITHMS.randomNumber]:
        return new Randomer(this.qty, this.maxChars, this.charsets.numbers);
        break;
      case ALGORITHMS[ALGORITHMS.randomalphanumericSymbols]:
        return new Randomer(
          this.qty,
          this.maxChars,
          this.charsets.alphanumericSymbols
        );
        break;
      default:
        throw Error("Algorithm not implemented");
    }
  }
}
