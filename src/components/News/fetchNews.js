import { sampleData } from './sampleData';
// import API_KEY from './token';
let data = sampleData[0];

// const url = `https://newsapi.org/v2/`;

async function fetchNews(searchString, date) {
    // let fetch_url = url + `everything?q=${searchString}&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;
    // const response = await fetch(fetch_url)
    //     .then(data => {
    //         return data;
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    const response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${searchString}&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=${date}&toPublishedDate=null`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c4b3bffc72mshbd3d25ba96efb2fp12c176jsn8207ad8704aa",
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
        }})
        .then(data => {
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    const json = await response.json();

    return json;
}

export default fetchNews;