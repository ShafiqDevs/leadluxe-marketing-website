import React from 'react';

type Props = {
	type: React.HTMLInputTypeAttribute | undefined;
	name: string;
	id: string;
	placeholder?: string;
	label: { htmlFor: string; labelText: string };
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputElement = ({
	id,
	name,
	type,
	placeholder,
	label: { htmlFor, labelText },
	onChange,
}: Props) => {
	return (
		<div className='relative flex flex-col w-full h-fit'>
			<input
				className='w-full border-b focus:border-b-accent border-b-text outline-none bg-transparent placeholder-transparent peer'
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<label
				htmlFor={htmlFor}
				className='absolute left-0 -top-full text-sm text-accent pointer-events-none 
								transition-all
								duration-200
								peer-placeholder-shown:text-xl
								peer-placeholder-shown:top-0
								peer-placeholder-shown:text-text/30
                                peer-focus:text-sm
                                peer-focus:text-accent
                                peer-focus:-top-full'>
				{labelText}
			</label>
		</div>
	);
};

export default InputElement;
