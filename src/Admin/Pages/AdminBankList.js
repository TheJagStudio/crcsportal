import React, { useState, useEffect } from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";
import TabNavItem from "../Components/TabNavItem";
import TabContent from "../Components/TabContent";
import Table from "../../Components/Table/Table";

const AdminBankList = () => {
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
		fetch(process.env.REACT_APP_SERVER + "/api/societyTypeFetcher")
			.then((response) => response.json())
			.then((result) => {
				setSocietyTypes(result);
			})
			.catch((error) => console.log("error", error));
	}, []);

	function editAction(i) {
		let currentDiv = document.getElementById("action_" + i);
		let nameBank = currentDiv.parentElement.parentElement.parentElement.children[1].innerHTML;
		let address = currentDiv.parentElement.parentElement.parentElement.children[2].innerHTML;
		let state = currentDiv.parentElement.parentElement.parentElement.children[3].innerHTML;
		let district = currentDiv.parentElement.parentElement.parentElement.children[4].innerHTML;
		localStorage.setItem("bankNameSociety", nameBank);
		localStorage.setItem("bankAddress", address);
		localStorage.setItem("bankState", state);
		localStorage.setItem("bankDistrict", district);
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
					<ul className="grid grid-cols-2 w-[40%] text-center overflow-hidden">
						<TabNavItem title="Bank Form" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
						<TabNavItem title="Data Table" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
					</ul>
					<div>
						<TabContent id="tab1" activeTab={activeTab}>
							<div className="border-2 border-primary-800 bg-white p-4 w-full rounded-lg rounded-tl-none">
								<p className="text-3xl mb-7 w-full text-center font-semibold text-slate-700">Enter Or Update Data</p>
								<div className="grid grid-cols-2 gap-5 mt-3">
									<div className="w-full relative">
										<p className="text-black">Enter Name Of The Bank</p>
										<span className="relative">
											<span className="pointer-events-none absolute left-2 bottom-0.5 flex  items-center justify-center text-primary-700 peer-focus:text-primary">
												<svg width={20} height={20} fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
													<path d="M12 3.6132812L12 28L9 28L9 23L7 23L7 28L4 28L4 46L21 46L35 46L46 46L46 15L35 15L35 11.279297L32 10.279297L32 4L30 4L30 9.6113281L28 8.9453125L28 4L26 4L26 8.2792969L12 3.6132812 z M 14 6.3886719L33 12.720703L33 44L28 44L28 40.855469C29.715786 40.405591 31 38.850301 31 37C31 34.802706 29.197294 33 27 33C24.802706 33 23 34.802706 23 37C23 38.850301 24.284214 40.405591 26 40.855469L26 44L21 44L21 28L14 28L14 6.3886719 z M 16 12L16 14L22 14L22 12L16 12 z M 16 16L16 18L31 18L31 16L16 16 z M 37 19L42 19L42 22L37 22L37 19 z M 16 20L16 22L24 22L24 20L16 20 z M 26 20L26 22L31 22L31 20L26 20 z M 16 24L16 26L31 26L31 24L16 24 z M 37 24L42 24L42 27L37 27L37 24 z M 23 28L23 30L31 30L31 28L23 28 z M 37 29L42 29L42 32L37 32L37 29 z M 8 32L11 32L11 34L8 34L8 32 z M 14 32L17 32L17 34L14 34L14 32 z M 37 34L42 34L42 37L37 37L37 34 z M 8 36L11 36L11 38L8 38L8 36 z M 14 36L17 36L17 38L14 38L14 36 z M 37 39L42 39L42 42L37 42L37 39 z M 8 40L11 40L11 42L8 42L8 40 z M 14 40L17 40L17 42L14 42L14 40 z" />
												</svg>
											</span>
											<input type="text" placeholder="Name of bank" data-title="bankNameSociety" className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary" />
										</span>
									</div>
								</div>
								<div className="my-3">
									<p className="text-black">Enter Address</p>
									<textarea rows="3" placeholder="Your Address (Area, Street and PIN Code)" data-title="bankAddress" className="form-textarea outline-none mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:font-light hover:border-primary-700 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"></textarea>
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
												data-title="bankState"
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
											<select id="district" name="district" data-title="bankDistrict" className="my-3 form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-primary-700 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
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
								<Table editAction={editAction} deleteAction={deleteAction} rowLimit={25} link={process.env.REACT_APP_SERVER + "/api/bank-list/"} admin={true} columns={["S No", "Name of Bank", "Address", "State Name", "District Name", "Action"]} classes={"p-4 py-3 w-full mx-auto mt-5 overflow-x-scroll noScrollBar"} />
							</div>
						</TabContent>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminBankList;
