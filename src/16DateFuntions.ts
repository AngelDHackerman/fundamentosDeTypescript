import { subDays, format } from "date-fns"; // ? subDate hace la resta de una fecha.

const fecha = new Date(1998, 1, 28); // * 0 = enero, 1 = febrero.
const rta = subDays(fecha, 30); // le restaremos 30 dias
const str = format(rta, 'yyyy/mm/dd')

console.log(str);

