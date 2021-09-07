import React from 'react';
import '../../css/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query : '',
            date : new Date()
        }
        this.onBtnSubmit = this.onBtnSubmit.bind(this);
    }

    onBtnSubmit(e){
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value )
        this.props.setWholeState(e.target[0].value, e.target[1].value)
    }
    handleChange(e) {
        e.preventDefault();
        console.log("input value : ", e.target.value)
    }

    render() {
        return (
            <div className="header">
                <h1 className="news-corner"onClick={()=> window.location.href=window.location.pathname}>News Corner</h1>
                    <div className="search-box">
                        <form className="search" onSubmit={(e) => {this.onBtnSubmit(e)}}>
                            <span className="search-area">
                            <input type="text" className="searchTerm" placeholder="Search for a news topic" onChange={(e) => this.handleChange(e)}/>
                            <button type="submit" className="searchButton" onSubmit={(e) => {this.onBtnSubmit(e)}}> <i className="fa fa-search"></i></button>
                            </span>
                            <input type="date" className="searchDate" placeholder="Search for a news topic" min="01-01-2000" max="06-07-2021" onChange={(e) => this.handleChange(e)}/>
                        </form>
                    </div>
            </div>
        );
    }
}

export default Header;