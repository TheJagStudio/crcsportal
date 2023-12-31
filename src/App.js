import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import UserRegister from "./Pages/UserRegister";
import UserLogin from "./Pages/UserLogin";

import StateWiseChart from "./Pages/StateWiseChart";
import YearWiseChart from "./Pages/YearWiseChart";
import TypeWiseChart from "./Pages/TypeWiseChart";

import StateWiseList from "./Pages/StateWiseList";
import AllRegSocieties from "./Pages/AllRegSocieties";
import RegisteredUsers from "./Pages/RegisteredUsers";
import FiledAR from "./Pages/FiledAR";
import FiledAROffline from "./Pages/FiledAROffline";
import ReminderMsg from "./Pages/ReminderMsg";

import CalenderYearWiseList from "./Pages/CalenderYearWiseList";
import FinancialYearWiseList from "./Pages/FinancialYearWiseList";

import Form1 from "./Pages/Form1";
import Form2 from "./Pages/Form2";
import Form3 from "./Pages/Form3";
import Form4 from "./Pages/Form4";
import Form5 from "./Pages/Form5";

import ModelByLaws from "./Pages/ModelByLaws";
import Checklist from "./Pages/Checklist";

import ReceivedApplication from "./Pages/ReceivedApplication";
import StatusApplication from "./Pages/StatusApplication";

import LiquidationList from "./Pages/LiquidationList";
import Bank from "./Pages/Bank";

// Footer pages
import StateRegistrar from "./Pages/StateRegistrar";
import SecondSchedule from "./Pages/SecondSchedule";
import Complaints from "./Pages/Complaints";
import OrderSheet from "./Pages/OrderSheet";
import Circular from "./Pages/Circular";
import LatestCerificate from "./Pages/LatestCerificate";
import AmendmentCertificate from "./Pages/AmendmentCertificate";
import Noticies from "./Pages/Noticies";
import RejectedOrders from "./Pages/RejectedOrders";
import FeedbackForm from "./Pages/FeedbackForm";
import Links from "./Pages/Links";
import Disclaimer from "./Pages/Disclaimer";
import Grievance from "./Pages/Grievance";
import ContactUs from "./Pages/ContactUs";

// Admin Pages
import AdminLogin from "./Admin/Pages/AdminLogin";
import AdminHome from "./Admin/Pages/AdminHome";
import AdminStateWiseList from "./Admin/Pages/AdminStateWiseList";
import AdminUserList from "./Admin/Pages/AdminUserList";
import AdminRecievedApplication from "./Admin/Pages/AdminRecievedApplication";
import AdminLiquidationList from "./Admin/Pages/AdminLiquidationList";
import AdminBankList from "./Admin/Pages/AdminBankList";
import AdminSettings from "./Admin/Pages/AdminSettings";

