import { Dialog } from "@headlessui/react";

export const fetchCharacters = async (url, setCharacters, setInfo, setModalContent, setOpen, setLoading) => {
    setLoading(true)
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                setCharacters(data.results)
                setInfo(data.info);
                setLoading(false)
            }
            else {
                const Modalmessage = () => {
                    return (
                        <div className="flex items-center justify-center">
                            <div className="bg-white dark:bg-dark p-4 pt-6 w-full sm:m-8 m-6 rounded-3xl">
                                <div>
                                    <button
                                        type="buttom"
                                        className="justify-center transform hover:scale-110 text-base font-medium sm:w-auto sm:text-sm absolute right-2 top-1 sm:right-3 sm:top-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        <svg className="border-0 text-dark dark:text-white sm:h-8 sm:w-8 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                            <path className="border-0" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </div>
                                <Dialog.Title as="h3" className="flex items-center justify-center sm:text-3xl text-2xl font-bold text-gray-600 dark:text-gray-300">
                                    Error 404
                                </Dialog.Title>
                                <div className="sm:h-56 h-44 flex items-center justify-center mt-2">
                                    <img src="\Multimedia\kisspng-rick-and-morty-rick-sanchez-t-shirt-clothing-fashi-rick-and-morty-png-hd-5a7501b0b1cb37.6477402015176175847283.png" alt="" className="sm:h-56 h-44" />
                                </div>
                                <div className="flex items-center justify-center mt-2 sm:text-xl text-gray-600 text-center text-lg dark:text-gray-100 font-semibold">
                                    Hey mate. There is nothing with these features.
                                </div>
                            </div>

                        </div>
                    )
                }


                const handleModal = () => {
                    setModalContent(Modalmessage())
                    setOpen(true)
                    setInfo([])
                    setCharacters()
                }
                setLoading(false)
                handleModal()

            }

        }
        )
        .catch(error => console.log(error))
};
