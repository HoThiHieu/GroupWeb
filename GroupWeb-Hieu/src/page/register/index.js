import { Link } from 'react-router-dom'
// import { UserOutlined, UnlockOutlined, CalendarOutlined } from '@ant-design/icons'
import { UserOutlined, UnlockOutlined, CalendarOutlined, MailOutlined } from '@ant-design/icons'
import iconGender from '../../../assets/images/gender.png'


import avatar from '../../assets/images/avatar.svg'


import './register.scss'

function Register() {
    return (
        <div className="register-container">
            <div className="register-content">
                <img src={avatar} alt={'avatar'} />
                <p>Welcsddsdome</p>
                <form
                    name="register"
                    className="register-content__form"
                >
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
