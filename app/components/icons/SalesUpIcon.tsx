import React from 'react';
import '../../../public/fonts/sales-up-icon/css/sales_up_logo-embedded.css';

type Props = {};

const SalesUpIcon = (props: Props) => {
	const style: React.CSSProperties = {
		fontFamily: 'sales_up_logo',
	};

	return (
		<span style={style}>
			{'\ue801'}
			{/* Replace this with the Unicode value of your custom icon */}
		</span>
	);
};

export default SalesUpIcon;
