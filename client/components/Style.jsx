import styled from 'styled-components';

//styling using styled-components
export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
export const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

export const Hr = styled.hr`
    background-color: #eee;
    border: 0 none;
    color: #eee;
    height: 1px;
`;

export const Block = styled.div`
    display: block;
    clear: both;
`;

export const Div1 = styled.div`
    display:inline-block;
`;
export const Div2 = styled.div`
    display:inline-block;
    float: right;
`;

export const U = styled.span`
    color: lightseagreen;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    };
`;

export const P1 = styled.p`
    float:left;
`;

export const P2 = styled.p`
    float:right;
`;

export const Page = styled.span`
    margin-right: 1em;
    font-size: 20px;
    color: rgb(0, 132, 137);
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    };
`;

export const CurrentPage = styled.span`
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    margin-right: 1em;
    text-align: center;
    font-size: 20px;
    background-color: rgb(0, 132, 137);
    color: white;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    };
`;