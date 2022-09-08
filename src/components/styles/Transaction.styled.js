import Styled from "styled-components";

export const StyledTransaction = Styled.div`
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

export const History = Styled.div`
  text-align: left;
  margin: 0px 10px;
`;

export const List = Styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 0px;
`;

export const Li = Styled.li`
  /* box-shadow: var(--box-shadow); */
  /* color: ${(props) => (props.amount > 0 ? "green" : "red")}; */
  color: #535353;
  border-right:  ${(props) =>
		props.amount > 0 ? "5px solid #2ecc71" : "5px solid #c0392b"};
  background-color: #f8f5f5;
  display: flex;
  justify-content: space-between; 
  position: relative;
  padding: 5px;
  margin: 5px 0;
`;
