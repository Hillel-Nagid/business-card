import React from 'react';
import Circle from '../components/circle/Circle.js';
import Contact from '../components/contact/Contact.js';
import '../styles/index.css';
import write from '../helpers';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Main() {
	const job = 'FRONTEND DEVELOPER';
	const jobName = useState('');
	useEffect(() => {
		const timer = setTimeout(() => write(jobName, 0, job, 100), 7000);
		return () => clearTimeout(timer);
		// eslint-disable-next-line
	}, []);
	return (
		<div className='main'>
			<Circle></Circle>
			<h1 className='job'>{jobName[0]}</h1>
			<Contact />
		</div>
	);
}
