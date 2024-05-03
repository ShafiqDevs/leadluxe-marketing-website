'use client';
import React, { ReactNode, useState } from 'react';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';

type Props = {};

export default function SemanticHtmlForm({}: Props) {
	const [formData, setFormData] = useState({
		fullName: '',
		website: '',
		email: '',
		phone: '',
	});
	const [loading, setLoading] = useState<{
		state: boolean;
		message: string | ReactNode;
	}>({
		state: false,
		message: 'Send',
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
		setLoading({
			state: true,
			message: <PulseLoader color='#ffff' />,
		});
		console.log(formData);
		try {
			const data = await axios.post(
				`https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZhMDYzNDA0MzE1MjY4NTUzMTUxM2Ei_pc`,
				JSON.stringify(formData)
			);
			if (data)
				setFormData({
					email: '',
					fullName: '',
					phone: '',
					website: '',
				});
			setLoading({
				state: false,
				message: 'Form Sent. Thank you!',
			});
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
					className='p-3 mt-1 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-text/50 text-text'
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
					className='p-3 mt-1 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-text/50 text-text'
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
					className='p-3 mt-1 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-text/50 text-text'
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
					className='p-3 mt-1 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder:text-text/50 text-text'
				/>
			</div>
			<div>
				<button
					disabled={loading.state}
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/70'>
					{loading.message}
				</button>
			</div>
		</form>
	);
}
