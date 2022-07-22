import 'lazysizes';
import '../styles/styles.css';
import ImportData from './modules/ImportData';
import menu from '../../../data.json';
import { indexOf } from 'lodash';

console.log(menu);

const bars = document.querySelectorAll(".week__daybar");

const amounts = menu.map(object => object.amount);
console.log(amounts);

for (let i = 0; i < bars.length; i++) {
    let index = i;
    console.log(index);
    console.log(bars[i]);
    bars[i].style.height = `${amounts[index]}%`;
}




if (module.hot) {
    module.hot.accept()
};