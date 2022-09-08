import Styled from "styled-components";

export const Home = Styled.div`
    text-align: center;
    border: 0.5px solid white	;
    margin: 5px 35%;

    @media screen and (max-width: 1000px) {

      margin: 5px 30%;
    }
`;

export const Header = Styled.div`

    h2{
      margin-top: 10px;
    }
`