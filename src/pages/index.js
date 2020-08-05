import React from 'react';
import Circle from '../components/circle/Circle.js';
import Contact from '../components/contact/Contact.js';
import Helmet from 'react-helmet';
import '../styles/index.css';
import write from '../helpers';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Main() {
	const job = 'FRONTEND DEVELOPER';
	const jobName = useState('');
	useEffect(() => {
		const timer = setTimeout(() => write(jobName, 0, job, 100), 6000);
		return () => clearTimeout(timer);
		// eslint-disable-next-line
	}, []);
	return (
		<div className='main'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Hillel Nagid</title>
			</Helmet>
			<Circle></Circle>
			<h1 className='job'>{jobName[0]}</h1>
			<Contact />
		</div>
	);
}
