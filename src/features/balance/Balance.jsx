import { useSelector } from "react-redux";

import { selectBalance } from "./BalanceSlice";

function Balance() {
    const balance = useSelector(selectBalance);

    return (
        <div>
            Balance: <span className="text-lg text-sky-200">{balance}</span>
        </div>
    );
}

export default Balance;
