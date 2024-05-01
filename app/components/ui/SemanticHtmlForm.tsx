'use client';
import React, { ReactNode, useState } from 'react';
import axios from 'axios';

type Props = {};

export default function SemanticHtmlForm({}: Props) {
	const [formData, setFormData] = useState({
		fullName: '',
		website: '',
		email: '',
		phone: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Implement your form submission logic here
		console.log(formData);
		try {
			const data = await axios.post(
				`https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZhMDYzNDA0MzE1MjY4NTUzMTUxM2Ei_pc`,
				JSON.stringify(formData)
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			className='space-y-6 w-full'>
			<div>
				<label
					htmlFor='fullName'
					className='block  text-sm'>
					Full Name*
				</label>
				<input
					type='text'
					id='fullName'
					name='fullName'
					value={formData.fullName}
					onChange={handleChange}
					placeholder='Enter your full name'
					required
					className='p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
			</div>
			<div>
				<label
					htmlFor='website'
					className='block  text-sm'>
					Website
				</label>
				<input
					type='url'
					id='website'
					name='website'
					value={formData.website}
					onChange={handleChange}
					placeholder='Enter your website URL'
					className='p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
			</div>
			<div>
				<label
					htmlFor='email'
					className='block  text-sm'>
					Email*
				</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					placeholder='Enter your email address'
					required
					className='p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
			</div>
			<div>
				<label
					htmlFor='phone'
					className='block  text-sm'>
					Phone*
				</label>
				<input
					type='tel'
					id='phone'
					name='phone'
					value={formData.phone}
					onChange={handleChange}
					placeholder='Enter your phone number'
					required
					className='p-3 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
				/>
			</div>
			<div>
				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
					Submit
				</button>
			</div>
		</form>
	);
}
