import { styled } from "@mui/material";

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 980px;
    padding: ${({theme}) => theme.spacing(10, 4)};
    margin: 0 auto;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${({theme}) => theme.spacing(10)};
    
    ${({theme}) => theme.breakpoints.down('md')}{
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(5)};
    }

`;

export const ItemList = styled('li')`
    list-style: none;
`;

export const ItemThumb = styled('img')`
    width: 100%;
`;

export const ItemName = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`;

export const ItemValue = styled('p')`
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main};
    margin: 0;
`;

export const ItemDesc = styled('p')`
    word-break: break-word;
`;

export const ListEmpty = styled('p')`
    padding: ${({theme}) => theme.spacing(20, 0)};
    text-align: center;
`;