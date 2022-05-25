
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons'

import auth from '../../api/auth'
import avatar from '../../assets/images/avatar.svg'

import './login.scss'

function Login() {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const user ={
                email: event.target[0].value,
                password: event.target[1].value
            }
            const response = await auth.login(user)
            if (response.request.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data.user))
                navigate('/home')
                alert(response.data.message)
            }
        } catch (error) {
            //TODO: hiển bị thông báo theo từng error code (error.request.status === 404)
            alert(error)
        }
    }
    return (
        <div className="login-container">
            <div className="login-content">
                <img src={avatar} alt={'avatar'} />
                <p>Welcome</p>
                <form
                    name="login"
                    className="login-content__form"
                    onSubmit={handleSubmit}
                >
                    <div className="login-content__form__item">
                        <UserOutlined className="icon"/>
                        <input type="text" className="input-field" placeholder="Email" required />
                    </div>

                    <div className="login-content__form__item">
                        <UnlockOutlined className="icon" />
                        <input type="password" className="input-field" placeholder="Password" required/>
                    </div>

                    <label className="forgot-password">Forgot Password</label>

                    <button type="submit" className="button-submit" >LOGIN</button>
                    <Link className="create-account" to="/register">
                        Create new account
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
