export class AnimationLoop {
    private frame: number;
    private last = 0;
    constructor(private animationFrame: (delta: number) => void) {

    }

    start() {
        if (!this.frame) {
            this.last = performance.now();
            this.frame = requestAnimationFrame(this.draw);
        }
    }
    stop() {
        if (this.frame) {
            cancelAnimationFrame(this.frame);
            this.frame = undefined;
        }
    }

    private draw = () => {
        const now = performance.now();
        const delta = now - this.last;
        this.last = now;
        this.animationFrame(delta);
        this.frame = requestAnimationFrame(this.draw);
    }
}
