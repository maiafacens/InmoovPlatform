import logoInmoov from '../Imagens/InmoovLogo.png';
import SignUp from '../components/forms';
import '../App.css';
import '../styles/login.css';

function Login() {
    return (
        <div className='Login-header'>
             <div className='Logo-space'>
            <img src={logoInmoov} className="Inmoov-logo" alt="logo"
            />
            <p>
              INMOOV
            </p>
          </div>
          <SignUp />
        </div>
    );
}

export default Login;