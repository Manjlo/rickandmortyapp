import React from 'react'



function Characters({ characters, style }) {
	return (
		<div className=" flex items-center justify-center my-20">
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9">
				{
					characters.map((items, index) => (
						<div key={index} className="h-96 w-72 bg-white rounded-2xl shadow-lg 
						transition duration-300 transform hover:scale-105 ">
							<div className="h-54 rounded-t-2xl cursor-pointer">
								<img src={items.image} alt="" className="rounded-t-2xl h-60 w-full" />
							</div>
							<div className="h-9">
								<h2>Name: {items.name}</h2>
								
							</div>
						</div>
					))
				}
			</div>

		</div>
	)
};

export default Characters
