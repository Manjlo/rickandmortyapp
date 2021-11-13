import React from 'react'

const Searcher = ({ updateUrl }) => {

	const setUrl = (name, status, species) => {


		const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}`

		updateUrl(url)
	}
	const fechtValues = () => {
		const name = document.getElementById('name').value;
		const status = document.getElementById('status').value
		const species = document.getElementById('species').value

		setUrl(name, status, species)
		
		
	}




	return (
		<div className="flex items-center justify-center -mt-8 mb-8">
			<form action="GET" id="searcher">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-1 ">
					<div className="">
						<input type="text" placeholder="Name" id="name" className="bg-white placeholder-gray-500 flex justify-center items-center md:rounded-l-lg md:rounded-t-none rounded-t-lg text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								 shadow-lg focus:placeholder-transparent focus:text-black focus:outline-none focus:ring-2 transform  focus:ring-blue-800 focus:border-transparent" />
					</div>
					<div className="">
						<input type="text" placeholder="Status" id="status" className="bg-white placeholder-gray-500 flex justify-center items-center text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								shadow-lg focus:placeholder-transparent focus:text-black focus:outline-none focus:ring-2 transform focus:ring-blue-800 focus:border-transparent"/>
					</div>
					<div className="">
						<input type="text" placeholder="Species" id="species" className="bg-white shadow-lg placeholder-gray-500 flex justify-center items-center rounded- text-center md:h-16 h-14 w-64 md:w-44 border border-transparent 
								 focus:placeholder-transparent focus:text-black focus:outline-none focus:ring-2 transform focus:ring-blue-800 focus:border-transparent" />
					</div>
					<div className="">
						<input type="submit" value="Search" id="buttonSubmit" onClick={(e) => {
							fechtValues()
							e.preventDefault()
						}} className="bg-gradient-to-br from-blue-600 md:rounded-br-lg md:rounded-tr-lg md:rounded-b-none rounded-b-lg to-blue-400 transition duration-300
								hover:from-blue-400 hover:to-blue-600 text-white cursor-pointer md:h-16 h-14 w-64 md:w-44 shadow-lg"/>
					</div>
					{

					}
				</div>
			</form>

		</div>

	)
}
export default Searcher
