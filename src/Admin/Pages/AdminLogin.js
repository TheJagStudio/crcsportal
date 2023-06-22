import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AdminLogin = () => {
	const [captcha, setCaptcha] = useState("");
	const [captchaImage, setCaptchaImage] = useState("");
	async function digestMessage(message) {
		const msgUint8 = new TextEncoder().encode(message);
		const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
		return hashHex;
	}
	useEffect(() => {
		fetch(process.env.REACT_APP_SERVER + "/api/captchaFecther/")
			.then((res) => res.json())
			.then((data) => {
				setCaptcha(data.captcha);
				setCaptchaImage(data.img);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<section className="w-full relative min-h-screen p-10 flex items-center justify-between bg-gradient-to-tl from-secondary-400 to-secondary-100">
			<Helmet>
				<title>Login Page : Multi State Cooperative Society</title>
			</Helmet>

			<form className="w-[50%] mx-auto border-2 border-secondary-700 bg-white backdrop-blur-xl rounded-xl overflow-hidden">
				<div className="bg-gradient-to-tr from-secondary-700 to-secondary-500 flex items-center justify-center gap-2 py-6 w-full">
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
						<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
					</svg>
					<p className="text-3xl text-center font-semibold text-white">Admin Login</p>
				</div>
				<div className="px-12 py-6">
					<div className="mt-4 space-y-4">
						<label className="block text-sm">
							<span>Email Id</span>
							<span className="relative mt-1.5 flex">
								<input required className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Email Id" type="email" />
								<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 512 512">
										<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
									</svg>
								</span>
							</span>
						</label>

						<label className="block text-sm">
							<span>Password</span>
							<span className="relative mt-1.5 flex">
								<input required minLength={8} maxLength={16} className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Password" type="password" />
								<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512">
										<path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
									</svg>
								</span>
							</span>
						</label>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 place-center">
							<img src="/images/captcha.png" alt="" className="w-full h-[80%] object-contain" />
							<label className="block text-sm">
								<span>Captcha</span>
								<span className="relative mt-1.5 flex">
									<input id="captchaInput" name="captchaInput" required className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Captcha from Above" type="text" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512">
											<path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
										</svg>
									</span>
								</span>
							</label>
						</div>

						<Link to="/registration" className="text-secondary-700 font-medium">
							Forgot Password ?
						</Link>

						<div className="block w-full text-center">
							<button
								onClick={() => {
									let captchaInput = document.getElementById("captchaInput").value;
									digestMessage(captchaInput).then((digestHex) => {
										if (digestHex === captcha) {
											console.log("Correct Captcha");
										} else {
											alert("Incorrect Captcha");
										}
									});
									window.location.href = "/admin";
								}}
								type="button"
								class="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-sm px-10 py-3  text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default AdminLogin;
