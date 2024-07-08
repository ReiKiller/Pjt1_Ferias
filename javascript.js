const body = document.querySelector("body");
body.style.margin = "0px";
body.style.minHeight = "100vh";
body.style.width = "100%";
body.style.display = "flex";
body.style.backgroundColor = "black";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const textoTopo = document.createElement("header");
textoTopo.style.background = "purple";
textoTopo.style.width = "100%";
textoTopo.style.height = "70px";
textoTopo.style.borderBottomRightRadius = "20px";
textoTopo.style.borderBottomLeftRadius = "20px"
textoTopo.style.display = "flex";
textoTopo.style.justifyContent = "center";
textoTopo.style.alignItems = "center";
body.appendChild(textoTopo);

const textoTopoH1 = document.createElement("button");
textoTopoH1.textContent = "Grand Theft Auto 6";
textoTopoH1.style.backgroundColor = "transparent";
textoTopoH1.style.color = "white";
textoTopoH1.style.fontFamily = "Baskervville SC";
textoTopoH1.style.fontSize = "40px";
textoTopoH1.style.border = "2px solid purple";
textoTopoH1.style.width = "400px";
textoTopoH1.style.borderRadius = "20px";
textoTopoH1.style.cursor = "cell"
textoTopoH1.style.color = "white";
textoTopoH1.addEventListener("click", function(){
    const audio = document.getElementById('audio');
    audio.play().then(() => {
        console.log('Audio is playing');
    }).catch(error => {
        console.error('Error playing audio:', error);
    });
})
textoTopo.appendChild(textoTopoH1);

const audio = document.createElement('audio');
audio.id = "audio";
audio.src = "GTA-San-Andreas-Theme-Song-Full-_-__M4A_128K__1.mp3";
audio.type = "audio/mp3";
textoTopo.appendChild(audio);

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
filhoTexto1.style.fontFamily = "Baskervville SC";
filhoTexto1.textContent = "O QUE SE SABE SOBRE O GTA6 ?";
divFilho1Texto1.appendChild(filhoTexto1);

const filhoPTexto1 = document.createElement("p");
filhoPTexto1.style.color = "white";
filhoPTexto1.style.fontFamily = "Kanit"
filhoPTexto1.textContent = "Com gráficos insanamente realistas e com o maior mapa da franquia, GTA 6 é o game mais esperado de 2025. Desenvolvida pela Rockstar Games, Grand Theft Auto, ou apenas GTA, é uma das franquias mais bem estabelecidas do mundo dos videogames.";
divFilho1Texto1.appendChild(filhoPTexto1);

const filhoTexto2 = document.createElement("h2");
filhoTexto2.style.color = "white";
filhoTexto2.style.fontFamily = "Baskervville SC";
filhoTexto2.textContent = "BOAS-VINDAS A LEONIDA";
divFilhoTexto3.appendChild(filhoTexto2);

const filhoPTexto2 = document.createElement("p");
filhoPTexto2.style.color = "white";
filhoPTexto2.style.fontFamily = "Kanit"
filhoPTexto2.textContent = "Grand Theft Auto VI vai para o estado de Leonida, que abriga as ruas iluminadas pelas luzes neon de Vice City e arredores, na maior e mais imersiva evolução da franquia Grand Theft Auto. Disponível em 2025 para PlayStation 5 e Xbox Series X|S.";
divFilhoTexto3.appendChild(filhoPTexto2);

const confiraTexto = document.createElement("div");
confiraTexto.style.display = "flex";
confiraTexto.style.flexDirection = "column";
confiraTexto.style.alignItems = "center";
confiraTexto.style.width = "100%";
body.appendChild(confiraTexto);

const confiraTextoH1 = document.createElement("h1");
confiraTextoH1.style.fontFamily = "Baskervville SC";
confiraTextoH1.textContent = "Confira algumas imagens abaixo :";
confiraTextoH1.style.marginTop = "60px";
confiraTextoH1.style.color = "white";
confiraTexto.appendChild(confiraTextoH1);

const divPaiImagens = document.createElement("div");
divPaiImagens.style.marginTop = "60px";
divPaiImagens.style.display = "flex";
divPaiImagens.style.flexWrap = "wrap";
divPaiImagens.style.justifyContent = "center";
divPaiImagens.style.alignItems = "center";
divPaiImagens.style.width = "100%";
body.appendChild(divPaiImagens);

