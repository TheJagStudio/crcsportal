import React, { useEffect, useState } from "react";

// Components
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// Data
import { newsData, latestData } from "../Variables/Variables";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Homepage = () => {
	const [societyData, setSocietyData] = useState([]);
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [
			{
				label: "# of Societies",
				data: [],
				backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
			},
		],
	});
	useEffect(() => {
		let latestNews = document.getElementById("latestNews");
		setInterval(() => {
			let width = latestNews.offsetWidth;
			latestNews.scrollBy(width, 0);
			if (latestNews.scrollLeft + width * 2 >= latestNews.scrollWidth) {
				latestNews.scrollLeft = 0;
			}
		}, 2000);
		fetch(process.env.REACT_APP_SERVER + "/api/societyCountFetcher/")
			.then((res) => res.json())
			.then((data) => {
				setSocietyData(data);
				setChartData({
					labels: ["Andhra Pradesh", "Assam", "Delhi (NCT)", "Jammu and Kashmir", "Kerala", "Manipur", "Puducherry", "Tamil Nadu", "Telangana", "West Bengal"],
					datasets: [
						{
							label: "# of Societies",
							data: [1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
							backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
						},
					],
				});
			})
			.catch((err) => console.log(err));
	}, []);

	const newData = [
		{
			data: [
				["09", "Jun", "2023", "To realise Prime Minister Shri Narendra Modi’s vision of ‘Sahakar se Samridhi, four important initiatives have been taken to strengthen 1,514 Urban Co-operative Banks (UCBs) in the country", "https://pib.gov.in/PressReleasePage.aspx?PRID=1931050"],
				["08", "Jun", "2023", "In the direction of realizing the Prime Minister Shri Narendra Modi’s vision of “Sahkar Se Samridhi”, the Government of India has taken five more important decisions", "https://pib.gov.in/PressReleasePage.aspx?PRID=1930750"],
				["07", "Jun", "2023", "Union Home Minister and Minister of Cooperation, Shri Amit Shah reviews progress of computerisation of office of Central Registrar of Cooperative Societies (CRCS)", "https://pib.gov.in/PressReleasePage.aspx?PRID=1930392"],
				["06", "Jun", "2023", "Under the leadership of Prime Minister Shri Narendra Modi, Government of India has decided to allow 2000 Primary Agricultural Credit Societies (PACS) to open Pradhan Mantri Bhartiya Jan Aushadhi Kendras across the country", "https://pib.gov.in/PressReleasePage.aspx?PRID=1930283"],
				["05", "Jun", "2023", "Chairman of the National Level Committee for drafting New National Cooperation Policy document Shri Suresh Prabhu, makes a presentation to Union Home Minister and Cooperation Minister Shri Amit Shah in New Delhi today", "https://pib.gov.in/PressReleasePage.aspx?PRID=1930067"],
			],
		},
		{
			data: [
				["16", "Jun", "2023", "Yoga day OM dated 16.06.2023", "https://cooperation.gov.in/sites/default/files/2023-06/yoga%20day%20order_merged.pdf"],
				["16", "Jun", "2023", "Outreach & Dessemination Workshop", "https://cooperation.gov.in/sites/default/files/2023-06/workshop_new.pdf"],
				["15", "Jun", "2023", "Ministry's Notification No. A-19/1/2023-Moc dated 15th June, 2023", "https://cooperation.gov.in/sites/default/files/2023-06/Notification.pdf"],
				["15", "Jun", "2023", "Gazette Notification S.O. 1396 (Date of Issue : 21-03-2023)", "https://cooperation.gov.in/sites/default/files/2023-06/gazette%20Notification%20by%20CRCS_0001.pdf"],
				["15", "Jun", "2023", "OM No. R-11016/12/2022-I&P (Pt) (Date of Issue : 10-04-2023)", "https://cooperation.gov.in/sites/default/files/2023-06/Working%20Group%20formation%20for%20Scheme%20for%20CSMs_0001.pdf"],
			],
		},
		{
			data: [
				["17", "Jun", "2023", "News Clips", "https://cooperation.gov.in/sites/default/files/2023-06/MoC_17.06.23_2.pdf"],
				["15", "Jun", "2023", "News Clips", "https://cooperation.gov.in/sites/default/files/2023-06/MoC_15.06.2023.pdf"],
				["12", "Jun", "2023", "News Clips", "https://cooperation.gov.in/sites/default/files/2023-06/MoC_Clippings_12.06.23.pdf"],
				["11", "Jun", "2023", "News Clips", "https://cooperation.gov.in/sites/default/files/2023-06/MoC%20clippings%2011.06.23%20%281%29.pdf"],
				["10", "Jun", "2023", "News Clips", "https://cooperation.gov.in/sites/default/files/2023-06/Ministry_of_Cooperation_10.06.2023.pdf"],
			],
		},
	];

	const [whatsNewIndex, setWhatsNewIndex] = useState(0);

	return (
		<>
			<Navbar />
			<div className="bg-white mt-3 p-5 px-10 w-full mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl mx-auto flex flex-col-reverse lg:flex-row gap-5 h-fit transition-all duration-500">
				<div className="lg:w-[70vw] w-full">
					<div className="border-2 border-primary-600 p-4 rounded-xl shadow-lg ">
						<p className="md:text-xl text-lg font-semibold text-primary-700 -900">Multi State Cooperative Societies ACT, 2002</p>
					</div>
					<p className="text-justify my-5 px-4">
						An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government. In order to achieve the objective The <strong>Multi State Cooperative Societies Bill</strong> was introduced in the Parliament.The bill having been passed by both the Houses of Parliament received the assent of the
						President on 3rd July 2002 and it came on the Statute Book as The Multi State Cooperative Societies ACT 2002 (39 of 2002).
					</p>
					<div className="border-2 border-primary-600 p-4 rounded-t-xl shadow-lg ">
						<p className="md:text-xl text-lg font-semibold text-primary-700 -900">What's New </p>
					</div>
					{/* <div className="flex flex-col items-center justify-center">
						<div className="w-full flex">
							<button className={`w-full border border-primary py-2 hover:bg-gray-400 ${whatsNewIndex === 0 ? "bg-white" : "bg-gray-300"}`}>Press Release</button>
							<button className={`w-full border border-primary py-2 hover:bg-gray-400 ${whatsNewIndex === 1 ? "bg-white" : "bg-gray-300"}`}>Circulars</button>
							<button className={`w-full border border-primary py-2 hover:bg-gray-400 ${whatsNewIndex === 2 ? "bg-white" : "bg-gray-300"}`}>Media</button>
						</div>
						<div className="w-full">
							{newData[whatsNewIndex].data.map((data, i) => (
								<div></div>
							))}
						</div>
					</div> */}
					<marquee className="text-justify my-5 px-4 w-full max-h-[500px]" behavior="scroll" direction="down">
						<ul className="list-disc">
							{newsData.map((item, index) => (
								<li key={index} className="hover:font-semibold transition-all ">
									<a href={item[0]}>{item[1]}</a>
								</li>
							))}
						</ul>
					</marquee>
					<div className="h-fit w-full grid grid-col-2 my-5 transition-all">
						<div className="flex flex-wrap gap-2 w-full h-auto transition-all">
							{societyData.map((data, index) => (
								<p
									onClick={() => {
										let tempData = {
											labels: [],
											datasets: [
												{
													label: "# of Societies",
													data: [],
													backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
												},
											],
										};
										console.log(data["states"]);
										for (let i = 0; i < data["states"].length; i++) {
											tempData.labels.push(data["states"][i]["state"]);
											tempData.datasets[0].data.push(data["states"][i]["count"]);
										}
										setChartData(tempData);
									}}
									key={index}
									className="bg-gradient-to-tr from-primary-100 to-primary-200 hover:scale-110 border-2 border-primary-500 mb-1 rounded-lg px-2 transition-all cursor-pointer"
								>
									{data.type}
								</p>
							))}
						</div>
						<div className="w-full h-[30rem] grid grid-cols-2 transition-all">
							<Pie data={chartData} className="!w-full !h-auto" />
							<div className="flex flex-col items-center">
								<p className="text-primary-500 font-bold text-xl">State wise Cooperatives</p>
								<img src="/images/indiaMap.svg" alt="" className="w-full h-auto object-contain" />
							</div>
						</div>
					</div>
				</div>
				<div id="latestNews" className="w-full lg:w-[30vw] flex flex-row gap-5 lg:gap-5 lg:flex-col overflow-x-scroll noScrollBar px-2 snap-proximity snap-x drop-shadow-lg scroll-smooth">
					{latestData.map((data, index) => (
						<LatestNews key={index} data={data} />
					))}
				</div>
			</div>
			<Footer />
			<div className="group w-10 hover:w-32 h-14 hover:h-96 overflow-hidden bg-gradient-to-br from-primary-500  to-transparent backdrop-blur-xl shadow-xl fixed top-32 right-0 rounded-l-xl transition-all duration-300">
				<svg fill="#000000" width="20px" height="20px" className="absolute top-4 left-2 rotate-180 transition-all duration-300 group-hover:rotate-0" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
				</svg>
				<div className="flex flex-col items-center justify-center h-full w-full">
					<p className="text-white text-lg font-semibold">Themes</p>
					<div className="grid grid-cols-2 mt-3 items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
						<button
							onClick={() => {
								let color = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#f9a8d4] to-[#db2777] shadow-lg"
						></button>
						<button
							onClick={() => {
								let color = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#f0abfc] to-[#c026d3] shadow-lg"
						></button>
						<button
							onClick={() => {
								let color = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#c4b5fd] to-[#7c3aed] shadow-lg"
						></button>
						<button
							onClick={() => {
								let color = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#93c5fd] to-[#2563eb] shadow-lg"
						></button>
						<button
							onClick={() => {
								let color = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#6ee7b7] to-[#059669] shadow-lg"
						></button>
						<button
							onClick={() => {
								let color = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#bef264] to-[#65a30d] shadow-lg"
						></button>
						<button
							onClick={() => {
								let color = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#fcd34d] to-[#d97706] shadow-lg"
						></button>
						<button
							onClick={() => {
								let color = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" };
								document.documentElement.style.setProperty("--primary-50", color[50]);
								document.documentElement.style.setProperty("--primary-100", color[100]);
								document.documentElement.style.setProperty("--primary-200", color[200]);
								document.documentElement.style.setProperty("--primary-300", color[300]);
								document.documentElement.style.setProperty("--primary-400", color[400]);
								document.documentElement.style.setProperty("--primary-500", color[500]);
								document.documentElement.style.setProperty("--primary-600", color[600]);
								document.documentElement.style.setProperty("--primary-700", color[700]);
								document.documentElement.style.setProperty("--primary-800", color[800]);
								document.documentElement.style.setProperty("--primary-900", color[900]);
								document.documentElement.style.setProperty("--primary-950", color[950]);
							}}
							className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#fca5a5] to-[#dc2626] shadow-lg"
						></button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
