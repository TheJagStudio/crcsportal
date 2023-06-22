import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { complain, oldComplaints } from "../Variables/Variables"

const Complaints = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">COMPLAINTS & ISSUES</p>
				</div>
				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					document.getElementById("complaintsTable").classList.remove("max-h-0")
					document.getElementById("complaintsTable").classList.add("max-h-full")
					document.getElementById("oldComplaintsTable").classList.add("max-h-0")
					document.getElementById("oldComplaintsTable").classList.remove("max-h-full")
				}}>
					<p className='text-white font-bold'>Complaints & Other Issues</p>
				</div>
				<div className="flex">
					<div>
						<div className="max-h-0 overflow-hidden transition-all duration-300" id="complaintsTable">
							<Table rowLimit={100} columns={["S No", "Subject of the Topic", "Issued Date", "Download File"]} data={complain} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
						</div>
					</div>
				</div>
				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					document.getElementById("oldComplaintsTable").classList.remove("max-h-0")
					document.getElementById("oldComplaintsTable").classList.add("max-h-full")
					document.getElementById("complaintsTable").classList.add("max-h-0")
					document.getElementById("complaintsTable").classList.remove("max-h-full")
				}}>
					<p className='text-white font-bold'>Complaints & Other Issue (old)</p>
				</div>
				<div className="flex">
					<div>
						<div className="max-h-0 overflow-hidden transition-all duration-300" id="oldComplaintsTable">
							<Table rowLimit={100} columns={["Particulars", "Dated"]} data={oldComplaints} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Complaints;
