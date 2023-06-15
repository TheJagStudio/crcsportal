import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

// Data
import { searchRecord } from "../Variables/Variables";

const AllRegSocieties = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className={`border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto`}>
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">List of Registered Societies</p>
				</div>
				<Table rowLimit={100} columns={["Sr", "Name of the Society", "Address", "State/UT", "District Name", "Date", "Type Name"]} data={searchRecord} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</>
	);
};

export default AllRegSocieties;
