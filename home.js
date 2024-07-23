/*NAVBAR */
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('show');
}



function fil() {
    const fil = document.getElementById('filtros');
    fil.style.display = (fil.style.display === 'none' || fil.style.display === '') ? 'block' : 'none';
}
/* FIM NAVBAR */
/* carrossel */
let contador = 1;

setInterval(function(){
    document.getElementById('slide' + contador).checked = true
    contador ++;
    if(contador > 3){
        contador = 1
    }
}, 4000)

/* fim carrossel */

/*SCROLL */
document.addEventListener('DOMContentLoaded', (event) => {
    const caixa = document.querySelector('.caixa');
    
    // Scroll com a roda do mouse
    caixa.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            caixa.scrollLeft += e.deltaY;
        }
    });

    // Variáveis para rastrear o toque
    let isDown = false;
    let startX;
    let scrollLeft;

    // Scroll com o toque em dispositivos móveis
    caixa.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - caixa.offsetLeft;
        scrollLeft = caixa.scrollLeft;
    });

    caixa.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - caixa.offsetLeft;
        const walk = (x - startX) * 3; // Ajuste o fator de rolagem conforme necessário
        caixa.scrollLeft = scrollLeft - walk;
    });

    caixa.addEventListener('touchend', () => {
        isDown = false;
    });

    caixa.addEventListener('touchcancel', () => {
        isDown = false;
    });
});
/* FIM SCROLL */

/*function limparLocalStorage() {
    localStorage.clear();
    alert("localStorage limpo com sucesso!");
}*/ 
/* scroll-tipos */
document.addEventListener('DOMContentLoaded', (event) => {
    const caixa = document.querySelector('.scroll-tipos');
    
    // Scroll com a roda do mouse
    caixa.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            caixa.scrollLeft += e.deltaY;
        }
    });

    // Variáveis para rastrear o toque
    let isDown = false;
    let startX;
    let scrollLeft;

    // Scroll com o toque em dispositivos móveis
    caixa.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - caixa.offsetLeft;
        scrollLeft = caixa.scrollLeft;
    });

    caixa.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - caixa.offsetLeft;
        const walk = (x - startX) * 3; // Ajuste o fator de rolagem conforme necessário
        caixa.scrollLeft = scrollLeft - walk;
    });

    caixa.addEventListener('touchend', () => {
        isDown = false;
    });

    caixa.addEventListener('touchcancel', () => {
        isDown = false;
    });
});
/* fim scroll-tipos */
/*FILTRO */

const tenis = [
    {nome:'TENIS',desc:'Descrição do produto' , preco: 100, promo:200,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},
    {nome:'TENIS',desc:'Descrição do produto' , preco: 200, promo:400,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},
    {nome:'TENIS',desc:'Descrição do produto' , preco: 300, promo:600,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},
    {nome:'TENIS',desc:'Descrição do produto' , preco: 400, promo:800,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},

]
const calca = [
    {nome:'CALÇA',desc:'Descrição do produto' , preco: 100, promo:200,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},   
    {nome:'CALÇA',desc:'Descrição do produto' , preco: 200, promo:200,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},   
    {nome:'CALÇA',desc:'Descrição do produto' , preco: 300, promo:600,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},
    {nome:'CALÇA',desc:'Descrição do produto' , preco: 400, promo:800,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},

]
const camisa = [
    {nome:'CAMISA',desc:'Descrição do produto' , preco: 100, promo:200,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},   
    {nome:'CAMISA',desc:'Descrição do produto' , preco: 200, promo:200,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},   
    {nome:'CAMISA',desc:'Descrição do produto' , preco: 300, promo:600,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},
    {nome:'CAMISA',desc:'Descrição do produto' , preco: 400, promo:800,offs: '50%', image: 'imagens_site/imagem1.png',image2: 'imagens_site/imagem2.png',image3:'imagens_site/imagem3.png'},

]
 function displayprodutos(produtos){
    const produtolista = document.getElementById('lista-produtos')
    produtolista.innerHTML = ''

    produtos.forEach(produto => {
        const produtodiv = document.createElement('div');
        produtodiv.className = 'produto';

        const produtoimg = document.createElement('img');
        produtoimg.src = produto.image;
        produtoimg.alt = produto.nome;
        
        

        const produtoimg2 = document.createElement('img');
        produtoimg2.src = produto.image2;
        produtoimg2.alt = produto.nome;
        produtoimg2.style.display = 'none'

        const produtoimg3 = document.createElement('img');
        produtoimg3.src = produto.image3;
        produtoimg3.alt = produto.nome;
        produtoimg3.style.display = 'none'


        const prodtuonome = document.createElement('div');
        prodtuonome.className = 'produtonome';
        prodtuonome.textContent = produto.nome;

        const descricao = document.createElement('div');
        descricao.className = 'descricao';
        descricao.textContent = produto.desc;

        const produtopreco = document.createElement('div');
        produtopreco.className = 'produtopreco';
        produtopreco.textContent = `R$ ${produto.preco.toFixed(2)}`;

        const produtopromo = document.createElement('div');
        produtopromo.className = 'produtopromo';
        produtopromo.textContent = `R$ ${produto.promo.toFixed(2)}`

        const prodtutobotao = document.createElement('button');
        prodtutobotao.className = 'produtobotao';
        prodtutobotao.textContent = "Comprar";
        prodtutobotao.onclick = () => comprarProduto(produto.image,produto.image2,produto.image3,produto.nome,produto.desc,produto.preco,produto.promo,produto.offs,)

        const produtooff = document.createElement('span')
        produtooff.className = 'produtooff'
        produtooff.textContent = produto.offs

        const produto_oferta = document.createElement('div')
        produto_oferta.className = 'produto_oferta'
        produto_oferta.appendChild(produtooff)

        produtodiv.appendChild(produto_oferta)

        produtodiv.appendChild(produtoimg);
        produtodiv.appendChild(produtoimg2);
        produtodiv.appendChild(produtoimg3);

        const precos = document.createElement('div')
        precos.className = 'infoprecos'
        precos.style.display ='flex'
        precos.style.flexDirection = 'column'

        const infoDiv = document.createElement('div');
        infoDiv.className = 'infodiv'
        infoDiv.style.display = 'flex';
        infoDiv.style.flexDirection = 'column';

        precos.appendChild(produtopromo)
        precos.appendChild(produtopreco);

        infoDiv.appendChild(prodtuonome);
        infoDiv.appendChild(descricao);

         produtodiv.appendChild(infoDiv);
        produtodiv.appendChild(precos);
        produtodiv.appendChild(prodtutobotao);

        produtolista.appendChild(produtodiv);
    });
 }
