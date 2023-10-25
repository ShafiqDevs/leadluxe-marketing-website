import React from 'react';
import '../../../public/fonts/calendar-icon/css/calendar_icon-embedded.css';

type Props = {};

const CalendarIcon = (props: Props) => {
	const style: React.CSSProperties = {
		fontFamily: 'calendar_icon',
	};

	return (
		<span style={style}>
			{'\ue803'}
			{/* Replace this with the Unicode value of your custom icon */}
		</span>
	);
};

export default CalendarIcon;
