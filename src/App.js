import React, { useState, useEffect } from "react";
import Headers from "./components/Headers.jsx";
import Balance from "./components/Balance.jsx";
import IncomeExpense from "./components/IncomeExpense.jsx";
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";
import { Home } from "./components/styles/Home.styled.js";
import { GlobalStyles } from "./components/styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";

export default function App() {
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [history, setHistory] = useState([]);

	//  fetch data from server
	const fetchData = async () => {
		const res = await fetch("http://localhost:5000/history");
		const data = await res.json();

		//  Update income for db
		data.reduce((prevItem, item) => {
			if (item.amount >= 0) setIncome(prevItem + item.amount);
			return item.amount > 0 ? prevItem + item.amount : prevItem;
		}, 0);

		// update income from server
		data.reduce((prevItem, item) => {
			if (item.amount < 0) setExpense(prevItem + item.amount);
			return item.amount < 0 ? prevItem + item.amount : prevItem;
		}, 0);

		return data;
	};

	useEffect(() => {
		const getData = async () => {
			const data = await fetchData();

			setHistory(data);
		};

		getData();
	}, []);

	const theme = {
		colors: {
			// header: "red",
			// body: "green"
		},
	};

	return (
		<ThemeProvider theme={theme}>
			<Home>
				<GlobalStyles />
				<Headers />
				<Balance income={income} expense={expense} />
				<IncomeExpense income={income} expense={expense} />
				<TransactionList
					history={history}
					setHistory={setHistory}
					income={income}
					setIncome={setIncome}
					expense={expense}
					setExpense={setExpense}
				/>
				<AddTransaction
					income={income}
					setIncome={setIncome}
					expense={expense}
					setExpense={setExpense}
					history={history}
					setHistory={setHistory}
				/>
			</Home>
		</ThemeProvider>
	);
}
