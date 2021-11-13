import React from 'react'
import setColor from './functions/setColor'


function Characters({ characters, setOpen, setModalContent }) {
	const character = (items) => {
		const item = {
			name: items.name,
			status: items.status,
			species: items.species,
			gender: items.gender,
			origin: items.origin.name,
			image: items.image,
			location: items.location.name
		}
		setModalContent(item)
	}

	return (
		<div className=" flex items-center justify-center ">
			{ characters?
				<div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-10 md:gap-y-12 gap-y-9">
					{
						characters.map((items, index) => (
							<div key={index} className="w-64 bg-white rounded-2xl shadow-lg 
						transition duration-300 transform hover:-translate-y-4 ">
								<div className="h-52 rounded-t-2xl flex items-center justify-center">
									<div className="w-64 relative">
										<img src={items.image} alt="" className="rounded-t-2xl h-52 w-full " />
										<div className={`font-bold text-gray-700 rounded-full flex items-center
									 justify-center font-mono z-40 animate-ping absolute top-1.5 left-1.5 ${setColor(items.status)}`}
											style={{ height: '15px', width: '15px' }}>

										</div>
										<div className={`font-bold text-gray-700 rounded-full flex items-center
									 justify-center font-mono z-50 absolute top-1.5 left-1.5 shadow-3xl ${setColor(items.status)}`}
											style={{ height: "15px", width: "15px", fontSize: "10px" }}>
										
										</div>
									</div>
								</div>
								<div className="mt-3 mb-5" >
									<div className="mb-2 flex items-center justify-center">
										<h2 className="text-center text-lg font-semibold text-gray-600
									 cursor-pointer hover:text-pickle" onClick={() => { 
										 character(items)
										 setOpen(true)
										 
									 }}>{items.name}
										</h2>
									</div>
									<div className="flex flex-col justify-start space-y-2 ml-3">

										<div>
											<h3 className="font-medium text-gray-500 text-left">Species:</h3>
											<p className="text-left">{items.species}</p>
										</div>
										<div className="flex flex-col justify-center text-left">
											<h3 className="text-gray-500 font-medium text-left">Last Location: </h3>
											<p>{items.location.name}</p>
										</div>
									</div>
								</div>
							</div>
						))
					
				}
				
				</div>
				:
				<div className="flex items-center justify-center">
					<div className="bg-white h-28 p-10 text-center flex items-center justify-center rounded-3xl">
						<span className="text-4xl text-gray-600">There is nothing with these characteristics</span>
					</div>
				</div>
			}
		</div>
	)
};

export default Characters
