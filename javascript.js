const body = document.querySelector("body");
body.style.margin = "0px";
body.style.height = "100vh";
body.style.width = "100%";
body.style.display = "flex";
body.style.backgroundColor = "black";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const textoTopo = document.createElement("header");
textoTopo.style.background = "purple";
textoTopo.style.width = "100%";
textoTopo.style.display = "flex";
textoTopo.style.justifyContent = "center";
textoTopo.style.alignItems = "center";
body.appendChild(textoTopo);

const textoTopoH1 = document.createElement("h1");
textoTopoH1.textContent = "GTA 6!";
textoTopoH1.style.color = "white";
textoTopo.appendChild(textoTopoH1);

const divPai = document.createElement("div");
divPai.style.display = "flex";
divPai.style.flexDirection = "column";
divPai.style.alignItems = "center";
divPai.style.width = "100%";
body.appendChild(divPai);

const divFilhoTexto2 = document.createElement("div");
divFilhoTexto2.style.backgroundImage = "url(gta6.jpg)";
divFilhoTexto2.style.margin = "10px";
divFilhoTexto2.style.backgroundSize = "100% 800px";
divFilhoTexto2.style.borderRadius = "30px";
divFilhoTexto2.style.width = "100%";
divFilhoTexto2.style.height = "800px";
divPai.appendChild(divFilhoTexto2);

const divTextoInferiores = document.createElement("div");
divTextoInferiores.style.display = "flex";
divTextoInferiores.style.width = "100%";
divTextoInferiores.style.justifyContent = "space-evenly";
divTextoInferiores.style.alignItems = "flex-start";
divPai.appendChild(divTextoInferiores);

const divFilho1Texto1 = document.createElement("div");
divFilho1Texto1.style.width = "45%";
divFilho1Texto1.style.margin = "40px 0";
divFilho1Texto1.style.borderLeft = "3px solid white";
divFilho1Texto1.style.paddingLeft = "10px";
divTextoInferiores.appendChild(divFilho1Texto1);

const divFilhoTexto3 = document.createElement("div");
divFilhoTexto3.style.width = "45%";
divFilhoTexto3.style.margin = "40px 0";
divFilhoTexto3.style.borderLeft = "3px solid white";
divFilhoTexto3.style.paddingLeft = "10px";
divTextoInferiores.appendChild(divFilhoTexto3);

const filhoTexto1 = document.createElement("h2");
filhoTexto1.style.color = "white";
filhoTexto1.textContent = "O que se sabe sobre o GTA6 ?";
divFilho1Texto1.appendChild(filhoTexto1);

const filhoPTexto1 = document.createElement("p");
filhoPTexto1.style.color = "white";
filhoPTexto1.textContent = "Com gráficos insanamente realistas e com o maior mapa da franquia, GTA 6 é o game mais esperado de 2025. Desenvolvida pela Rockstar Games, Grand Theft Auto, ou apenas GTA, é uma das franquias mais bem estabelecidas do mundo dos videogames.";
divFilho1Texto1.appendChild(filhoPTexto1);

const filhoTexto2 = document.createElement("h1");
filhoTexto2.style.color = "white";
filhoTexto2.textContent = "BOAS-VINDAS A LEONIDA";
divFilhoTexto3.appendChild(filhoTexto2);

const filhoPTexto2 = document.createElement("p");
filhoPTexto2.style.color = "white";
filhoPTexto2.textContent = "Grand Theft Auto VI vai para o estado de Leonida, que abriga as ruas iluminadas pelas luzes neon de Vice City e arredores, na maior e mais imersiva evolução da franquia Grand Theft Auto. Disponível em 2025 para PlayStation 5 e Xbox Series X|S.";
divFilhoTexto3.appendChild(filhoPTexto2);

const confiraTexto = document.createElement("div");
confiraTexto.style.display = "flex";
confiraTexto.style.flexDirection = "column";
confiraTexto.style.alignItems = "center";
confiraTexto.style.width = "100%";
body.appendChild(confiraTexto);

const confiraTextoH1 = document.createElement("h1");
confiraTextoH1.textContent = "Confira algumas imagens abaixo :";
confiraTextoH1.style.marginTop = "60px";
confiraTextoH1.style.color = "white";
body.appendChild(confiraTextoH1);

const divPaiImagens = document.createElement("div");
divPaiImagens.style.marginTop = "60px";
divPaiImagens.style.display = "flex";
divPaiImagens.style.alignItems = "center";
divPaiImagens.style.width = "100%";
body.appendChild(divPaiImagens);

const divImagem1 = document.createElement("div");
divImagem1.style.backgroundImage = "url(gta6_4.png)";
divImagem1.style.backgroundSize = "100% 400px";
divImagem1.style.borderRadius = "30px";
divImagem1.style.margin = "10px";
divImagem1.style.width = "50%";
divImagem1.style.height = "400px";
divPaiImagens.appendChild(divImagem1);

const divImagem2 = document.createElement("div");
divImagem2.style.backgroundImage = "url(gta6_3.jpg)";
divImagem2.style.backgroundSize = "100% 400px";
divImagem2.style.borderRadius = "30px";
divImagem2.style.margin = "10px";
divImagem2.style.width = "50%";
divImagem2.style.height = "400px";
divPaiImagens.appendChild(divImagem2);

