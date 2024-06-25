import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import './createuser.css';

export default function CreateOrEditUsers() {
  const [currentUser, setCurrentUser] = useState({ usuario: '', senha: '', email: '', genero: ''});
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:3004/usuarios/${id}`);
          const user = await response.json();
          setCurrentUser(user);
          setIsEditing(true);
        } catch (error) {
          console.error("Erro ao buscar usuário:", error);
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleSaveUser = async (e) => {
    e.preventDefault();

    const url = isEditing ? `http://localhost:3004/usuarios/${id}` : 'http://localhost:3004/usuarios';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("User saved", currentUser);
      navigate('/app/users');
    } catch (error) {
      console.error("An error occurred while saving the user:", error);
    }
  };

  return (
    <div className="create-user">
      <h2>{isEditing ? 'Editar Usuário' : 'Criar Novo Usuário'}</h2>
      <form onSubmit={handleSaveUser}>
        <label>Nome de usuário:</label>
        <input name="usuario" type="text" value={currentUser.usuario} onChange={(e) => setCurrentUser({ ...currentUser, usuario: e.target.value })} required />
        <label>Senha:</label>
        <input name="senha" type="password" value={currentUser.senha} onChange={(e) => setCurrentUser({ ...currentUser, senha: e.target.value })} required />
        <label>E-mail:</label>
        <input name="email" type="email" value={currentUser.email} onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} required />
        <label>Nome completo:</label>
        <input name="genero" type="text" value={currentUser.genero} onChange={(e) => setCurrentUser({ ...currentUser, genero: e.target.value })} required />      
        <button type="submit">{isEditing ? 'Salvar Alterações' : 'Salvar'}</button>
        <button type="button" onClick={() => navigate('/app/users')}>Cancelar</button>
      </form>
    </div>
  );
}
