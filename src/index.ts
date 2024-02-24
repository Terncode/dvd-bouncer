import { AnimationLoop } from './animationLoop';
import { Bouncer } from './Bouncer';

const element = document.createElement('div');
document.body.append(element);
element.textContent = 'DVD';
//element.style.backgroundColor = 'black';
element.style.borderRadius = '5px';
element.style.padding = '5px';
element.style.color = 'white';
element.style.left = '250px';
element.style.top = '250px';
element.style.fontSize = '50px';
//element.style.fontSize = '50px';

const bouncer = new Bouncer(element);
const loop = new AnimationLoop(bouncer.draw);
loop.start();


bouncer.onChange = () => {
    const items = ['yellow', 'blue', 'red', 'green'].filter(e => e !== element.style.color); 
    const item = items[Math.floor(Math.random() * items.length)];
    element.style.color = item;
    console.log(item);
}
