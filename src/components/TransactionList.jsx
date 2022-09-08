import React from "react";
import Transaction from "./Transaction";
import { History, List } from "./styles/Transaction.styled";

const TransactionList = (props) => {
	return (
		<History>
			<h3>Recent Transaction History</h3>
			<List>
				{
					// Display latest 5 transaction from db
					props.history.length !== 0 ? (
						props.history
							.slice(-5)
							.reverse()
							.map((item, i) => {
								return (
									<Transaction
										key={i}
										txn={item}
										history={props.history}
										setHistory={props.setHistory}
										income={props.income}
										setIncome={props.setIncome}
										expense={props.expense}
										setExpense={props.setExpense}
									/>
								);
							})
					) : (
						<li>No transactions found!</li>
					)
				}
			</List>
		</History>
	);
};

export default TransactionList;

