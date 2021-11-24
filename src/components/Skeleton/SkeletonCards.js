import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'

export const SkeletonCards = () => {

	const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

	return (
		<div className=" flex items-center justify-center ">
			<div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-10 md:gap-y-8 gap-y-9">
				{
					characters.map((items, index) => (
						<div key={index} className="w-64 dark:bg-dark rounded-2xl shadow-lg 
						transition duration-300 transform hover:-translate-y-4 ">

							<div className="h-52 rounded-t-2xl flex items-center justify-center dark:bg-bg">
								<div className="w-64 relative">
									<Skeleton width='100%' height={208} />
								</div>
							</div>
							<div className="mt-2 mb-5" >
								<div className="mb-1 flex items-center justify-center">
									<Skeleton width={200} height={20} />
								</div>
								<div className="flex flex-col justify-start space-y-1 ml-3">

									<div>
										<Skeleton width={60} />
										<Skeleton width={200} />
									</div>
									<div className="flex flex-col justify-center text-left">
										<Skeleton width={100} />
										<Skeleton width={200}/>
									</div>
								</div>
							</div>
						</div>
					))

				}

			</div>
		</div>

	)
}


