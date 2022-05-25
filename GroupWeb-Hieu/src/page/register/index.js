import { Link } from 'react-router-dom'
import { UserOutlined, UnlockOutlined, CalendarOutlined } from '@ant-design/icons'


import avatar from '../../assets/images/avatar.svg'


import './register.scss'

function Register() {
    return (
        <div className="register-container">
            <div className="register-content">
                <img src={avatar} alt={'avatar'} />
                <p>Welcome</p>
                <form
                    name="register"
                    className="register-content__form"
                >
                    <div className="register-content__form__item">
                        <UserOutlined className="icon"/>
                        <input type="text" placeholder="Username" required />
                    </div>

                    <div className="register-content__form__item">
                        <UserOutlined className="icon"/>
                        <input type="text" placeholder="Gender" required />
                    </div>

                    <div className="register-content__form__item">
                        <CalendarOutlined className="icon"/>
                        <input type="text" placeholder="Birthday" required />
                    </div>

                    <div className="register-content__form__item">
                        <UserOutlined className="icon"/>
                        <input type="text" placeholder="Profession " required />
                    </div>

                    <div className="register-content__form__item">
                        <UnlockOutlined className="icon" />
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="register-content__form__item">
                        <UnlockOutlined className="icon" />
                        <input type="password" placeholder="Confirm password" required />
                    </div>

                    <button type="submit" className="button-submit">REGISTER</button>
                    <label>
                        Already have an account?{' '}
                         <Link className="create-account" to="/login">
                             Login now
                        </Link>
                    </label>
                    
                </form>
            </div>
        </div>
    )
}

export default Register
