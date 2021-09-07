import React from 'react';
import fetchNews from './fetchNews';
import NewsArticle from './NewsList';
import '../../css/newscard.css';


class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: ''
        }
        this.getArticles = this.getArticles.bind(this);
    }

    async componentDidMount() {
        let response = await fetchNews("Covid", "");
        //url encode needed
        this.setState({ news: response.value });
    }

    getArticles() {
        if (this.state.news && this.state.news) {
            const articles = this.state.news.map((item) => item);
            console.log(articles);
            return articles;
        }
    }

    render() {
        // console.log(this.props)
        const list = this.getArticles();
        return (
            <div className="news-complete">
            <h2 className="top-heading">Top News Headlines on {this.props.query ? `${this.props.query}` : `Covid`} </h2>
             {list && <ul className="cards">{list.map((item, key) =><NewsArticle item={item} key={key} i={key}/>)}</ul>}
             <span onClick={()=> window.scrollTo(0,0)}><i className="fa fa-arrow-circle-o-up up hvr"></i></span>
            </div>
        );
    }
};

export default News;