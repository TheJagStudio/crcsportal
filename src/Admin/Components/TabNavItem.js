import React from 'react'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<li onClick={handleClick} className={"py-2 md:px-5 px-2 text-sm font-bold rounded-t-lg cursor-pointer z-10 " + (activeTab === id ? "bg-primary-200 text-primary-800 border-2 border-b-0 border-primary-800" : "text-primary-800")}>
			{title}
		</li>
	)
}

export default TabNavItem