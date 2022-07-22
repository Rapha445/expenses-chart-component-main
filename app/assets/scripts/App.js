import 'lazysizes';
import '../styles/styles.css';
import ImportData from './modules/ImportData';

fetch("data.json")
.then((res) => {
    console.log("Resolved", res);
    res.json()
})
.catch((e) => {
    console.log("Error", e);
});

if (module.hot) {
    module.hot.accept()
};