import { useSelector } from "react-redux";

import { selectBalance } from "./BalanceSlice";

function Balance() {
  const balance = useSelector(selectBalance);

  return (
    <div>
      Balance: <span>{balance}</span>
    </div>
  );
}

export default Balance;
