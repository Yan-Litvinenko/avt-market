class ScrollManager {
    private scrollPosition: number;

    constructor() {
        this.scrollPosition = 0;
    }

    scrollOff(): void {
        this.scrollPosition = window.scrollY;

        document.body.style.cssText = `
        overflow: hidden;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        position: fixed;
        top: -${this.scrollPosition}px;
        left: 0;
        height: 100vh;
        width: 100vw;
      `;

        document.documentElement.style.scrollBehavior = 'unset';
    }

    scrollOn(): void {
        document.body.style.cssText = '';

        window.scrollTo({
            top: this.scrollPosition,
        });

        document.documentElement.style.scrollBehavior = '';
    }
}

export const scrollManager = new ScrollManager();
