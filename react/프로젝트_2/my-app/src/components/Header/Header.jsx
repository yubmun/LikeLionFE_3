import { Link } from "react-router-dom"
import imgLogo from "../../assets/Logo.svg"
import './header.css'

export default function Header() {
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src={imgLogo} alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {/* 로그인 */}
            <li className="profile-img">
              <Link to="/">
                <img src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true" alt="My Page" />
              </Link>
            </li>
            <li>
              <Link to="/" className="button">
                <img src="./assets/icon-modify-white.svg" alt="" />
                <span>Write</span>
              </Link>
            </li>
            <li>
              <button className="button white">
                <img src="./assets/icon-logout.svg" alt="" />
                <span>Logout</span>
              </button>
            </li>
            {/* //로그인 */}
          </ul>
        </div>
      </header>
    </>
  )
}