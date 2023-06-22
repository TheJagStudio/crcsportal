import React from "react";

// Components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const TypeWiseChart = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full bg-white mt-3 px-10 mb-[39rem] lg:mb-[23rem]  shadow-2xl rounded-b-3xl">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg w-[85%] mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Registered Societies from 1986 onwards under MSCS, 2002</p>
				</div>
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar">
					<img src="/images/Chartimg3.png" alt="" className="w-full h-full rounded-lg" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default TypeWiseChart;
