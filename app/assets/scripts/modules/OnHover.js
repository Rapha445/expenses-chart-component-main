class OnHover {
    constructor(els) {
        this.elsToWatch = els;
        this.amountDisplays = document.querySelectorAll(".week__dayamount");
        this.HoverClass = 0;
        this.events();
    }
    events() {
        for (let i = 0; i < this.elsToWatch.length; i++) {
            this.elsToWatch[i].addEventListener("mouseover", () => this.addHoverStyles(this.elsToWatch[i], i), false)
        }
        for (let i = 0; i < this.elsToWatch.length; i++) {
            this.elsToWatch[i].addEventListener("mouseout", () => this.removeHoverStyles(this.elsToWatch[i], i), false)
        }
    }
    addHoverStyles(el, i) {
        this.HoverClass = `${el.classList[el.classList.length -1]}--hover`;
        el.classList.add(this.HoverClass);
        this.amountDisplays[i].classList.add("week__dayamount--visible");
    }
    removeHoverStyles(el, i) {
        el.classList.remove(this.HoverClass);
        this.amountDisplays[i].classList.remove("week__dayamount--visible");
    }
}

export default OnHover;