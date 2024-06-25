import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './createedit.css';

export default function CreateOrEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState({ name: '', description: '', price: '', stock: '' });

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:3004/products/${id}`);
          if (!response.ok) {
            throw new Error("Erro ao buscar produto.");
          }
          const product = await response.json();
          setCurrentProduct(product);
        } catch (error) {
          console.error("Erro ao buscar produto:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleSaveProduct = async (e) => {
    e.preventDefault();

    const url = id ? `http://localhost:3004/products/${id}` : 'http://localhost:3004/products';
    const method = id ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentProduct),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const data = await response.json();

      navigate('/app/cardapio');
    } catch (error) {
      console.error("Erro ao salvar o produto:", error);
    }
  };

  const handleCancel = () => {
    navigate('/app/cardapio');
  };

  return (
    <div className="create-product">
      <h2>{id ? 'Editar Produto' : 'Criar Novo Produto'}</h2>
      <form onSubmit={handleSaveProduct}>
        <label>Nome:</label>
        <input
          type="text"
          value={currentProduct.name}
          onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
          required
        />
        <label>Descrição:</label>
        <textarea
          value={currentProduct.description}
          onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
          required
        />
        <label>Preço:</label>
        <input
          type="text"
          value={currentProduct.price}
          onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
          required
        />
        <label>Estoque:</label>
        <input
          type="text"
          value={currentProduct.stock}
          onChange={(e) => setCurrentProduct({ ...currentProduct, stock: e.target.value })}
          required
        />
        <button type="submit">{id ? 'Salvar Alterações' : 'Salvar'}</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
}
