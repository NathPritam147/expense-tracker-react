import Styled from "styled-components"

export const Button = Styled.button`
  width: 100%;
  padding: 10px;
  background-color: #875bc2;
  color: white;
  border: none;
  font-size: 16px;
  margin-top: 10px;
`;

export const DeleteButton = Styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 0;
  color: #ff0000;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  /* position: absolute; */
  top: 50%;
  left: 0;
  /* transform: translate(-100%, -50%); */
  /* opacity: 0; */
  /* transition: opacity 0.3s ease; */
`;

// .list li:hover .delete-btn {
//   opacity: 1;
