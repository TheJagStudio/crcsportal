import React, { useState, useEffect } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";
import TabNavItem from "../Components/TabNavItem";
import TabContent from "../Components/TabContent";
import Table from "../../Components/Table/Table";

const AdminRecievedApplication = () => {
	const [activeTab, setActiveTab] = useState("tab1");
	const [states, setStates] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [societyTypes, setSocietyTypes] = useState([]);
	useEffect(() => {
		fetch(process.env.REACT_APP_SERVER + "/api/stateFetcher")
			.then((response) => response.json())
			.then((result) => {
				setStates(result);
			})
			.catch((error) => console.log("error", error));
		fetch(process.env.REACT_APP_SERVER + "/api/societyTypeFetcher?typeCode=application")
			.then((response) => response.json())
			.then((result) => {
				setSocietyTypes(result);
			})
			.catch((error) => console.log("error", error));
	}, []);

	function editAction(i) {
		let currentDiv = document.getElementById("action_" + i);
		let nameApplication = currentDiv.parentElement.parentElement.parentElement.children[1].innerHTML;
		let state = currentDiv.parentElement.parentElement.parentElement.children[2].innerHTML;
		let district = currentDiv.parentElement.parentElement.parentElement.children[3].innerHTML;
		let type = currentDiv.parentElement.parentElement.parentElement.children[4].innerHTML;
		let receivedDate = currentDiv.parentElement.parentElement.parentElement.children[5].innerHTML;
		let disposalDate = currentDiv.parentElement.parentElement.parentElement.children[6].innerHTML;
		localStorage.setItem("appNameSociety", nameApplication);
		localStorage.setItem("appState", state);
		localStorage.setItem("appDistrict", district);
		localStorage.setItem("appReceivedDate", receivedDate);
		localStorage.setItem("appDisposalDate", disposalDate);
		localStorage.setItem("appType", type);
		document.getElementById("tab1_NavTab").click();
		setTimeout(() => {
			let inputs = document.getElementsByTagName("input");
			let selects = document.getElementsByTagName("select");
			let textareas = document.getElementsByTagName("textarea");
			for (let i = 0; i < inputs.length; i++) {
				if (inputs[i].type === "text") {
					inputs[i].value = localStorage.getItem(inputs[i].getAttribute("data-title"));
				} else if (inputs[i].type === "date") {
					let date = localStorage.getItem(inputs[i].getAttribute("data-title"));
					if (date !== null) {
						if (date.includes("-")) {
							inputs[i].value = date.split("-")[2] + "-" + date.split("-")[1] + "-" + date.split("-")[0];
						} else {
							inputs[i].value = "";
						}
					}
				}
			}
			for (let i = 0; i < selects.length; i++) {
				selects[i].value = localStorage.getItem(selects[i].getAttribute("data-title"));
			}
			for (let i = 0; i < textareas.length; i++) {
				textareas[i].value = localStorage.getItem(textareas[i].getAttribute("data-title"));
			}
			if (district !== "") {
				let districtSelect = document.getElementById("district");
				let newOption = document.createElement("option");
				newOption.value = district;
				newOption.innerHTML = district;
				districtSelect.appendChild(newOption);
				districtSelect.value = district;
			}
		}, 1000);
	}
	function deleteAction(i) {
		let currentDiv = document.getElementById("action_" + i);
		let nameSociety = currentDiv.parentElement.parentElement.parentElement.children[1].innerHTML;
		let state = currentDiv.parentElement.parentElement.parentElement.children[3].innerHTML;
		let district = currentDiv.parentElement.parentElement.parentElement.children[4].innerHTML;
		let type = currentDiv.parentElement.parentElement.parentElement.children[6].innerHTML;
		let tableRow = currentDiv.parentElement.parentElement.parentElement;
		tableRow.classList.add("transition-all", "duration-700", "translate-x-[100%]");
		setTimeout(() => {
			tableRow.remove();
			let newForm = new FormData();
			newForm.append("name", nameSociety);
			newForm.append("state", state);
			newForm.append("district", district);
			newForm.append("socType", type);

			fetch(process.env.REACT_APP_SERVER + "/api/deleteSociety/", {
				method: "POST",
				body: newForm,
			})
				.then((res) => res.text())
				.then((res) => {
					alert(res);
				})
				.catch((err) => console.log(err));
		}, 700);
	}

	return (
		<>
			<AdminSidebar />
			<AdminNavbar />
			<div id="mainContainer" className="pl-[6%] pt-[5rem] p-4 transition-all duration-300 bg-primary-100">
				<div className="p-4 w-[80%] mx-auto">
					<ul className="grid grid-cols-2 w-[50%] text-center overflow-hidden">
						<TabNavItem title="Application Form" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
						<TabNavItem title="Data Table" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
					</ul>
					<div>
						<TabContent id="tab1" activeTab={activeTab}>
							<div className="border-2 border-primary-800 bg-white p-4 w-full rounded-lg rounded-tl-none">
								<p className="text-3xl mb-7 w-full text-center font-semibold text-slate-700">Enter Or Update Data</p>
								<div className="grid grid-cols-2 gap-5 mt-3">
									<div className="w-full relative">
										<p className="text-black">Enter Name Of The Society</p>
										<span className="relative">
											<span className="pointer-events-none absolute left-2 bottom-0.5 flex  items-center justify-center text-primary-700 peer-focus:text-primary">
												<svg width={20} height={20} fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
													<path d="M12 3.6132812L12 28L9 28L9 23L7 23L7 28L4 28L4 46L21 46L35 46L46 46L46 15L35 15L35 11.279297L32 10.279297L32 4L30 4L30 9.6113281L28 8.9453125L28 4L26 4L26 8.2792969L12 3.6132812 z M 14 6.3886719L33 12.720703L33 44L28 44L28 40.855469C29.715786 40.405591 31 38.850301 31 37C31 34.802706 29.197294 33 27 33C24.802706 33 23 34.802706 23 37C23 38.850301 24.284214 40.405591 26 40.855469L26 44L21 44L21 28L14 28L14 6.3886719 z M 16 12L16 14L22 14L22 12L16 12 z M 16 16L16 18L31 18L31 16L16 16 z M 37 19L42 19L42 22L37 22L37 19 z M 16 20L16 22L24 22L24 20L16 20 z M 26 20L26 22L31 22L31 20L26 20 z M 16 24L16 26L31 26L31 24L16 24 z M 37 24L42 24L42 27L37 27L37 24 z M 23 28L23 30L31 30L31 28L23 28 z M 37 29L42 29L42 32L37 32L37 29 z M 8 32L11 32L11 34L8 34L8 32 z M 14 32L17 32L17 34L14 34L14 32 z M 37 34L42 34L42 37L37 37L37 34 z M 8 36L11 36L11 38L8 38L8 36 z M 14 36L17 36L17 38L14 38L14 36 z M 37 39L42 39L42 42L37 42L37 39 z M 8 40L11 40L11 42L8 42L8 40 z M 14 40L17 40L17 42L14 42L14 40 z" />
												</svg>
											</span>
											<input type="text" placeholder="Name of society" data-title="appNameSociety" className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary" />
										</span>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-5 my-3">
									<div className="w-full">
										<p className="text-black">Select State</p>
										<span className="relative flex">
											<select
												id="state"
												name="state"
												onChangeCapture={() => {
													let stateTemp = document.getElementById("state").value;
													fetch(process.env.REACT_APP_SERVER + "/api/districtFetcher?state=" + stateTemp)
														.then((response) => response.json())
														.then((result) => {
															setDistricts(result);
														})
														.catch((error) => console.log("error", error));
												}}
												data-title="appState"
												className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
											>
												<option selected disabled>
													--Select State--
												</option>
												{states.map((state, index) => (
													<option key={index} value={state}>
														{state}
													</option>
												))}
											</select>
											<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-700 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
												<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 640 512">
													<path d="M336 0c-26.5 0-48 21.5-48 48v92.1l71.4 118.4c2.5-1.6 5.4-2.5 8.6-2.5h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-3.5l73.8 122.4c12.4 20.6 12.9 46.3 1.2 67.3c-.4 .8-.9 1.6-1.4 2.3H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H568V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H480V48c0-26.5-21.5-48-48-48H336zm32 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM352 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176zm160 96c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zM224 188.9L283.8 288H223l-48 64-24.6-41.2L224 188.9zm29.4-44.2C247.1 134.3 236 128 224 128s-23.1 6.3-29.4 16.7L5.1 458.9c-6.5 10.8-6.7 24.3-.7 35.3S22 512 34.5 512H413.5c12.5 0 24-6.8 30.1-17.8s5.8-24.5-.7-35.3L253.4 144.7z" />
												</svg>
											</span>
										</span>
									</div>
									<div className="w-full">
										<p className="text-black">Select District</p>
										<span className="relative flex">
											<select id="district" name="district" data-title="appDistrict" className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
												<option selected disabled>
													--Select District--
												</option>
												{districts.map((district, index) => (
													<option key={index} value={district}>
														{district}
													</option>
												))}
											</select>
											<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-700 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
												<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 640 512">
													<path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
												</svg>
											</span>
										</span>
									</div>
								</div>
								<div className="grid grid-cols-3 gap-5 my-3 mb-5">
									<div className="w-full">
										<p className="text-black">Enter Received Date</p>
										<span className="relative">
											<span className="pointer-events-none absolute left-2 top-0 flex  items-center justify-center text-primary-700 peer-focus:text-primary">
												<svg fill="currentColor" width={20} height={20} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
													<title>{"date-line"}</title>
													<path className="clr-i-outline clr-i-outline-path-1" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z" />
													<rect className="clr-i-outline clr-i-outline-path-2" x={8} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-3" x={14} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-4" x={20} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-5" x={26} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-6" x={8} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-7" x={14} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-8" x={20} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-9" x={26} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-10" x={8} y={24} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-11" x={14} y={24} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-12" x={20} y={24} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-13" x={26} y={24} width={2} height={2} />
													<path className="clr-i-outline clr-i-outline-path-14" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z" />
													<path className="clr-i-outline clr-i-outline-path-15" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z" />
													<rect className="clr-i-outline clr-i-outline-path-16" x={13} y={6} width={10} height={2} />
													<rect x={0} y={0} width={36} height={36} fillOpacity={0} />
												</svg>
											</span>
											<input type="date" placeholder="DD/MM/YYYY" data-title="appReceivedDate" className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary" />
										</span>
									</div>
									<div className="w-full">
										<p className="text-black">Enter Disposal Date</p>
										<span className="relative">
											<span className="pointer-events-none absolute left-2 top-0 flex  items-center justify-center text-primary-700 peer-focus:text-primary">
												<svg fill="currentColor" width={20} height={20} viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
													<title>{"date-line"}</title>
													<path className="clr-i-outline clr-i-outline-path-1" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z" />
													<rect className="clr-i-outline clr-i-outline-path-2" x={8} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-3" x={14} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-4" x={20} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-5" x={26} y={14} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-6" x={8} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-7" x={14} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-8" x={20} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-9" x={26} y={19} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-10" x={8} y={24} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-11" x={14} y={24} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-12" x={20} y={24} width={2} height={2} />
													<rect className="clr-i-outline clr-i-outline-path-13" x={26} y={24} width={2} height={2} />
													<path className="clr-i-outline clr-i-outline-path-14" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z" />
													<path className="clr-i-outline clr-i-outline-path-15" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z" />
													<rect className="clr-i-outline clr-i-outline-path-16" x={13} y={6} width={10} height={2} />
													<rect x={0} y={0} width={36} height={36} fillOpacity={0} />
												</svg>
											</span>
											<input type="date" placeholder="DD/MM/YYYY" data-title="appDisposalDate" className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary" />
										</span>
									</div>
									<div className="w-full">
										<p className="text-black">Select Sector Type</p>
										<span className="relative flex">
											<select data-title="appType" id="AppType" className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
												<option selected disabled>
													--Select Type--
												</option>
												{societyTypes.map((type, index) => (
													<option key={index} value={type}>
														{type}
													</option>
												))}
											</select>
											<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-primary-700 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
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
									</div>
								</div>
								<div className="w-full flex items-center justify-center gap-5 my-3">
									<div className="bg-primary-400 py-2 px-10 rounded-lg text-white font-bold border border-transparent hover:border-primary-500 focus:border-primary-800 cursor-pointer hover:bg-primary-700">
										<p>Submit</p>
									</div>
									<div className="bg-primary-400 py-2 px-10 rounded-lg text-white font-bold border border-transparent hover:border-primary-500 focus:border-primary-800 cursor-pointer hover:bg-primary-700">
										<p>Cancel</p>
									</div>
								</div>
							</div>
						</TabContent>
						<TabContent id="tab2" activeTab={activeTab}>
							<div className="border-2 border-primary-800 bg-gradient-to-br from-primary-200 to-primary-500 p-4 w-full rounded-lg">
								<Table editAction={editAction} deleteAction={deleteAction} rowLimit={25} link={process.env.REACT_APP_SERVER + "/api/received-application"} admin={true} columns={["Sr No", "Society Name", "State Name", "District Name", "Type", "Received", "Diposal Before", "Action"]} classes={"p-4 py-3 w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
							</div>
						</TabContent>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminRecievedApplication;
