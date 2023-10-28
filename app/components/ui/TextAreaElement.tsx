import React from 'react';

type Props = {
	name: string;
	id: string;
	placeholder?: string;
	label: { htmlFor: string; labelText: string };
	rows?: number;
	cols?: number;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextAreaElement = ({
	id,
	name,
	placeholder,
	label: { htmlFor, labelText },
	cols = 4,
	rows = 50,
	onChange,
}: Props) => {
	return (
		<div className='relative flex flex-col w-full h-fit'>
			<textarea
				className='w-full font-light border-b focus:border-b-accent border-b-text outline-none bg-transparent placeholder-transparent peer'
				name={name}
				id={id}
				placeholder={placeholder}
				rows={rows}
				cols={cols}
				onChange={onChange}
			/>
			<label
				htmlFor={htmlFor}
				className='absolute left-0 -top-6 text-sm font-light text-accent pointer-events-none
								transition-all
								duration-200
								peer-placeholder-shown:text-xl
								peer-placeholder-shown:top-0
								peer-placeholder-shown:text-text/30
                                peer-focus:text-sm
                                peer-focus:text-accent
                                peer-focus:-top-6'>
				{labelText}
			</label>
		</div>
	);
};

export default TextAreaElement;
