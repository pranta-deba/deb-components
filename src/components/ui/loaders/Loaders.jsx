// import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./loaders.css";
// import { FaCheck, FaCopy } from "react-icons/fa";


const Loaders = () => {
  

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="space-y-3">
      {/* Loader 1 */}
      <div className="border-2 border-blue-300 p-4 md:p-6 rounded-md">
        <div className="flex gap-3">
          <button
            className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base `
            }>Previews</button>
          <button
            className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base `}>HTML & CSS</button>
          <button
            className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base `}>React</button>
        </div>
        <div className="mt-4 w-full min-h-[100px] flex justify-center items-center">
          <div className="loader-1"></div>
         <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="underline italic">index.html</p>
                <button title="copy code"
                  onClick={() => copyToClipboard(loader1_html)}>
                  {/* {copied1 ? <FaCheck /> : <FaCopy />} */}
                </button>
              </div>
              <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                {loader1_html}
              </SyntaxHighlighter>
              <div className="flex justify-between">
                <p className="underline italic">style.css</p>
                <button title="copy code"
                  onClick={() => copyToClipboard(loader1_css)}>
                  {/* {copied2 ? <FaCheck /> : <FaCopy />} */}
                </button>
              </div>
              <SyntaxHighlighter language="htnl" style={vs} customStyle={customColorInode}>
                {loader1_css}
              </SyntaxHighlighter>
            </div>
          </div>

          <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="underline italic">Loader.jsx</p>
                <button title="copy code"
                  onClick={() => copyToClipboard(loader1_react)}>
                  {/* {copied1 ? <FaCheck /> : <FaCopy />} */}
                </button>
              </div>
              <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                {loader1_react}
              </SyntaxHighlighter>
              <div className="flex justify-between">
                <p className="underline italic">style.css</p>
                <button title="copy code"
                  onClick={() => copyToClipboard(loader1_css)}>
                  {/* {copied2 ? <FaCheck /> : <FaCopy />} */}
                </button>
              </div>
              <SyntaxHighlighter language="htnl" style={vs} customStyle={customColorInode}>
                {loader1_css}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      {/* Loader 1 end*/}

    </div >
  );
};
// custom css
const customColorInode = {
  backgroundColor: "transparent",
  boxShadow: 'inset 4px 3px 3px 0px #b8c7dd, inset -2px -4px 4px 0px #fff'

};
// loader 1
const loader1_html = `<div class="loader-1"></div>`
const loader1_css = `.loader-1 {
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
  }`;
const loader1_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div className="loader-1"></div>; // Apply styles via className
};

export default Loader;
`;
// loader 2
const loader2_html = `<div class="loader-2"></div>`
const loader2_css = `.loader-2 {
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
}`;
const loader2_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-2"></div>; // Apply styles via className
};

export default Loader;
`;
// loader 3
const loader3_html = `<div class="loader-3"></div>`
const loader3_css = `.loader-3 {
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
  }`;
const loader3_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-3"></div>; // Apply styles via className
};

export default Loader;
`;
//  loader 4
const loader4_html = `<div class="loader-4"></div>`
const loader4_css = `.loader-4 {
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
  }`;
const loader4_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-4"></div>; // Apply styles via className
};

export default Loader;
`;
//  loader 5
const loader5_html = `<div class="loader-5"></div>`
const loader5_css = `.loader-5 {
  scale: 0.65;
  width: 56px;
  height: 56px;
  display: grid;
  border-radius: 50%;
  -webkit-mask: radial-gradient(farthest-side, #0000 40%, #2ba9e1 41%);
  background: linear-gradient(
        0deg,
        #2ba9e1 50%,
        rgb(143 68 253 / 0%) 0
      )
      center/4.5px 100%,
    linear-gradient(90deg, #2ba9e1 50%, #2ba9e1 0)
      center/100% 4.5px;
  background-repeat: no-repeat;
  animation: spinner-d3o0rx 1s infinite steps(12);
}

.loader-5::before,
.loader-5::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}

.loader-5::after {
  opacity: 0.83;
  transform: rotate(60deg);
}

@keyframes spinner-d3o0rx {
  100% {
    transform: rotate(1turn);
  }
}`;
const loader5_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-5"></div>; // Apply styles via className
};

export default Loader;
`;
//  loader 6
const loader6_html = `<div class="loader-6"></div>`
const loader6_css = `.loader-6 {
  scale: 0.6;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  padding: 1.1px;
  background: conic-gradient(#0000 10%, #2ba9e1) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 9px),
      #000 calc(100% - 9px)
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: spinner-d55elj 1s infinite steps(10);
}

@keyframes spinner-d55elj {
  to {
    transform: rotate(1turn);
  }
}`;
const loader6_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-6"></div>; // Apply styles via className
};

