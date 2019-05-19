import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const SearchBlock = styled.div`
    width: 100%;
    height: ${props => props.theme.height};
    align-items: ${props => props.theme.align};
    display: flex;
    padding-top: ${props => props.theme.padding};
    justify-content: center;
    transition: .4s;
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
        color: rgba(250,250,250 ,0.6)
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

const theme = {
    height: '100%',
    padding: '0',
    align: 'center',
    heightBefore: 'auto',
    paddingBefore: '30px',
    alignBefore: 'flex-start',
};


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
        if(e.target.value !== '') {
            this.setState({value: e.target.value});
            this.props.onGetValue(this.state.value);
            e.target.value = '';
            theme.height = theme.heightBefore;
            theme.padding = theme.paddingBefore;
            theme.align = theme.alignBefore;
        }

    };



    render() {



        return (
            <SearchBlock theme={theme}>
                <SearchInput placeholder={"E.g. London"} onChange={this.debounceEvent(this.handleInput, 1000)} />
            </SearchBlock>
        )
    }
}

export default Search;
