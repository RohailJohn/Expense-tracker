import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  // const deleteTransaction = useContext(GlobalContext);
  //   console.log(transaction.id);
  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      {/* <button
        onClick={(e) => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button> */}
    </li>
  );
};

export default Transaction;
