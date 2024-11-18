import React from "react";
import '../styles/forms.css';

const SignUp = () => {
    return (
        <div className="signUpForms">
            <form>
                <h1>Cadastre-se</h1>
                <p>Use o seu email para registro</p>
                <p>
                    <input type="text" placeholder="Nome"></input>
                </p>
                <p>
                    <input type="email" placeholder="Email"></input>
                </p>
                <p>
                    <input type="password" placeholder="Senha"></input>
                </p>
                <input type="submit" value="Cadastro"></input>
            </form>
        </div>
    );
}

export default SignUp;