export default Loader;
`;
//  loader 7
const loader7_html = `<div class="loader-7">
            <svg class="circle-outer" viewBox="0 0 86 86">
              <circle class="back" cx="43" cy="43" r="40"></circle>
              <circle class="front" cx="43" cy="43" r="40"></circle>
              <circle class="new" cx="43" cy="43" r="40"></circle>
    </svg>
            <svg class="circle-middle" viewBox="0 0 60 60">
              <circle class="back" cx="30" cy="30" r="27"></circle>
              <circle class="front" cx="30" cy="30" r="27"></circle>
    </svg>
            <svg class="circle-inner" viewBox="0 0 34 34">
              <circle class="back" cx="17" cy="17" r="14"></circle>
              <circle class="front" cx="17" cy="17" r="14"></circle>
    </svg>
</div>`
const loader7_css = `.loader-7 {
  --background: #2ba9e1;
  --front-color: #2ba9e1;
  --back-color: rgba(14, 135, 255, 0.2);
  --text-color: #414856;
  width: 64px;
  height: 64px;
  scale: 0.4;
  border-radius: 50px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-7 svg {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-7 svg circle {
  position: absolute;
  fill: none;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-100deg);
  transform-origin: center;
}

.loader-7 svg circle.back {
  stroke: var(--back-color);
}

.loader-7 svg circle.front {
  stroke: var(--front-color);
}

.loader-7 svg.circle-outer {
  height: 86px;
  width: 86px;
}

.loader-7 svg.circle-outer circle {
  stroke-dasharray: 62.75 188.25;
}

.loader-7 svg.circle-outer circle.back {
  animation: circle-outer135 1.8s ease infinite 0.3s;
}

.loader-7 svg.circle-outer circle.front {
  animation: circle-outer135 1.8s ease infinite 0.15s;
}

.loader-7 svg.circle-middle {
  height: 60px;
  width: 60px;
}

.loader-7 svg.circle-middle circle {
  stroke-dasharray: 42.5 127.5;
}

.loader-7 svg.circle-middle circle.back {
  animation: circle-middle6123 1.8s ease infinite 0.25s;
}

.loader-7 svg.circle-middle circle.front {
  animation: circle-middle6123 1.8s ease infinite 0.1s;
}

.loader-7 svg.circle-inner {
  height: 34px;
  width: 34px;
}

.loader-7 svg.circle-inner circle {
  stroke-dasharray: 22 66;
}

.loader-7 svg.circle-inner circle.back {
  animation: circle-inner162 1.8s ease infinite 0.2s;
}

.loader-7 svg.circle-inner circle.front {
  animation: circle-inner162 1.8s ease infinite 0.05s;
}

.loader-7 .text {
  position: absolute;
  bottom: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: lowercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
}

.loader-7 .text::before,
.loader-7 .text::after {
  content: attr(data-text);
}

.loader-7 .text::before {
  color: var(--text-color);
}

.loader-7 .text::after {
  color: var(--front-color);
  animation: text-animation76 3.6s ease infinite;
  position: absolute;
  left: 0;
}

@keyframes circle-outer135 {
  0% {
    stroke-dashoffset: 25;
  }

  25% {
    stroke-dashoffset: 0;
  }

  65% {
    stroke-dashoffset: 301;
  }

  80% {
    stroke-dashoffset: 276;
  }

  100% {
    stroke-dashoffset: 276;
  }
}

@keyframes circle-middle6123 {
  0% {
    stroke-dashoffset: 17;
  }

  25% {
    stroke-dashoffset: 0;
  }

  65% {
    stroke-dashoffset: 204;
  }

  80% {
    stroke-dashoffset: 187;
  }

  100% {
    stroke-dashoffset: 187;
  }
}

@keyframes circle-inner162 {
  0% {
    stroke-dashoffset: 9;
  }

  25% {
    stroke-dashoffset: 0;
  }

  65% {
    stroke-dashoffset: 106;
  }

  80% {
    stroke-dashoffset: 97;
  }

  100% {
    stroke-dashoffset: 97;
  }
}

@keyframes text-animation76 {
  0% {
    clip-path: inset(0 100% 0 0);
  }

  50% {
    clip-path: inset(0);
  }

  100% {
    clip-path: inset(0 0 0 100%);
  }
}`;
const loader7_react = `import React from "react";
import "./style.css"; // External CSS file

const Loader = () => {
  return (
    <div className="loader-7">
      <svg className="circle-outer" viewBox="0 0 86 86">
        <circle className="back" cx="43" cy="43" r="40"></circle>
        <circle className="front" cx="43" cy="43" r="40"></circle>
        <circle className="new" cx="43" cy="43" r="40"></circle>
      </svg>
      <svg className="circle-middle" viewBox="0 0 60 60">
        <circle className="back" cx="30" cy="30" r="27"></circle>
        <circle className="front" cx="30" cy="30" r="27"></circle>
      </svg>
      <svg className="circle-inner" viewBox="0 0 34 34">
        <circle className="back" cx="17" cy="17" r="14"></circle>
        <circle className="front" cx="17" cy="17" r="14"></circle>
      </svg>
    </div>
  );
};

export default Loader;`
//  loader 8
const loader8_html = `<span className="loader-8"></span>`
const loader8_css = `.loader-8,
.loader-8:before,
.loader-8:after {
  border-radius: 50%;
}

.loader-8 {
  position: absolute;
  color: #2ba9e1;
  font-size: 11px;
  text-indent: -99999em;
  width: 10em;
  height: 10em;
  scale: 0.275;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.loader-8:before,
.loader-8:after {
  position: absolute;
  content: "";
}

.loader-8:before {
  width: 5.2em;
  height: 10.2em;
  background: #2ba9e1;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: load2 1.8s infinite ease 1.3s;
  animation: load2 1.8s infinite ease 1.3s;
}

.loader-8:after {
  width: 5.2em;
  height: 10.2em;
  background: #2ba9e1;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: load2 2s infinite ease;
  animation: load2 1.8s infinite ease;
}

@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}`;
const loader8_react = `import React from "react";
import "./style.css"; // External CSS file

const Loader = () => {
  return (
    <span className="loader-8"></span>
  );
};

export default Loader;`
//  loader 9
const loader9_html = ` <div class="loader-9">
                <div class="box1"></div>
                <div class="box2"></div>
                <div class="box3"></div>
</div>`
const loader9_css = `.loader-9 {
  position: absolute;
  scale: 0.25;
  width: 112px;
  height: 112px;
}

.loader-9 .box1,
.loader-9 .box2,
.loader-9 .box3 {
  border: 10px solid #2ba9e1;
  border-radius: 56px;
  box-sizing: border-box;
  position: absolute;
  display: block;
}

.loader-9 .box1 {
  width: 112px;
  height: 48px;
  margin-top: 64px;
  margin-left: 0px;
  animation: abox1 2.4s 0.6s forwards ease-in-out infinite;
}

.loader-9 .box2 {
  width: 48px;
  height: 48px;
  margin-top: 0px;
  margin-left: 0px;
  animation: abox2 2.4s 0.6s forwards ease-in-out infinite;
}

.loader-9 .box3 {
  width: 48px;
  height: 48px;
  margin-top: 0px;
  margin-left: 64px;
  animation: abox3 2.4s 0.6s forwards ease-in-out infinite;
}

@keyframes abox1 {
  0% {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }

  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }

  25% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }

  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }

  50% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }

  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }

  75% {
    width: 48px;
    height: 112px;
    margin-top: 0px;
    margin-left: 0px;
  }

  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }

  100% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
}

@keyframes abox2 {
  0% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }

  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }

  25% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }

  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }

  50% {
    width: 112px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }

  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }

  75% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }

  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }

  100% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
}

@keyframes abox3 {
  0% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }

  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }

  25% {
    width: 48px;
    height: 112px;
    margin-top: 0px;
    margin-left: 64px;
  }

  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }

  50% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }

  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }

  75% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }

  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }

  100% {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
}`;
const loader9_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return (
  <div className="loader-9">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
     </div>; 
    )
};

export default Loader;
`;
//  loader 10
// const loader10_html = ``
// const loader10_css = ``;
// const loader10_react = ``

export default Loaders;