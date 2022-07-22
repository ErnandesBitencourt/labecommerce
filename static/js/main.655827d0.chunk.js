(this.webpackJsonplabecommerce=this.webpackJsonplabecommerce||[]).push([[0],{25:function(t,e,n){"use strict";n.r(e);var r,o,i,a,c,s,p,l,u,d=n(1),h=n.n(d),m=n(13),j=n.n(m),b=n(8),f=n(17),x=n(4),O=n(5),g=n(7),v=n(6),C=n(2),y=n(3),M=y.a.div(r||(r=Object(C.a)(["\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n"]))),k=y.a.div(o||(o=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  p {\n    margin: 10px 0;\n  }\n"]))),q=n(0),D=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){return Object(x.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(q.jsxs)(k,{children:[Object(q.jsxs)("p",{children:[this.props.quantidade,"x"]}),Object(q.jsx)("p",{children:this.props.nome}),Object(q.jsx)("button",{onClick:this.props.onClick,children:"Remover"})]})}}]),n}(h.a.Component),P=D,w=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){return Object(x.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var t=this,e=this.props.carrinho&&this.props.carrinho.map((function(e){return Object(q.jsx)(P,{quantidade:e.quantidade,nome:e.name,onClick:function(){return t.props.removerItemDoCarrinho(e)}},e.id)}));return Object(q.jsxs)(M,{children:[Object(q.jsx)("h2",{children:"Carrinho:"}),Object(q.jsx)("div",{children:e}),Object(q.jsxs)("p",{children:["Valor total: R$ ",this.props.valorTotal,",00"]})]})}}]),n}(h.a.Component),N=w,T=y.a.div(i||(i=Object(C.a)(["\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n"]))),S=y.a.label(a||(a=Object(C.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0px;\n"]))),B=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){return Object(x.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(q.jsxs)(T,{children:[Object(q.jsx)("h2",{children:"Filtros"}),Object(q.jsxs)(S,{children:["Filtro M\xednimo:",Object(q.jsx)("input",{type:"number",value:this.props.minimo,onChange:this.props.onChangeMinimo})]}),Object(q.jsxs)(S,{children:["Filtro M\xe1ximo:",Object(q.jsx)("input",{type:"number",value:this.props.maximo,onChange:this.props.onChangeMaximo})]}),Object(q.jsxs)(S,{children:["Busca por nome:",Object(q.jsx)("input",{type:"text",value:this.props.buscaPorNome,onChange:this.props.onChangeBuscaPorNome})]})]})}}]),n}(h.a.Component),V=B,F=y.a.div(c||(c=Object(C.a)(["\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n \n  img{\n    width: 70%;\n    height: 70%;\n  }\n"]))),_=y.a.div(s||(s=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  p {\n    margin: 0 16px;\n    padding: 10px;\n  }\n  button {\n    margin: 10px;\n    align-self: center;\n    width: 70%;\n  }\n"]))),A=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){return Object(x.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(q.jsxs)(F,{children:[Object(q.jsx)("img",{src:this.props.imagem}),Object(q.jsxs)(_,{children:[Object(q.jsx)("p",{children:this.props.nome}),Object(q.jsxs)("p",{children:["R$ ",this.props.valor,",00"]}),Object(q.jsx)("button",{onClick:this.props.onClick,children:"Adicionar carrinho"})]})]})}}]),n}(h.a.Component),G=A,I=y.a.div(p||(p=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n \n"]))),J=y.a.div(l||(l=Object(C.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  margin-top: 10px;\n  margin: 10px 0;\n"]))),R=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){return Object(x.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var t=this,e=this.props.produtos&&this.props.produtos.sort((function(e,n){return"Crescente"===t.props.ordenacao?e.price-n.price:n.price-e.price})),n=e&&e.map((function(e){return Object(q.jsx)(G,{imagem:e.photo,nome:e.name,valor:e.price,onClick:function(){return t.props.onClick(e)}},e.id)}));return Object(q.jsxs)("div",{children:[Object(q.jsxs)(I,{children:[Object(q.jsxs)("p",{children:["Quantidade de produtos: ",this.props.quantidade]}),Object(q.jsxs)("label",{children:["Ordena\xe7\xe3o:",Object(q.jsxs)("select",{onChange:this.props.onChangeCabecalho,children:[Object(q.jsx)("option",{value:"Crescente",children:"Crescente"}),Object(q.jsx)("option",{value:"Decrescente",children:"Decrescente"})]})]})]}),Object(q.jsx)(J,{children:n})]})}}]),n}(h.a.Component),X=R,E=y.a.div(u||(u=Object(C.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr 3fr 1fr;\ngap: 16px;\n"]))),Q=[{id:1,name:"produto 4",price:123,photo:"https://picsum.photos/200/200?a=1"},{id:2,name:"produto 3",price:200,photo:"https://picsum.photos/200/200?a=2"},{id:3,name:"produto 1",price:30,photo:"https://picsum.photos/200/200?a=3"},{id:4,name:"produto 2",price:10,photo:"https://picsum.photos/200/200?a=4"},{id:5,name:"Boneca",price:100,photo:"https://images.tcdn.com.br/img/img_prod/727032/boneca_bebe_te_quero_949_1_2bb5a0f480a692aa4b6702e1bcb5f18f.jpg"},{id:6,name:"Carro de brinquedo",price:150,photo:"https://images-americanas.b2w.io/produtos/01/00/img/2837993/0/2837993067_1GG.jpg"},{id:7,name:"Celular",price:350,photo:"https://www.colombo.com.br/blog/wp-content/uploads/2021/03/o-que-e-um-celular.jpg"},{id:8,name:"Bolsa",price:400,photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIRXATGVuyDHtco_v-Ogk8DFOgTbNvJud7Q&usqp=CAU"},{id:9,name:"Livro",price:400,photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkVESZX0xj5TrwqyGJCwg3_vEXp7iJrXaxrAtKJ8HYFZm0lej7uR3gd8iDt1YMaRDw1Q&usqp=CAU"}],H=function(t){Object(g.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(x.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={filtroMinimo:10,filtroMaximo:1e5,filtroBuscaPorNome:"",ordenacao:"Crescente",carrinho:[],valorTotal:0},t.manipularValorDoFiltroMinimo=function(e){t.setState({filtroMinimo:e.target.value})},t.manipularValorDoFiltroMaximo=function(e){t.setState({filtroMaximo:e.target.value})},t.manipularValorDoFiltroBuscaPorNome=function(e){t.setState({filtroBuscaPorNome:e.target.value})},t.filtrarProdutos=function(){return Q.filter((function(e){return t.state.filtroMinimo?e.price>=t.state.filtroMinimo:e})).filter((function(e){return t.state.filtroMaximo?e.price<=t.state.filtroMaximo:e})).filter((function(e){return e.name.includes(t.state.filtroBuscaPorNome)}))},t.ordenarProdutos=function(e){t.setState({ordenacao:e.target.value})},t.adicionarProdutoNoCarrinho=function(e){if(0===t.state.carrinho.filter((function(t){return t.id===e.id&&t})).length){e.quantidade=1;var n=[e].concat(Object(f.a)(t.state.carrinho));t.setState({carrinho:n})}else{var r=t.state.carrinho.map((function(t){return e.id===t.id?Object(b.a)(Object(b.a)({},t),{},{quantidade:t.quantidade+1}):t}));t.setState({carrinho:r})}t.adicionarValorTotal(e.price)},t.removerItemDoCarrinho=function(e){if(1===e.quantidade){var n=t.state.carrinho.filter((function(t){return t.id!==e.id&&t}));t.setState({carrinho:n})}else{var r=t.state.carrinho.map((function(t){return e.id===t.id&&t.quantidade>=1?Object(b.a)(Object(b.a)({},t),{},{quantidade:t.quantidade-1}):t}));t.setState({carrinho:r})}},t.adicionarValorTotal=function(e){t.setState({valorTotal:t.state.valorTotal+e})},t.removerValorTotal=function(e){t.setState({valorTotal:t.state.valorTotal-e})},t}return Object(O.a)(n,[{key:"render",value:function(){var t=this.filtrarProdutos();return Object(q.jsxs)(E,{children:[Object(q.jsx)(V,{minimo:this.state.filtroMinimo,maximo:this.state.filtroMaximo,buscaPorNome:this.state.filtroBuscaPorNome,onChangeMinimo:this.manipularValorDoFiltroMinimo,onChangeMaximo:this.manipularValorDoFiltroMaximo,onChangeBuscaPorNome:this.manipularValorDoFiltroBuscaPorNome}),Object(q.jsx)(X,{quantidade:t.length,onChangeCabecalho:this.ordenarProdutos,ordenacao:this.state.ordenacao,produtos:t,onClick:this.adicionarProdutoNoCarrinho}),Object(q.jsx)(N,{carrinho:this.state.carrinho,valorTotal:this.state.valorTotal,removerItemDoCarrinho:this.removerItemDoCarrinho})]})}}]),n}(h.a.Component),U=H;j.a.render(Object(q.jsx)(h.a.StrictMode,{children:Object(q.jsx)(U,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.655827d0.chunk.js.map