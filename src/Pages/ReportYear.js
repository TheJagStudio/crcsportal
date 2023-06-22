import React, { useState, useRef, useEffect } from "react";
import { Grid } from "gridjs";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// Data
import { reportYear } from "../Variables/Variables";

const ReportYear = () => {
	const [currState, setCurrState] = useState("All States");

	const wrapperRef = useRef(null);

	const grid = new Grid({
		columns: ["S.No", "Year", "No. of Societies"],
		search: true,
		sort: true,
		pagination: {
			limit: 25,
		},
		data: reportYear,
		className: {
			td: "w-10 py-2 border-2 bg-white text-sm text-center border-primary-500  px-2",
			th: "text-white py-3 first:rounded-tl-xl last:rounded-tr-xl font-semibold text-center whitespace-nowrap",
			thead: "bg-gradient-to-tr from-primary-600 to-primary-700 py-2",
			table: "overflow-hidden shadow-xl",
			search: "bg-white border-2 border-primary-500 rounded-lg px-2 py-1 my-3 mb-5 w-max !outline-none",
			input: "!outline-none focus:outline-none",
			container: "",
			header: "",
			footer: "border-2 border-t-0 border-primary-500 rounded-xl rounded-t-none p-3 bg-gradient-to-br from-primary-600 to-primary-700",
			sort: "text-white bg-white",
			pagination: "flex lg:flex-row flex-col gap-4 lg:gap-0 items-center justify-between",
			paginationSummary: "border border-white p-1 px-3 text-sm rounded-lg text-white",
			paginationButton: "bg-primary-300 text-sm p-1 px-3 rounded-lg mx-2 border-2 border-transparent my-2",
			paginationButtonNext: "bg-primary-300 text-sm p-1 lg:px-3 rounded-lg",
			paginationButtonCurrent: "bg-primary-500 text-sm p-1 px-3 rounded-lg mx-4 text-white font-bold border-2 border-white",
			paginationButtonPrev: "bg-primary-300 text-sm p-1 lg:px-3 rounded-lg",
			loading: "",
			notfound: "",
			error: "",
		},
	});

	useEffect(() => {
		grid.render(wrapperRef.current);
	});

	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg w-[85%] mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Year wise registered societies from 1986 onwards under MSCS, 2002</p>
				</div>
				<div className="border-2 border-primary-600 p-4 py-5 rounded-xl shadow-lg w-[85%] mx-auto mt-5 flex flex-col items-center justify-start gap-3">
					<div className="flex items-center justify-center gap-2">
						<p>
							List of societies for <span className="!capitalize font-medium">{currState}</span>
						</p>
						{/* Select */}
						<label className="text-sm">
							<span className="relative flex">
								<select
									onChange={() => {
										setCurrState(document.querySelector("#socState").value);
									}}
									id="socState"
									className="form-input outline-none peer w-full rounded-lg border border-primary-500 bg-transparent px-3 py-2 pl-9 placeholder:font-light "
								>
									<option selected value="All States">
										All States
									</option>
									<option value="ANDAMAN AND NICOBAR">ANDAMAN AND NICOBAR</option>
									<option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
									<option value="ARUNACHAL PRADESH">ARUNACHAL PRADESH</option>
									<option value="ASSAM">ASSAM</option>
									<option value="BIHAR">BIHAR</option>
									<option value="CHANDIGARH">CHANDIGARH</option>
									<option value="CHHATTISGARH">CHHATTISGARH</option>
									<option value="DADRA AND NAGAR HAVELI">DADRA AND NAGAR HAVELI</option>
									<option value="DAMAN AND DIU">DAMAN AND DIU</option>
									<option value="GOA">GOA</option>
									<option value="GUJARAT">GUJARAT</option>
									<option value="HARYANA">HARYANA</option>
									<option value="HIMACHAL PRADESH">HIMACHAL PRADESH</option>
									<option value="JAMMU AND KASHMIR">JAMMU AND KASHMIR</option>
									<option value="JHARKHAND">JHARKHAND</option>
									<option value="KARNATAKA">KARNATAKA</option>
									<option value="KERALA">KERALA</option>
									<option value="LAKSHADWEEP">LAKSHADWEEP</option>
									<option value="MADHYA PRADESH">MADHYA PRADESH</option>
									<option value="MAHARASHTRA">MAHARASHTRA</option>
									<option value="MANIPUR">MANIPUR</option>
									<option value="MEGHALAYA">MEGHALAYA</option>
									<option value="MIZORAM">MIZORAM</option>
									<option value="NAGALAND">NAGALAND</option>
									<option value="NEWDELHI">NEW DELHI</option>
									<option value="ODISHA">ODISHA</option>
									<option value="PONDICHERRY">PONDICHERRY</option>
									<option value="PUNJAB">PUNJAB</option>
									<option value="RAJASTHAN ">RAJASTHAN </option>
									<option value="SIKKIM">SIKKIM</option>
									<option value="TAMILNADU">TAMIL NADU</option>
									<option value="TELANGANA">TELANGANA</option>
									<option value="TRIPURA">TRIPURA</option>
									<option value="UTTARPRADESH">UTTAR PRADESH</option>
									<option value="UTTARAKHAND">UTTARAKHAND</option>
									<option value="WESTBENGAL">WEST BENGAL</option>
								</select>
								<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-500 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 640 512">
										<path d="M336 0c-26.5 0-48 21.5-48 48v92.1l71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-3.5l73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H568V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H480V48c0-26.5-21.5-48-48-48H336zm32 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176zm160 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zM224 188.9L283.8 288H223l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512H413.5c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z" />
									</svg>
								</span>
							</span>
						</label>
					</div>
					<div className="w-[70%] mx-auto overflow-x-scroll noScrollBar drop-shadow-lg" ref={wrapperRef}></div>
					<p className="text-red-700 text-sm font-semibold mt-3">** Note : 167 No. of registered societies under MSCS, 2002 before 1986 and 9 Societies had been deregistered after 1986</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ReportYear;
