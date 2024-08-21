import logo from "../assets/images/pocket-logo.png";
import Balance from "../features/balance/Balance";

function Header() {
  return (
    <header>
      <img src={logo} alt="pocket-logo" />
      <Balance />
    </header>
  );
}

export default Header;
