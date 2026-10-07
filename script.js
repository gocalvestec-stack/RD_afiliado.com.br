```javascript
/* =========================================================
   GONÇALVES OFERTAS IA
   SCRIPT.JS
========================================================= */


/* =========================================================
   PRODUTOS DE TESTE
   ---------------------------------------------------------
   IMPORTANTE:
   Estes produtos são apenas para testar o funcionamento.
   Depois vamos substituir por produtos vindos do banco.
========================================================= */

const produtos = [

    {
        id: 1,

        nome: "Smartphone Android 5G 256GB",

        categoria: "celulares",

        loja: "Oferta Online",

        imagem: "https://placehold.co/600x600/png?text=Smartphone",

        precoAntigo: 1899.90,

        preco: 1299.90,

        link: "#"
    },

    {
        id: 2,

        nome: "Headset Gamer RGB Surround",

        categoria: "games",

        loja: "Oferta Gamer",

        imagem: "https://placehold.co/600x600/png?text=Headset",

        precoAntigo: 299.90,

        preco: 179.90,

        link: "#"
    },

    {
        id: 3,

        nome: "Notebook Intel 15.6 polegadas",

        categoria: "informatica",

        loja: "Tech Ofertas",

        imagem: "https://placehold.co/600x600/png?text=Notebook",

        precoAntigo: 2999.90,

        preco: 2199.90,

        link: "#"
    },

    {
        id: 4,

        nome: "Smart TV 50 polegadas 4K",

        categoria: "casa",

        loja: "Mega Ofertas",

        imagem: "https://placehold.co/600x600/png?text=Smart+TV",

        precoAntigo: 3299.90,

        preco: 2399.90,

        link: "#"
    },

    {
        id: 5,

        nome: "Tênis Esportivo Masculino",

        categoria: "moda",

        loja: "Moda Online",

        imagem: "https://placehold.co/600x600/png?text=Tenis",

        precoAntigo: 249.90,

        preco: 149.90,

        link: "#"
    },

    {
        id: 6,

        nome: "Console Gamer com Controle",

        categoria: "games",

        loja: "Game Store",

        imagem: "https://placehold.co/600x600/png?text=Console",

        precoAntigo: 2799.90,

        preco: 2299.90,

        link: "#"
    },

    {
        id: 7,

        nome: "Cadeira Gamer Reclinável",

        categoria: "informatica",

        loja: "Setup Store",

        imagem: "https://placehold.co/600x600/png?text=Cadeira",

        precoAntigo: 999.90,

        preco: 699.90,

        link: "#"
    },

    {
        id: 8,

        nome: "Air Fryer Digital 5 Litros",

        categoria: "casa",

        loja: "Casa & Oferta",

        imagem: "https://placehold.co/600x600/png?text=Air+Fryer",

        precoAntigo: 499.90,

        preco: 299.90,

        link: "#"
    }

];


/* =========================================================
   ELEMENTOS DA PÁGINA
========================================================= */

const productsGrid = document.getElementById("productsGrid");

const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const categoryButtons = document.querySelectorAll(".category-button");

const themeButton = document.getElementById("themeButton");

const refreshButton = document.getElementById("refreshButton");

const totalOffers = document.getElementById("totalOffers");

const totalDiscount = document.getElementById("totalDiscount");

const newsletterForm = document.getElementById("newsletterForm");

const emailInput = document.getElementById("emailInput");


/* =========================================================
   ESTADO DO SITE
========================================================= */

let categoriaAtual = "todos";

let pesquisaAtual = "";


/* =========================================================
   FORMATAÇÃO DE PREÇO
========================================================= */

function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


/* =========================================================
   CALCULAR DESCONTO
========================================================= */

function calcularDesconto(precoAntigo, precoAtual) {

    if (!precoAntigo || precoAntigo <= precoAtual) {
        return 0;
    }

    const desconto =
        ((precoAntigo - precoAtual) / precoAntigo) * 100;

    return Math.round(desconto);

}


/* =========================================================
   FILTRAR PRODUTOS
========================================================= */

function filtrarProdutos() {

    const pesquisa = pesquisaAtual
        .trim()
        .toLowerCase();

    return produtos.filter(produto => {

        const correspondeCategoria =
            categoriaAtual === "todos" ||
            produto.categoria === categoriaAtual;

        const correspondePesquisa =
            pesquisa === "" ||
            produto.nome.toLowerCase().includes(pesquisa) ||
            produto.loja.toLowerCase().includes(pesquisa);

        return correspondeCategoria && correspondePesquisa;

    });

}


/* =========================================================
   CRIAR CARD DO PRODUTO
========================================================= */

function criarCardProduto(produto) {

    const desconto = calcularDesconto(
        produto.precoAntigo,
        produto.preco
    );

    return `
        <article class="product-card">

            <div class="product-image">

                ${
                    desconto > 0
                        ? `<span class="discount">-${desconto}%</span>`
                        : ""
                }

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >

            </div>


            <div class="product-content">

                <span class="product-store">
                    ${produto.loja}
                </span>

                <h3 class="product-name">
                    ${produto.nome}
                </h3>


                <div class="price-area">

                    ${
                        produto.precoAntigo
                            ? `
                                <span class="old-price">
                                    ${formatarPreco(produto.precoAntigo)}
                                </span>
```
