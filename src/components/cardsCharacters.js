import React from 'react'
import selectColor from './functions/selectColor'


function Characters({ characters }) {
	return (
		<div className=" flex items-center justify-center my-20">
			<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-9">
				{
					characters.map((items, index) => (
						<div key={index} className="h-80 w-60 bg-white rounded-2xl shadow-lg 
						transition duration-300 transform hover:-translate-y-4 ">
							<div className="h-52 rounded-t-2xl flex items-center justify-center">
								<div className="w-60 relative">
									<img src={items.image} alt="" className="rounded-t-2xl h-52 w-full " />
									<div className={`font-bold text-gray-700 rounded-full flex items-center
									 justify-center font-mono z-40 animate-ping absolute top-1.5 left-1.5 ${selectColor(items.status)}`}
										style={{ height: '15px', width: '15px' }}>

									</div>
									<div className={`font-bold text-gray-700 rounded-full flex items-center
									 justify-center font-mono z-50 absolute top-1.5 left-1.5 shadow-3xl ${selectColor(items.status)}`}
										style={{ height: "15px", width: "15px", fontSize: "10px" }}>

									</div>
								</div>
							</div>
							<div className="h-full mt-3 mb-8" >
								<div>
									<h2 className="text-center text-lg font-semibold text-gray-600
									 cursor-pointer">{items.name}
									</h2>
								</div>
								<div className="flex items-center justify-center space-x-2">
									<h3>Especie:</h3>
									<p>{items.species}</p>
								</div>
								<div className="flex flex-col items-center space-x-2">
									<h3>Last Location: </h3>
									<p>{items.location.name }</p>

								</div>

							</div>
						</div>
					))
				}
			</div>

		</div>
	)
};

export default Characters
