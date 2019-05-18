import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const SearchBlock = styled.div`
    width: 100%;
    display: flex;
    padding-top: 30px;
    justify-content: center;
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
    @media (min-width: 420px) and (max-width: 480px) {
        width: 320px;
        height: 65px;
        font-size: 2.8rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width: 360px;
        height: 70px;
        font-size: 3.3rem;
    }
    @media (min-width: 768px) {
        width: 450px;
        height: 90px;
        font-size: 4rem;
    } 
`;

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    debounceEvent(...args) {
        this.debouncedEvent = _.debounce(...args);
        return e => {
            e.persist();
            return this.debouncedEvent(e);
        }
    }


    handleInput = (e) => {
        this.setState({value: e.target.value});
        this.props.onGetValue(this.state.value);
        e.target.value = '';

    };


    render() {
        return (
            <SearchBlock>
                <SearchInput placeholder={"E.g. London"} onChange={this.debounceEvent(this.handleInput, 1000)} />
            </SearchBlock>
        )
    }
}

export default Search;
