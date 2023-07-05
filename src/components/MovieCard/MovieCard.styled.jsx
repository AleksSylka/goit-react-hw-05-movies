import { styled } from "styled-components";

export const Loader = styled.div`
    display: flex;
    justify-content: center;
`;

export const MovieCardBox = styled.div`
    display: flex;
    gap: 30px;
`;

export const MovieImg = styled.img`
    width: 250px;
    border-radius: 1rem;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const ListGenres = styled.ul`
    list-style: none;
    display: flex;
    gap: 15px;
    padding-left: 0;
`