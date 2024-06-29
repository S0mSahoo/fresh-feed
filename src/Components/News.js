import React, { Component } from 'react'
import NewsItem from './NewsItem/NewsItem'
import Backup from '../Components/images/backup_news.webp'
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalResults: 0,
            articles: [],
            page: 1,
            pageSize: 20
        }
    }
    async componentDidMount() {
        // console.log(this.props.color)
        let url = `https://newsapi.org/v2/${this.props.data}&language=en&apiKey=b38e404b2b2f43189e6324b198546b08`;
        // console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults
            }
        );
    }
    async componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            // console.log(this.props.color)
            let url = `https://newsapi.org/v2/${this.props.data}&language=en&apiKey=b38e404b2b2f43189e6324b198546b08`;
            // console.log(url);
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState(
                {
                    articles: parsedData.articles,
                    totalResults: parsedData.totalResults
                }
            );
        }
    }
    toPrevious = async () => {
        let url = `https://newsapi.org/v2/${this.props.data}&language=en&apiKey=b38e404b2b2f43189e6324b198546b08&page=${this.state.page - 1}`;
        let page = this.state.page - 1;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: page });
    }
    toNext = async () => {
        let url = `https://newsapi.org/v2/${this.props.data}&language=en&apiKey=b38e404b2b2f43189e6324b198546b08&page=${this.state.page + 1}`;
        let page = this.state.page + 1;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: page });
    }
    render() {
        // let {color} = this.props;
        return (
            <div className='container'>
                <h1 className='my-2' style={{ textAlign: 'center' }}>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={element.url}>
                                <NewsItem color={this.props.color} title={element.title} description={element.description} img={element.urlToImage?element.urlToImage:Backup} readMore={element.url} />
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <button className={`btn btn-${this.props.color}`} onClick={this.toPrevious} disabled={this.state.page <= 1}>Previous</button>
                    <button className={`btn btn-${this.props.color}`} onClick={this.toNext} disabled={this.state.page >= this.state.totalResults / this.state.pageSize}>Next</button>
                </div>
            </div>
        )
    }
}

export default News
