import React, { useState, useEffect } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

var options = {
	colors: ["var(--primary-500)"],
	chart: {
		height: 280,
		type: "area",
		background: "#00000000",
	},
	dataLabels: {
		enabled: false,
	},
	fill: {
		colors: ["var(--primary-300)"],
		type: "solid",
	},
	stroke: {
		colors: ["var(--primary-700)"],
		width: 2,
	},
	grid: {
		show: false,
	},
	yaxis: {
		show: false,
	},
	xaxis: {
		labels: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	toolbar: {
		show: false,
		tools: {
			download: false,
			selection: false,
			zoom: false,
			zoomin: false,
			zoomout: false,
			pan: false,
			reset: false,
			customIcons: [],
		},
	},
};
const AdminHome = () => {
	const [societyData, setSocietyData] = useState([]);
	useEffect(() => {
		setInterval(() => {
			let counts = document.getElementById("counts");
			let width = counts.offsetWidth;
			counts.scrollBy(214, 0);
			if (counts.scrollLeft + width >= counts.scrollWidth) {
				counts.scrollLeft = 0;
			}
		}, 2000);
		fetch(process.env.REACT_APP_SERVER + "/api/societyCountFetcher/")
			.then((res) => res.json())
			.then((data) => {
				setSocietyData(data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<AdminSidebar />
			<AdminNavbar />
			<div id="mainContainer" className="pl-[6%] pt-[5rem] p-4 transition-all duration-300 bg-white">
				<div className="grid grid-rows-2 grid-flow-col gap-7 noScrollBar overflow-hidden overflow-x-scroll scroll-smooth" id="counts">
					{societyData.map((item, index) => (
						<div className="relative bg-gradient-to-br from-primary-100 to-primary-300 w-[200px] rounded-lg p-4 text-primary-800 font-bold border-2 border-primary-800 shadow-[0_3px_15px_0_var(--primary-200)]" key={index}>
							<div className="absolute right-3 top-3">
								<img src={"/images/" + item["type"].replace("/", "") + ".png"} className="w-8 h-8 object-contain mix-blend-darken" />
							</div>
							<p>{item["count"]}</p>
							<p className="font-normal text-sm mt-2">{item["type"]}</p>
						</div>
					))}
				</div>
				<div className="my-5 grid grid-cols-2 gap-5">
					<div className="bg-primary-100 border-2 border-primary-800 rounded-lg p-6 px-0 pb-0 overflow-hidden shadow-[0_3px_15px_0_var(--primary-200)]">
						<div className="mb-3 flex items-center justify-between px-6">
							<h2 className="font-semibold tracking-wide text-primary-800">Bandwidth Report</h2>
							<button x-ref="popperRef" className="btn -mr-1.5 h-8 w-8 rounded-full p-0 bg-white flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
								</svg>
							</button>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 px-6">
							<div className="rounded-lg border-2 border-primary-800 shadow bg-gradient-to-br from-primary-100 to-primary-300 p-4 dark:border-navy-600">
								<div className="flex justify-between  text-primary-800">
									<div>
										<span className="text-2xl font-bold text-primary-800">393</span>
										<span className="text-xs">Mb</span>
									</div>
									<p className="text-xs+">HTTP Traffic</p>
								</div>

								<div className="progress mt-3 h-1.5 bg-white rounded-lg">
									<div className="is-active relative w-8/12 overflow-hidden rounded-lg bg-primary-800"></div>
								</div>
								<div className="mt-2 flex justify-between text-xs text-primary-800">
									<p>Monthly target</p>
									<p>17%</p>
								</div>
							</div>
							<div className="rounded-lg border-2 border-primary-800 shadow bg-gradient-to-br from-primary-100 to-primary-300 p-4 dark:border-navy-600">
								<div className="flex justify-between  text-primary-800">
									<div>
										<span className="text-2xl font-bold text-primary-800">293</span>
										<span className="text-xs">Mb</span>
									</div>
									<p className="text-xs+">SMTP Traffic</p>
								</div>

								<div className="progress mt-3 h-1.5 bg-white rounded-lg">
									<div className="relative w-8/12 overflow-hidden rounded-lg bg-primary-800"></div>
								</div>
								<div className="mt-2 flex justify-between text-xs text-primary-800">
									<p>Monthly target</p>
									<p>65%</p>
								</div>
							</div>
							<div className="rounded-lg border-2 border-primary-800 shadow bg-gradient-to-br from-primary-100 to-primary-300 p-4 dark:border-navy-600">
								<div className="flex justify-between  text-primary-800">
									<div>
										<span className="text-2xl font-bold text-primary-800">293</span>
										<span className="text-xs">Mb</span>
									</div>
									<p className="text-xs+">FTP Traffic</p>
								</div>

								<div className="progress mt-3 h-1.5 bg-white rounded-lg">
									<div className="relative w-5/12 overflow-hidden rounded-lg bg-primary-800"></div>
								</div>
								<div className="mt-2 flex justify-between text-xs text-primary-800">
									<p>Monthly target</p>
									<p>79%</p>
								</div>
							</div>
							<div className="rounded-lg border-2 border-primary-800 shadow bg-gradient-to-br from-primary-100 to-primary-300 p-4 dark:border-navy-600">
								<div className="flex justify-between  text-primary-800">
									<div>
										<span className="text-2xl font-bold text-primary-800">36</span>
										<span className="text-xs">Mb</span>
									</div>
									<p className="text-xs+">POP3 Traffic</p>
								</div>

								<div className="progress mt-3 h-1.5 bg-white rounded-lg">
									<div className="is-active relative w-4/12 overflow-hidden rounded-lg bg-primary-800"></div>
								</div>
								<div className="mt-2 flex justify-between text-xs text-primary-800">
									<p>Monthly target</p>
									<p>79%</p>
								</div>
							</div>
						</div>

						<div className="mt-4 flex grow items-center justify-between text-primary-800 px-6">
							<div className="flex items-center space-x-2">
								<p className="text-xs+">Performance</p>
								<p className="">3.2%</p>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
								</svg>
							</div>
							<a href="#" className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">
								Download Report
							</a>
						</div>
						<div className="overflow-hidden w-full ">
							<Chart
								options={options}
								series={[
									{
										name: "Traffic",
										data: [2, 3, 4, 7, 10, 15, 18, 30, 40, 45, 60],
									},
								]}
								type="area"
								height="200"
								className="scale-[1.1] scale-y-[1.3] translate-y-2"
							/>
						</div>
					</div>

					<div className="bg-primary-100 border-2 border-primary-800 rounded-lg p-6 shadow-[0_3px_15px_0_var(--primary-200)]">
						<div className="mb-3 flex items-center justify-between">
							<h2 className="font-semibold tracking-wide text-primary-800">Users Activity</h2>
							<div x-data="usePopper({placement:'bottom-end',offset:4})" className="inline-flex"></div>
							<button x-ref="popperRef" className="btn -mr-1.5 h-8 w-8 rounded-full p-0 bg-white flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
								</svg>
							</button>
						</div>
						<ol class="timeline max-w-sm">
							<li class="timeline-item">
								<div class="timeline-item-point rounded-full bg-primary-300 dark:bg-navy-400"></div>
								<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
									<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
										<p class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0">User Photo Changed</p>
										<span class="text-xs text-primary-400 dark:text-navy-300">12 minute ago</span>
									</div>
									<p class="py-1">John Doe changed his avatar photo</p>
								</div>
							</li>
							<li class="timeline-item">
								<div class="timeline-item-point rounded-full bg-primary dark:bg-accent"></div>
								<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
									<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
										<p class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0">Video Added</p>
										<span class="text-xs text-primary-400 dark:text-navy-300">1 hour ago</span>
									</div>
									<p class="py-1">Mores Clarke added new video</p>
								</div>
							</li>
							<li class="timeline-item">
								<div class="timeline-item-point rounded-full bg-success">
									<span class="inline-flex h-full w-full animate-ping rounded-full bg-success opacity-80"></span>
								</div>
								<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
									<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
										<p class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0">Design Completed</p>
										<span class="text-xs text-primary-400 dark:text-navy-300">3 hours ago</span>
									</div>
									<p class="py-1">Robert Nolan completed the design of the CRM application</p>
								</div>
							</li>
							<li class="timeline-item">
								<div class="timeline-item-point rounded-full bg-warning"></div>
								<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
									<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
										<p class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0">ER Diagram</p>
										<span class="text-xs text-primary-400 dark:text-navy-300">a day ago</span>
									</div>
									<p class="py-1">Team completed the ER diagram app</p>
								</div>
							</li>
							<li class="timeline-item">
								<div class="timeline-item-point rounded-full bg-error"></div>
								<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
									<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
										<p class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0">Weekly Report</p>
										<span class="text-xs text-primary-400 dark:text-navy-300">a day ago</span>
									</div>
									<p class="py-1">The weekly report was uploaded</p>
								</div>
							</li>
						</ol>
					</div>
				</div>
			</div>
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

export default AdminHome;
