import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { societyLiquidation } from "../Variables/Variables";

const LiquidationList = () => {
	return (
		<div>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Liquidation List</p>
				</div>
				<Table rowLimit={30} columns={["S No", "Name of Society", "State", "Name Of Liquidator", "Date of Appointment Order", "Liquidation Validity Date", "Status"]} data={societyLiquidation} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
			</div>
			<Footer />
		</div>
	);
};

export default LiquidationList;
