import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import { useState, useEffect } from "react";
const Statistics = ({ masterList }) => {
	const [genreCount, setGenreCount] = useState([0, 0, 0, 0, 0, 0]);
	const formattedData = {
		labels: ["genre 1", "genre 2", "genre 3", "genre 4", "genre 5", "genre 6"],
		datasets: [
			{
				label: "Distribution of Genres",

				data: genreCount,
				backgroundColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};
	function countGenres(masterList) {
		//TODO: take in masterList and perform logic to count up all the genres and store them in the genreCount state
		setGenreCount([0, 0, 0, 0, 0, 1]);
	}
	useEffect(() => {
		countGenres(masterList);
	}, [masterList]);

	return (
		<div className="page-container">
			<h2>Statistics</h2>
			<PieChart formattedData={formattedData} />
		</div>
	);
};

export default Statistics;
