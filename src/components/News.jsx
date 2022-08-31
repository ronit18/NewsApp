import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
	articles = [];
	constructor() {
		super();

		this.state = {
			articles: this.articles,
			loading: false,
			page: 1,
		};
	}
	async componentDidMount() {
		let url =
			"https://newsapi.org/v2/top-headlines?country=in&apiKey=a6ae65bc33dc45999b120f99174a62a1";
		let data = await fetch(url);
		let parseData = await data.json();
		// console.log(parseData);
		this.setState((this.articles = parseData.articles));
	}

	render() {
		return (
			<div className="container my-3">
				<h1>Top Head Lines</h1>
				<div className="row">
					{this.articles.map((element) => {
						return (
							<div className="col-md-3" key={element.url}>
								<NewsItem
									title={element.title}
									description={element.description}
									imageUrl={element.urlToImage}
									newsUrl={element.url}
								/>
							</div>
						);
					})}
				</div>
				<div className="container">
					<button type="button" className="btn btn-info">
						Previous
					</button>
					<button type="button" className="btn btn-info">
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default News;
