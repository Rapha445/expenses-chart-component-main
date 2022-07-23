import 'lazysizes';
import '../styles/styles.css';
import ImportData from './modules/ImportData';

new ImportData();

if (module.hot) {
    module.hot.accept()
};