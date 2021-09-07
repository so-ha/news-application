import React from 'react';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      searchQuery : '',
      searchDate : new Date()
    }
    this.setWholeState = this.setWholeState.bind(this);
  }
  setWholeState(q, d) {
    this.setState(
      {
        searchQuery:q,
        searchDate: d
      }
    )
  }
  
  render() {
    return(
      <React.Fragment>
        <Header setWholeState={this.setWholeState}/>
          <Main searchQuery={this.state.searchQuery} searchDate={this.state.searchDate} setWholeState={this.setWholeState}/>
          <Footer/>
      </React.Fragment>
    );
  }
}
export default App;
