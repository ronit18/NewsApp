import React from "react";

const NewsItem = (props) => {
	return (
		<>
			<div>
				<div
					className={`card ${
						props.mode === "light" ? "" : "text-bg-dark"
					}`}
				>
					<img
						src={
							props.imageUrl
								? props.imageUrl
								: "https://img.etimg.com/thumb/msid-93905167,width-650,imgsize-55138,,resizemode-4,quality-100/young-people-news.jpg"
						}
						className="card-img-top"
						alt={props.title ? props.title.slice(0, 10) : ""}
					/>
					<div className="card-body">
						<h5 className="card-title">
							{props.title}
							<br />
							<span
								className={`badge rounded-pill ${
									props.mode === "light"
										? "text-bg-dark"
										: "text-bg-light"
								}`}
							>
								{props.source}
							</span>
						</h5>
						<p className="card-text">
							{props.description
								? props.description
								: props.title + "...."}
						</p>
						<p className="card-text">
							<small className="text-muted">
								by {!props.author ? "Unknown" : props.author} on{" "}
								{new Date(props.date).toGMTString()}
							</small>
						</p>
						<a
							href={props.newsUrl}
							target="_blank"
							className="btn btn-sm btn-primary"
							rel="noreferrer"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsItem;
