import React from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="produto">
          <img src="https://www.designi.com.br/images/preview/10203543.jpg" alt="Produto 1" className="product-image" />
          <h2>Bolo de Cenoura</h2>
          <p className="descricao">Fatia de bolo de cenoura super macio coberto com brigadeiro de chocolate belga e granulados</p>
          <p className="preco">R$ 18,00</p>
          <button className="adc-carrinho">Mais pedido!</button>
        </div>
        <div className="produto">
          <img src="https://static.itdg.com.br/images/1200-630/82c1b633bec7d6b3c7c5fd7f0890741c/179504-original.jpg" alt="Produto 1" className="product-image" />
          <h2>Cheesecake de Frutas Vermelhas</h2>
          <p className="descricao">Fatia de cheesecake tradicional assado no forno, coberto com geléia de frutas vermelhas e pedaços de frutas frescas</p>
          <p className="preco">R$ 20,00</p>
          <button className="adc-carrinho">Mais pedido!</button>
        </div>
        <div className="produto">
          <img src="https://amoradoceria.com.br/wp-content/uploads/2022/03/receita-pudim-simples-de-leite.jpg" alt="Produto 1" className="product-image" />
          <h2>Pudim de Leite Condensado</h2>
          <p className="descricao">Fatia de pudim de leite condensado sem furinhos, com calda de caramelo de açucar</p>
          <p className="preco">R$ 15,00</p>
          <button className="adc-carrinho">Mais pedido!</button>
        </div>
        <div className="produto">
          <img src="https://platform-images.dev.cloud.ahazou.com/612b60db22bd5b0001107306/catalogs/catalog-714b953f-d7b7-490c-8964-94943b19d2aa.jpeg" alt="Produto 1" className="product-image" />
          <h2>Copo da Felicidade Paçoca </h2>
          <p className="descricao">Copo de 300mL mega recheado com paçoca, brigadeiro branco e brigadeiro de chocolate belga</p>
          <p className="preco">R$ 20,00</p>
          <button className="adc-carrinho">Mais pedido!</button>
        </div>
        <div className="produto">
          <img src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/1662750494631b8f1ecc1df_75_75.jpeg" alt="Produto 1" className="product-image" />
          <h2>Copo da Felicidade Morango</h2>
          <p className="descricao">Copo de 300mL mega recheado com morangos frescos, pedaços de brownie, brigadeiro branco e brigadeiro de chocolate belga</p>
          <p className="preco">R$ 20,00</p>
          <button className="adc-carrinho">Mais pedido!</button>
        </div>
      </main>
    </>
  );
}
