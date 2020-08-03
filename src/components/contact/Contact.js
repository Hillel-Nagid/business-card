import React from 'react';
import '../../styles/contact.css';

const Contact = () => {
	return (
		<footer className='contact'>
			<div className='phone'>
				<p>+972-052-548-6556</p>
			</div>
			<h3 className='title'>{'< contact >'}</h3>
			<div className='email'>
				<p>
					<a href='mailto:hillel123123@gmail.com'>hillel123123@gmail.com</a>
				</p>
			</div>
		</footer>
	);
};

export default Contact;
