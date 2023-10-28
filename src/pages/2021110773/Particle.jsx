import { useEffect } from 'react';;
import style from './Particle.module.css';
const Particle = () => {
  useEffect(() => {
    const particle = document.createElement("div");
    particle.className = style.particle;
    document.body.appendChild(particle);
    window.onclick = (e => {
      for (let t = 0; t < 10; t++) {
        let t = e.pageX,
          a = e.pageY,
          n = document.createElement("div");
        n.style.left = t + "px";
        n.style.top = a + "px";
        n.style.background = `radial-gradient(rgba(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()},.5), transparent)`;
        particle.appendChild(n);
        n.style.setProperty("--t", a + 1e3 * (Math.random() - .5) + "px");
        n.style.setProperty("--l", t + 1e3 * (Math.random() - .5) + "px");
        setTimeout(() => {
          n.remove()
        }, 5e3)
      }
    });
  }, []);

};
export default Particle;
