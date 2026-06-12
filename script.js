
const memorias = [
    {
        tipo: 'texto',
        conteudo: 'Letícia, preparei algo especial para você...',
        legenda: 'Prepare o coração ❤️'
    },

    {
        tipo: 'foto',
        src: 'img/foto1.jpeg',
        legenda: 'Momentos que guardo com carinho ❤️'
    },

    {
        tipo: 'texto',
        conteudo: 'Você transforma meus dias cinzas em cores.',
        legenda: 'Minha inspiração ✨'
    },

    {
        tipo: 'foto',
        src: 'img/foto2.jpeg',
        legenda: 'Minha princesa favorito 😍'
    },

    {
        tipo: 'texto',
        conteudo: 'Cada momento ao seu lado se torna uma lembrança especial.',
        legenda: 'Momentos inesquecíveis ❤️'
    },

    {
        tipo: 'foto',
        src: 'img/foto3.jpeg',
        legenda: 'Cada segundo com você é um presente 🎁'
    },

    {
        tipo: 'texto',
        conteudo: 'Nossa história é a melhor que já vivi.',
        legenda: 'Escrito nas estrelas ⭐'
    },

    {
        tipo: 'foto',
        src: 'img/foto4.jpeg',
        legenda: 'Companheira de todas as horas 🥰'
    },

    {
        tipo: 'texto',
        conteudo: 'Obrigado por todos os sorrisos que você me proporciona.',
        legenda: 'Você é especial ❤️'
    },

    {
        tipo: 'foto',
        src: 'img/foto5.jpeg',
        legenda: 'Aquele olhar que diz tudo 😍'
    },

    {
        tipo: 'texto',
        conteudo: 'O mundo é muito melhor com você nele.',
        legenda: 'Meu porto seguro ❤️'
    },

    {
        tipo: 'foto',
        src: 'img/foto6.jpeg',
        legenda: 'Nossas aventuras estão só começando ✈️'
    },

    {
        tipo: 'texto',
        conteudo: 'Eu amo cada detalhe seu.',
        legenda: 'Meu amor ❤️'
    },

    {
        tipo: 'foto',
        src: 'img/foto7.jpeg',
        legenda: 'Obrigado por ser quem você é ❤️'
    },

    {
        tipo: 'texto',
        conteudo: 'Eu te amo muito, Letícia! Feliz Dia dos Namorados ❤️',
        legenda: '💌'
    }
];
let indiceAtual=0;

function escreverTexto(elemento, texto, velocidade = 40) {

    const btn = document.getElementById("btnProximo");

    btn.disabled = true;

    elemento.innerHTML = "";

    let i = 0;

    function digitar() {

        if (i < texto.length) {

            elemento.innerHTML += texto.charAt(i);
            i++;

            setTimeout(digitar, velocidade);

        } else {

            btn.disabled = false;

        }
    }

    digitar();
}

function aplicar(item){
 const foto=document.getElementById('foto');
 const txt=document.getElementById('texto-destaque');
 document.getElementById('legenda').textContent=item.legenda;

 if(item.tipo==='foto'){
   foto.src=item.src;
   foto.style.display='block';
   txt.style.display='none';
 }else{
   foto.style.display='none';
   txt.style.display='flex';
   escreverTexto(txt,item.conteudo);
 }
}

document.addEventListener('DOMContentLoaded',()=>aplicar(memorias[0]));

function proximaFoto(){
 indiceAtual++;
 if(indiceAtual>=memorias.length){
   document.getElementById('btnProximo').style.display='none';
   document.getElementById('btnCarta').style.display='inline-block';
   confetti({particleCount:200,spread:120});
   indiceAtual=memorias.length-1;
   return;
 }
 aplicar(memorias[indiceAtual]);
}

function abrirCarta(){
 document.getElementById('telaFinal').style.display='flex';
 const msg=`Letícia,

Obrigado por cada sorriso, cada abraço e cada momento vivido ao seu lado.

Você torna meus dias mais felizes e minha vida muito mais especial.

Que possamos continuar criando lembranças incríveis juntos.

Eu te amo!!

❤️ ❤️ ❤️

Feliz Dia dos Namorados! ❤️
`;
 escreverTexto(document.getElementById('textoCarta'),msg,25);
 confetti({particleCount:300,spread:180});
}

function criarCoracao(){
 const c=document.createElement('div');
 c.className='coracao-caindo';
 c.innerHTML='❤️';
 c.style.left=Math.random()*window.innerWidth+'px';
 document.body.appendChild(c);
 setTimeout(()=>c.remove(),6000);
}
setInterval(criarCoracao,800);
