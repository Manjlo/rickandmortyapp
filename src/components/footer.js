import React from 'react'

const footer = ({dark}) => {
	return (
		<div>
									<div className="">
								<a href="https://github.com/Manjlo/rickandmortyapp">
								{dark ?
									
									<img src="\Multimedia\icons\GitHub-Mark-Light-32px.png" alt="github icon" className="h-6 " />
									:
									
									<img src="\Multimedia\icons\GitHub-Mark-32px.png" alt="" srcset="" className="h-6"/>
									
							}
							</a>
						</div>
		</div>
	)
}

export default footer


					