const divImagem1 = document.createElement("div");
divImagem1.style.backgroundImage = "url(gta6_4.png)";
divImagem1.style.backgroundSize = "100% 400px";
divImagem1.style.borderRadius = "30px";
divImagem1.style.margin = "10px";
divImagem1.style.width = "40%";
divImagem1.style.height = "400px";
divPaiImagens.appendChild(divImagem1);

const divImagem2 = document.createElement("div");
divImagem2.style.backgroundImage = "url(gta6_3.jpg)";
divImagem2.style.backgroundSize = "100% 400px";
divImagem2.style.borderRadius = "30px";
divImagem2.style.margin = "10px";
divImagem2.style.width = "40%";
divImagem2.style.height = "400px";
divPaiImagens.appendChild(divImagem2);

const buttonVerMais = document.createElement("button");
buttonVerMais.style.marginTop = "30px";
buttonVerMais.style.backgroundColor = "transparent";
buttonVerMais.style.color = "white";
buttonVerMais.style.fontSize = "15px";
buttonVerMais.style.border = "2px solid purple";
buttonVerMais.style.width = "300px";
buttonVerMais.style.height = "50px";
buttonVerMais.style.borderRadius = "20px";
buttonVerMais.textContent = "Ver mais";
buttonVerMais.style.cursor = "pointer";
let imagensCarregadas = false;
buttonVerMais.addEventListener("click", function() {
    if (!imagensCarregadas) {
        const divImagem3 = document.createElement("div");
        divImagem3.style.backgroundImage = "url(gta6_5.png)";
        divImagem3.style.backgroundSize = "100% 400px"; 
        divImagem3.style.borderRadius = "30px";
        divImagem3.style.margin = "10px";
        divImagem3.style.width = "40%";
        divImagem3.style.height = "400px";
        divPaiImagens.appendChild(divImagem3);

        const divImagem4 = document.createElement("div");
        divImagem4.style.backgroundImage = "url(gta6_6.webp)";
        divImagem4.style.backgroundSize = "100% 400px";
        divImagem4.style.borderRadius = "30px";
        divImagem4.style.margin = "10px";
        divImagem4.style.width = "40%";
        divImagem4.style.height = "400px";
        divPaiImagens.appendChild(divImagem4);

        const divImagem5 = document.createElement("div");
        divImagem5.style.backgroundImage = "url(gta7.webp)";
        divImagem5.style.backgroundSize = "100% 400px";
        divImagem5.style.borderRadius = "30px";
        divImagem5.style.margin = "10px";
        divImagem5.style.width = "40%";
        divImagem5.style.height = "400px";
        divPaiImagens.appendChild(divImagem5);

        const divImagem6 = document.createElement("div");
        divImagem6.style.backgroundImage = "url(gta8.jpg)";
        divImagem6.style.backgroundSize = "100% 400px";
        divImagem6.style.borderRadius = "30px";
        divImagem6.style.margin = "10px";
        divImagem6.style.width = "40%";
        divImagem6.style.height = "400px";
        divPaiImagens.appendChild(divImagem6);

        imagensCarregadas = true;
        buttonVerMais.removeEventListener("click", this);
        alert ("Contém um easter egg nesta página, descubra passando o cursor nas palavras");
    }
});
body.appendChild(buttonVerMais);

const divPaiTextosEImgs = document.createElement("div");
divPaiTextosEImgs.style.display = "flex";
divPaiTextosEImgs.style.width = "100%";
divPaiTextosEImgs.style.flexWrap = "wrap";
divPaiTextosEImgs.style.justifyContent = "space-evenly"
body.appendChild(divPaiTextosEImgs);

const divTexto1 = document.createElement("div");
divTexto1.style.width = "45%";
divTexto1.style.margin = "40px 0";
divTexto1.style.borderLeft = "3px solid white";
divTexto1.style.paddingLeft = "10px";
divPaiTextosEImgs.appendChild(divTexto1);

const filhoTexto3 = document.createElement("h2"); 
filhoTexto3.style.fontFamily = "Baskervville SC";
filhoTexto3.style.color = "white";
filhoTexto3.textContent = "Data de lançamento de GTA 6";
divTexto1.appendChild(filhoTexto3);