function App() {
	const color = [
		{ 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" },
		{ 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" },
		{ 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" },
		{ 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" },
		{ 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" },
		{ 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" },
		{ 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" },
		{ 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" },
		{ 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" },
		{ 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" },
		{ 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" },
		{ 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" },
		{ 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" },
		{ 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" },
		{ 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" },
		{ 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" },
		{ 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" },
	];
	// window.onload = () => {
	// 	localStorage.setItem("colorIndex", 0);
	// 	setInterval(() => {
	// 		let colorNew = color[localStorage.getItem("colorIndex")];
	// 		document.documentElement.style.setProperty("--primary-50", colorNew[50]);
	// 		document.documentElement.style.setProperty("--primary-100", colorNew[100]);
	// 		document.documentElement.style.setProperty("--primary-200", colorNew[200]);
	// 		document.documentElement.style.setProperty("--primary-300", colorNew[300]);
	// 		document.documentElement.style.setProperty("--primary-400", colorNew[400]);
	// 		document.documentElement.style.setProperty("--primary-500", colorNew[500]);
	// 		document.documentElement.style.setProperty("--primary-600", colorNew[600]);
	// 		document.documentElement.style.setProperty("--primary-700", colorNew[700]);
	// 		document.documentElement.style.setProperty("--primary-800", colorNew[800]);
	// 		document.documentElement.style.setProperty("--primary-900", colorNew[900]);
	// 		document.documentElement.style.setProperty("--primary-950", colorNew[950]);
	// 		if (parseInt(localStorage.getItem("colorIndex")) + 1 >= color.length) {
	// 			localStorage.setItem("colorIndex", 0);
	// 		} else {
	// 			localStorage.setItem("colorIndex", parseInt(localStorage.getItem("colorIndex")) + 1);
	// 		}
	// 		localStorage.setItem("colorIndex", localStorage.getItem("colorIndex"));
	// 	}, 5000);
	// };
	return (
		<Router>
			<Routes>
				<Route path="" element={<Homepage />} />
				<Route path="registration" element={<UserRegister />} />
				<Route path="login" exact element={<UserLogin />} />
				<Route path="state-wise-chart" exact element={<StateWiseChart />} />
				<Route path="year-wise-chart" exact element={<YearWiseChart />} />
				<Route path="type-wise-chart" exact element={<TypeWiseChart />} />
				<Route path="state-wise-list" exact element={<StateWiseList />} />
				<Route path="search-record" exact element={<AllRegSocieties />} />
				<Route path="registered-users" exact element={<RegisteredUsers />} />
				<Route path="filed-AR-New" exact element={<FiledAR />} />
				<Route path="filed-AR-Offline" exact element={<FiledAROffline />} />
				<Route path="reminder-msg" exact element={<ReminderMsg />} />
				<Route path="calender-year-wise-list" exact element={<CalenderYearWiseList />} />
				<Route path="financial-year-wise-list" exact element={<FinancialYearWiseList />} />
				<Route path="received-application" exact element={<ReceivedApplication />} />
				<Route path="status-application" exact element={<StatusApplication />} />
				<Route path="form1" exact element={<Form1 />} />
				<Route path="form2" exact element={<Form2 />} />
				<Route path="form3" exact element={<Form3 />} />
				<Route path="form4" exact element={<Form4 />} />
				<Route path="form5" exact element={<Form5 />} />
				<Route path="model-by-laws" exact element={<ModelByLaws />} />
				<Route path="checklist" exact element={<Checklist />} />
				<Route path="liquidation-list" exact element={<LiquidationList />} />
				<Route path="banks" exact element={<Bank />} />
				<Route path="state-registrar" exact element={<StateRegistrar />} />
				<Route path="second-schedule" exact element={<SecondSchedule />} />
				<Route path="complaints" exact element={<Complaints />} />
				<Route path="order-sheet" exact element={<OrderSheet />} />
				<Route path="circular" exact element={<Circular />} />
				<Route path="latest-cerificate" exact element={<LatestCerificate />} />
				<Route path="amendment-certificate" exact element={<AmendmentCertificate />} />
				<Route path="noticies" exact element={<Noticies />} />
				<Route path="orders" exact element={<RejectedOrders />} />
				<Route path="feedback" exact element={<FeedbackForm />} />
				<Route path="links" exact element={<Links />} />
				<Route path="disclaimer" exact element={<Disclaimer />} />
				<Route path="grievance" exact element={<Grievance />} />
				<Route path="contact-us" exact element={<ContactUs />} />

				<Route path="admin" element={<AdminHome />} />
				<Route path="admin/login" element={<AdminLogin />} />
				<Route path="admin/society-list" element={<AdminStateWiseList />} />
				<Route path="admin/user-list" element={<AdminUserList />} />
				<Route path="admin/recieved-applications" element={<AdminRecievedApplication />} />
				<Route path="admin/liquidation-list" element={<AdminLiquidationList />} />
				<Route path="admin/bank-list" element={<AdminBankList />} />
				<Route path="admin/settings" element={<AdminSettings />} />
			</Routes>
		</Router>
	);
}

export default App;
