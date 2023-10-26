'use client';

import React, { useState } from 'react';
import SemanticHtmlForm from '../ui/SemanticHtmlForm';
import InputElement from '../ui/InputElement';
import TextAreaElement from '../ui/TextAreaElement';
import FormButton from '../ui/FormButton';
import { getNativeMailClientLink } from '@/utils/helpers/devFunctions';

type Props = {};

const FormContainer = ({}: Props) => {
	const [formData, setformData] = useState<{
		name: string | null;
		email: string | null;
		message: string | null;
	}>({ name: null, email: null, message: null });

	function updateFormData(
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) {
		const { name, value } = event.target;
		if (!name || !value) return;
		setformData((prev) => ({ ...prev, [name]: value }));
	}

	return (
		<>
			<SemanticHtmlForm
				className='flex flex-col justify-center items-center gap-10 px-8 py-24 rounded-md h-fit aspect-video text-xl
			bg-black/[3%] dark:bg-white/[3%] shadow-md'>
				<InputElement
					type='text'
					id='name'
					name='name'
					placeholder='name'
					label={{ htmlFor: 'name', labelText: 'name' }}
					onChange={updateFormData}
				/>
				<InputElement
					type='email'
					id='email'
					name='email'
					placeholder='email'
					label={{ htmlFor: 'email', labelText: 'email' }}
					onChange={updateFormData}
				/>
				<TextAreaElement
					id='message'
					name='message'
					placeholder='message'
					rows={4}
					cols={50}
					label={{ htmlFor: 'message', labelText: 'message' }}
					onChange={updateFormData}
				/>
				<FormButton
					href={getNativeMailClientLink(
						formData.email,
						formData.message,
						formData.name
					)}
					className='w-full shadow-md p-2 rounded-md bg-primary hover:bg-primary/30'
				/>
			</SemanticHtmlForm>
		</>
	);
};

export default FormContainer;