const filhoPTexto3 = document.createElement("p");
filhoPTexto3.style.color = "white";
filhoPTexto3.style.fontFamily = "Kanit"
filhoPTexto3.textContent = "Após anos e anos de notícias, rumores e especulações, a Rockstar Games anunciou oficialmente GTA 6 no dia 8 de novembro, poucas horas após o jornalista Jason Schreier, da Bloomberg, antecipar que o título seria revelado pela publisher (em breve). O anúncio foi feito pelo em uma thread na rede social X (antigo Twitter), e a gigante dos games também confirmou que o primeiro trailer oficial de GTA 6 será revelado no começo de dezembro de 2023, em comemoração ao aniversário de 25 anos da Rockstar, conforme também já havia sido noticiado pela Bloomberg. O título, porém, ainda não tem uma data oficial de lançamento. Grand Theft Auto VI é um dos jogos mais aguardados de todos os tempos, uma vez que será o sucessor de GTA V, um título que já atravessou três diferentes gerações de console e vendeu até hoje mais de 185 milhões de cópias, o que faz dele não apenas um dos games mais vendidos de todos os tempos, atrás apenas de Minecraft, como também um dos maiores fenômenos comerciais da história da cultura pop. Confira a seguir o comunicado completo. (O próximo mês marca o aniversário de 25 anos da Rockstar Games. Graças ao incrível apoio de nossos jogadores no mundo inteiro, tivemos a oportunidade de criar games pelos quais somos verdadeiramente apaixonados. Sem vocês, nada disso seria possível, e somos tão gratos a todos vocês por compartilharem esta jornada conosco. Em 1998, a Rocksar Games foi fundada sob a ideia de que videogames poderiam ser uma parte tão essencial da cultura quanto qualquer outra forma de entretenimento, e esperamos ter criado jogos que vocês amem em nossos esforços para fazer parte dessa evolução. Estamos muito felizes em anunciar para vocês que, no começo de dezembro, nós lançaremos o primeiro trailer do próximo Grand Theft Auto. Estamos ansiosos por muito mais anos compartilhando essas experiências com todos vocês), diz a Rockstar Games no comunicado. No dia 5 de dezembro, às 11h00 da manhã do horário de Brasília, a Rockstar exibirá o primeiro trailer de GTA 6. Ainda não se sabe se será um trailer focado em história, personagens, gameplay ou um pouco de tudo, mas o fato é que o vídeo deve sacudir toda a indústria de games, visto que o jogo será o sucessor de GTA V, que vendeu simplesmente 190 milhões de cópias até hoje. ";
divTexto1.appendChild(filhoPTexto3);


const divTexto2 = document.createElement("div");
divTexto2.style.width = "45%";
divTexto2.style.height = "45%";
divTexto2.style.margin = "40px 0";
divTexto2.style.borderLeft = "3px solid white";
divTexto2.style.paddingLeft = "10px";
divPaiTextosEImgs.appendChild(divTexto2);


const filhoTexto4 = document.createElement("h2"); 
filhoTexto4.style.fontFamily = "Baskervville SC";
filhoTexto4.style.color = "white";
filhoTexto4.textContent = "História e Personagens de GTA 6";
divTexto2.appendChild(filhoTexto4);

const filhoPTexto4 = document.createElement("p");
filhoPTexto4.style.color = "white";
filhoPTexto4.style.fontFamily = "Kanit"
filhoPTexto4.textContent = "De acordo com o jornalista Jason Schreier, o nome provisório de GTA VI era Project Americas, e o game se estenderia entre a América do Norte e e América do Sul Sul. Esse projeto, porém, já foi descartado e, aparentemente, o jogo se passará em Vice City e áreas ao redor. Além disso, o título da Rockstar deve contar com dois protagonistas, sendo uma delas a primeira protagonista mulher da franquia. ";
divTexto2.appendChild(filhoPTexto4);


const divTexto3 = document.createElement("div");
divTexto3.style.width = "45%";
divTexto3.style.margin = "40px 0";
divTexto3.style.borderLeft = "3px solid white";
divTexto3.style.paddingLeft = "10px";
divPaiTextosEImgs.appendChild(divTexto3);


const filhoTexto5 = document.createElement("h2"); 
filhoTexto5.style.fontFamily = "Baskervville SC";
filhoTexto5.style.color = "white";
filhoTexto5.textContent = "Preço e versões de GTA 6";
divTexto3.appendChild(filhoTexto5);

