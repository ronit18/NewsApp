import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
	apiKeys1 = "a6ae65bc33dc45999b120f99174a62a1";
	apiKeys2 = "6513b13aa9664e91aa9aee9e2f0fb8ed";
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
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	constructor(props) {
		super(props);

		this.state = {
			articles: this.articles,
			loading: false,
			page: 1,
			totalResults: 0,
		};
		document.title = `NewsApp-${this.capitalizeFirstLetter(
			this.props.category
		)}`;
	}
	async newsMain() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=${this.apiKeys2}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parseData = await data.json();
		// console.log(parseData);
		this.setState((this.articles = parseData.articles));
		this.setState({
			loading: false,
		});
	}
	async componentDidMount() {
		this.newsMain();
	}

	fetchMoreData = async () => {
		this.setState({
			page: this.state.page + 1,
		});
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=${this.apiKeys2}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parseData = await data.json();
		// console.log(parseData);

		this.setState({
			loading: false,
			articles: this.state.articles.concat(parseData.articles),
		});
	};

	render() {
		return (
			<div className="container my-4">
				<h1 className="text-center" style={{ margin: "35px" }}>
					Top Head Lines-
					{`${this.capitalizeFirstLetter(this.props.category)}`}
				</h1>
				{/* {this.state.loading && <Spinner />} */}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles !== this.state.totalResults}
					loader={<Spinner />}
				>
					<div className="container">
						<div className="row">
							{this.articles.map((element) => {
								return (
									<div className="col-md-3" key={element.url}>
										<NewsItem
											title={element.title}
											description={element.description}
											imageUrl={element.urlToImage}
											newsUrl={element.url}
											author={element.author}
											date={element.publishedAt}
											source={element.source.name}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>
			</div>
		);
	}
}

export default News;
