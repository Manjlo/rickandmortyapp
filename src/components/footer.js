import React from 'react'

export default function Footer(){

	return (
		<div className="flex items-center justify-center my-4" >
			<div className="flex bg-dark w-screen rounded-3xl lg:mx-10 md:mx-8 mx-6 items-center justify-center relative">
				<div className='my-10 md:w-96 sm:w-full flex items-center justify-center flex-col'>
					<h4 className="text-white text-center">
						Made with ❤ by <a href="https://twitter.com/manjlo_" className="text-blue-500">Manjlo</a>
					</h4>
					<hr className="w-1/2 md:w-full text-gray-400 my-4 " />
					<div className="flex items-center justify-center space-x-2">
						<a href="https://github.com/Manjlo/rickandmortyapp" className="flex items-center justify-center">
							<img src="\Multimedia\icons\GitHub-Mark-Light-64px.png" alt="github icon" className="h-10" />

						</a>
						<a href="https://github.com/Manjlo">
							<img src="Multimedia/icons/twitter.png" alt="twiterIcon" className="h-10" />
						</a>
					</div>
					<h4 className="text-white text-center m-4">Infinite thanks to Axel for the <a href="https://rickandmortyapi.com/" className="text-yellow-600 font-bold">
						Rickandmortyapi
					</a>
					</h4>


				</div>
				<div className="absolute md:right-24 md:top-24 sm:right-20 sm:top-24 right-5 top-24">
					<button className="animate-bounce" onClick={() => window.scrollTo(0, 0)}>
						<svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
							<path className="text-white" fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
						</svg>
					</button>

				</div>
			</div>


		</div>
	)
}





