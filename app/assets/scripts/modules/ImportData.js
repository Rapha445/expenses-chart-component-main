import menu from '../../../../data.json';
class ImportData {
    constructor() {
        this.bars = document.querySelectorAll(".week__daybar");
        this.displays = document.querySelectorAll(".week__dayamount");
        this.menu = menu;
        this.amounts = menu.map(object => object.amount);
        this.maximum = 0;
        this.loadBars();
    }
    loadBars() {
        this.calculateMax();
        this.calculateBars();
        this.calculateDisplays();
        this.focusMax();
    }
    calculateMax() {
        for (let i = 0; i < this.amounts.length; i++) {
            if (this.amounts[i] > this.maximum) {
                this.maximum = this.amounts[i];
            }
        }
    }
    calculateBars() {
        for (let i = 0; i < this.bars.length; i++) {
            this.barValue = this.amounts[i]*100/this.maximum;
            this.bars[i].style.height = `${this.barValue}%`;
        }
    }
    calculateDisplays() {
        for (let i=0; i < this.displays.length; i++) {
            this.displayValue = this.amounts[i];
            this.displays[i].innerText = `$${this.displayValue}`;    
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