import React from 'react'

const Footer = () => {
	return (
		<div className="flex items-center justify-center my-4" >
			<div className="flex bg-dark w-screen rounded-3xl lg:mx-10 md:mx-8 mx-6 items-center justify-center">
				<div className='my-10 w-96 flex items-center justify-center flex-col'>
					<h4 className="text-white text-center">
						Made with ❤ by <a href="https://twitter.com/manjlo_" className="text-blue-500">Manjlo</a>
					</h4>
					<hr className="w-full text-gray-400 my-4" />
					<div className="flex items-center justify-center space-x-2">
						<a href="https://github.com/Manjlo/rickandmortyapp" className="flex items-center justify-center">
							<img src="\Multimedia\icons\GitHub-Mark-Light-64px.png" alt="github icon" className="h-10" />

						</a>
						<a href="https://github.com/Manjlo">
							<img src="Multimedia/icons/twitter.png" alt="twiterIcon" className="h-10"/>
						</a>
					</div>
					<shr className="w-1/2 text-gray-400 my-2 text-center flex" color="gray"/>
					<h4 className="text-white">Infinite thanks to Axel for the <a href="https://rickandmortyapi.com/" className="text-yellow-600 font-bold">
						Rickandmortyapi
					</a>
					</h4>


				</div>

			</div>

		</div>
	)
}

export default Footer




