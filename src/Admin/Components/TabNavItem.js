import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
	const handleClick = () => {
		setActiveTab(id);
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
	};

	return (
		<li id={id + "_NavTab"} onClick={handleClick} className={"py-2 md:px-5 px-2 text-xl font-bold rounded-t-lg cursor-pointer whitespace-nowrap z-10 " + (activeTab === id ? "bg-primary-200 text-primary-800 border-2 border-b-0 border-primary-800" : "text-primary-800")}>
			{title}
		</li>
	);
};

export default TabNavItem;
