import './home.css'
import { FaUser, FaShoppingCart } from 'react-icons/fa'

export default function Home() {
return (
    <>
  <header>
    <h1>Nossos Produtos</h1>
    <nav class="navegar">
      <a class="nav" href='carrinho.html'><i class="fas fa-shopping-cart"></i></a>
      <a class="nav" href="usuario.html"><i class="fas fa-user"></i></a>
      <a href="carrinho.html"><FaShoppingCart></FaShoppingCart></a>
      <a href='usuario.html'><FaUser></FaUser> </a>
    </nav>
  </header>
  <main class="container">
    <div class="produto">
      <img src="https://www.designi.com.br/images/preview/10203543.jpg" alt="Produto 1" class="product-image"/>
      <h2>Bolo de Cenoura</h2>
      <p class="descricao">Fatia de bolo de cenoura super macio coberto com brigadeiro de chocolate belga e granulados</p>
      <p class="preco">R$ 18,00</p>
      <button class="adc-carrinho">Adicionar ao Carrinho</button>
    </div>
    <div class="produto">
      <img src="https://static.itdg.com.br/images/1200-630/82c1b633bec7d6b3c7c5fd7f0890741c/179504-original.jpg" alt="Produto 1" class="product-image"/>
      <h2>Cheesecake de Frutas Vermelhas</h2>
      <p class="descricao">Fatia de cheesecake tradicional assado no forno, coberto com geléia de frutas vermelhas e pedaços de frutas frescas</p>
      <p class="preco">R$ 20,00</p>
      <button class="adc-carrinho">Adicionar ao Carrinho</button>
    </div>
    <div class="produto">
      <img src="https://amoradoceria.com.br/wp-content/uploads/2022/03/receita-pudim-simples-de-leite.jpg" alt="Produto 1" class="product-image"/>
      <h2>Pudim de Leite Condensado</h2>
      <p class="descricao">Fatia de pudim de leite condensado sem furinhos, com calda de caramelo de açucar</p>
      <p class="preco">R$ 15,00</p>
      <button class="adc-carrinho">Adicionar ao Carrinho</button>
    </div>
    <div class="produto">
      <img src="https://platform-images.dev.cloud.ahazou.com/612b60db22bd5b0001107306/catalogs/catalog-714b953f-d7b7-490c-8964-94943b19d2aa.jpeg" alt="Produto 1" class="product-image"/>
      <h2>Copo da felicidade Paçoca </h2>
      <p class="descricao">Copo de 300mL mega recheado com paçoca, brigadeiro branco e brigadeiro de chocolate belga</p>
      <p class="preco">R$ 20,00</p>
      <button class="adc-carrinho">Adicionar ao Carrinho</button>
    </div>
    <div class="produto">
      <img src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/1662750494631b8f1ecc1df_75_75.jpeg" alt="Produto 1" class="product-image"/>
      <h2>Copo da Felicidade Morango</h2>
      <p class="descricao">Copo de 300mL mega recheado com morangos frescos, pedaços de brownie, brigadeiro branco e brigadeiro de chocolate belga</p>
      <p class="preco">R$ 20,00</p>
      <button class="adc-carrinho">Adicionar ao Carrinho</button>
    </div>
  </main>
  </>
)
}