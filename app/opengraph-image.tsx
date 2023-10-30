import Image from 'next/image';
import { ImageResponse } from 'next/server';

export const size = {
	width: 900,
	height: 450,
};

export const contentType = 'image/png';

export default async function og() {
	return new ImageResponse(
		(
			<div
				tw='flex items-center justify-center '
				style={size}>
				<img
					src='https://i.postimg.cc/bwGGGMdH/default-og-image.png'
					alt='sigma marketing'
				/>
			</div>
		),
		size
	);
}
