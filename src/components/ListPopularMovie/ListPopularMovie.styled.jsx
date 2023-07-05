import { styled } from "styled-components";
import { Link } from 'react-router-dom';


export const ListMovie = styled.ul`
    list-style: none;
`;

export const ItemMovie = styled.li`
    font-size: 18px;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ItemLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const TitleMovie = styled.p`
    padding: 0;
    margin: 0;
`