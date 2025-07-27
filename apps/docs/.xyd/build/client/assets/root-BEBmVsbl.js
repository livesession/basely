import{a as y,w as x,M as g,L as j,S as b,b as v,p as w,r as k,O as S}from"./chunk-C37GKA54-BD_pa8mJ.js";import{j as t}from"./index-BBwMgKmy.js";import{V as $}from"./content-VaqTQGV8.js";import{v as F}from"./virtual_xyd-settings-o3vCPdFe.js";const C={},A=`(function () {
    try {
        var theme = localStorage.getItem('xyd-color-scheme') || 'auto';
        var isDark = false;

        if (theme === 'dark') {
            isDark = true;
        } else if (theme === 'auto') {
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        if (isDark) {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
        }
    } catch (e) {
        // Fallback to system preference if localStorage fails
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
        }
    }
})();
`,{settings:a}=F,Q=y(function(){return t.jsx("div",{})});function X({children:e}){const r=M()||a?.theme?.appearance?.colorScheme||"os",{component:n,classes:s}=O();return t.jsxs("html",{"data-color-scheme":r,"data-color-primary":a?.theme?.appearance?.colors?.primary?"true":void 0,children:[t.jsxs("head",{children:[t.jsx(H,{}),t.jsx(T,{}),t.jsx(U,{}),t.jsx(V,{}),t.jsx(B,{}),t.jsx(R,{}),t.jsx(g,{}),t.jsx(j,{}),t.jsx(D,{})]}),t.jsxs("body",{className:s,children:[e,t.jsx(b,{}),t.jsx(v,{}),t.jsx(W,{}),n]})]})}function H(){return t.jsxs(t.Fragment,{children:[t.jsx(_,{}),t.jsx(E,{})]})}function M(){if(!(typeof window>"u"))try{var e=localStorage.getItem("xyd-color-scheme")||"auto",r=!1;return e==="dark"?r=!0:e==="auto"&&(r=window.matchMedia("(prefers-color-scheme: dark)").matches),r?"dark":void 0}catch{if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}}const Y=x(function(){return t.jsx(S,{})});function T(){return t.jsxs(t.Fragment,{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]})}function _(){return t.jsx("script",{dangerouslySetInnerHTML:{__html:A}})}function E(){const e=a?.theme?.appearance;return k.useEffect(()=>{const r=document.querySelector("xyd-banner")?.clientHeight??0;r&&(document.documentElement.style.setProperty("--xyd-banner-height",`${String(r)}px`),e?.banner?.fixed&&document.documentElement.style.setProperty("--xyd-banner-height-dynamic",`${String(r)}px`))},[]),null}const L="/public/favicon.png";function U(){const e=a?.theme?.favicon||L;return t.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:e})}function W(){const e=I(a?.theme?.appearance);return e?t.jsx("style",{"data-appearance":!0,dangerouslySetInnerHTML:{__html:e}}):null}function O(){const e={searchWidth:a?.theme?.appearance?.search?.fullWidth?"100%":void 0,buttonsRounded:u("--xyd-border-radius",a?.theme?.appearance?.buttons?.rounded,"lg"),scrollbarColor:a?.theme?.appearance?.sidebar?.scrollbarColor||void 0},r=d({"--xyd-search-width":e.searchWidth||void 0,"--xyd-button-border-radius":e.buttonsRounded||void 0,"--decorator-sidebar-scroll-bgcolor":e.scrollbarColor||void 0});if(!r)return{component:null,classes:""};const n=[];return a?.theme?.appearance?.search?.fullWidth&&n.push($),{component:t.jsx("style",{dangerouslySetInnerHTML:{__html:r}}),classes:n.join(" ")}}function I(e){if(!e)return"";const{colors:r,cssTokens:n}=e,s={...r?.primary?m(r.primary):{},...n||{}},o={...r?.light?m(r.light):{},...n||{}},c=d(s),i=P(o);return[c,i].filter(Boolean).join(`

`)}function m(e){return{"--color-primary":e,"--xyd-sidebar-item-bgcolor--active":"color-mix(in srgb, var(--color-primary) 10%, transparent)","--xyd-sidebar-item-color--active":"var(--color-primary)","--xyd-toc-item-color--active":"var(--color-primary)","--theme-color-primary":"var(--color-primary)","--theme-color-primary-active":"var(--color-primary)","--color-primary--active":"color-mix(in srgb, var(--color-primary) 85%, transparent)"}}function d(e,r=!0){if(!Object.keys(e).length)return"";const n=Object.entries(e).filter(([s,o])=>o!==void 0).map(([s,o])=>`${s}: ${o};`).join(`
`);return r?`:root {
${n}
}`:n}function P(e){if(!Object.keys(e).length)return"";const r=d(e,!1);return[`[data-color-scheme="dark"] {
${r}
}`,"@media (prefers-color-scheme: dark) {",`    :root:not([data-color-scheme="light"]):not([data-color-scheme="dark"]) {
        ${r.replace(/\n/g,`
        `)}
    }`,"}"].join(`
`)}function V(){const e=a?.theme?.head||[];return!e||!e.length?null:e.map(([r,n],s)=>w.createElement(r,{key:s,...n}))}function D(){const r=a?.theme?.appearance?.presets||[];return Object.entries(C).map(([n,s])=>r.includes(n)?t.jsx("link",{rel:"stylesheet",href:s},n):null)}const u=(e,r,n)=>{if(!r)return;if(typeof r=="boolean")return u(e,n);const o={lg:"large",md:"medium",sm:"small"}[r];return o?`var(${e}-${o})`:n?u(e,n):void 0};function R(){const e=a?.theme?.fonts;if(!e)return null;const r=N(e);return r?t.jsx(t.Fragment,{children:t.jsx("style",{"data-fonts":!0,dangerouslySetInnerHTML:{__html:r}})}):null}function B(){return t.jsx("style",{children:"@layer reset, defaults, defaultfix, components, fabric, templates, decorators, themes, themedecorator, presets, user, overrides;"})}function N(e){if(!e)return"";if("family"in e||"src"in e)return l(e,"body");const{body:r,coder:n}=e,s=r?l(r,"body"):"",o=n?l(n,"coder"):"";return[s,o].filter(Boolean).join(`

`)}function l(e,r){if(Array.isArray(e)){const o=e.map(p=>f(p)).join(`

`),c=e[0],i=h(c,r);return`${o}

        @layer user {
        :root {
                ${i}
            }
        }
    `}if(!("src"in e)||!e.src)return"";const n=f(e),s=h(e,r);return`${n}

        @layer user {
        :root {
                ${s}
            }
        }
    `}function q(e){switch(e.format){case"woff2":return"woff2";case"woff":return"woff";case"ttf":return"ttf"}return e.src?.endsWith(".woff2")?"woff2":e.src?.endsWith(".woff")?"woff":e.src?.endsWith(".ttf")?"ttf":""}function f(e){const r=e.family||"font",n=e.weight||"400",s=q(e);return s?`@font-face {
            font-family: '${r}';
            font-weight: ${n};
            src: url('${e.src}') format('${s}');
            font-display: swap;
        }`:`@import url('${e.src}');`}function h(e,r){const n=e.family||`font-${r}`,s=e.weight||"400",o={[`--font-${r}-family`]:n,[`--font-${r}-weight`]:s};return Object.entries(o).map(([c,i])=>`${c}: ${i};`).join(`
    `)}export{Q as HydrateFallback,X as Layout,Y as default};