/* TELA DE COMPRA */
function comprarProduto(imagem, imagem2, imagem3, nome, desc, preco, promo, offs) {
    localStorage.setItem('produtoImagem', imagem);
    localStorage.setItem('produtoImagem2', imagem2);
    localStorage.setItem('produtoImagem3', imagem3);
    localStorage.setItem('produtoNome', nome);
    localStorage.setItem('produtoDesc', desc);
    localStorage.setItem('produtoPreco', preco);
    localStorage.setItem('produtoPromo', promo);
    localStorage.setItem('produtoOff', offs);

    // Verificar a página atual
    const currentPage = window.location.pathname;

    gtag('event', 'click', {
        'event_category': 'button',
        'event_label': 'buy',
        'value': 1
      });

    // Redirecionar de acordo com a página atual
    if (currentPage.includes('calca')) {
        window.location.href = 'comprarroupa.html'; // Redirecionar para comprarroupa.html se estiver na página de calça
    } else if (currentPage.includes('tenis')){
        window.location.href = 'comprar.html'; // Caso contrário, redirecionar para comprar.html (página de tênis)
    }else if (currentPage.includes('camisa')){
        window.location.href = 'comprarroupa.html'; // Caso contrário, redirecionar para comprar.html (página de tênis)
    }
}

// Obtendo dados do localStorage para tela de compra padrão
document.addEventListener("DOMContentLoaded", function() {
    const imagemProduto = localStorage.getItem('produtoImagem');
    const imagemProduto2 = localStorage.getItem('produtoImagem2');
    const imagemProduto3 = localStorage.getItem('produtoImagem3');
    const nomeProduto = localStorage.getItem('produtoNome');
    const precoProduto = localStorage.getItem('produtoPreco');
    const precoPromo = localStorage.getItem('produtoPromo');
    const offProdutos = localStorage.getItem('produtoOff')

    if (imagemProduto) {
        document.getElementById('imagem-produto').src = imagemProduto;
        document.getElementById('imagem-produto').alt = 'Imagem do Produto';
    }
    if (imagemProduto2) {
        document.getElementById('imagem-produto2').src = imagemProduto2;
        document.getElementById('imagem-produto2').alt = 'Imagem do Produto2';
    }
    if (imagemProduto3) {
        document.getElementById('imagem-produto3').src = imagemProduto3;
        document.getElementById('imagem-produto3').alt = 'Imagem do Produto3';
    }
    if (offProdutos){
        document.getElementById('off-pruto').textContent = offProdutos
    }
    if (nomeProduto) {
        document.getElementById('nome-produto').textContent = nomeProduto;
    }
    if (precoProduto) {
        document.getElementById('preco-produto').textContent = `R$ ${precoProduto}`;
    }
    if (precoPromo) {
        document.getElementById('preco-promo').textContent = `R$ ${precoPromo}`;
    }
});

/* FIM TELA DE COMPRA */


