import React, { Children, cloneElement, useState, Fragment } from 'react';

export default function About({ children }) {
	const [ current, setCurrent ] = useState(0);
	const numOfPages = Children.count(children);
    
	return (
		<Fragment>
			{console.log(children)}
			<div className='container'>
				<div className='row'>{cloneElement(children[current])}</div>
				<div className='row'>
					<div className='d-flex justify-content-center'>
						<button
							type='button'
							className=' btn btn-outline-success'
							disabled={current === 0}
							onClick={(e) => setCurrent((page) => page - 1)}
						>
							&lt; Previous
						</button>

						<button
							type='button'
							className=' btn  btn-outline-success'
							disabled={current >= numOfPages - 1}
							onClick={(e) => setCurrent((page) => page + 1)}
						>
							Next &gt;
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
