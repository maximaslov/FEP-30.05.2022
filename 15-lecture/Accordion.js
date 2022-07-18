class Accordion {
    #rootEl;

    static CLASS_ITEM = 'accordion-item';
    static CLASS_HEADER = 'accordion-item-header';
    static CLASS_CONTENT = 'accordion-item-content';
    static CLASS_OPEN = 'open';

    constructor(rootEl) {
        this.#rootEl = rootEl;

        this.bindStyles();
        this.bindEvents();
    }

    bindStyles() {
        for (const accordionItemEl of this.#rootEl.children) {
            accordionItemEl.classList.add(Accordion.CLASS_ITEM);
            
            // const headerEl = accordionItemEl.children[0];
            // const contentEl = accordionItemEl.children[1];

            const [headerEl, contentEl] = accordionItemEl.children;

            headerEl.classList.add(Accordion.CLASS_HEADER);
            contentEl.classList.add(Accordion.CLASS_CONTENT);
        }
    }

    bindEvents() {
        // this.#rootEl.addEventListener('click', this.onRootElClick.bind(this));
        this.#rootEl.addEventListener('click', (e) => this.onRootElClick(e));
    }


    onRootElClick(e) {
        const headerEl = e.target;

        if (headerEl.classList.contains(Accordion.CLASS_HEADER)) {
            this.toggleContent(headerEl);
        }
    }

    toggleContent(headerEl) {
        const openContentEl = this.findOpenContentEl();
        const currentContentEl = this.findCurrentContentEl(headerEl);

        if (openContentEl && openContentEl !== currentContentEl) { 
            this.hideContent(openContentEl);
        }

        currentContentEl.classList.toggle(Accordion.CLASS_OPEN);
    }

    findOpenContentEl() {
        return this.#rootEl.querySelector(`.${Accordion.CLASS_OPEN}`);
    }

    findCurrentContentEl(headerEl) {
        // return headerEl.nextElementSibling;

        return headerEl
            .closest(`.${Accordion.CLASS_ITEM}`)
            .querySelector(`.${Accordion.CLASS_CONTENT}`);
    }

    hideContent(contentEl) {
        contentEl.classList.remove(Accordion.CLASS_OPEN);
    }
}

export default Accordion;