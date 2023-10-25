import React from 'react';
import '../../../public/fonts/automated-icon/css/automated_logo-embedded.css';

type Props = {};

const AutomatedIcon = (props: Props) => {
	const style: React.CSSProperties = {
		fontFamily: 'automated_logo',
	};

	return (
		<span style={style}>
			{'\ue802'}
			{/* Replace this with the Unicode value of your custom icon */}
		</span>
	);
};

export default AutomatedIcon;
