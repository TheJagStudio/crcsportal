import React, { useState } from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import TabNavItem from '../Components/TabNavItem'
import TabContent from '../Components/TabContent'
import Table from "../../Components/Table/Table";
import { stateWiseList } from "../../Variables/Variables";
const AdminStateWiseList = () => {
	const [activeTab, setActiveTab] = useState("tab1");

	return (
		<>
			<AdminSidebar />
			<AdminNavbar />
			<div className='ml-[4rem] mt-[5rem] p-4'>
				<div className='p-4'>
					<ul className='grid grid-cols-2 w-[30%] text-center overflow-hidden'>
						<TabNavItem title="Form" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
						<TabNavItem title="Data" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
					</ul>
					<div>
						<TabContent id="tab1" activeTab={activeTab}>
							<div className='border-2 border-primary-800 bg-gradient-to-br from-primary-200 to-primary-300 p-4 w-full rounded-lg rounded-tl-none'>
								<p className='text-primary-800 font-bold text-xl text-center'>Enter Or Update Data</p>
								<div>
									{/* <div className='bg-primary-500 w-96 py-2 px-6 rounded-lg text-white transition-all duration-300'>
										<div className='flex items-center justify-between cursor-pointer' onClick={() => {
											document.getElementById("stateDropdown").classList.toggle("max-h-0")
											document.getElementById("stateDropdown").classList.toggle("max-h-full")
											document.getElementById("stateDropdown").classList.toggle("my-2")
											document.getElementById("stateDropdownArrow").classList.toggle("rotate-180")
										}}>
											<p>{activeState}</p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={20}
												height={20}
												fill="currentColor"
												className="bi bi-chevron-down transition-all duration-300"
												viewBox="0 0 16 16"
												id='stateDropdownArrow'
											>
												<path
													fillRule="evenodd"
													d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
												/>
											</svg>
										</div>
										<div className='flex w-full '>
											<div className='w-full'>
												<ul className='w-full max-h-0 overflow-hidden flex flex-col gap-2 transition-all duration-300' id='stateDropdown'>
													{states.map((item, index) => (
														<li className='hover:bg-primary-800 bg-primary-700 rounded-lg p-2 px-6 cursor-pointer' key={index} onClick={() => {
															document.getElementById("stateDropdown").classList.toggle("max-h-0")
															document.getElementById("stateDropdown").classList.toggle("max-h-full")
															document.getElementById("stateDropdown").classList.toggle("my-2")
															document.getElementById("stateDropdownArrow").classList.toggle("rotate-180")
															setActiveState(item)
														}}>{item}</li>
													))}
												</ul>
											</div>
										</div>
									</div> */}
									<select className="my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 pl-9 w-96">
										<option selected disabled>
											--Select State--
										</option>
										<option value="ANDAMANANDNICOBAR">ANDAMAN AND NICOBAR</option>
										<option value="ANDHRAPRADESH">ANDHRA PRADESH</option>
										<option value="ARUNACHALPRADESH">ARUNACHAL PRADESH</option>
										<option value="ASSAM">ASSAM</option>
										<option value="BIHAR">BIHAR</option>
										<option value="CHANDIGARH">CHANDIGARH</option>
										<option value="CHHATTISGARH">CHHATTISGARH</option>
										<option value="DADRAANDNAGARHAVELI">DADRA AND NAGAR HAVELI</option>
										<option value="DAMANANDDIU">DAMAN AND DIU</option>
										<option value="GOA">GOA</option>
										<option value="GUJARAT">GUJARAT</option>
										<option value="HARYANA">HARYANA</option>
										<option value="HIMACHALPRADESH">HIMACHAL PRADESH</option>
										<option value="JAMMUANDKASHMIR">JAMMU AND KASHMIR</option>
										<option value="JHARKHAND">JHARKHAND</option>
										<option value="KARNATAKA">KARNATAKA</option>
										<option value="KERALA">KERALA</option>
										<option value="LAKSHADWEEP">LAKSHADWEEP</option>
										<option value="MADHYAPRADESH">MADHYA PRADESH</option>
										<option value="MAHARASHTRA">MAHARASHTRA</option>
										<option value="MANIPUR">MANIPUR</option>
										<option value="MEGHALAYA">MEGHALAYA</option>
										<option value="MIZORAM">MIZORAM</option>
										<option value="NAGALAND">NAGALAND</option>
										<option value="NEWDELHI">NEW DELHI</option>
										<option value="ODISHA">ODISHA</option>
										<option value="PONDICHERRY">PONDICHERRY</option>
										<option value="PUNJAB">PUNJAB</option>
										<option value="RAJASTHAN ">RAJASTHAN </option>
										<option value="SIKKIM">SIKKIM</option>
										<option value="TAMILNADU">TAMIL NADU</option>
										<option value="TELANGANA">TELANGANA</option>
										<option value="TRIPURA">TRIPURA</option>
										<option value="UTTARPRADESH">UTTAR PRADESH</option>
										<option value="UTTARAKHAND">UTTARAKHAND</option>
										<option value="WESTBENGAL">WEST BENGAL</option>
									</select>
								</div>
							</div>
						</TabContent>
						<TabContent id="tab2" activeTab={activeTab}>
							<div className='border-2 border-primary-800 bg-gradient-to-br from-primary-200 to-primary-300 p-4 w-full rounded-lg'>
								<Table rowLimit={25} columns={["Sr No","State / UT Name","No. of Societies"]} data={stateWiseList} classes={"p-4 py-3 lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
							</div>
						</TabContent>
					</div>
				</div>
			</div>
		</>
	)
}

export default AdminStateWiseList