/* TELA DE COMPRA HOME */
function comprarProdutos(button) {
    // Obtendo o contêiner pai do botão
    const produtoDiv = button.closest('.caritens')

    // Obtendo os elementos do produto
    const imagemhome = produtoDiv.querySelector('.imagem-produto').src
    const descricao = produtoDiv.querySelector('.desc').textContent
    const precoOriginal = produtoDiv.querySelector('.preço .sublinhado').textContent
    const precoPromocional = produtoDiv.querySelector('.preço p:nth-child(2)').textContent
    const offElement = produtoDiv.querySelector('.off');
    const off = offElement ? offElement.textContent : '';
    const imagemExtra1 = produtoDiv.querySelector('.imagem-extra1').value;
    const imagemExtra2 = produtoDiv.querySelector('.imagem-extra2').value;
    const categoria = produtoDiv.querySelector('.calca1').value

    gtag('event', 'click', {
        'event_category': 'button',
        'event_label': 'buy',
        'value': 1
      });
    // Armazenando os dados no localStorage
    localStorage.setItem('produtoImagemhome', imagemhome)
    localStorage.setItem('produtoDeschome', descricao)
    localStorage.setItem('produtoPrecoOriginalhome', precoOriginal)
    localStorage.setItem('produtoPrecoPromocionalhome', precoPromocional)
    if (off !== null) {
        localStorage.setItem('produtoOffhome', off);
    } else {
        localStorage.removeItem('produtoOffhome');
    }
    localStorage.setItem('produtoImagemExtra1home', imagemExtra1)
    localStorage.setItem('produtoImagemExtra2home', imagemExtra2)

    if (categoria === 'calcaitem') {
        window.location.href = 'comprarroupahome.html';
    } else {
        window.location.href = 'comprarhome.html';
    }
}
/* FIM TELA DE COMPRA HOME */
 // Obtendo dados do localStorage
 const imagemProdutohome = localStorage.getItem('produtoImagemhome');
 const imagemExtra1 = localStorage.getItem('produtoImagemExtra1home');
 const imagemExtra2 = localStorage.getItem('produtoImagemExtra2home');
 const descProduto = localStorage.getItem('produtoDeschome');
 const precoOriginalProduto = localStorage.getItem('produtoPrecoOriginalhome');
 const precoPromocionalProduto = localStorage.getItem('produtoPrecoPromocionalhome');
 const offProduto = localStorage.getItem('produtoOffhome');

 // Exibindo dados na tela
 document.getElementById('imagem-produtohome').src = imagemProdutohome;
 document.getElementById('imagem-extra1').src = imagemExtra1;
 document.getElementById('imagem-extra2').src = imagemExtra2;
 document.getElementById('desc-produto').textContent = descProduto;
 document.getElementById('preco-original-produto').textContent = ` R$ ${precoOriginalProduto}`;
 document.getElementById('preco-promocional-produto').textContent = `R$ ${precoPromocionalProduto}`;
 if (offProduto) {
    document.getElementById('off-produto').textContent = offProduto;
} else {
    // Esconder o elemento off se não houver valor
    const offElement = document.getElementById('off-produto');
    if (offElement) {
        offElement.style.display = 'none';
    }
}


// Inicializa o carrossel

function gerarMensagem() {
    if (cepInput.value.trim() === '') {
        alert('Por favor, preencha o campo de CEP antes de prosseguir.');
        return;
    }
   
    const comprafinal = document.getElementById('carrinho-items').children;
    let mensagem = "Olá, gostaria de comprar os seguintes produtos:\n";
    let total = 0;

    for (let item of comprafinal) {
        const nome = item.querySelector('.infromacoes-car p:nth-child(1)').textContent.replace('Nome: ', '');
        const tamanho = item.querySelector('.infromacoes-car p:nth-child(2)').textContent.replace('Tamanho: ', '');
        const preco = item.querySelector('.infromacoes-car p:nth-child(3)').textContent.replace('Preço: ', '');
        const quantidade = item.querySelector('.infromacoes-car p:nth-child(4)').textContent.replace('Quantidade: ', '');
       
        mensagem += `${nome} - Quantidade: ${quantidade} - Tamanho: ${tamanho} - Preço: R$${preco} \n`;
        total += parseFloat(preco) * parseInt(quantidade, 10);
    }
    mensagem += `Total: R$${total.toFixed(2)}\n`;

    const cep = cepInput.value;
    const rua = ruaInput.value;
    const bairro = bairroInput.value;
    const cidade = cidadeInput.value;
    const numero = numeroInput.value;

    mensagem += `\nEndereço:\n CEP:${cep}, - ${rua}, ${numero} - ${bairro}, ${cidade}`;

    const encodedMensagem = encodeURIComponent(mensagem);

    // WhatsApp URL com o número de telefone e a mensagem
    const phoneNumber = "5554981124330"; // Substitua pelo número de telefone alvo, use o formato internacional sem o sinal '+'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMensagem}`;

    // Abrir WhatsApp com a mensagem
    window.open(whatsappUrl, '_blank');
}


