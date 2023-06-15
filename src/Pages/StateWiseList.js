import React, { useRef, useEffect } from "react";
import { Grid } from "gridjs";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

// Data
import { stateWiseList } from "../Variables/Variables";

const StateWiseList = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">List of Registered Societies from 1986 onwards under MSCS, 2002</p>
				</div>
				<Table rowLimit={25} columns={["Sr", "Name of the Society", "Address", "State/UT", "District Name", "Date", "Type Name"]} data={stateWiseList} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</>
	);
};

export default StateWiseList;
