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
		<div className="flex items-center justify-center -mt-8 mb-6">
			<form action="GET" id="searcher">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-1 ">
					<div className="">
						<input type="text" placeholder="Name" id="name" className="bg-gray-100 placeholder-black flex justify-center items-center md:rounded-md rounded-t-lg text-center  h-14 w-64 md:w-44 border border-transparent 
								 shadow-lg focus:placeholder-transparent focus:bg-white focus: focus:text-black focus:outline-none focus:ring-2 transform focus:scale-95 focus:ring-blue-600 focus:border-transparent" />
					</div>
					<div className="">
						<select  name="" id="status" className={`bg-gray-100 appearance-none placeholder-gray-500 flex justify-center md:rounded-md items-center text-center  h-14 w-64 md:w-44 border border-transparent
								shadow-lg focus:placeholder-transparent focus:bg-white focus:text-black focus:outline-none focus:ring-2 transform focus:scale-95 focus:ring-blue-600 focus:border-transparent`} placeholder="Status">
							<option value="" className="text-gray-500">Status</option>
							<option value="Alive" className="text-green-500">Alive</option>
							<option value="Dead" className="text-red-500">Dead</option>
							<option value="Unknown" className="text-gray-500">Unknown</option>
						</select>
					
					</div>
					<div className="">
						<input type="text" placeholder="Species" id="species" className="bg-gray-100 shadow-lg placeholder-black flex justify-center items-center md:rounded-md text-center md:h-14 h-14 w-64 md:w-44 border border-transparent 
								 focus:placeholder-transparent focus:bg-white focus:text-black focus:outline-none focus:ring-2 transform focus:scale-95 focus:ring-blue-600 focus:border-transparent" />
					</div>
					<div className="">
						<input type="submit" value="Search" id="buttonSubmit" onClick={(e) => {
							fechtValues()
							e.preventDefault()
						}} className="bg-gradient-to-br from-blue-600 md:rounded-md md:rounded-tr-lg rounded-b-lg to-blue-400 transition duration-300
								hover:from-blue-400 hover:to-blue-600 text-white cursor-pointer md:h-14 h-14 w-64 md:w-44 shadow-lg"/>
					</div>
					{

					}
				</div>
			</form>

		</div>

	)
}
export default Searcher
