import React from 'react'

const Header = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex bg-dark w-screen rounded-3xl lg:mx-10 md:mx-8 mx-6 items-center justify-center">
				<div className="">
					<div className="flex items-center justify-center md:mt-16 mt-2 md:h-48 md:p-0 p-1">

						<img src="Multimedia\kisspng-poster-wall-clip-art-rick-and-morty-5b348e438bb135.8417991715301709475722.png" alt="" className=" md:h-96 h-48 sm:h-72" />
					</div>
					<div className="flex items-center justify-center md:mt-12 md:h-52 mt-2 mb-8 h-24 md:p-0 p-2">
						<div>
							<h1 className="md:text-5xl text-3xl font-semibold text-center text-white">Search for any character</h1>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export default Header
