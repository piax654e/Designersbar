(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],m=0,f=[];m<i.length;m++)o=i[m],s[o]&&f.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},s={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4840:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAACXBIWXMAAAsSAAALEgHS3X78AAAF50lEQVR4nN1csY4bNxCdEwLDnZTAhbuTu3SWYZYBLAMpA+RSpjrlD+Q/OH9BdF9g3RdEgoHUUk8g0hdE6tLFAgwYcHMGOVztarXcJWfIlagHCL47r7jk2+FwZvi4V4+Pj9A6hOgBwAAAhgCQ/azwxtKVpfl3Yz4LAFiBlJ/a7np7hAmhSBkZkl4GanVtyJuClKtAbdYiLmFC9A1J6nMd70YaW00ckreJdZM4hCFRdwBwG75xJzzo+0cgLixhpyeqDEXcOKSv6wTrmhCKqH/PiCwwfdmAEONQDfItDJ35NKAjj4Wl9qXMacqzMHxy/yRAFpiQZQVC3HAaoVkYxlGTM5t+PngPUt5RvuhPGJK1SMSq6vAAUo58v+RH2OWQlUH5tRufVdSdsMsjK8NaZx+OpLk5/cslC8yYpq4Xu66Sl0pWhl9BCCfSmgkTYnLhZGW4dQlw630Yxix/he/bWeMtSLnwJwzzQlUy6TqO7l3h515LFQobtib5nhL87w4A+rZFoI6wRU1Br4w1SDk4+qsQWWnHtR0udoaoSakffZPnumIOUlZmBNWE+U/Fe5DSPv+xvYmDxaklvvhke46WsTbtz6zhgRAz7dzdUTk1v7N8fWL5uw3WOa8h5cxY7EgHijkWZtqvapNiTPD7hVJ2Bp9StS9hU3PPAxxbGK4Uf3o0rAi58rr+FBDiFwD46Hnnd+XpXRVW+NaOPp+cDDd8JvT1ziwaexwShk7ad2V7whpGu/jqebduyYUcWRilMvnE+Jhzx3MA+IHQx4MyUE4YDpoa0bOKci3hP+JtrkGIYfZL0cK8a0OJocfo7p6bImEcK4m2DxgQHLex5wYJw+lITWO2OgU5f0xNJkBBN5uWmYVxrItUG28dGBhzttsOCBvWX2tFKtaFwL4uXS6twAFh1PmdhnUdgvqAdQHh6vH1a99MvojvTyE5YkOITx5lqyJedKoSTEfMkyQLUV8ssKPfYfgv6k3PAVQt2ZAjFWhFwBYJ5IfdMTkWBSkTRsVTug9L139x8KMi7Gm6/SeiZleoAb1wgrqUIAR5N4tOWKkSmRh+I3b3OcfCUigahsaXDqM0kzJhtt2yJsw5hFED3nPAT9Q+cKZkyoRR+77pMALQLldgexJgnymJN2SEcQLQ9Ajj9XmFO99CcMT6L2Ke7QkKDIX+JzapiqX9zIetGf1KabfJVzNShHZdGWGcUs3YyInOG7jRwzlXsAhFWJdR9m0HOBVnzHtpjnL1Dr1sm4F0UCA6wijAtf+CUhzGfQK3rkrk1oDTMIQCfM9NkbAQg1WkrYpahJMBdW6h5PJ7bg4FdUJsAgp5l3pVUurDtoDT78Zs/4Uax4F+t5yEqht9qP0ymufAQf74Rn+E2JnvLPQndMyG025giPKRZLriIBSpkmw2Of8/jJyberB0Z2Ka2ZHa2QX50cN+C+rsvbPPUJV8Nw3ig1Yq4msPhoSgt2sGSkvJcC9h05KU/Whn3yY7d/FlrzRpaGkzT59x9OS8gFa2inxworKPtvKOi8ploTuOljbwtDSeJgOtLHYIU8lBNWG4sjWpXLr76YsDcJ2ey0CKn5ir79y2utcVEEcOArTbfcyVk1ZH9DpYSSjeq2N2dQUFO2HuArT8GkWalEO9kqqnlGNtDgkMAm8AbwO2laH2SHPzEWZMd5qy/NPUxPwOkLmg8W0DzTV9TKibfFOKldcyHlxezeC6CdLk0MeJHG6wYe5aaXEjrHkVvNZvSFHTN72NkbVP1TjWeyvUSvO3OduzMZKqZwDwc+UBUCr4Pmxu3sfjvBD57QCrhjGMaCJNxWi/W/7vhllbDwVSwdN/Izefng8tDi407qnVYdrON8Zbo9LB+BSwM9UW8gEHnj4MfdGrSAFkaGSvjGGlZXxBXZ5830caaAjcG7LY6VQYBSJO0bGxNurRlBhYmrcDBHsPYljJpnqCmEu+rSGuDTHx1viqIUPPWok4GlfVyZy48moaso5VbmtuLKof69BYm28KVgRuIm2CYAU2thQeAL4BcGgSW6rtw4UAAAAASUVORK5CYII="},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"site-nav"},[r("figure",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/images/db-logo.png"}})])],1),r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.showModal}},[r("svg",{staticClass:"bounce",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"glass-martini-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40h-56V271.64L502.05 57.6zM443.77 48l-48 48H116.24l-48-48h375.53z"}})])]),r("modal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal}})],1),r("router-view"),r("site-footer")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[a("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[a("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v("x")])])],2),a("aside",{staticClass:"title"},[a("h1",{staticClass:"bar-menu"},[t._v("\n          b\n          "),a("br"),t._v("a\n          "),a("br"),t._v("r\n          "),a("br"),t._v("m\n          "),a("br"),t._v("e\n          "),a("br"),t._v("n\n          "),a("br"),t._v("u\n        ")])]),a("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t._t("body",[a("ul",{staticClass:"btn-close",on:{click:t.close}},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/Skills"}},[t._v("Portfolio")])],1),a("li",[a("router-link",{attrs:{to:"/cv"}},[t._v("CV")])],1),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v("Contact me")])],1),a("br"),a("br")]),a("ul",{staticClass:"soMe"},[a("li",[a("a",{attrs:{href:"mailto:pia@designersbar.dk"}},[a("img",{attrs:{src:r("e9ce"),alt:"icon for sending email"}})])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/pia-roel-j%C3%B8rgensen-28808611/",target:"blank"}},[a("img",{attrs:{src:r("bd2e"),alt:"icon for linked in"}})])]),a("li",[a("a",{attrs:{href:"https://github.com/piax654e",target:"blank"}},[a("img",{attrs:{src:r("4840"),alt:"icon for github account"}})])])])])],2),a("section",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},i=[],l={name:"modal",data:function(){return{pages:null}},methods:{close:function(){this.$emit("close")}}},c=l,u=r("2877"),m=Object(u["a"])(c,o,i,!1,null,null,null),f=m.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("section",{staticClass:"wrapper"},[t._m(0),r("section",{staticClass:"site-footer__middle"},[t._m(1),r("router-link",{staticClass:"button",attrs:{to:"/cv"}},[t._v("Curriculum vitae")])],1),r("section",{staticClass:"site-footer__right"},[r("ul",[r("li",[r("p",[r("strong",[r("router-link",{attrs:{to:"/Skills"}},[t._v("go to Portfolio")])],1)])]),t._m(2)])])])])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"site-footer__left"},[r("ul",[r("li",[r("p",[r("strong",[t._v("Contact info:")])])]),r("li",[t._v("Pia Roel Jørgensen")]),r("li",[t._v("Munkevænget 29")]),r("li",[t._v("5230 Odense M.")]),r("li",[t._v("phone: 2652 2159")]),r("br"),r("li",[r("strong",[t._v("pia@designersbar.dk")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",[a("section",{staticClass:"soMe"},[a("a",{attrs:{href:"mailto:pia@designersbar.dk"}},[a("img",{attrs:{src:r("e9ce"),alt:"icon for sending email"}})]),a("a",{attrs:{href:"https://www.linkedin.com/in/pia-roel-j%C3%B8rgensen-28808611/",target:"blank"}},[a("img",{attrs:{src:r("bd2e"),alt:"icon for linked in"}})]),a("a",{attrs:{href:"https://github.com/piax654e",target:"blank"}},[a("img",{attrs:{src:r("4840"),alt:"icon for github account"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("p",[r("strong",[r("a",{attrs:{href:"https://github.com/piax654e/DesignLibrary",target:"blank"}},[t._v("go to Design Library (GitHub)")])])])])}],p={name:"SiteFooter"},d=p,v=Object(u["a"])(d,g,h,!1,null,null,null),b=v.exports,A={name:"app",components:{modal:f,siteFooter:b},data:function(){return{isModalVisible:!1}},methods:{showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1}}},w=A,C=(r("5c0b"),Object(u["a"])(w,s,n,!1,null,null,null)),_=C.exports,y=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"home"},[r("h1",[t._v("Creativity + Love for logic = One playful frontender")]),r("h3",{staticClass:"paragraph--white"},[t._v("Area of interest: Front-end full stack development!")]),t._m(0),r("p",[r("router-link",{staticClass:"button",attrs:{to:"/cv"}},[t._v("Curriculum vitae")])],1),r("p"),r("coaster"),r("p"),t._m(1),t._m(2)],1)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    This is me, Pia, a web development student at UCL in Odense, and I´m looking for three month´s internship, starting august 1st 2019.\n    "),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"asA"},[r("h1",[t._v("As a workhorse:")]),r("p",[r("strong",[t._v("- Intuition")]),t._v(" makes me a fast learner.\n    ")]),r("p",[t._v("\n      - Ambition and drive make me extremely\n      "),r("strong",[t._v("self-motivated")])]),r("p",[r("strong",[t._v("- Creativity")]),t._v(" helps me big time in bug solvings\n    ")]),r("br"),r("h1",[t._v("As a human")]),r("p",[t._v("\n      - I have an\n      "),r("strong",[t._v("empathic")]),t._v(" approach to my surroundings\n    ")]),r("p",[t._v("\n      - I don´t thrive in a non-\n      "),r("strong",[t._v("humorous")]),t._v(" atmosphere\n    ")]),r("p",[t._v("\n      - I have a\n      "),r("strong",[t._v("reflective and inquisitive")]),t._v(" mindset\n    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"quotes"},[r("p",[t._v("Quote, Pia:")]),r("h3",{staticClass:"quoteI"},[t._v('"I am totally hooked on coffee - no mocca, no morning!"')]),r("h3",{staticClass:"quoteII"},[t._v('"I do things my way, no imitations"')]),r("h3",{staticClass:"quoteIII"},[t._v('"Best medicine for preventing stress is reading fiction"')])])}],M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("figure",{staticClass:"falling-coasters"},[r("figure",{staticClass:"coaster1"}),r("figure",{staticClass:"coaster2"}),r("figure",{staticClass:"coaster3"}),r("figure",{staticClass:"coaster4"})])])}],O={name:"Coaster"},I=O,E=Object(u["a"])(I,M,j,!1,null,null,null),S=E.exports,L={name:"home",components:{coaster:S}},B=L,D=Object(u["a"])(B,k,x,!1,null,null,null),U=D.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"Skills"},[r("h1",[t._v("Portfolio")]),t._m(0),r("p"),r("div",{staticClass:"wrap"},[r("p",[t._v("These are some of the projects and topics I´ve worked with on my study:")]),r("project-list")],1)])},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("h3",[t._v("\n      - I need logic in my life!\n      "),r("br"),r("br"),t._v("- I have an eye for graphical details\n      "),r("br"),r("br"),t._v("- I know the importance of a good user experience\n    ")]),r("p",[t._v("\n      Everything that has to do with web development interests me.\n      "),r("br"),r("br"),t._v("However, the frontend is where I find my competences best affectuated.\n      "),r("br"),t._v("Besides being a very creative spirit I am also a digital craftsman with\n      a technical background.\n      "),r("br"),t._v("I would actually claim that this specific combination gives me the best presumptions for developing functional websites.\n    ")])])}],Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("section",{staticClass:"semesters"},t._l(t.projects,function(t){return r("section",{key:t.id,staticClass:"case"},[r("router-link",{attrs:{to:"/project/"+t.id}},[r("img",{attrs:{src:t.image}})])],1)}),0)])},H=[],K=r("bc3a"),V=r.n(K),Q={data:function(){return{projects:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;V.a.get("/projects.json").then(function(e){return t.projects=e.data}).catch(function(t){return console.log(t)})}}},q=Q,P=Object(u["a"])(q,Y,H,!1,null,null,null),G=P.exports,T={name:"Skills",components:{ProjectList:G}},R=T,J=Object(u["a"])(R,F,W,!1,null,null,null),N=J.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("project-info")],1)},Z=[],z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"project-info"},[r("main",{staticClass:"project"},[r("figure",{staticClass:"project"},[r("img",{attrs:{src:t.project.image}})]),r("div",[r("h2",[t._v(t._s(t.project.name))]),r("p",[t._v(t._s(t.project.description))]),r("p",[r("strong",[t._v("Copy link for demo:")]),t._v("\n        "+t._s(t.project.link)+"\n      ")])])]),r("section",{staticClass:"project"},[r("h2",[t._v("The Tech Toolbox used:")]),r("section",{staticClass:"tech"},[r("h1",[t._v(t._s(t.project.tools))])])])])},$=[],tt=(r("7514"),{name:"ProjectInfo",data:function(){return{project:[]}},created:function(){this.getProjectById()},methods:{getProjectById:function(){var t=this,e=this.$route.params.id;V.a.get("/projects.json").then(function(r){t.project=r.data.find(function(t){return t.id===e})}).catch(function(t){return console.log(t)})}}}),et=tt,rt=Object(u["a"])(et,z,$,!1,null,null,null),at=rt.exports,st={name:"Project",components:{ProjectInfo:at}},nt=st,ot=Object(u["a"])(nt,X,Z,!1,null,null,null),it=ot.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("resume"),r("bubbles")],1)},ct=[],ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"cv"},[t._m(0),r("table",t._l(t.resume,function(e){return r("tr",{key:e.id},[r("td",{staticClass:"LH"},[t._v(t._s(e.year))]),r("td",{staticClass:"RH"},[r("strong",[t._v(t._s(e.company))]),r("p",[t._v("Main focus:")]),r("h4",[t._v(t._s(e.job))]),r("br"),r("p",{staticClass:"pq"},[t._v(t._s(e.quote))])])])}),0)])},mt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"headline"},[r("h1",[t._v("Curriculum vitae")]),r("p",[t._v("Besides being a very creative spirit I am also a digital craftsman with a technical background. As a responsible and competent person being a very selv driven employee is one of my strongest competences. In my personal life I am happily married to Peter and at the age of 42 I am lucky to have gotten the exactly two daughters I want.")]),r("h3",[t._v("A sum up of what I have been doing with my life:")]),r("br")])}],ft={name:"Resume",data:function(){return{resume:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;V.a.get("/resume.json").then(function(e){return t.resume=e.data}).catch(function(t){return console.log(t)})}}},gt=ft,ht=Object(u["a"])(gt,ut,mt,!1,null,null,null),pt=ht.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"skills"},[r("div",{staticClass:"bubbles-container"},[r("svg",{staticClass:"bubbles",staticStyle:{overflow:"visible"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 701 1024"}},[r("g",{staticClass:"bubbles-large",attrs:{"stroke-width":"7"}},[r("g",[r("g",{attrs:{transform:"translate(10 940)"}},[r("circle",{attrs:{cx:"35",cy:"35",r:"35"}})])]),r("g",[r("g",{attrs:{transform:"translate(373 940)"}},[r("circle",{attrs:{cx:"35",cy:"35",r:"35"}})])]),r("g",[r("g",{attrs:{transform:"translate(408 940)"}},[r("circle",{attrs:{cx:"35",cy:"35",r:"35"}})])]),r("g",[r("g",{attrs:{transform:"translate(621 940)"}},[r("circle",{attrs:{cx:"35",cy:"35",r:"35"}})])]),r("g",[r("g",{attrs:{transform:"translate(179 940)"}},[r("circle",{attrs:{cx:"35",cy:"35",r:"35"}})])])]),r("g",{staticClass:"bubbles-small",attrs:{"stroke-width":"4"}},[r("g",[r("g",{attrs:{transform:"translate(147 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(255 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(573 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(429 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(91 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(640 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(321 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(376 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(376 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])]),r("g",[r("g",{attrs:{transform:"translate(497 984)"}},[r("circle",{attrs:{cx:"15",cy:"15",r:"15"}})])])])])]),r("h5",[t._v("-")])])},vt=[],bt={name:"Bubbles"},At=bt,wt=Object(u["a"])(At,dt,vt,!1,null,null,null),Ct=wt.exports,_t={name:"Cv",components:{Resume:pt,bubbles:Ct}},yt=_t,kt=Object(u["a"])(yt,lt,ct,!1,null,null,null),xt=kt.exports,Mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"contact"},[r("h1",[t._v("Thirsty?")]),r("h3",[t._v("Grab a hold on me and let´s talk more")]),r("section",{staticClass:"site-footer__left"},[r("p",[t._v("\n      Pia Roel Jørgensen\n      "),r("br"),t._v("Munkevænget 29\n      "),r("br"),t._v("5230 Odense M\n      "),r("br"),r("br"),t._v("phone: 2652 2159\n      "),r("br"),r("br"),t._v("pia@designersbar.dk\n      "),r("br"),r("br"),r("br")])])])}],Ot={},It=Object(u["a"])(Ot,Mt,jt,!1,null,null,null),Et=It.exports;a["a"].use(y["a"]);var St=new y["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"home",component:U},{path:"/skills",name:"skills",component:N},{path:"/project/:id",name:"project",component:it},{path:"/cv",name:"cv",component:xt},{path:"/contact",name:"contact",component:Et}]});a["a"].config.productionTip=!1,new a["a"]({router:St,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),s=r.n(a);s.a},"5e27":function(t,e,r){},bd2e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAACXBIWXMAAAsSAAALEgHS3X78AAAEgUlEQVR4nO2c0VHjMBCGlwzv0AHp4MKM3gMVJFfBhQouVHBQwUEFFyo4SkjeNXOhA9xBXAE31q7ixJHttSU5lu1vJg+EjC3/s5JWu+u9+Pr6grMgxB0ATADgGgDuaAjJ31eG4XwAwA4APumzBoAtSLlreujNCSbEGADm9Jk6umoEAO9KQCnfHV2zEL+CCZFYz4I+3/zdSBGTeC8g5dbXTfwIhtb0RNZkmmK+2QDACqRcub6PW8HQol4A4Ie7i1oRKeuWcu3qgu4EEyKxqOWZLKqMDQn3aXshe8GEmCjz979G2RKrZULKF5vr2AkmxIKmYButKo+NWltruiT1BRNi1aK1qiqx8v1q7KbVBcOFfR3AFCwjpnWtkv82qnSL7ogFtIz8pWWFDV+wbol1yJ8qovGmZHfFOuQ7Z3pyLSwEt8GWFblIhZQLhg7prMUP6oordRbF2ZRLsWAYgvkVyAO74IZmUy75gqHSjYRMWsYMhFjmDSl/0ec7pveM3yRrw+8g5EJiNWbD2fPS+HOcijwvnhMJEIJ1qRZxRUe+eXZIeVPyKbQn9MCMDOeIU8HQiXMVQg6dE8MxWdhgXSnTrJUdC4b/vDnL0NrLkQFlLSx3O+0xU8pRKNJdEr+s7tELwYmXF3rPAbDUxnToVpxsoUz6sEHMtWCjzJcDZm70wRwFw2NQyJYSUaw+8ngPZVB6Sp44aBXQdQ9FjHN23w3jNqZ6i4g88bUxLo/WMKeMu6tdX2mEZ0khkpv/rHmh+9LjEYaITqMeUl6UXh03FW39EaXK+BntvHvXQcoLvYaVBs5awDNIOa6c/pcyEezByfCFmIQgWBIxuKUHrweK/OhgLHvB2puIlXLhpBoHM96cNbOI8ch0Iu8wttU842p5ydCxL38amwOIbQR9xTm5KLrU85NKN6sUmGxsfM5LSx/MP2lxnikCPFXf47KyYBaYbG0EC2FKcnILM3JkOVgVEndpDWtkpozIRLtAI4HPka2JtgpGqt+WrrkVvgOVuxFtzQM8tiMXlcU9YqenpO0Zqy9stWCDlXGQcq0Fc/amRIdJIsswCMZHaYSC4cLvM4HQBQ4EQ/pYPMcl1gXDh4I5f1WuQ+yNKRUMw8AffVcmh70xZY9GVm96dZToMI2YFeyd6jsHUgrKnTBiOVhZSpTNA5iiFS+Dle1hlGyilQ2FdckGaMgymeNh+MO+75hGoyl6sSGJXv7zPKi28gpSGgXLj7iiX/bcM6FgXyGUQ/n7ksflRn3gtqiWgxPTn/foYP5QVvhSLhjumvMeuBqvnNoLflcB3ATWgfWo4PKmyqoY8NNsaKp3HbQ0tlhQOS/ZPdEqiQW1ErmpaKE7to9VxQLLVjLXFCcK7QX6mHrv1MpjuOjutCRHL4TNwKpRETjrH4ZFb6sWO7hOWmGBhw51C7K2Nr1z+aYO0o46cvrqgdgG4d7Iqpxm9X132dQdNpuaqhEtDStfRTbN9HH108NV02gv1+Y7BaM7MiFfbkJl5NxGSDGVmOrPuulyrfO1Vs6SCmli57OZLRsA+A+WB4TxyQU7gQAAAABJRU5ErkJggg=="},e9ce:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAACXBIWXMAAAsSAAALEgHS3X78AAAEoElEQVR4nO2cQW7bMBBFp4b37g2qrrpMCnDf9AR1TxDnBPUN6gA9gL0PUGXXpXMDZ0+gzgkS7bprfYIU5AwTSaYkUiIlWtIDDBhCLNM/M9RwZsg3z8/P0DmMnQPA29JhcL7rfqAA7QvG2AUAqFcEAO8sPn0AgD29dvLF+T+Poz3Cv2CMCcuZ0+uLh294AIAYALbA+ZOH+2fwJxha0gIALv18gZZ7KR7nsa8vcC8YY8KSlgDwye2NrUgAYOVDOHeCoUWtOhYqTyL/eZxvXd2wuWA4RwmhvrkalAfu5fTgYI5rJhhaVWz5pOuKA1lbIzetLxhjwqq+h6OHMbckXK1wxF4wdMHYU4jQFg8yDqwhmp1gKJYIGM/C08CaA4m2t/ngxPgv+yWWYCZ/Dy7LjDETrH9iKaxFq3bJ/oqVRsRr5yZzmomFrXsuFlBYZJQNKReMsWXLa8EuOQPGKmO0YpdEv/7dHz2M+Vq2lCqzMG8r/sCJad7WohcMo/i+z1tFzMqM5dglGYsooznrZrzB8FmXFtdZ2GoUS7LWXcxaGFrXY4uDCp2rfHYjb2GroSuUY5m/8Gph+GT4a3ije8qsXkvTbblyUxvGFuRqfwDgg+FtMnNZ2sIWFuMQN/hIpbI95fHDRcSUjO3Ig8RYf1mMNaNLWrAj8ytFpEU4V3n8WA4I58BwEF7D2DpVw4xqFIQv03EZCoZRfb00M06KKhR5lDFcSeDXGuh+TzQ2sbBuMj+/eNAkf6EWYg7jfBmEm+bdj/O5g+LHy2+Z5i80ArOXF/TfFW66d1WtqeS1erWgB5HLJ/6FeqMszO0yqG03det+OmYqyTihUpl72nBTP+5XhNRpmjY3L/hwU7/uVwRZGJqxf1y5qX/3K0Lq1J5g0NBN23U/HbJnZFrZ+ecDGzftxv0KmXSaKKxy0+7cTw9j0bTO55yCC/clFSDW0pIY21ArQkTuF0R/qxhP94Ipsm76AwBuOrcoDeEIpkA3DbYAY95bMTIKVodRMBs4300o3TxiyGhh5ogOHylYKDFO6MhVyES9GalkpwSz6vEcMHsUDCPsw9DVMIAEQ5xtLekpDyqTogQbJ/5yjirfo4WV87K2RcEwxXIX5FC7J0lvfkgHrkNt0awi0yf2mt4RjbCMJYYtA5G38lw72NQxMoaUb6gTybufp/TLPXMLnGe6d3Q9rk8nsv+xDd7nCzNFPa4jABtdFUu/sQHLXkNtOwda+US6zsqi9I5NN2IfKdyxqxcM447rgYp1V7YvvHz73/Bcs9AVFVUZ1/nAMhnzqo7wcsHwKRF2h7Q7rkwq7NU5fbzJVVA/zT23pudZmBVB8GZ9Fe0omi/DvGrUT9GsxALrMlu/RNvYigW1j5LBTMX2hLcJHu1SM6XJ2TsRiXZKcVpCoUPtSpmL47BO5dCiDR3C1mjnnZsD19Da4sAOW1Mk1D/rpNDj9kg/7IheB5JP83Ksn59DIzFzu+jI4rydfwjejyXF/TlLWl75fKIe6AEU+24gbu/gW3RXdeCtiydrQgXWrctDIavo7mhljOXUkcrpCpQ6PVidCqwQ78UTTogkdgO3v88cAP4DtO7srIHBZjYAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.2a093bba.js.map