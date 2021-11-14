
import React from 'react'

function Pagination({ updateUrl, next, prev }) {
	const onPrev = () => {
		updateUrl(prev)
	}
	const onNext = () => {
		updateUrl(next)
	}

	return (
		<div className="flex items-center justify-center my-8">
			<div className="">
				<div className="grid grid-cols-2">
					<div className={ {}}>
						<button className={`hover:bg-white dark:hover:bg-dark rounded-l-lg h-12 w-16 flex items-center justify-center ${prev ? '' : 'hidden'}`} onClick={onPrev}>
							<div className={[]}>
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
									className="bi bi-chevron-left text-black dark:text-white" viewBox="0 0 16 16">
									<path fillRule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
								</svg>
							</div>

						</button>
					</div>
					<div className="">
						<button className={`hover:bg-white dark:hover:bg-dark rounded-r-lg h-12 w-16 flex items-center justify-center ${next ? '' : 'hidden'}`} onClick={onNext}>
							<svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-chevron-right text-black dark:text-white" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Pagination
