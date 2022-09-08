import React from "react";
import { Expense, Income, IncomeExp } from "./styles/Display.styled";

const IncomeExpense = (props) => {
	return (
		<>
			<IncomeExp>
				<Income>
					<h4>INCOME</h4>
					<p>Rs. {props.income}</p>
				</Income>
				<Expense>
					<h4>EXPENSE</h4>
					<p>Rs. {props.expense}</p>
				</Expense>
			</IncomeExp>
		</>
	);
};

export default IncomeExpense;
