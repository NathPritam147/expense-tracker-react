import Styled from "styled-components";


export const BalanceSection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 10px;

  h4{
    margin-bottom: 2px;
    color: #686868;
  }

  p{
    margin: 0px;
    color: #252525;
  }
`;

export const IncomeExp = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0px;
  background-color: #f5f5f3;
  border: 1px solid #eee;
  padding: 10px;
 
`;

export const Income = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4{
      margin: 0px;
      color: #686868;
    }

    p{
      margin: 2px 0px;
      color: #18a118;
      font-weight: bold;
    }
`;

export const Expense = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4{
      margin: 0px;
      color: #686868;
    }

    p{
      margin: 2px 0px;
      color: red;
      font-weight: bold;
    }
`;
