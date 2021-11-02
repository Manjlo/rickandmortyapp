import React from 'react'

const Navbar = () => {
	return (
		<div className="">
			<div className="max-w-7xl mx-auto p-4 flex items-center justify-center">
				<div className="grid md:grid-cols-10 grid-cols-8">
					<div className="flex space-x-8 md:col-span-1 col-span-2">
						<div className="flex">
							<a href="/" className="text-dark">Characters App</a>
						</div>
					</div>
					<div className="flex items-center justify-end md:col-span-9 col-span-6">
						<div className="mx-1.5 border border-white
						 rounded-md hover:border-dark px-3">
							<a href="/" className="text-dark" translate="no">Share</a>
						</div>
						<div>
							<a href="https://github.com/Manjlo/rickandmortyapp">

								<img src="\Multimedia\icons\GitHub-Mark-32px.png" alt="github icon" className="h-6" />
							</a>
						</div>
					</div>
				</div>


			</div>
		</div>
	)
}

export default Navbar
