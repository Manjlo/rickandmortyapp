import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Example({ open, setOpen, modalContent }) {
	const cancelButtonRef = useRef(null)

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
						<div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
							<div className="sm:flex sm:flex-row-reverse w-full relative mb-3">
								<button
									type="buttom"
									className="w-full inline-flex justify-center transform hover:scale-110 text-base font-medium sm:w-auto sm:text-sm absolute right-3 top-3"
									onClick={() => setOpen(false)}
								>
									<svg className="border-0 text-dar sm:h-8 sm:w-8 h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" viewBox="0 0 16 16">
										<path className="border-0" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								</button>

							</div>
							<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div className="sm:flex sm:items-start">

									<div className="mx-auto flex-shrink-0 flex items-center justify-center bg-red-100 sm:mx-0 sm:h-56 sm:w-56">
										<img className="rounded-l-2xl h-full" src={modalContent.image} alt="" />
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left sm:w-80 ">
										<Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-900 text-center">
											{modalContent.name}
										</Dialog.Title>
										<div className="mt-2 flex flex-col space-y-2">
											<div className="flex items-center space-x-1">
												<h4>Status: </h4>
												<p>{ modalContent.status }</p>

											</div>
											<div className="flex items-center space-x-1">
												<h4>Species: </h4>
												<p>{modalContent.species}</p>

											</div>
											<div className="flex items-center space-x-1">
												<h4>Gender: </h4>
												<p>{modalContent.gender}</p>
												
											</div>
											<div className="flex items-center space-x-1">
												<h4>Origin: </h4>
												<p>{ modalContent.origin}</p>

											</div>
											<div className="flex items-center space-x-1">
												<h4>last known Location: </h4>
												<p>{ modalContent.location}</p>
											</div>
	
										</div>
									</div>
								</div>
							</div>

						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
