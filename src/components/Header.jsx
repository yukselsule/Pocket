import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectBalance } from "../features/balance/BalanceSlice";
import Balance from "../features/balance/Balance";

import logo from "../assets/images/pocket-logo.png";

function Header() {
    const balance = useSelector(selectBalance);

    return (
        <header className="flex items-center justify-between bg-stone-900 px-5 py-2 text-stone-100 sm:px-10 sm:py-3">
            <Link to="/">
                <img className="w-14" src={logo} alt="pocket-logo" />
            </Link>

            {balance ? (
                <div className="flex items-center justify-between gap-2">
                    <Balance />
                    <span>/</span>
                    <Link to="/summary">See Summary</Link>
                </div>
            ) : (
                <p>Keep track of your wallet</p>
            )}
        </header>
    );
}

export default Header;
