import { Link } from "react-router-dom"


export default function Login() {
    return (
        <body>
            <div class="page">
                <h1>LUME</h1>
                <h3>Doceria Gourmet Artesanal</h3>
                <form action="home.html" method="get" class="formLogin">
                    <h2>Login</h2>
                    <p>Digite os seus dados de acesso no campo abaixo.</p>
                    <label for="text">Usuário</label>
                    <input type="text" placeholder="Digite o usuário" autofocus="true" />
                    <label for="password">Senha</label>
                    <input type="password" placeholder="Digite a senha" />
                    <a href="/">Esqueci minha senha</a>
                    <Link to={'/app/home'}>
                    <input type="submit" value="Entrar" class="btn" />
                    </Link>
                    <div class="Cadastrar">
                        <p>Não está cadastrado? <a href="/">Cadastrar</a></p>
                    </div>

                </form>
            </div>
        </body>
    )
}