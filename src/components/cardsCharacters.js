import React from 'react'
import setColor from './functions/setColor'
import { Dialog } from '@headlessui/react'
import { SkeletonCards } from './Skeleton/SkeletonCards'

function Characters({ characters, setModalContent, setOpen, loading }) {

	const Modalcharacter = (items) => {
		return (
			<div className="px-4 pt-4 pb-3 sm:pb-4" >
				<div className="flex items-center justify-center mb-4 sm:mx-0 mx-6 ">
					<Dialog.Title as="h3" className="text-2xl leading-6 font-semibold text-gray-700 text-center dark:text-gray-200">
						{items.name}
					</Dialog.Title>
				</div>
				<div>
					<button
						type="buttom"
						className=" justify-center transform hover:scale-110 text-base font-medium sm:w-auto sm:text-sm absolute right-3 top-3"
						onClick={() => setOpen(false)}
					>
						<svg className="border-0 text-dark dark:text-white sm:h-8 sm:w-8 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
							<path className="border-0" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</button>
				</div>

				<div className="sm:flex sm:items-center sm:justify-center sm:mb-4 mb-2">

					<div className="flex-shrink-0 flex items-center justify-center sm:mx-0 sm:w-56">
						<img className="rounded-3xl h-full" src={items.image} alt="" />
					</div>
					<div className="mt-3 sm:mt-0 sm:ml-5 sm:text-left sm:w-72 sm:h-56 rounded-3xl sm:pl-3 bg-white dark:bg-dark ">

						<div className="mt-2 flex flex-col space-y-2 sm:p-0 p-4">
							<div className="flex items-center space-x-1.5 ">
								<h4 className="text-gray-500 font-semibold dark:text-gray-400">Status: </h4>
								<p className={`dark:text-white text-${setColor(items.status)} dark:text-${setColor(items.status)}`}>{items.status}</p>

							</div>
							<div className="flex items-center space-x-1.5">
								<h4 className="font-semibold text-gray-500 dark:text-gray-400">Species: </h4>
								<p className="dark:text-white">{items.species}</p>

							</div>
							<div className="flex items-center space-x-1.5">
								<h4 className="font-semibold text-gray-500 dark:text-gray-400">Gender: </h4>
								<p className="dark:text-white">{items.gender}</p>

							</div>
							<div className="flex flex-col mb-3">
								<h4 className="text-gray-500 font-semibold dark:text-gray-400">Origin: </h4>
								<p className="dark:text-white">{items.origin.name}</p>

							</div>
							<div className="flex flex-col ">
								<h4 className="text-gray-500 font-semibold dark:text-gray-400 ">Last Known Location: </h4>
								<p className="dark:text-white text-left">{items.location.name}</p>
							</div>

						</div>
					</div>
					<div className='hidden text-red-500'></div>
				</div>
			</div >
		)
	}



	const handleModal = (items) => {
		setModalContent(Modalcharacter(items))
		setOpen(true)


	}

	if (loading) return <span><SkeletonCards/></span>

	return (
		<div className=" flex items-center justify-center ">
			{characters ?
				<div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-10 md:gap-y-8 gap-y-9">
					{
						characters.map((items, index) => (
							<div key={index} className="w-64 bg-white dark:bg-dark rounded-2xl 
						transition duration-300 transform hover:-translate-y-4 hover:shadow-2xl">
								<div className="h-52 rounded-t-2xl flex items-center justify-center dark:bg-bg">
									<div className="w-64 relative">
										<img src={items.image} alt="" className="rounded-t-2xl h-52 w-full " />
										<div className={`font-bold text-gray-700 rounded-full flex items-center
									 justify-center font-mono z-40 animate-ping absolute top-1.5 left-1.5 bg-${setColor(items.status)}`}
											style={{ height: '15px', width: '15px' }}>

										</div>
										<div className={`font-bold text-gray-700 rounded-full flex items-center
									 justify-center font-mono z-50 absolute top-1.5 left-1.5 shadow-3xl shadow-lg bg-${setColor(items.status)}`}
											style={{ height: "15px", width: "15px", fontSize: "10px" }}>

										</div>
									</div>
								</div>
								<div className="mt-2 mb-5" >
									<div className="mb-1 flex items-center justify-center">
										<h2 className="text-center text-lg font-semibold text-gray-600 dark:text-white
									 cursor-pointer hover:text-pickle dark:hover:text-pickle" onClick={() => {
												handleModal(items)
											}}>{items.name}
										</h2>
									</div>
									<div className="flex flex-col justify-start space-y-1 ml-3">

										<div>
											<h3 className="font-medium text-gray-500 dark:text-gray-400 text-left">Species:</h3>
											<p className="dark:text-white text-left">{items.species}</p>
										</div>
										<div className="flex flex-col justify-center text-left">
											<h3 className="text-gray-500 dark:text-gray-400 font-medium text-left">Last Location: </h3>
											<p className="dark:text-white">{items.location.name}</p>
										</div>
									</div>
								</div>
							</div>
						))

					}

				</div>
				:
				<div></div>
			}
		</div>
	)
};

export default Characters
