import React from 'react';
import '../../css/topbar.css';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.setWholeState(e.target.textContent, new Date())
    }
    render() {
        return (
                    <nav className="top">
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-globe"></i><span>&nbsp;Trending News</span></p>
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-briefcase"></i><span>&nbsp;Business</span></p>
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-gamepad"></i><span>&nbsp;Sports</span></p>
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-money"></i><span>&nbsp;Finance</span></p>
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-balance-scale"></i><span>&nbsp;Economics</span></p>
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-heartbeat"></i><span>&nbsp;Health</span></p>
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-mobile"></i><span>&nbsp;Technology</span></p>
                    <p onClick={(e)=> {this.handleClick(e)}} className="hvr nav1"><i className="fa fa-tv"></i> <span>&nbsp;Entertainment</span></p>
                    {/* <p onClick={(e)=> {this.handleClick(e)}}>Spell Check</p>
                    <p onClick={(e)=> {this.handleClick(e)}}>Web Search</p>
                    <p onClick={(e)=> {this.handleClick(e)}}>News Search</p>
                    <p onClick={(e)=> {this.handleClick(e)}}>Image Search</p>
                    <p onClick={(e)=> {this.handleClick(e)}}>Autocomplete</p> */}
                    </nav>
        );
    }
};

export default Topbar;