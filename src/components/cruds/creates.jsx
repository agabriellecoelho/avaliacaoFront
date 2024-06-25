import React, { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import './creates.css'; 
import './mp.css'; 

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3004/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const confirmarExclusao = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      try {
        const response = await fetch(`http://localhost:3004/products/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const novosProdutos = products.filter((product) => product.id !== id);
          setProducts(novosProdutos);
          console.log("Produto com ID", id, "foi excluído.");
        } else {
          console.error('Erro ao excluir produto:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
      }
    }
  };

  const handleCreateProduct = () => {
    navigate('/app/cardapio/create');
  };

  const handleEditProduct = (id) => {
    navigate(`/app/cardapio/edit/${id}`);
  };

  const classes = {
    ProductList: "create-service", 
    TableContainer: "crud-service-table", 
    Actions: "service-actions", 
    CreateButton: "create-button", 
    ProductImage: "product-image", 
    ModalOverlay: "modal-overlay", 
    ModalContent: "modal-content", 
    ModalClose: "modal-close" 
  };

  return (
    <div className={classes.ProductList}>
      <h2>Lista de Produtos</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className={classes.CreateButton} onClick={handleCreateProduct}>Criar Novo Produto</button>
      </div>
      <table className={classes.TableContainer}>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td className={classes.Actions}>
                <button onClick={() => handleEditProduct(product.id)}>
                  Editar
                </button>
                <button onClick={() => confirmarExclusao(product.id)}>
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}