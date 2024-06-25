import { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import './createuser.css';

export default function UserList() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:3004/usuarios");
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  const confirmarExclusao = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        const response = await fetch(`http://localhost:3004/usuarios/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const novosUsuarios = usuarios.filter((user) => user.id !== id);
          setUsuarios(novosUsuarios);
          console.log("Usuário com ID", id, "foi excluído.");
        } else {
          console.error('Erro ao excluir usuário:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao excluir usuário:', error);
      }
    }
  };

  const handleCreateUser = () => {
    navigate('/app/create-users');
  };

  const handleEditUser = (id) => {
    navigate(`/app/edit-users/${id}`)
  };

  const classe = {
    UserList: "create-user",
    TabelaCrudUser: "crud-user-table",
    actions: "user-actions",
    createButton: "create-button",
  };

  return (
    <div className={classe.UserList}>
      <h2>Usuários do Sistema</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className={classe.createButton} onClick={handleCreateUser}>Criar Novo Usuário</button>
      </div>
      <table className={classe.TabelaCrudUser}>
        <thead>
          <tr>
            <th>Nome de usuário</th>
            <th>E-mail</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.usuario}</td>
              <td>{usuario.email}</td>
              <td>{usuario.genero}</td>
              <td className={classe.actions}>
                <button onClick={() => handleEditUser(usuario.id)}>
                  Editar
                </button>
                <button onClick={() => confirmarExclusao(usuario.id)}>
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
