import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const SearchBlock = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const SearchInput = styled.input`
    width: 270px;
    height: 60px;
    border: none;
    border-bottom: 3px solid #ecf0f1;
    background-color: transparent;
    color: #ecf0f1;
    font-size: 2.6rem;
    text-align: center;
    ::placeholder {
        color: rgba(236,240,241 ,0.8)
    }
`;

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleInput = _.debounce((value) => {
        this.setState({value});
        this.props.onGetValue(value);
    }, 1000);


    render() {
        return (
            <SearchBlock>
                <SearchInput placeholder={"E.g. London"} onChange={e => this.handleInput(e.target.value)} />
            </SearchBlock>
        )
    }
}

export default Search;
