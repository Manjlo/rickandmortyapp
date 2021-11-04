
import React from 'react'

function Pagination() {
	return (
		<div className="flex items-center justify-center my-8">
			<div className="">
				<div className="grid grid-cols-2">
					<div className=" hover:bg-white rounded-l-lg h-12 w-16 flex items-center justify-center">
						<span>
							<a href="/">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
									class="bi bi-chevron-left" viewBox="0 0 16 16">
									<path fill-rule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
								</svg>
							</a>
						</span>
					</div>
					<div className="flex items-center justify-center rounded-r-lg hover:bg-white h-12 w-16">
						<span>
							<a href="/">
								<svg className="" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</a>
						</span>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Pagination
