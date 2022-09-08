import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	document.title = `NewsApp-${capitalizeFirstLetter(props.category)} 🚀`;
	const newsMain = async () => {
		props.setProgress(10);

		const url = `https://newsapi.org/v2/top-headlines?country=${props.countryName}&category=${props.category}&apiKey=${props.apiKeys}&page=${page}&pageSize=${props.pageSize}`;

		setLoading(true);

		let data = await fetch(url);
		props.setProgress(30);
		let parseData = await data.json();
		props.setProgress(50);
		// console.log(parseData);
		setArticles(parseData.articles);
		setTotalResults(parseData.totalResults);
		setLoading(false);

		props.setProgress(100);
	};
	useEffect(() => {
		newsMain();
		// eslint-disable-next-line
	}, []);

	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${
			props.countryName
		}&category=${props.category}&apiKey=${props.apiKeys}&page=${
			page + 1
		}&pageSize=${props.pageSize}`;
		setPage(page + 1);

		let data = await fetch(url);
		let parseData = await data.json();
		// console.log(parseData);
		setArticles(articles.concat(parseData.articles));
		setTotalResults(parseData.totalResults);
	};

	return (
		<>
			<h1
				className="text-center"
				style={{ margin: "35px", marginTop: "90px" }}
			>
				Top Head Lines-
				{`${capitalizeFirstLetter(props.category)}`}🚀
			</h1>
			{loading && <Spinner />}
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Spinner />}
			>
				<div className="container">
					<div className="row">
						{articles.map((element) => {
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
		</>
	);
};

News.defaultProps = {
	countryName: "in",
	page_size: 5,
	category: "general",
};

News.propTypes = {
	countryName: PropTypes.string,
	page_size: PropTypes.number,
	category: PropTypes.string,
};
export default News;
