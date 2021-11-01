import React from 'react'

const Navbar = () => {
	return (
		<div className="bg-dark">
			<div className="max-w-7xl mx-auto p-4 flex items-center justify-center">
				<div className="grid grid-cols-10">
					<div className="flex space-x-8">
						<div className="flex">
							<a href="/" className="text-white">Characters App</a>
						</div>
					</div>
					<div className="flex items-center justify-end col-span-9">
						<div className="mx-1.5 border border-dark rounded-md hover:border-indigo-300 px-3">
							<a href="/" className="text-white">Share</a>
						</div>
						<div>
							<a href="https://github.com/Manjlo/rickandmortyapp">

								<img src="\Multimedia\icons\GitHub-Mark-Light-32px.png" alt="github icon" className="h-6" />
							</a>
						</div>
					</div>
				</div>


			</div>
		</div>
	)
}

export default Navbar
