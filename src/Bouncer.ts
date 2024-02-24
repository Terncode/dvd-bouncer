export class Bouncer {
    private element: HTMLElement;
    private velocityX = 0.25;
    private velocityY = 0.25;
    private x = 0;
    private y = 0;
    private speed = 2;

    constructor(element: HTMLElement) {
        this.setElement(element);
    }

    setElement(element: HTMLElement) {
        this.element = element;
    }

    draw = (delta: number) => {
        this.appendIfDoseNotExist();
        this.applyStyle();
        const { width, height  } = this.element.getBoundingClientRect();
        this.x += this.velocityX * delta;
        this.y += this.velocityY * delta;

        if (this.x < 0) {
            this.x = 0;
            this.velocityX *= -1;
            this.onChange();  
        } else if (this.x + width > window.innerWidth) {
            this.x = window.innerWidth - width;
            this.velocityX *= -1;
            this.onChange();
        }
      
        if (this.y < 0) {
            this.y = 0;
            this.velocityY *= -1;
            this.onChange();
        } else if (this.y + height > window.innerHeight) {
            this.y = window.innerHeight - height;
            this.velocityY *= -1;
            this.onChange();
        }
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

     onChange() {

     }
    private appendIfDoseNotExist() {
        if (!document.body.contains(this.element)) {
            document.body.append(this.element);
        }
    }
    private applyStyle() {
        const style = this.element.style;
        style.position = 'fixed';
        style.zIndex = `${Number.MAX_SAFE_INTEGER}px`;
    }
    // private set x(value: number) {
    //     this.element.style.left = `${value}px`;
    // }
    // private set y(value: number) {
    //     this.element.style.top = `${value}px`;
    // }
}
