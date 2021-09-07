import News from '../News/News';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import '../../css/main.css';


function Main(props) {
    return(
        <div className="main">
            <Topbar setWholeState={props.setWholeState}/>
            <Sidebar />
            <News query={props.searchQuery} date={props.searchDate}/>
        </div>
    );
}

export default Main;