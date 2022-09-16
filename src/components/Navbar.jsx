import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	const navbar = [
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

	return (
		<div>
			<nav
				className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
			>
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
							{navbar.map(({ id, link }) => (
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

					<div
						className={`form-check form-switch text-${
							props.mode === "light" ? "Dark" : "light"
						}`}
					>
						<input
							className="form-check-input"
							type="checkbox"
							role="switch"
							onClick={props.toggleMode}
							id="flexSwitchCheckDefault"
						/>
						<label
							className="form-check-label"
							htmlFor="flexSwitchCheckDefault"
						>
							{`Enable ${
								props.mode === "light" ? "Dark" : "light"
							} Mode`}
						</label>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
