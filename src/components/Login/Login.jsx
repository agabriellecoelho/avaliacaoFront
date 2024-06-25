import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Login() {
  const [usuarios, setUsuarios] = useState([]);
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("../../../data/db.json");
        const data = await response.json();
        setUsuarios(data.usuarios);
      } catch (error) {
        console.error("Um erro ocorreu ao buscar os usuários.", error);
      }
    };
    fetchUsuarios();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    let valid = true;

    // Validar se o campo de usuário está preenchido
    if (!username.trim()) {
      setUsernameError(true);
      valid = false;
    } else {
      setUsernameError(false);
    }

    // Validar se o campo de senha está preenchido
    if (!senha.trim()) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (!valid) {
      return;
    }

      // Verificar se o usuário existe na lista de usuários
      const user = usuarios.find(u => u.usuario === username);
      if (user) {
        // Verificar se a senha digitada corresponde à senha do usuário
        if (user.senha === senha) {
          console.log("Usuário logado com sucesso: ", user);
          navigate('/app/home');
        } else {
          alert('Senha incorreta.');
        }
      } else {
        alert('Usuário não encontrado.');
      }
    };

    return (
        <body>
        <div className="page">
                <h1>LUME</h1>
                <h3>Doceria Gourmet Artesanal</h3>
          <form onSubmit={handleLogin} className="formLogin">
                    <h2>Login</h2>
                    <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label htmlFor="text">Usuário</label>
            <input type="text" placeholder="Digite o usuário" autoFocus={true}
              value={username} onChange={(e) => setUsername(e.target.value)} />
            {usernameError && <p className="error">Por favor, preencha o usuário.</p>}
            <label htmlFor="password">Senha</label>
            <input type="password" value={senha}
              onChange={(e) => setSenha(e.target.value)} placeholder="Digite a senha" />
            {passwordError && <p className="error">Por favor, preencha a senha.</p>}
                    <a href="/">Esqueci minha senha</a>
            <input type="submit" value="Entrar" className="btn" />
            <div className="Cadastrar">
                        <p>Não está cadastrado? <a href="/">Cadastrar</a></p>
            </div>
                </form>
            </div>
        </body>
    )
}
