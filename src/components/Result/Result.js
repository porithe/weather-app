import React from 'react';
import styled from 'styled-components';

const ResultBlock = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    @media (min-width: 1025px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;
const H1 = styled.h1`
    font-size: 1.6rem;
    color: #ecf0f1;
    font-weight: 400;
    @media (min-width: 400px) and (max-width: 480px) {
        font-size: 2.3rem;
    }
    @media (min-width: 481px) and (max-width: 550px) {
        font-size: 2.6rem;
    }
    @media (min-width: 551px) and (max-width: 767px) {
        font-size: 3rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 4rem;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    @media (min-width: 1025px) {
        font-size: 5rem;
    }
`;

class Result extends React.Component {


    render() {


        return (
            <ResultBlock>
                <H1>{this.props.value}</H1>
            </ResultBlock>
        )
    }
}

export default Result;
