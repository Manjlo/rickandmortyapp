import React from 'react'

const Header = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex bg-dark w-full rounded-3xl mx-10 items-center justify-center">
				<div className="">
					<div className="flex items-center justify-center mt-16 h-48">

						<img src="Multimedia\kisspng-poster-wall-clip-art-rick-and-morty-5b348e438bb135.8417991715301709475722.png" alt="" className=" h-96" />
					</div>
					<div className="flex items-center justify-center mt-12 h-52">
						<div>
							<h1 className="text-5xl font-semibold text-center text-white">Search for any character</h1>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export default Header
