import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";

import { latestCircular, circular2017, circular2016, circular2015 } from "../Variables/Variables"
const Circular = () => {
	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">Circular / Order / Notification</p>
				</div>

				{/* latest circular */}
				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					// latest circular
					document.getElementById("hearingTable").classList.remove("max-h-0")
					document.getElementById("hearingTable").classList.add("max-h-full")

					// circular 2017
					document.getElementById("circular2017").classList.add("max-h-0")
					document.getElementById("circular2017").classList.remove("max-h-full")

					// circular 2016
					document.getElementById("circular2016").classList.add("max-h-0")
					document.getElementById("circular2016").classList.remove("max-h-full")

					// circular 2015
					document.getElementById("circular2015").classList.add("max-h-0")
					document.getElementById("circular2015").classList.remove("max-h-full")
				}}>
					<p className='text-white font-bold'>Latest Circular / Order / Notification</p>
				</div>
				<div className="flex">
					<div>
						<div className="max-h-0 overflow-hidden transition-all duration-300" id="hearingTable">
							<Table rowLimit={30} columns={["S No", "Subject of the Topic", "Issued Date", "Download File"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} data={latestCircular} />
						</div>
					</div>
				</div>

				{/* circular 2017 */}
				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					// circular 2017
					document.getElementById("circular2017").classList.remove("max-h-0")
					document.getElementById("circular2017").classList.add("max-h-full")

					// latest circular
					document.getElementById("hearingTable").classList.add("max-h-0")
					document.getElementById("hearingTable").classList.remove("max-h-full")

					// circular 2016
					document.getElementById("circular2016").classList.add("max-h-0")
					document.getElementById("circular2016").classList.remove("max-h-full")

					// circular 2015
					document.getElementById("circular2015").classList.add("max-h-0")
					document.getElementById("circular2015").classList.remove("max-h-full")
				}}>
					<p className='text-white font-bold'>Circulars : 2017</p>
				</div>
				<div className="flex">
					<div>
						<div className="max-h-0 overflow-hidden transition-all duration-300" id="circular2017">
							<Table rowLimit={30} columns={["Particulars", "Dated"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} data={circular2017} />
						</div>
					</div>
				</div>

				{/* circular 2016 */}
				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					// circular 2016
					document.getElementById("circular2016").classList.remove("max-h-0")
					document.getElementById("circular2016").classList.add("max-h-full")

					// latest circular
					document.getElementById("hearingTable").classList.add("max-h-0")
					document.getElementById("hearingTable").classList.remove("max-h-full")

					// circular 2017
					document.getElementById("circular2017").classList.add("max-h-0")
					document.getElementById("circular2017").classList.remove("max-h-full")

					// circular 2015
					document.getElementById("circular2015").classList.add("max-h-0")
					document.getElementById("circular2015").classList.remove("max-h-full")
				}}>
					<p className='text-white font-bold'>Circulars : 2016</p>
				</div>
				<div className="flex">
					<div>
						<div className="max-h-0 overflow-hidden transition-all duration-300" id="circular2016">
							<Table rowLimit={30} columns={["Particulars", "Dated"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} data={circular2016} />
						</div>
					</div>
				</div>

				{/* circular 2015 */}

				<div className='bg-primary-500 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll cursor-pointer noScrollBar' onClick={() => {
					// circular 2015
					document.getElementById("circular2015").classList.remove("max-h-0")
					document.getElementById("circular2015").classList.add("max-h-full")

					// latest circular
					document.getElementById("hearingTable").classList.add("max-h-0")
					document.getElementById("hearingTable").classList.remove("max-h-full")

					// circular 2017
					document.getElementById("circular2017").classList.add("max-h-0")
					document.getElementById("circular2017").classList.remove("max-h-full")

					// circular 2016
					document.getElementById("circular2016").classList.add("max-h-0")
					document.getElementById("circular2016").classList.remove("max-h-full")
				}}>
					<p className='text-white font-bold'>Circulars : 2015 & Other</p>
				</div>
				<div className="flex">
					<div>
						<div className="max-h-0 overflow-hidden transition-all duration-300" id="circular2015">
							<Table rowLimit={30} columns={["Particulars", "Dated"]} classes={"border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} data={circular2015} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Circular