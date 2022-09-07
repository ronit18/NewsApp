import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
	static defaultProps = {
		countryName: "in",
		page_size: 5,
		category: "general",
	};

	static propTypes = {
		countryName: PropTypes.string,
		page_size: PropTypes.number,
		category: PropTypes.string,
	};

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
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=a6ae65bc33dc45999b120f99174a62a1&page=1&pageSize=${this.props.page_size}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parseData = await data.json();
		// console.log(parseData);
		this.setState((this.articles = parseData.articles));
		this.setState({
			loading: false,
		});
	}
	handleNextButton = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.countryName
		}&category=${
			this.props.category
		}&apiKey=a6ae65bc33dc45999b120f99174a62a1&pageSize=${
			this.props.page_size
		}&page=${this.state.page + 1}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parseData = await data.json();
		// console.log(parseData);
		this.setState((this.articles = parseData.articles));

		this.setState({
			page: this.state.page + 1,
			loading: false,
		});
	};
	handlePreviousButton = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.countryName
		}&category=${
			this.props.category
		}&apiKey=a6ae65bc33dc45999b120f99174a62a1&pageSize=${
			this.props.page_size
		}&page=${this.state.page - 1}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parseData = await data.json();
		// console.log(parseData);
		this.setState((this.articles = parseData.articles));
		this.setState({
			page: this.state.page - 1,
			loading: false,
		});
	};

	render() {
		return (
			<div className="container my-3">
				<h1 className="text-center" style={{ margin: "35px" }}>
					Top Head Lines
				</h1>
				{this.state.loading && <Spinner />}
				<div className="row">
					{!this.state.loading &&
						this.articles.map((element) => {
							return (
								<div className="col-md-3" key={element.url}>
									<NewsItem
										title={element.title}
										description={element.description}
										imageUrl={element.urlToImage}
										newsUrl={element.url}
										author={element.author}
										date={element.publishedAt}
									/>
								</div>
							);
						})}
				</div>
				<div
					className="container d-flex justify-content-between"
					style={{ margin: "35px" }}
				>
					<button
						onClick={this.handlePreviousButton}
						type="button"
						className="btn btn-info"
						disabled={this.state.page <= 1}
					>
						&larr; Previous
					</button>
					<button
						onClick={this.handleNextButton}
						type="button"
						className="btn btn-info"
					>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
