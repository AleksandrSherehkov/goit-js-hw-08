function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,f,a,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(w,t),l?g(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function w(){var e=p();if(j(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function O(e){return a=void 0,v&&r?g(e):(r=o=void 0,f)}function S(){var e=p(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return h(u);if(d)return a=setTimeout(w,t),g(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=y(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},S.flush=function(){return void 0===a?f:O(p())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const g={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),mailInput:document.querySelector(".feedback-form input")};let h={};!function(e){let t=localStorage.getItem("feedback-form-state");t&&(t=JSON.parse(t),Object.entries(t).forEach((([e,t])=>{h[e]=t,g.form.elements[e].value=t})))}(),g.form.addEventListener("input",e(t)((function(e){new FormData(g.form).forEach(((e,t)=>h[t]=e)),localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),g.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(h),h={},localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.fa3a222b.js.map
