import 'lazysizes';
import '../styles/styles.css';
import ImportData from './modules/ImportData';
import OnHover from './modules/OnHover';

new ImportData();
new OnHover(document.querySelectorAll(".week__daybar"));
// new OnHover(document.querySelectorAll(".week__daybar--focus"));


if (module.hot) {
    module.hot.accept()
};