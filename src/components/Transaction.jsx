import React from "react";
import { DeleteButton } from "./styles/Button.styled";
import { Li } from "./styles/Transaction.styled";

const Transaction = (props) => {

  // Delete history from db and cache
	const handleClick = async () => {
		await fetch(`http://localhost:5000/history/${props.txn.id}`, {
			method: "DELETE",
		});

    // Update income and expense accordingly
		props.txn.amount >= 0
			? props.setIncome(props.income - props.txn.amount)
			: props.setExpense(props.expense - props.txn.amount);

    // Update history list after delete operation
		props.setHistory(props.history.filter((item) => item.id !== props.txn.id));
	};
	return (
		<Li amount={props.txn.amount}>
			<DeleteButton onClick={handleClick}>x</DeleteButton>
			<div>{`${props.txn.title}`}</div>
			<div>{`${props.txn.amount}`}</div>
		</Li>
	);
};

export default Transaction;

