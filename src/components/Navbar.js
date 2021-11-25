import React from 'react'
import useDarkMode from './functions/darkMode'
import { Dialog } from '@headlessui/react'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookMessengerShareButton, TelegramShareButton, RedditShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, FacebookMessengerIcon, TelegramIcon, RedditIcon } from 'react-share'
const Navbar = ({ setModalContent, setOpen }) => {
	const [colorTheme, setTheme] = useDarkMode()
	const pageUrl = 'http://www.cualquiercosa.com'

	const Modalmessage = () => {
		return (
			<div className="bg-white dark:bg-dark p-4 m-8 rounded-3xl">
				<div className=''>
					<div>
						<button
							type="buttom"
							className=" justify-center transform hover:scale-110 text-base font-medium sm:w-auto sm:text-sm absolute right-2 top-2"
							onClick={() => setOpen(false)}
						>
							<svg className="border-0 text-dark dark:text-white sm:h-8 sm:w-8 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
								<path className="border-0" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</button>

						<Dialog.Title className='flex items-center justify-center sm:text-3xl text-2xl font-semibold text-gray-600 dark:text-gray-300 text-center' as='h3'>Do you like this page?</Dialog.Title>
					</div>
					<div className='flex items-center justify-center my-3'>

						<img className='sm:h-56 h-44' src="\Multimedia\rick-and-morty-folder-icon-43819.png" alt="" />
					</div>
				</div>
				<div className='flex items-center justify-center flex-col'>
					<Dialog.Description as='p' className="sm:text-xl text-lg text-dark font-semibold dark:text-white text-center">
						Ok, I don't care, but share it!
					</Dialog.Description>
					<div className='flex items-center justify-center my-3'>
						<div className='grid sm:grid-cols-6 grid-cols-3 sm:gap-0 gap-2'>
							<FacebookShareButton url={pageUrl}>
								<FacebookIcon size={40} />
							</FacebookShareButton>
							<TwitterShareButton url={pageUrl}>
								<TwitterIcon size={40} />
							</TwitterShareButton>
							<WhatsappShareButton url={pageUrl}>
								<WhatsappIcon size={40} />
							</WhatsappShareButton>
							<FacebookMessengerShareButton url={pageUrl}>
								<FacebookMessengerIcon size={40} />
							</FacebookMessengerShareButton>
							<TelegramShareButton url={pageUrl}>
								<TelegramIcon size={40} />
							</TelegramShareButton>
							<RedditShareButton url={pageUrl}>
								<RedditIcon size={40} />
							</RedditShareButton>						
						</div>
					</div>

				</div>
			</div>
		)
	}


	const handleModal = () => {
		setModalContent(Modalmessage)

	}
	return (
		<div className="">
			<div className="max-w-7xl mx-auto p-4 flex items-center justify-center">
				<div className="grid md:grid-cols-10 grid-cols-8">
					<div className="flex md:col-span-1 col-span-2">
						<div className="flex">
							<a href="/" className="text-black dark:text-white">Characters App</a>
						</div>
					</div>
					<div className="flex items-center justify-end md:col-span-9 col-span-6 space-x-1">
						<div className="mx-1.5 border border-gray-100 dark:border-bg
						 rounded-md hover:border-black dark:hover:border-white px-3">
							<button className="text-black dark:text-white" translate="no" onClick={(e) => {
								handleModal()
								setOpen(true)
							}
							}>Share</button>
						</div>
						<div>
							<span onClick={() => setTheme(colorTheme)} className="cursor-pointer">
								{colorTheme === 'dark' ?
									<svg
										className="w-6 h-6 text-blue-800"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
										</path>
									</svg> :
									<svg
										class="w-6 h-6 text-yellow-300"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
										</path>
									</svg>
								}
							</span>
						</div>

					</div>
				</div>


			</div>
		</div>
	)
}

export default Navbar
