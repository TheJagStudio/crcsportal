import React from "react";
import { Helmet } from "react-helmet";

const UserRegister = () => {
	return (
		<section className="w-full relative min-h-screen p-10 flex items-center justify-between bg-gradient-to-tl from-secondary-400 to-secondary-100">
			<Helmet>
				<title>The Central Registrar of Cooperative Societies, Ministry of Agriculture and Farmers' Welfare</title>
			</Helmet>
			{/* <div className="absolute top-0 left-0 h-full w-full">
				<div className="absolute bg-primary-400 rounded-full h-96 w-96 -top-20 left-56" />
				<div className="absolute bg-secondary-400 rounded-full h-96 w-96 bottom-20 right-56" />
				<div className="absolute bg-primary-400 rounded-full h-96 w-96 -top-20 left-56" />
			</div> */}

			<form className="w-[60%] mx-auto border-2 border-secondary-700 bg-white backdrop-blur-xl rounded-xl overflow-hidden">
				<div className="bg-gradient-to-tr from-secondary-700 to-secondary-500 p-4">
					<h1 className="text-3xl font-bold text-white w-full text-center">MSCS : Ministry of Agriculture and Farmers' Welfare</h1>
					<p className="text-xl text-white w-full text-center my-2 font-medium">Office of The Central Registrar of Cooperative Societies</p>
				</div>
				<div className="px-8 py-6">
					<p className="text-3xl mb-7 w-full text-center font-semibold text-slate-700 dark:text-navy-100">User Registration</p>
					<div className="mt-4 space-y-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<label className="block text-sm">
								<span>Select State (Head Quater)</span>
								<span className="relative mt-1.5 flex">
									<select className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
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
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 640 512">
											<path d="M336 0c-26.5 0-48 21.5-48 48v92.1l71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-3.5l73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H568V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H480V48c0-26.5-21.5-48-48-48H336zm32 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176zm160 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zM224 188.9L283.8 288H223l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512H413.5c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z" />
										</svg>
									</span>
								</span>
							</label>
							<label className="block text-sm">
								<span>Select District</span>
								<span className="relative mt-1.5 flex">
									<select className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
										<option selected disabled>
											--Select District--
										</option>
										<option value="US">United States</option>
										<option value="CA">Canada</option>
										<option value="FR">France</option>
										<option value="DE">Germany</option>
									</select>
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 640 512">
											<path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
										</svg>
									</span>
								</span>
							</label>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
							<label className="block text-sm">
								<span>Select Type / Class of the Society :</span>
								<span className="relative mt-1.5 flex">
									<select
										onChange={() => {
											document.getElementById("SocietyName").innerText = document.getElementById("SocietyType").value + " Name :";
										}}
										id="SocietyType"
										className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
									>
										<option selected disabled>
											--Select Type--
										</option>
										<option value="Agro">Agro</option>
										<option value="Construction">Construction</option>
										<option value="Consumer">Consumer</option>
										<option value="Cooperative Bank">Cooperative Bank</option>
										<option value="Credit">Credit</option>
										<option value="Dairy">Dairy</option>
										<option value="Federation">Federation</option>
										<option value="Fisheries">Fisheries</option>
										<option value="Health/Hospital">Health/Hospital</option>
										<option value="Housing">Housing</option>
										<option value="Industrial/Textile">Industrial/Textile</option>
										<option value="Marketing">Marketing</option>
										<option value="Multi Purpose">Multi Purpose</option>
										<option value="National Federation">National Federation</option>
										<option value="Others">Others</option>
										<option value="Technical">Technical</option>
										<option value="Tourism">Tourism</option>
										<option value="Transport">Transport</option>
										<option value="Welfare">Welfare</option>
									</select>
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.4em" viewBox="0 0 5120 5120">
											<g fill="currentColor">
												<g>
													<path d="M2271 5042 c-54 -27 -72 -59 -83 -153 -18 -152 -69 -262 -160 -345 -195 -179 -486 -184 -685 -11 -66 56 -108 72 -160 58 -53 -14 -417 -379 -428 -428 -11 -52 3 -87 57 -155 89 -111 128 -213 128 -333 0 -233 -151 -436 -368 -496 -36 -11 -89 -19 -117 -19 -62 0 -113 -24 -142 -69 -21 -30 -23 -46 -23 -151 0 -101 3 -119 18 -133 17 -15 70 -17 558 -17 416 0 544 3 557 13 13 9 20 37 27 102 53 465 371 836 825 962 93 26 113 28 285 28 171 0 193 -2 285 -28 200 -55 376 -159 517 -305 179 -187 278 -395 308 -647 8 -70 16 -104 28 -112 21 -17 1082 -19 1113 -3 17 10 19 22 19 133 0 103 -3 127 -20 154 -30 49 -62 65 -155 74 -192 20 -328 108 -413 267 -99 186 -76 412 58 567 79 91 89 142 41 216 -15 24 -102 117 -192 206 -132 129 -172 163 -205 172 -56 15 -99 0 -165 -55 -29 -26 -88 -63 -129 -83 -70 -33 -83 -36 -186 -39 -97 -4 -119 -1 -181 20 -200 70 -319 219 -347 437 -15 113 -30 145 -87 173 -30 16 -66 18 -289 18 -223 0 -259 -2 -289 -18z" />
													<path d="M2407 3404 c-154 -37 -295 -141 -386 -283 -69 -108 -113 -285 -79 -319 9 -9 160 -12 620 -12 l608 0 14 23 c13 19 13 32 1 97 -45 234 -242 440 -475 494 -80 19 -225 19 -303 0z" />
													<path d="M270 2552 c-46 -14 -50 -28 -50 -187 0 -83 -3 -155 -7 -158 -3 -4 -32 18 -64 48 -32 30 -67 55 -78 55 -31 0 -61 -35 -61 -71 0 -27 17 -49 108 -141 100 -103 145 -138 173 -138 7 0 70 57 141 127 141 140 152 162 102 202 -40 32 -60 26 -125 -36 l-59 -56 0 154 c0 120 -3 159 -15 176 -16 22 -41 32 -65 25z" />
													<path d="M4815 2550 c-11 -5 -73 -62 -137 -127 -127 -129 -138 -151 -95 -191 36 -34 62 -27 123 30 30 28 57 49 60 45 10 -10 -25 -275 -52 -395 -54 -240 -166 -504 -302 -712 -341 -521 -865 -864 -1492 -975 -128 -23 -445 -31 -591 -16 -271 28 -548 112 -789 238 -506 264 -894 718 -1074 1254 -19 55 -42 109 -52 120 -36 40 -108 8 -106 -47 2 -68 116 -352 204 -509 138 -246 354 -503 563 -672 267 -216 586 -376 911 -459 688 -174 1414 -28 1984 400 119 89 319 282 415 401 292 362 483 837 512 1278 3 54 9 100 13 102 4 2 31 -20 60 -50 31 -31 63 -55 75 -55 36 0 65 28 65 63 0 28 -16 49 -122 153 -68 67 -130 124 -138 126 -8 3 -24 2 -35 -2z" />
													<path d="M1520 2350 c-20 -20 -20 -33 -20 -670 l0 -650 180 0 180 0 0 670 0 670 -160 0 c-147 0 -162 -2 -180 -20z" />
													<path d="M2020 1933 l0 -438 338 -91 c391 -107 375 -107 380 -3 4 75 27 109 76 109 16 0 188 -43 381 -95 193 -52 363 -95 378 -95 16 0 30 8 37 19 6 13 10 190 10 505 0 473 -1 487 -20 506 -20 20 -33 20 -800 20 l-780 0 0 -437z m341 -133 c17 -9 19 -22 19 -100 0 -104 -5 -110 -90 -110 -85 0 -90 6 -90 110 0 74 3 91 18 99 22 14 118 14 143 1z m240 0 c17 -9 19 -22 19 -104 0 -76 -3 -95 -16 -100 -28 -11 -130 -6 -142 6 -8 8 -12 45 -12 100 0 72 3 89 18 97 22 14 108 14 133 1z m470 0 c17 -9 19 -22 19 -98 0 -55 -4 -92 -12 -100 -7 -7 -39 -12 -74 -12 -85 0 -94 10 -94 110 0 98 10 110 86 110 31 0 64 -5 75 -10z m253 -6 c12 -11 16 -36 16 -94 0 -98 -10 -110 -86 -110 -89 0 -94 6 -94 110 0 104 4 109 92 110 38 0 62 -5 72 -16z" />
													<path d="M1500 829 c0 -90 -2 -89 178 -89 110 0 162 4 170 12 7 7 12 38 12 70 l0 58 -180 0 -180 0 0 -51z" />
												</g>
											</g>
										</svg>
									</span>
								</span>
							</label>

							<label className="block text-sm col-span-2">
								<span id="SocietyName">Agro Name :</span>
								<span className="relative mt-1.5 flex">
									<select className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
										<option selected disabled>
											--Select Type--
										</option>
										<option value="US">United States</option>
										<option value="CA">Canada</option>
										<option value="FR">France</option>
										<option value="DE">Germany</option>
									</select>
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 576 512">
											<path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z" />
										</svg>
									</span>
								</span>
							</label>
						</div>

						<label className="block text-sm">
							<span>Complete Registered Address (with PIN code)</span>
							<textarea rows="3" placeholder="Your Address (Area, Street and PIN Code)" className="form-textarea outline-none mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"></textarea>
						</label>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<label className="block text-sm">
								<span>PAN No.</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter PAN No." type="text" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 576 512">
											<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
										</svg>
									</span>
								</span>
							</label>
							<label className="block text-sm">
								<span>TAN No.</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter TAN No." type="text" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 576 512">
											<path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z" />
										</svg>
									</span>
								</span>
							</label>
						</div>

						<label className="block text-sm">
							<span>Name of Authorized Officer</span>
							<span className="relative mt-1.5 flex">
								<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Name" type="text" />
								<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.1em" viewBox="0 0 448 512">
										<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
									</svg>
								</span>
							</span>
						</label>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<label className="block text-sm">
								<span>Designation</span>
								<span className="relative mt-1.5 flex">
									<select className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
										<option selected disabled>
											Choose a country
										</option>
										<option value="US">United States</option>
										<option value="CA">Canada</option>
										<option value="FR">France</option>
										<option value="DE">Germany</option>
									</select>
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 640 512">
											<path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
										</svg>
									</span>
								</span>
							</label>
							<label className="block text-sm">
								<span>No. of Authorized Officer</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Mobile No." type="text" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 384 512">
											<path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
										</svg>
									</span>
								</span>
							</label>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<label className="block text-sm">
								<span>Email Id</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Email Id" type="email" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 512 512">
											<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
										</svg>
									</span>
								</span>
							</label>
							<label className="block text-sm">
								<span>Service Tax No.</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Service Tax No." type="email" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 448 512">
											<path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" />
										</svg>
									</span>
								</span>
							</label>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<label className="block text-sm">
								<span>Password</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Password" type="password" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512">
											<path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
										</svg>
									</span>
								</span>
							</label>
							<label className="block text-sm mb-5">
								<span>Confirm Password</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please re-enter Password" type="password" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512">
											<path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
										</svg>
									</span>
								</span>
							</label>
						</div>

						<div className="block w-full text-center pb-3">
							<button type="submit" class="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-sm px-10 py-3  text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800">
								Register new account
							</button>
						</div>

						<p className="text-sm w-full text-center text-red-500 select-none">
							* If you have not recieved OTP within 1 minute then{" "}
							<span
								onClick={() => {
									window.location.reload();
								}}
								className="underline hover:text-red-700 hover:font-bold cursor-pointer"
							>
								Click here
							</span>
							. *
						</p>
					</div>
				</div>
			</form>
		</section>
	);
};

export default UserRegister;
