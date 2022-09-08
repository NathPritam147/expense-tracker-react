import React from "react";
import { Button } from "./styles/Button.styled";
import Styled from "styled-components";
// import { StyledTransaction } from "./styles/Transaction.styled";

const AddTransaction = (props) => {
	// Insert added transaction in db
	const addHistory = async (history) => {
		await fetch("http://localhost:5000/history", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(history),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!e.target[0].value || !e.target[1].value) {
			alert("Please add a text and amount");
			return;
		}

		const value = Number(e.target[1].value);

		// Update new entry in cache and db
		const newEntry = { title: e.target[0].value, amount: value };
		props.setHistory([...props.history, newEntry]);

		addHistory(newEntry);

		// Update income and expense
		if (value > 0) {
			props.setIncome(props.income + value);
		} else {
			props.setExpense(props.expense + value);
		}

		e.target[0].value = "";
		e.target[1].value = "";
	};

	return (
		<>
			<StyledTransaction>
				<h3>Add New Transaction</h3>
				<form onSubmit={handleSubmit}>
					<h4>Title</h4>
					<input type='text' name='' id='' placeholder='Enter Title' />
					<h4>Amount</h4>
					<h5>Negative - Expense, Positive - Income</h5>
					<input type='number' name='' id='' placeholder='Enter Amount' />
					<br />
					<Button type='submit'>Add Transaction</Button>
				</form>
			</StyledTransaction>
		</>
	);
};

export default AddTransaction;

const StyledTransaction = Styled.div`
  text-align: left;

  h3{
    margin: 15px 5px;
  }

  h4, h5{
    margin: 0px 5px;
    color: #686868;  
  }

  input{
    padding: 10px;
    width: 90%;
    margin: 10px 5px;
    border: 1px solid lightgrey;
  } 
`;
