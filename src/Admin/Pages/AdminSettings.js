import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";

const AdminSettings = () => {
	return (
		<>
			<AdminSidebar />
			<AdminNavbar />
			<div id="mainContainer" className="pl-[6%] pt-[5rem] p-4 transition-all duration-300 bg-primary-100"></div>
		</>
	);
};

export default AdminSettings;
