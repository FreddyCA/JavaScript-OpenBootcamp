import * as ope from "./controller.js";
import chalk from 'chalk';

const operacion = ope.multiplica(ope.suma(1, 2) , ope.suma(4, 5))
console.log(operacion)

console.log(chalk.green(operacion));