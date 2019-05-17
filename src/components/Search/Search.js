import React from 'react';
import styled from 'styled-components';


const SearchBlock = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SearchInput = styled.input`
    width: 220px;
    height: 40px;
    border: none;
    border-bottom: 3px solid #ecf0f1;
    background-color: transparent;
    color: #ecf0f1;
    font-size: 2rem;
    text-align: center;
    ::placeholder {
        color: rgba(236,240,241 ,0.8)
    }
`;

class Search extends React.Component {

    render() {
        return (
            <SearchBlock>
                <SearchInput placeholder={"E.g. London"} />
            </SearchBlock>
        )
    }
}

export default Search;
