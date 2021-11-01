import React from 'react'

const Header = () => {
	return (
		<div className="flex justify-center bg-dark h-screen">
			<div className="flex">
				<div className="p-9 grid md:grid-cols-2 grid-cols-1">
					<div className="flex items-center justify-center">

						<img src="Multimedia\kisspng-poster-wall-clip-art-rick-and-morty-5b348e438bb135.8417991715301709475722.png" alt="" className="h-72" />
					</div>
					<div className="flex items-center justify-center">
						<h1 className="text-5xl font-semibold text-center text-indigo-200 font-schwifty">All Characters on single Website</h1>
					</div>

				</div>
			</div>

		</div>
	)
}

export default Header