const filhoPTexto5 = document.createElement("p");
filhoPTexto5.style.color = "white";
filhoPTexto5.style.fontFamily = "Kanit"
filhoPTexto5.textContent = "GTA 6 ainda não está disponível para compra em pré-venda e, portanto, ainda não teve os valores referentes às diferentes versões revelados.";
divTexto3.appendChild(filhoPTexto5);


const divTexto4 = document.createElement("div");
divTexto4.style.width = "45%";
divTexto4.style.margin = "40px 0";
divTexto4.style.borderLeft = "3px solid white";
divTexto4.style.paddingLeft = "10px";
divPaiTextosEImgs.appendChild(divTexto4);


const filhoTexto6 = document.createElement("h2"); 
filhoTexto6.style.fontFamily = "Baskervville SC";
filhoTexto6.style.color = "white";
filhoTexto6.textContent = "Plataformas de GTA 6";
divTexto4.appendChild(filhoTexto6);

const filhoPTexto6 = document.createElement("p");
filhoPTexto6.style.color = "white";
filhoPTexto6.style.fontFamily = "Kanit"
filhoPTexto6.textContent = "Ainda nenhuma informação foi anunciada pela Rockstar. De qualquer forma, por se tratar de, provavelmente, o maior lançamento de toda a nova geração de consoles, a tendência é que o game seja lançado para PlayStation, Xbox Series X, Xbox Series S e PC. Como as especificações técnicas do sucessor do Nintendo Switch ainda não são conhecidas, é difícil cravar se o console da Big N será contemplado, seja rodando o jogo nativamente ou via nuvem, como ocorre com alguns games AAA atuais lançados para Switch.";
divTexto4.appendChild(filhoPTexto6);


const divTexto5 = document.createElement("div");
divTexto5.style.width = "45%";
divTexto5.style.margin = "40px 0";
divTexto5.style.borderLeft = "3px solid white";
divTexto5.style.paddingLeft = "10px";
divPaiTextosEImgs.appendChild(divTexto5);


const filhoTexto7 = document.createElement("h2"); 
filhoTexto7.style.fontFamily = "Baskervville SC";
filhoTexto7.style.color = "white";
filhoTexto7.textContent = "Gameplay de GTA 6";
divTexto5.appendChild(filhoTexto7);

const filhoPTexto7 = document.createElement("p");
filhoPTexto7.style.color = "white";
filhoPTexto7.style.fontFamily = "Kanit"
filhoPTexto7.textContent = "Até o momento, nenhum vídeo oficial de gameplay de GTA 6 foi revelado. No entanto, o trailer que será revelado no começo de dezembro de 2023 pode revelar os primeiros detalhes de jogabilidade do título da Rockstar.";
divTexto5.appendChild(filhoPTexto7);


const divTexto6 = document.createElement("div");
divTexto6.style.width = "45%";
divTexto6.style.margin = "40px 0";
divTexto6.style.borderLeft = "3px solid white";
divTexto6.style.paddingLeft = "10px";
divPaiTextosEImgs.appendChild(divTexto6);


const filhoTexto8 = document.createElement("h2"); 
filhoTexto8.style.fontFamily = "Baskervville SC";
filhoTexto8.style.color = "white";
filhoTexto8.textContent = "Trailers de GTA 6";
divTexto6.appendChild(filhoTexto8);

const filhoPTexto8 = document.createElement("p");
filhoPTexto8.style.color = "white";
filhoPTexto8.style.fontFamily = "Kanit"
filhoPTexto8.textContent = "Até o momento, nenhum teaser ou trailer de GTA 6 foi revelado. No entanto, já foi confirmado pela própria Rockstar terá seu primeiro trailer revelado no começo de dezembro de 2023, possivelmente no The Game Awards, que ocorre em 7 de dezembro, nos Estados Unidos.";
divTexto6.appendChild(filhoPTexto8);


const footer = document.createElement("footer");
footer.style.backgroundColor = "purple";
footer.style.marginTop = "30px";
footer.style.height = "50px";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.color = "white";
footer.textContent = "Gta 6 anunciado por Alehandro, © 2024";
footer.style.bottom = "0";
footer.style.width = "100%";
body.appendChild(footer);
