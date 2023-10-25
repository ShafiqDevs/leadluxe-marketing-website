import React from 'react';

type Props = {
	classNames: string;
};

const BGCircle = ({ classNames }: Props) => {
	return (
		<span
			// style={{ width: `${width}px`, height: `${height}px` }}
			className={`${classNames} absolute rounded-full overflow-hidden `}
		/>
	);
};

export default BGCircle;
