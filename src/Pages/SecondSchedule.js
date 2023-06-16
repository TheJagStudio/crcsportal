import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const SecondSchedule = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<p className="text-xs text-center mb-4 text-red-700 font-bold">
					THE SECOND SCHEDULE <br /> [See Section 3(r) and 116]
				</p>
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">List of National Co-operative Societies</p>
				</div>
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5">
					<ol className="list-decimal px-10 py-5">
						<li className="my-1 font-semibold">National Cooperative Land Development Banks Federation Limited, Mumbai</li>
						<li className="my-1 font-semibold">National Federation of State Cooperative Banks Limited, Mumbai</li>
						<li className="my-1 font-semibold">National Cooperative Union of India Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Agricultural Cooperative Marketing Federation of India Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Cooperative Consumer’s Federation of India Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Federation of Cooperative Sugar Factories Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Cooperative Housing Federation Limited, New Delhi</li>
						<li className="my-1 font-semibold">Indian Farmer’s Fertiliser Cooperative Limited, New Delhi</li>
						<li className="my-1 font-semibold">All India Federation of Cooperative Spinning Mills Limited, Mumbai</li>
						<li className="my-1 font-semibold">National Cooperative Dairy Federation of India Limited, Anand</li>
						<li className="my-1 font-semibold">All India Handloom Fabrics Marketing Cooperative Society Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Federation of Urban Cooperative Banks and Credit Societies Limited, New Delhi</li>
						<li className="my-1 font-semibold">Krishak Bharati Cooperative Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Federation of Fishermen’s Cooperative Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Federation of Labour Cooperative Limited, New Delhi</li>
						<li className="my-1 font-semibold">Tribal Cooperative Marketing Development Federation of India Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Cooperative Organics Limited, Anand Gujarat</li>
						<li className="my-1 font-semibold">Bharatiya Beej Sahakari Samiti Limited, New Delhi</li>
						<li className="my-1 font-semibold">National Cooperative Exports Limited, New Delhi</li>
					</ol>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SecondSchedule;
