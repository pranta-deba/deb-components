import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./loaders.css";
import { FaCheck, FaCopy } from "react-icons/fa";


const Loaders = () => {
    const [tabs, setTabs] = useState([
        {
            name: 'tab1',
            tabs: "previews"
        },
        {
            name: 'tab2',
            tabs: "previews"
        },
        {
            name: 'tab3',
            tabs: "previews"
        },
    ])
    const [copied1, setCopied1] = useState(false);
    const [copied2, setCopied2] = useState(false);

    const handleTabs = (tab, tabType) => {
        setTabs(prevTabs => prevTabs.map(item => item.name === tab ? { ...item, tabs: tabType } : item));
    }

    const copyToClipboard = (code, who) => {
        navigator.clipboard.writeText(code);
        if (who === "copied1") {
            setCopied1(true);
            setTimeout(() => {
                setCopied1(false);
            }, 1000);
        } else {
            setCopied2(true);
            setTimeout(() => {
                setCopied2(false);
            }, 1000);
        }

    };

    return (
        <div className="space-y-3">
            {/* Loader 1 */}
            <div className="border-2 border-blue-300 p-4 md:p-6 rounded-md">
                <div className="flex gap-3">
                    <button
                        onClick={() => handleTabs('tab1', 'previews')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[0].tabs === "previews" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>Previews</button>
                    <button
                        onClick={() => handleTabs('tab1', 'html css')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[0].tabs === "html css" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>HTML & CSS</button>
                    <button
                        onClick={() => handleTabs('tab1', 'react')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[0].tabs === "react" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>React</button>
                </div>
                <div className="mt-4 w-full min-h-[100px] flex justify-center items-center">
                    {tabs[0].tabs === "previews" && <div className="loader-1"></div>}
                    {tabs[0].tabs === "html css" && <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="underline italic">index.html</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader1_html, 'copied1')}>
                                    {copied1 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                                {loader1_html}
                            </SyntaxHighlighter>
                            <div className="flex justify-between">
                                <p className="underline italic">style.css</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader1_css, 'copied2')}>
                                    {copied2 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="htnl" style={vs} customStyle={customColorInode}>
                                {loader1_css}
                            </SyntaxHighlighter>
                        </div>
                    </div>}
                    {tabs[0].tabs === "react" && <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="underline italic">Loader.jsx</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader1_react, 'copied1')}>
                                    {copied1 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                                {loader1_react}
                            </SyntaxHighlighter>
                            <div className="flex justify-between">
                                <p className="underline italic">style.css</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader1_css, 'copied2')}>
                                    {copied2 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="htnl" style={vs} customStyle={customColorInode}>
                                {loader1_css}
                            </SyntaxHighlighter>
                        </div>
                    </div>}
                </div>
            </div>
            {/* Loader 1 end*/}

            {/* Loader 2*/}
            <div className="border-2 border-blue-300 p-4 md:p-6 rounded-md">
                <div className="flex gap-3">
                    <button
                        onClick={() => handleTabs('tab2', 'previews')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[1].tabs === "previews" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>Previews</button>
                    <button
                        onClick={() => handleTabs('tab2', 'html css')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[1].tabs === "html css" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>HTML & CSS</button>
                    <button
                        onClick={() => handleTabs('tab2', 'react')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[1].tabs === "react" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>React</button>
                </div>
                <div className="mt-4 w-full min-h-[100px] flex justify-center items-center">
                    {tabs[1].tabs === "previews" && <div className="loader-2"></div>}
                    {tabs[1].tabs === "html css" && <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="underline italic">index.html</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader2_html, 'copied1')}>
                                    {copied1 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                                {loader2_html}
                            </SyntaxHighlighter>
                            <div className="flex justify-between">
                                <p className="underline italic">style.css</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader2_css, 'copied2')}>
                                    {copied2 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="html" style={vs} customStyle={customColorInode}>
                                {loader2_css}
                            </SyntaxHighlighter>
                        </div>
                    </div>}
                    {tabs[1].tabs === "react" && <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="underline italic">Loader.jsx</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader2_react, 'copied1')}>
                                    {copied1 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                                {loader2_react}
                            </SyntaxHighlighter>
                            <div className="flex justify-between">
                                <p className="underline italic">style.css</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader2_css, 'copied2')}>
                                    {copied2 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="htnl" style={vs} customStyle={customColorInode}>
                                {loader2_css}
                            </SyntaxHighlighter>
                        </div>
                    </div>}
                </div>
            </div>
            {/* Loader 2 end*/}

            {/* Loader 3*/}
            <div className="border-2 border-blue-300 p-4 md:p-6 rounded-md">
                <div className="flex gap-3">
                    <button
                        onClick={() => handleTabs('tab3', 'previews')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[2].tabs === "previews" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>Previews</button>
                    <button
                        onClick={() => handleTabs('tab3', 'html css')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[2].tabs === "html css" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>HTML & CSS</button>
                    <button
                        onClick={() => handleTabs('tab3', 'react')}
                        className={`px-3 font-semibold py-2 rounded-md text-xs md:text-base ${tabs[2].tabs === "react" ? "effect-inner text-[#2BA9E1]" : "effect"}`}>React</button>
                </div>
                <div className="mt-4 w-full min-h-[100px] flex justify-center items-center">
                    {tabs[2].tabs === "previews" && <div className="loader-3"></div>}
                    {tabs[2].tabs === "html css" && <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="underline italic">index.html</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader3_html, 'copied1')}>
                                    {copied1 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                                {loader3_html}
                            </SyntaxHighlighter>
                            <div className="flex justify-between">
                                <p className="underline italic">style.css</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader3_css, 'copied2')}>
                                    {copied2 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="html" style={vs} customStyle={customColorInode}>
                                {loader3_css}
                            </SyntaxHighlighter>
                        </div>
                    </div>}
                    {tabs[2].tabs === "react" && <div className="w-full min-h-[100px] max-h-[500px] overflow-y-auto p-4 scrollBar">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <p className="underline italic">Loader.jsx</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader3_react, 'copied1')}>
                                    {copied1 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="java" style={vs} customStyle={customColorInode}>
                                {loader3_react}
                            </SyntaxHighlighter>
                            <div className="flex justify-between">
                                <p className="underline italic">style.css</p>
                                <button title="copy code"
                                    onClick={() => copyToClipboard(loader3_css, 'copied2')}>
                                    {copied2 ? <FaCheck /> : <FaCopy />}
                                </button>
                            </div>
                            <SyntaxHighlighter language="htnl" style={vs} customStyle={customColorInode}>
                                {loader3_css}
                            </SyntaxHighlighter>
                        </div>
                    </div>}
                </div>
            </div>
            {/* Loader 3 end*/}
        </div>
    );
};

const customColorInode = {
    backgroundColor: "transparent",
    boxShadow: 'inset 4px 3px 3px 0px #b8c7dd, inset -2px -4px 4px 0px #fff'

}
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
  }`
const loader1_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div className="loader-1"></div>; // Apply styles via className
};

export default Loader;
`


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
}`
const loader2_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-2"></div>; // Apply styles via className
};

export default Loader;
`


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
  }`
const loader3_react = `import React from "react";
import "./style.css"; // Import the CSS file

const Loader = () => {
  return <div class="loader-3"></div>; // Apply styles via className
};

export default Loader;
`
export default Loaders;