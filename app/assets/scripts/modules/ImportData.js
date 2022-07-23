import menu from '../../../../data.json';
class ImportData {
    constructor() {
        this.bars = document.querySelectorAll(".week__daybar");
        this.amounts = menu.map(object => object.amount);
        this.maximum = 0;
        this.menu = menu;
        this.events();
    }
    events() {
        window.addEventListener("load", () => this.loadBars())
    }
    loadBars() {
        for (let i = 0; i < this.bars.length; i++) {
            this.calculateMax()
            this.value = this.amounts[i]*100/this.maximum;
            this.bars[i].style.height = `${this.value}%`;
            this.focusMax();
        }
    }
    calculateMax() {
        for (let i = 0; i < this.amounts.length; i++) {
            if (this.amounts[i] > this.maximum) {
                this.maximum = this.amounts[i];
            }
        }
    }
    focusMax() {
        for (let i = 0; i < this.bars.length; i++) {
        if (this.amounts[i] === this.maximum) {
            this.bars[i].classList.add("week__daybar--focus")
        }
    }
    }
}

export default ImportData;