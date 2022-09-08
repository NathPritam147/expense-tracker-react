import React from "react";
import { BalanceSection } from "./styles/Display.styled";

const Balance = (props) => {
	return (
		<>
			<BalanceSection>
				<h4>YOUR BALANCE</h4>
				<p>Rs. {props.income + props.expense}</p>
			</BalanceSection>
		</>
	);
};

export default Balance;


