function modoEscuro(){
    let modo = document.getElementById("troca");
    modo.classList.toggle("bg-dark");
}

function modoAltoContraste(){
    let modo = document.getElementById("troca");
    modo.classList.toggle("bg-alto");
}

let capituloUmAbertura = '<div class="content capitulo-1 abertura" id="capituloUm"><div class="ident-capitulo"><h6>Capítulo 1</h6><h3>Encontro</h3></div><div class="continuar"><button type="button" class="btn-continuar" onclick="carregarConteudo(capituloUmHistoria)"><i class="bi bi-arrow-down"></i></button></div></div>';
let capituloUmHistoria = '<div class="content capitulo-1 historia" id="capituloUmHistoria"><div class="historia-historia"><p>&nbsp; Michele chega em Bogotá para férias, usando um casaco de pele, botas de couro e sua mala da Gucci e um óculos para descanso. Ao chegar se depara com um homem Negro alto, com uma jaqueta antiga e com um belo sorriso claro, com sua mochila nas costas e um a mala de roupa e usando calça jeans preta apertada.<br> &nbsp; Malik, a olha com desejo, mas com intenção de que ela não o veja olhando. Eles dois se olham, Malik tenta se aproximar. Mas passam reto.<br> &nbsp; Michele caminha, e pede para seu taxista, que abra a porta:</p><p>&nbsp; - Abra a porta, para que eu possa entrar.</p><p>&nbsp; Ele sai do seu carro, com uma expressão brava, mas abre a porta.<br>&nbsp; Ela entra e diz:</p><p>&nbsp; - Me leve ao Hotel Blacks.</p><p>&nbsp; Ele diz:</p><p>&nbsp; - É pra já madame.</p><p>&nbsp; Malik, está procurando algum lugar para ficar, está no balcão do aeroporto vendo folhetos de hotéis. Mas pensando na mulher que acabou de ver, com uma lembrança forte em sua mente, até que a balconista sugere:</p><p>&nbsp; - Senhor está procurando um hotel, vai ao Blacks é o melhor hotel da cidade.<br>&nbsp; E ele diz surpreendido:</p><p>&nbsp; - Certo, obrigado</p><p>&nbsp; Malik então, caminha para fora do hotel e pega a sua moto, robusta de corrida, e acelera até o Hotel Blacks.</p><p>&nbsp; Ao chegar no hotel, Malik encontra novamente na recepção aquela mulher que no aeroporto, ficou encantado.</p></div><div class="capitulo-1 decisao"><button type="button" class="btn btn-dark btn-escolhaUm" id="btnCapUmEscolhaUm" onclick="carregarConteudo(capUmEscolhaUm)">Falar com a Michele</button><button type="button" class="btn btn-danger btn-escolhaDois" id="btnCapDoisEscolhaDois" onclick="carregarConteudo(capUmEscolhaDois)">Não falar com Michele</button></div></div>';
let capUmEscolhaUm = '<div class="content capitulo-1 escolha escolhaUm" id="CapituloUmEscolhaUm"><div class="historia-escolha"><p>&nbsp; Malik vai até a moça e diz:</p><p>&nbsp; - Olá, tudo bem?</p><p>&nbsp; Michele responde:- Oi, como vai ?</p><p>&nbsp; - Oi, como vai?</p><p>&nbsp; - Estou ótimo, obrigado por perguntar</p><p>&nbsp; - Já fez seu check-in ? </p><p>&nbsp; Michele então responde:</p><p>&nbsp; - Sim, Mas estou com muita pressa, precisa ir para o meu quarto, até mais - tímida e com vergonha.</p><p>&nbsp; Em sua passagem até a recepção, ela vê um passaporte no chão e chama rapidamente o homem, gritando "Senhor!", repetidas vezes. Malik recolhe seu Passaporte, agradece e sobe para sua suíte.</p><p>&nbsp; Michelle ainda pensando naquele homem que realizou o check in na recepção do hotel. Então sobe para o seu quarto e observa a vista maravilhosa enquanto ainda continua pensando nele</p></div><div class="continuar"><button class="btn-continuar"><i class="bi bi-arrow-down"></i></button></div></div>';
let capUmEscolhaDois = '<div class="content capitulo-1 escolha escolhaDois" id="CapituloUmEscolhaDois"><div class="historia-escolha"><p>&nbsp; Malik vai até o bar, e pedi whisky com gelo. Aproveita e pergunta ao Barman:</p><p>&nbsp; - Você conhece aquela moça na recepção?</p><p>&nbsp; E o Barman responde:</p><p>&nbsp; - Não a conheço, só sei que chegou hoje e está fazendo o check-in, parece ser uma pessoa tímida e meiga</p><p>&nbsp; Após o senhor senhor,malik olha para trás,e vê aquele bela mulher,com o seu passaporte na mão e diz:</p><p>&nbsp; - Pois não</p></div><div class="continuar"><button class="btn-continuar"><i class="bi bi-arrow-down"></i></button></div></div>';

const content = document.getElementById("capitulos");

function carregarConteudo(conteudo){
    content.innerHTML = conteudo;
}

carregarConteudo(capituloUmAbertura);
