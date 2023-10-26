import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	className: string;
};

const SemanticHtmlForm = ({ children, className }: Props) => {
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className={`${className}`}>
			{children}
		</form>
	);
};

export default SemanticHtmlForm;
