import React,{useEffect} from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";

var options = {
	colors: ["var(--primary-500)"],
	chart: {
		height: 280,
		type: "area",
		background: '#00000000',
	},
	dataLabels: {
		enabled: false
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
		show: false
	},
	xaxis: {
		labels: {
			show: false
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
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
			customIcons: []
		},
	},
};
const AdminHome = () => {

	return (
		<>
			<AdminSidebar />
			<AdminNavbar />
			<div className='ml-[4rem] mt-[5rem] p-4'>
				<div className='grid grid-rows-2 grid-flow-col gap-7'>
					{Array.from(Array(10).keys()).map((item, index) => (
						<div className='bg-gradient-to-br from-primary-100 to-primary-300 shadow rounded-lg p-4 text-primary-800 font-bold border-2 border-primary-800' key={index}>
							<p>{item + 1}0,000,00</p>
							<p className='font-normal text-sm mt-2'>Users</p>
						</div>
					))}
				</div>
				<div className='my-5 grid grid-cols-2 gap-5'>
					<div className='bg-primary-100 border-2 border-primary-800 rounded-lg p-6 px-0 pb-0 overflow-hidden'>
						<div className="mb-3 flex items-center justify-between px-6">
							<h2 className="font-semibold tracking-wide text-primary-800">
								Bandwidth Report
							</h2>
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
							<a href="#" className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Download Report</a>
						</div>
						<div className='overflow-hidden w-full '>
							<Chart
								options={options}
								series={[{
									name: "Traffic",
									data: [2, 3, 4, 7, 10, 15, 18,30,40,45,60]
								}]}
								type="area"
								height="200"
								className="scale-[1.1] scale-y-[1.3] translate-y-2"
							/>
						</div>
					</div>

					<div className='bg-primary-100 border-2 border-primary-800 rounded-lg p-6'>
						<div className="mb-3 flex items-center justify-between">
							<h2 className="font-semibold tracking-wide text-primary-800">
								Users Activity
							</h2>
							<div x-data="usePopper({placement:'bottom-end',offset:4})" className="inline-flex"></div>
							<button x-ref="popperRef" className="btn -mr-1.5 h-8 w-8 rounded-full p-0 bg-white flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
								</svg>
							</button>
						</div>
						<ol class="timeline max-w-sm">
							<li class="timeline-item">
							<div
								class="timeline-item-point rounded-full bg-primary-300 dark:bg-navy-400"
							></div>
							<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
								<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
								<p
									class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0"
								>
									User Photo Changed
								</p>
								<span class="text-xs text-primary-400 dark:text-navy-300"
									>12 minute ago</span
								>
								</div>
								<p class="py-1">John Doe changed his avatar photo</p>
							</div>
							</li>
							<li class="timeline-item">
							<div
								class="timeline-item-point rounded-full bg-primary dark:bg-accent"
							></div>
							<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
								<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
								<p
									class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0"
								>
									Video Added
								</p>
								<span class="text-xs text-primary-400 dark:text-navy-300"
									>1 hour ago</span
								>
								</div>
								<p class="py-1">Mores Clarke added new video</p>
							</div>
							</li>
							<li class="timeline-item">
							<div class="timeline-item-point rounded-full bg-success">
								<span
								class="inline-flex h-full w-full animate-ping rounded-full bg-success opacity-80"
								></span>
							</div>
							<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
								<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
								<p
									class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0"
								>
									Design Completed
								</p>
								<span class="text-xs text-primary-400 dark:text-navy-300"
									>3 hours ago</span
								>
								</div>
								<p class="py-1">
								Robert Nolan completed the design of the CRM application
								</p>
							</div>
							</li>
							<li class="timeline-item">
							<div class="timeline-item-point rounded-full bg-warning"></div>
							<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
								<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
								<p
									class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0"
								>
									ER Diagram
								</p>
								<span class="text-xs text-primary-400 dark:text-navy-300"
									>a day ago</span
								>
								</div>
								<p class="py-1">Team completed the ER diagram app</p>
							</div>
							</li>
							<li class="timeline-item">
							<div class="timeline-item-point rounded-full bg-error"></div>
							<div class="timeline-item-content flex-1 pl-4 sm:pl-8">
								<div class="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
								<p
									class="pb-2 font-medium leading-none text-primary-600 dark:text-navy-100 sm:pb-0"
								>
									Weekly Report
								</p>
								<span class="text-xs text-primary-400 dark:text-navy-300"
									>a day ago</span
								>
								</div>
								<p class="py-1">The weekly report was uploaded</p>
							</div>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	)
}

export default AdminHome