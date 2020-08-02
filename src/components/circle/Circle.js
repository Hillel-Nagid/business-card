import React from 'react';
import '../../styles/circle.css';
import { useEffect } from 'react';
import { useState } from 'react';
import write from '../../helpers';

const Circle = () => {
	const name = useState('');
	const text = 'HILLEL NAGID';
	useEffect(() => {
		const timer = setTimeout(() => write(name, 0, text, 200), 1000);
		return () => clearTimeout(timer);
		// eslint-disable-next-line
	}, []);
	return (
		<div className='circle'>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 484.03 476'>
				<g id='Layer_2' data-name='Layer 2'>
					<g id='circle'>
						<circle
							stroke='#149414'
							strokeWidth='13'
							fill='none'
							className='cls-1'
							cx='238'
							cy='238'
							r='231.5'
						/>
						<g className='cls-2'>
							<rect className='cls-3' x='458.37' y='209' width='21.27' />
							<rect
								className='cls-4'
								x='453.97'
								y='209'
								width='30.07'
								height='58'
								rx='4.4'
							/>
						</g>
						<g className='cls-2'>
							<rect className='cls-5' x='462' y='265' width='14.99' />
							<path
								className='cls-6'
								d='M477,265a2,2,0,0,1,0,4H462a2,2,0,0,1,0-4Z'
							/>
						</g>
						<g className='cls-2'>
							<rect className='cls-5' x='462' y='207' width='14.99' />
							<path
								className='cls-6'
								d='M477,207a2,2,0,0,1,0,4H462a2,2,0,0,1,0-4Z'
							/>
						</g>
					</g>
				</g>
			</svg>
			<h1 className='name'>{name[0]}</h1>
		</div>
	);
};

export default Circle;
