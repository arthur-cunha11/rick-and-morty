(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{35:function(e,t,n){},54:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);n(54);var i,a=n(21),c=n(4),s=n.n(c),d=n(50),l=n.n(d),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),c(e),s(e)}))},o=(n(35),n.p+"static/media/Logo.d8bb791a.svg"),j=n.p+"static/media/Logo-mobile.edcbcb60.svg",u=n(51),v=n(20),h=n.p+"static/media/Arrow.d1c38e35.svg",b=n.p+"static/media/Loading.d6d4d401.svg",m=n(2),g=function(){return Object(m.jsxs)("div",{className:"search__loading",children:[Object(m.jsx)("img",{alt:"Loading",className:"search__loading--image",src:b}),Object(m.jsx)("p",{className:"search__loading--text",children:"Loading"})]})},_=function(e){var t,n,i,a=e.character,s=Object(c.useState)("It can't be told if it is alive or dead."),d=Object(v.a)(s,2),l=d[0],r=d[1];return Object(c.useEffect)((function(){"Alive"===(null===a||void 0===a?void 0:a.status)?"Male"===(null===a||void 0===a?void 0:a.gender)?r("He is alive and well."):"Female"===(null===a||void 0===a?void 0:a.gender)?r("She is alive and well."):r("It is alive and well."):"Dead"===(null===a||void 0===a?void 0:a.status)?"Male"===(null===a||void 0===a?void 0:a.gender)?r("He is dead."):"Female"===(null===a||void 0===a?void 0:a.gender)?r("She is dead."):r("It is dead."):"Male"===(null===a||void 0===a?void 0:a.gender)?r("It can't be told if he is alive or dead."):"Female"===(null===a||void 0===a?void 0:a.gender)&&r("It can't be told if she is alive or dead.")}),[null===a||void 0===a?void 0:a.gender,null===a||void 0===a?void 0:a.status]),Object(m.jsxs)("div",{className:"card__details__text--about",children:[Object(m.jsx)("h1",{className:"card__details__text--tittle",children:"A B O U T"}),Object(m.jsxs)("p",{children:[null===a||void 0===a?void 0:a.name," is a ",null===a||void 0===a?void 0:a.gender," ",null===a||void 0===a?void 0:a.species,"."," ",l," Last seen in"," ",null===a||void 0===a||null===(t=a.episode)||void 0===t||null===(n=t[(null===a||void 0===a||null===(i=a.episode)||void 0===i?void 0:i.length)-1])||void 0===n?void 0:n.air_date,"."]})]})},O=function(e){var t=e.character;return Object(m.jsxs)("div",{className:"card__details__image",children:[Object(m.jsx)("img",{alt:"Card Detail Blur",className:"card__details__image--blur",src:null===t||void 0===t?void 0:t.image}),Object(m.jsxs)("div",{className:"card__details__image--regular",children:[Object(m.jsx)("img",{alt:"Card Detail",src:null===t||void 0===t?void 0:t.image,className:"".concat("Dead"===(null===t||void 0===t?void 0:t.status)?"dead":"")}),Object(m.jsxs)("div",{className:"card__details__image--text",children:[Object(m.jsx)("span",{children:null===t||void 0===t?void 0:t.name}),Object(m.jsx)("p",{children:null===t||void 0===t?void 0:t.species})]})]})]})},x=n.p+"static/media/Residents.24993016.svg",p=function(e){var t,n,i,a=e.place,c=e.text;return Object(m.jsxs)("div",{className:"card__details__text--origin",children:[Object(m.jsx)("h1",{className:"card__details__text--tittle",children:c}),Object(m.jsx)("p",{children:(null===a||void 0===a?void 0:a.type)||"Unknown Planet"}),Object(m.jsx)("h2",{children:(null===a||void 0===a?void 0:a.name)||"Unknown"}),Object(m.jsx)("span",{children:(null===a||void 0===a?void 0:a.dimension)||"Unknown dimension"}),(null===a||void 0===a||null===(t=a.residents)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.name)&&Object(m.jsxs)("div",{className:"card__details__text--residents",children:[Object(m.jsx)("img",{alt:"Residentes icon",src:x}),Object(m.jsx)("p",{children:(null===a||void 0===a||null===(i=a.residents)||void 0===i?void 0:i.length)+" residents"})]})]})},f=function(e){var t=e.character,n=e.selected,i=null===t||void 0===t?void 0:t.location,a=null===t||void 0===t?void 0:t.origin;return n===t.id?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{character:t}),Object(m.jsxs)("div",{className:"card__details__text",children:[Object(m.jsx)(_,{character:t}),Object(m.jsx)(p,{place:i,text:"L O C A T I O N"}),Object(m.jsx)(p,{place:a,text:"O R I G I N"})]})]}):null},N=function(e){var t=e.characters.results,n=Object(c.useState)(""),i=Object(v.a)(n,2),a=i[0],s=i[1];return null===t||void 0===t?void 0:t.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"card",onClick:function(){return s(e.id)},children:[Object(m.jsx)("img",{alt:"Character card",className:"card__image ".concat("Dead"===e.status?"dead":""),src:e.image}),Object(m.jsxs)("div",{className:"card__text",children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("p",{children:e.species})]})]}),Object(m.jsxs)("div",{className:"card__details ".concat(a===e.id?"open":"close"),children:[Object(m.jsx)("div",{className:"card__details__button",children:Object(m.jsx)("button",{onClick:function(){return s("")},type:"button",children:"Close"})}),Object(m.jsx)(f,{selected:a,character:e})]})]},e.id)}))},C=function(){var e,t,n=Object(c.useState)(""),s=Object(v.a)(n,2),d=s[0],l=s[1],r=Object(c.useState)(1),o=Object(v.a)(r,2),j=o[0],b=o[1],_=Object(a.gql)(i||(i=Object(u.a)(["\n    query getCharacters($page: Int, $filter: FilterCharacter) {\n      characters(page: $page, filter: $filter) {\n        info {\n          count\n        }\n        results {\n          id\n          name\n          status\n          species\n          type\n          gender\n          origin {\n            name\n            type\n            dimension\n            residents {\n              name\n            }\n          }\n          location {\n            name\n            type\n            dimension\n            residents {\n              name\n            }\n          }\n          image\n          episode {\n            air_date\n          }\n        }\n      }\n    }\n  "]))),O=Object(a.useLazyQuery)(_),x=Object(v.a)(O,2),p=x[0],f=x[1],C=f.data,k=f.error,w=f.loading,y=null===C||void 0===C||null===(e=C.characters)||void 0===e||null===(t=e.info)||void 0===t?void 0:t.count,L=y>20?Math.ceil(y/20):1,S=function(e){d.replace(/\s/g,"").length&&p({variables:{page:e,filter:{name:d}}}),b(e)};return C&&document.querySelector(".background").classList.add("new__height"),(k||w)&&document.querySelector(".background").classList.remove("new__height"),w?Object(m.jsx)(g,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"search",children:[Object(m.jsx)("div",{className:"search__field",children:Object(m.jsx)("input",{value:d,placeholder:"Search characters",onChange:function(e){return l(e.target.value)}})}),Object(m.jsx)("div",{className:"search__button",children:Object(m.jsx)("button",{onClick:function(){return S(1)},type:"button",children:"Search"})})]}),C&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"search__result",children:Object(m.jsx)(N,{characters:C.characters})}),Object(m.jsxs)("div",{className:"search__pagination",children:[Object(m.jsx)("img",{alt:"Left side arrow",className:"pages__arrow--left",onClick:function(){return S(j>1?j-1:j)},src:h}),Object(m.jsx)("div",{className:"pages__counter",children:function(){for(var e=[],t=function(t){e.push(Object(m.jsx)("p",{className:"pages__counter--".concat(t),onClick:function(){return S(t)},children:t},t))},n=1;n<=L;n++)t(n);return e}()}),Object(m.jsx)("img",{alt:"Right side arrow",className:"pages__arrow--right",onClick:function(){return S(j<L?j+1:j)},src:h})]})]}),k&&Object(m.jsx)("span",{className:"search__error",children:"No character found!"})]})},k=function(){return Object(m.jsxs)("div",{className:"background",children:[Object(m.jsxs)("picture",{children:[Object(m.jsx)("source",{media:"(max-width: 767px)",srcSet:j}),Object(m.jsx)("img",{alt:"Rick and Morty logo",className:"logo",src:o})]}),Object(m.jsx)(C,{})]})},w=new a.ApolloClient({uri:"https://rickandmortyapi.com/graphql",cache:new a.InMemoryCache});l.a.render(Object(m.jsx)(a.ApolloProvider,{client:w,children:Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(k,{})})}),document.getElementById("root")),r()}},[[67,1,2]]]);
//# sourceMappingURL=main.ecde06e0.chunk.js.map