import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { hearingSheet, oldComplaints } from "../Variables/Variables"
const OrderSheet = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">HEARING ORDER SHEET</p>
				</div>
				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					document.getElementById("hearingTable").classList.remove("max-h-0")
					document.getElementById("hearingTable").classList.add("max-h-full")
					document.getElementById("oldComplaintsTable").classList.add("max-h-0")
					document.getElementById("oldComplaintsTable").classList.remove("max-h-full")
				}}>
					<p className='text-white font-bold'>Hearing Order Sheet</p>
				</div>
				<div className="flex">
					<div>
						<div className="max-h-0 overflow-hidden transition-all duration-300" id="hearingTable">
							<Table rowLimit={30} columns={["S No", "Subject of the Topic", "Date", "Download File"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} data={hearingSheet} />
						</div>
					</div>
				</div>
				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					document.getElementById("oldComplaintsTable").classList.remove("max-h-0")
					document.getElementById("oldComplaintsTable").classList.add("max-h-full")
					document.getElementById("hearingTable").classList.add("max-h-0")
					document.getElementById("hearingTable").classList.remove("max-h-full")
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

export default OrderSheet;
