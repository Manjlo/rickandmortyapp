import React from 'react'
import useDarkMode from './functions/darkMode'

const Navbar = ({ dark }) => {
	const [colorTheme, setTheme] = useDarkMode()
	return (
		<div className="">
			<div className="max-w-7xl mx-auto p-4 flex items-center justify-center">
				<div className="grid md:grid-cols-10 grid-cols-8">
					<div className="flex md:col-span-1 col-span-2">
						<div className="flex">
							<a href="/" className="text-black dark:text-white">Characters App</a>
						</div>
					</div>
					<div className="flex items-center justify-end md:col-span-9 col-span-6 space-x-1">
						<div className="mx-1.5 border border-gray-100 dark:border-bg
						 rounded-md hover:border-black dark:hover:border-white px-3">
							<a href="/" className="text-black dark:text-white" translate="no">Share</a>
						</div>
						<div>
							<span onClick={()=> setTheme(colorTheme)} className="cursor-pointer">
								{colorTheme === 'dark' ?
									<svg
										className="w-6 h-6 text-blue-800"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
										</path>
									</svg> :
									<svg
										class="w-6 h-6 text-yellow-300"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
										</path>
									</svg>
								}
							</span>
						</div>

					</div>
				</div>


			</div>
		</div>
	)
}

export default Navbar
