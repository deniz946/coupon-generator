import { CouponGenerator } from "./CouponGenerator";
const config = require("../config.json");


const generator = new CouponGenerator(
  config.qty,
  config.chars,
  config.algorithm,
  config.charsets,
  config.prefix,
  config.sufix
);

console.log(generator.generate());
