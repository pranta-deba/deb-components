export const loadersArr = [
  {
    id: 1,
    name: "tab1",
    tabs: ["previews","html css", "react"],
    htmlCode: `<div class="loader-1"></div>`,
    CssCode: `.loader-1 {
        scale: 0.45;
        width: 22.4px;
        height: 22.4px;
        border-radius: 100px;
        background: #2BA9E1;
        box-shadow: 0 0 0 0 #2BA9E1A4;
        animation: loader1 1.5s infinite linear;
        position: relative;
      }
      
      .loader-1:before,
      .loader-1:after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        box-shadow: 0 0 0 0 #2BA9E1A4;
        animation: inherit;
        animation-delay: -0.5s;
      }
      
      .loader-1:after {
        animation-delay: -1s;
      }
      
      @keyframes loader1 {
        100% {
          box-shadow: 0 0 0 44.8px #0000;
        }
      }`,
    reactCode: `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div className="loader-1"></div>; // Apply styles via className
};

export default Loader;
`,
  },
  {
    id: 2,
    name: "tab2",
    tabs: ["previews","html css", "react"],
    htmlCode: `<div class="loader-2"></div>`,
    CssCode: `.loader-2 {
  scale: 0.7;
  translate: 0 2px;
  width: 32px;
  height: 62px;
  display: inline-block;
  position: relative;
  border: 2px solid #2BA9E1;
  box-sizing: border-box;
  animation: animloader 2s linear infinite alternate;
  color: #2BA9E1;
  border-radius: 0 0 4px 4px;
  transform: perspective(140px) rotateX(-45deg);
}

@keyframes animloader {
  0% {
    box-shadow: 0 0 inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
}`,
    reactCode: `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-2"></div>; // Apply styles via className
};

export default Loader;
`,
  },
  {
    id: 3,
    name: "tab3",
    tabs: ["previews","html css", "react"],
    htmlCode: `<div class="loader-3"></div>`,
    CssCode: `.loader-3 {
    scale: 0.7;
    width: 48px;
    height: 48px;
    border: 2px solid #2BA9E1;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  
  .loader-3::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 0;
    background: #2BA9E1;
    width: 3px;
    height: 24px;
    transform: translateX(-50%);
  }
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`,
    reactCode: `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-3"></div>; // Apply styles via className
};

export default Loader;
`,
  },
  {
    id: 4,
    name: "tab3",
    tabs: ["previews","html css", "react"],
    htmlCode: `<div class="loader-4"></div>`,
    CssCode: `.loader-4 {
    position: absolute;
    scale: 0.45;
    width: 44.8px;
    height: 44.8px;
    color: #2ba9e1;
    background: linear-gradient(currentColor 0 0),
      linear-gradient(currentColor 0 0), linear-gradient(currentColor 0 0),
      linear-gradient(currentColor 0 0);
    background-size: 23.4px 23.4px;
    background-repeat: no-repeat;
    animation: shapes-53h9rpmd 2s infinite cubic-bezier(0.3, 1, 0, 1);
  }
  
  @keyframes shapes-53h9rpmd {
    0% {
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    }
  
    33% {
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      width: 67.2px;
      height: 67.2px;
    }
  
    66% {
      background-position: 100% 0, 100% 100%, 0 100%, 0 0;
      width: 67.2px;
      height: 67.2px;
    }
  
    100% {
      background-position: 100% 0, 100% 100%, 0 100%, 0 0;
    }
  }`,
    reactCode: `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-4"></div>; // Apply styles via className
};

export default Loader;
`,
  },
];
