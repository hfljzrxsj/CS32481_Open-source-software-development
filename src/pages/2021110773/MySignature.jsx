import { useEffect } from 'react';

const MySignature = () => {
  useEffect(() => {
    const e = window.document.createElement("tt");
    e.innerHTML = "黄俊学 2021110773";
    e.style.cssText = "position: fixed; left: 50%; transform: translateX(-50%); user-select: none; background: #888; color: #fff; padding: .5rem; border-radius: 1rem; transition: 2s; opacity: 0; z-index: 9; display: inline-block;font-family: 'Comic Sans MS', 'Helvetica Neue', Helvetica, Arial, sans-serif;bottom: .1em;";
    e.onclick = () => {
      e.remove();
    };
    setInterval(() => {
      e.style.opacity = 0;
      setTimeout(() => {
        e.style.opacity = 0.8;
      }, 5e3);
    }, 1e4);
    window.document.body.appendChild(e);
    return () => {
      e.remove();
    };
  }, []);
  return null;
};

export default MySignature;
