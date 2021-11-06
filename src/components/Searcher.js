import React from 'react'

const Searcher = () => {
	return (
		<div className="flex items-center justify-center -mt-8 mb-8">
			<form action="GET">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-1">
					<div className="">
						<input type="text" placeholder="Name" className="bg-white placeholder-gray-500 flex justify-center items-center md:rounded-l-lg md:rounded-t-none rounded-t-lg text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								focus:bg-opacity-90 shadow-lg focus:placeholder-transparent focus:text-black focus:outline-none focus:ring-2 transform  focus:ring-blue-400 focus:border-transparent"/>
					</div>
					<div className="">
						<input type="text" placeholder="Episode" className="bg-white placeholder-gray-500 flex justify-center items-center text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								focus:bg-opacity-90 shadow-lg focus:placeholder-transparent focus:text-black focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent"/>
					</div>
					<div className="">
						<input type="text" placeholder="Location" className="bg-white shadow-lg placeholder-gray-500 flex justify-center items-center rounded- text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								focus:bg-opacity-90 focus:placeholder-transparent focus:text-black focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent" />
					</div>
					<div className="">
						<input type="submit" value="Search" className="bg-gradient-to-br from-blue-600 md:rounded-r-lg md:rounded-b-none rounded-b-lg to-blue-400 transition duration-300
								hover:from-blue-400 hover:to-blue-600 text-white cursor-pointer md:h-16 h-14 w-64 md:w-44 shadow-lg"/>
					</div>
				</div>
			</form>
			
		</div>
	)
}

export default Searcher
