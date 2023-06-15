import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { banks } from "../Variables/Variables";

const Bank = () => {
	return (
		<div>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">List of Banks registered under MSCS Act, 2002</p>
				</div>
				<Table rowLimit={30} columns={["S No", "Name of Bank", "Address", "State Name", "District Name"]} data={banks} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</div>
	);
};

export default Bank;
