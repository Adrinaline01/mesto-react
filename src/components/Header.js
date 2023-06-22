import headerLogo from '../images/logo.svg'

function Header() {
  return (
  <header className="header">
    <img className="logo" src={headerLogo} alt="Логотип сайта Место" />
  </header>
  )
}

export default Header;