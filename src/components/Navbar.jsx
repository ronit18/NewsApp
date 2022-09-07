import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
	navbar = [
		{
			id: 2,
			link: "Business",
		},
		{
			id: 3,
			link: "Entertainment",
		},

		{
			id: 5,
			link: "Health",
		},
		{
			id: 6,
			link: "Science",
		},
		{
			id: 7,
			link: "Sports",
		},
		{
			id: 9,
			link: "technology",
		},
	];
	render() {
		return (
			<div>
				<nav className={`navbar navbar-expand-lg bg-light`}>
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							NewsApp
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								{this.navbar.map(({ id, link }) => (
									<li key={id} className="nav-item">
										<Link
											className="nav-link"
											aria-current="page"
											to={`${link}`}
										>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
