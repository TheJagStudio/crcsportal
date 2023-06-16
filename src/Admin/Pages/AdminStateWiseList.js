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
								<div className='grid grid-cols-2 gap-5 mt-3'>
									<div className='w-full'>
										<p className='text-white font-bold'>Enter Name Of The Society</p>
										<input
											type='text'
											placeholder='Name of society'
											className='my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 w-full placeholder:text-white'
										/>
									</div>
									<div className='w-full'>
										<p className='text-white font-bold'>Select File</p>
										<div className='relative my-3 bg-primary-400 border-2 border-primary-800 rounded-lg px-3 py-2 cursor-pointer'>
											<p className='text-white truncate' id='fileInputName'>Select File</p>
											<input
												type='file'
												className='absolute top-1/2 -translate-y-1/2 left-0 opacity-0' id='fileInput'
												onInputCapture={() => {
													let imageInput = document.getElementById("fileInput");
													imageInput.addEventListener("change", () => {
														if (imageInput.files.length > 0) {
															const fileName = document.getElementById("fileInput").files[0].name;
															document.getElementById("fileInputName").innerHTML = fileName;
														}
													});
												}}
											/>
										</div>
									</div>
								</div>
								<div className='my-3'>
									<p className='text-white font-bold'>Enter Address</p>
									<textarea type='text' placeholder='Address' className='my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 w-full placeholder:text-white' rows="5" />
								</div>
								<div className='grid grid-cols-2 gap-5 my-3'>
									<div className='w-full'>
										<p className='text-white font-bold'>Select State</p>
										<select className="my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 w-full">
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
									<div className='w-full'>
										<p className='text-white font-bold'>Select District</p>
										<select className="my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 w-full">
											<option selected disabled>
												--Select District--
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
								<div className='grid grid-cols-3 gap-5 my-3 mb-5'>
									<div className='w-full'>
										<p className='text-white font-bold'>Enter Date of Registration</p>
										<input type='text' placeholder='DD/MM/YYYY' className='my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 w-full placeholder:text-white' />
									</div>
									<div className='w-full'>
										<p className='text-white font-bold'>Enter Area of Operation</p>
										<input type='text' placeholder='Area of Operation' className='my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 w-full placeholder:text-white' />
									</div>
									<div className='w-full'>
										<p className='text-white font-bold'>Select Sector Type</p>
										<select className="my-3 form-input outline-none peer rounded-lg border-2 border-primary-800 bg-primary-400 text-white px-3 py-2 w-full">
											<option selected disabled>
												--Select Sector--
											</option>
											<option value="credit">Credit</option>
											<option value="agro">Agro</option>
											<option value="healthhospital">Health/Hospital</option>
											<option value="federation">Federation</option>
											<option value="housing">Housing</option>
											<option value="tourism">Tourism</option>
											<option value="fisheries">Fisheries</option>
											<option value="construction">Construction</option>
										</select>
									</div>
								</div>
								<div className='w-full flex items-center justify-center gap-5 my-3'>
									<div className='bg-primary-400 py-2 px-10 rounded-lg text-white font-bold border-2 border-primary-800 cursor-pointer hover:bg-primary-700'>
										<p>Submit</p>
									</div>
									<div className='bg-primary-400 py-2 px-10 rounded-lg text-white font-bold border-2 border-primary-800 cursor-pointer hover:bg-primary-700'>
										<p>Cancel</p>
									</div>
								</div>
							</div>
						</TabContent>
						<TabContent id="tab2" activeTab={activeTab}>
							<div className='border-2 border-primary-800 bg-gradient-to-br from-primary-200 to-primary-300 p-4 w-full rounded-lg'>
								<Table rowLimit={25} columns={["Sr No", "State / UT Name", "No. of Societies"]} data={stateWiseList} classes={"p-4 py-3 lg:w-[85%] w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
							</div>
						</TabContent>
					</div>
				</div>
			</div>
		</>
	)
}

export default AdminStateWiseList