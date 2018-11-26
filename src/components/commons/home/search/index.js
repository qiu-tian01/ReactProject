import React, { Component } from 'react';

//引入样式
import { SearchContainer , SearchCity ,SearchSwitch ,SearchEntry } from './styleComponents'


class Search extends Component {
    render () {
        return (
            <SearchContainer>
                <SearchCity>
                    <span>北京</span>
                    <i className = "caret-down"></i>
                </SearchCity>
                <SearchSwitch>
                    <div className ="active">正在热映</div>
                    <div>即将上映</div>
                </SearchSwitch>
                <SearchEntry className = "fa fa-search"></SearchEntry>

            </SearchContainer>
            
        )
    }
}

export default Search