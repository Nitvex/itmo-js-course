// board https://kodaktor.ru/func_9d073
import compose from "https://kodaktor.ru/j/goss_compose";
const qv = x => x * x;
const sc = x => x + 1;
const qvSc = compose(qv, sc);
const scQv = compose(sc, qv);
Out.log(qvSc(5)) /* 36 */
   .log(scQv(5)); /* 26 */
