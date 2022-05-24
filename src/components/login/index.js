import { Link } from 'react-router-dom'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'


import avatar from '../../assets/images/avatar2.svg'


import './login.scss'

function Login() {
    return (
        <div className="login-container">
            <div className="login-content">
                <img src={avatar} alt={'avatar'} />
                <p>Welcome</p>
                <form
                    name="login"
                    className="login-content__form"
                >
                    <div className="login-content__form__item">
                        <UserOutlined className="icon"/>
                        <input type="text" class="input-field" placeholder="Enter name " required />
                    </div>

                    <div className="login-content__form__item">
                        <UnlockOutlined className="icon" />
                        <input type="password" class="input-field" placeholder="Enter password" required />
                    </div>

                    <label className="forgot-password">Forgot Password</label>

                    <button type="submit" class="button-submit">LOGIN</button>
                    <Link className="create-account" to="/register">
                        Create new account
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
