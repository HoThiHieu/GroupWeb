import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined, UnlockOutlined, CalendarOutlined, MailOutlined } from '@ant-design/icons'

import auth from '../../../api/auth'
import iconGender from '../../../assets/images/gender.png'
import avatar from '../../../assets/images/avatar.svg'

import './register.css'


function Register() {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const user ={
                email: event.target[0].value,
                full_name: event.target[1].value,
                gender: event.target[2].value,
                birthday: event.target[3].value,
                password: event.target[4].value
            }
            console.log(user);
            const response = await auth.register(user)
            alert(response.data.message)
            navigate('/login')
        } catch (error) {
            //TODO: hiển bị thông báo theo từng error code (error.request.status === 404)
            alert(error.response.data.message)
        }
    }
    return (
        <div className="register-container">
            <div className="register-content">
                <img src={avatar} alt={'avatar'} />
                <p>Welcome</p>
                <form
                    name="register"
                    className="register-content__form"
                    onSubmit={handleSubmit}
                >
                    <div className="register-content__form__left-right">
                        <div>
                            <div className="register-content__form__item">
                                <MailOutlined className="icon" />
                                <input type="text" placeholder="Email" required />
                            </div>

                            <div className="register-content__form__item">
                                <UserOutlined className="icon" />
                                <input type="text" placeholder="Full Name" required />
                            </div>

                            <div className="register-content__form__item">
                                <img src={iconGender} alt={'avatar'} className="img-icon"/>
                                <select>
                                    <option value="1">Nam</option>
                                    <option value="0">Nữ</option>
                                </select>
                            </div>

                            <div className="register-content__form__item">
                                <CalendarOutlined className="icon" />
                                <input type="date" placeholder="Birthday" required />
                            </div>
                            <div className="register-content__form__item">
                                <UnlockOutlined className="icon" />
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="register-content__form__item">
                                <UnlockOutlined className="icon" />
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                        </div>
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
