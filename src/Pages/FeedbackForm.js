import React from "react";
import { Helmet } from "react-helmet";

const FeedbackForm = () => {
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
					<p className="text-3xl mb-7 w-full text-center font-semibold text-slate-700 dark:text-navy-100">Comments / Suggestions</p>
					<div className="mt-4 space-y-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<label className="block text-sm">
								<span>Feedback Type</span>
								<span className="relative mt-1.5 flex">
									<select className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent">
										<option selected value="Grievance">Grievance</option>
										<option value="Suggestion">Suggestion</option>
										<option value="General Information">General Information</option>
										<option value="Website Related">Website Related</option>
									</select>
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512">
                                            <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                                        </svg>
									</span>
								</span>
							</label>
							<label className="block text-sm">
                                <span>Name</span>
                                <span className="relative mt-1.5 flex">
                                    <input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Name" type="text" />
                                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.1em" viewBox="0 0 448 512">
                                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
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
								<span>Mobile</span>
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

						<label className="block text-sm">
                            <span>Address</span>
							<span className="relative mt-1.5 flex">
								<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Address" type="text" />
								<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
								</span>
							</span>
						</label>

						<label className="block text-sm">
							<span>Subject</span>
							<span className="relative mt-1.5 flex">
								<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Subject of Feedback" type="text" />
								<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 512 512">
                                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                                    </svg>
								</span>
							</span>
						</label>

                        <label className="block text-sm">
							<span>Comments / Feedback</span>
							<textarea rows="3" placeholder="Please Enter Your Feedback" className="form-textarea outline-none mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"></textarea>
						</label>
                        
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-secondary-50">
                                <div class="flex flex-col items-center justify-center ">
                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input type="file" class="hidden" />
                            </label>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 place-center">
							<label className="block text-sm">
								<span>Captcha</span>
								<span className="relative mt-1.5 flex">
									<input className="form-input outline-none peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:font-light hover:border-secondary-700 focus:border-secondary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Please Enter Captcha from Above" type="text" />
									<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-secondary-700 peer-focus:text-secondary dark:text-navy-300 dark:peer-focus:text-accent">
										<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512">
											<path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
										</svg>
									</span>
								</span>
							</label>
                            <img src="/images/captcha.png" alt="" className="w-full h-[80%] object-contain" />
						</div>

						<div className="block w-full text-center pb-2">
							<button type="submit" class="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-sm px-10 py-3  text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800">
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default FeedbackForm;
