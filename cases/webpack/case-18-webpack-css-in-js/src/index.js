import {redbg, border} from "./css/common";
import {applyStyles} from "./css/util";

console.log(redbg, border);

const dv1 = document.querySelector('#div1'),
    dv2 = document.querySelector('#div2');

const styles = {
    width: '400px',
    height: '500px',
    margin: '0 auto 20px',
};

applyStyles(dv1, styles, redbg);
applyStyles(dv2, styles, border(10, 'green'));