parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Rd4u":[function(require,module,exports) {
{let o=[!1,!1,!1],i=(document.getElementById("counter-1").innerHTML="0",document.getElementById("counter-2").innerHTML="0",document.getElementById("counter-3").innerHTML="0",o?function(){n("counter-1")&&!o[0]&&(r(),o[0]=!0),n("counter-2")&&!o[1]&&(d(),o[1]=!0),n("counter-3")&&!o[2]&&(m(),o[2]=!0),o[0]&&o[1]&&o[2]&&window.removeEventListener("scroll",e,!1)}:function(){n("counter-1")&&(c(),window.removeEventListener("scroll",e,!1))}),u=!1;function e(){0==u&&window.requestAnimationFrame(function(){i(),u=!1}),u=!0}function n(e){let n=document.getElementById(e).getBoundingClientRect(),t=n.bottom,o=n.height;return n.height+o>=0&&o+window.innerHeight>=t}window.addEventListener("scroll",e,!1),window.addEventListener("load",i,!1);let c=function(){t("counter-1",721,[4,3,1],3),t("counter-2",16,[1,1,1],1),t("counter-3",84,[4,2,1],4)},r=function(){t("counter-1",721,[6,1,1],3)},d=function(){t("counter-2",16,[1,1,1],2)},m=function(){t("counter-3",84,[4,2,1],4)};function t(e,n,t,o){let i=document.getElementById(e),u=0,c=n,r=t[0],d=[n-.15*n,n-.09*n],m=1e3*o/c,l=function(){u+=r,i.innerText=u,u>c?i.innerText=c:u>d[0]?(r=t[1],m+=m/50,setTimeout(l,m)):u>d[1]?(r=t[2],m+=m,setTimeout(l,m)):(m+=m/250,setTimeout(l,m))};l()}}
},{}]},{},["Rd4u"], null)
//# sourceMappingURL=/swat-test/animation-counter.49048dae.js.map