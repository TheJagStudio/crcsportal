import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const StateRegistrar = () => {



	return (
		<>
			<Navbar />
			<div className="p-5 w-full">
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto">
					<p className="md:text-xl text-lg font-semibold text-primary-700 text-center capitalize">List Of Registrars of States/UTs</p>
				</div>
				<div className="border-2 border-primary-600 p-4 py-3 rounded-xl shadow-lg lg:w-[85%] w-full mx-auto mt-5">
					<div className='grid grid-cols-2 [&>*:nth-child(9)]:border-transparent'>
						{Array.from(Array(10).keys()).map((item, index) => (
							<div className='flex flex-col items-center border-b-2 border-primary-500 py-3 last:border-transparent' key={index}>
								<p className='font-bold uppercase'>ANDHRA PRADESH</p>
								<p className='text-center w-[70%]'>Commissioner & Registrar of Cooperative Societies, 5th Floor, Gruhakalpa, Mojam Jahi  Road, Hyderabad - 500001, Andhra Pradesh</p>
								<p>Tel: 040- 24613043,</p>
								<p>FAX :040-24613041</p>
								<p>Email : ccandress@ap.gov.in</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default StateRegistrar