import React, {useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import dummy_image from '../assets/dummy_image.webp'
import '../../css/newscard.css';
// import '../../css/temp.css';

function NewsList(props) {
    const [view, setView] = useState(false);
    return (
            <div className="card1">
                <li id={"i"+props.i}>
                    <img className="card_image" src={props.item.image.url ?props.item.image.url : dummy_image } alt="News" style={{float:"left"}}/>
                  <div className="news-block">
                    <h4 className="title" onClick={()=> onClickMore(props.item.url)}>{props.item.title}</h4>
                    <small className="time"><b>
                            {
                            props.item.datePublished.substring(8,10)+"-"+
                            props.item.datePublished.substring(5,7)+"-"+
                            props.item.datePublished.substring(0,4)+" "+
                            props.item.datePublished.substring(11,19)}</b>
                        </small> |
                        <small className="news-author"><b> @ {props.item.provider.name} </b></small>
                    <p className="snippet"> {ReactHtmlParser(props.item.snippet)}</p>
                    <span onClick={() => { setView(!view); viewMoreLess(props.i, view)}} id="view-btn"><i className={!view? "fa fa-chevron-down" : "fa fa-chevron-up"} style={{float:"right"}}></i></span>
                  <div className="content" id={"myModal"+props.i}>
                  <hr/>
                     {props.item.body}<br/>
                  </div>
                  </div>
                  <div style={{clear:"left"}}></div>
                </li>
            </div>
    );
}

function onClickMore(url){
    let r = window.confirm(`To view full article, do you want to visit "${url}" ?`)
    if(r) {
        window.open(url);
        return true;
    }
}
function viewMoreLess(id, view) {
    let id1 = "#myModal"+id;
    let displayVal = !view ? "block" : "none"
    document.querySelector(id1).style.display = displayVal;
}

export default NewsList;