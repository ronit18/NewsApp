import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl } = this.props;
		return (
			<div>
				<div className="card">
					<img
						src={
							imageUrl
								? imageUrl
								: "https://img.etimg.com/thumb/msid-93905167,width-650,imgsize-55138,,resizemode-4,quality-100/young-people-news.jpg"
						}
						className="card-img-top"
						alt={title ? title.slice(0, 10) : ""}
					/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">
							{description ? description : title + "...."}
						</p>
						<a
							href={newsUrl}
							target="_blank"
							className="btn btn-sm btn-primary"
							rel="noreferrer"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
