import React from 'react';
import '../../../public/fonts/sigma-brand-logo/css/sigma_brand_logo-embedded.css'; // Path to your TTF file

const BrandLogo: React.FC = () => {
	const style: React.CSSProperties = {
		fontFamily: 'sigma_brand_logo',
	};

	return (
		<span style={style}>
			{'\ue800'}
			{/* Replace this with the Unicode value of your custom icon */}
		</span>
	);
};

export default BrandLogo;
