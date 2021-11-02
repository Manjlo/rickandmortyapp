import React from 'react'

const Searcher = () => {
	return (
		<div className="flex items-center justify-center -my-8">
			<form action="GET">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-1">
					<div className="">
						<input type="text" placeholder="Name" className="bg-white placeholder-gray-500 flex justify-center items-center rounded-l-lg text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								focus:bg-opacity-60 shadow-lg focus:placeholder-transparent focus:text-white focus:outline-none focus:ring-1 transform  focus:ring-indigo-400 focus:border-transparent"/>
					</div>
					<div className="">
						<input type="text" placeholder="Season" className="bg-white placeholder-gray-500 flex justify-center items-center text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								focus:bg-opacity-20 shadow-lg focus:placeholder-transparent focus:text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent"/>
					</div>
					<div className="">
						<input type="text" placeholder="Location" className="bg-white shadow-lg placeholder-gray-500 flex justify-center items-center rounded- text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								focus:bg-opacity-20 focus:placeholder-transparent focus:text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent" />
					</div>
					<div className="">
						<input type="submit" value="Send" className="bg-gradient-to-br from-blue-600 rounded-r-lg to-blue-400 transition duration-300
								 hover:from-blue-400 hover:to-blue-600 text-white cursor-pointer md:h-16 h-14 w-64 md:w-44 shadow-lg"/>
					</div>
				</div>
			</form>
			
		</div>
	)
}

export default Searcher
