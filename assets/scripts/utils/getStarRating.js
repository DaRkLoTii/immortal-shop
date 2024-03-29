const getOutlineStar = (width, height) => {
	width = width || 25;
	height = height || 25;
	const star = document.createElement('p');
	star.innerHTML = `<svg fill="false" width="${width}px" height="${height}px" viewBox="0 -0.02 60.031 60.031" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill-rule: evenodd;}</style></defs><path class="cls-1" d="M939.975,219.607l5.32,10.771a9.12,9.12,0,0,0,2.647,3.216,9.226,9.226,0,0,0,3.713,1.675l8.235,1.667-6.122,4.647a9.01,9.01,0,0,0-3.454,8.781l1.976,10.994-7.839-4.409a9.151,9.151,0,0,0-8.958,0l-7.833,4.405,1.974-10.984a9,9,0,0,0-3.43-8.776l-6.142-4.662,8.227-1.666a9.074,9.074,0,0,0,6.356-4.874l5.33-10.789m0-9.606a3.1,3.1,0,0,0-2.792,1.716l-7.914,16.018a3.02,3.02,0,0,1-.885,1.074,3.129,3.129,0,0,1-1.28.577l-14.654,2.967a3.069,3.069,0,0,0-2.391,2.285,3,3,0,0,0,1.117,3.085l11.4,8.657a3,3,0,0,1,.993,1.3,2.929,2.929,0,0,1,.16,1.618l-3.076,17.135a3,3,0,0,0,1.274,3.011,3.13,3.13,0,0,0,1.777.551,3.164,3.164,0,0,0,1.55-.4l13.174-7.409a3.156,3.156,0,0,1,3.09,0L954.7,269.6a3.161,3.161,0,0,0,3.326-.147,3,3,0,0,0,1.275-3.011L956.218,249.3a2.948,2.948,0,0,1,.162-1.618,3,3,0,0,1,.993-1.3l11.4-8.657a3,3,0,0,0,1.117-3.085,3.07,3.07,0,0,0-2.393-2.285l-14.656-2.967a3.162,3.162,0,0,1-1.281-.577,3.028,3.028,0,0,1-.884-1.074l-7.91-16.018A3.108,3.108,0,0,0,939.975,210h0Z" data-name="no rating" id="no_rating" transform="translate(-909.969 -210)"/></svg>`
	return star;
}

const getFillStar = (width, height) => {
	width = width || 25;
	height = height || 25;
	const star = document.createElement('p');
	star.innerHTML = `<svg fill="true" width="${width}px" height="${height}px" viewBox="0 -0.03 60.062 60.062" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill-rule: evenodd;}</style></defs><path class="cls-1" d="M670.68,227.733a3.03,3.03,0,0,0,.884,1.072,3.168,3.168,0,0,0,1.282.578l14.662,2.965a3.067,3.067,0,0,1,2.394,2.284,3,3,0,0,1-1.118,3.084l-11.408,8.654a3.01,3.01,0,0,0-.994,1.3,2.956,2.956,0,0,0-.16,1.618L679.3,266.42a3,3,0,0,1-1.275,3.01,3.166,3.166,0,0,1-3.328.146l-13.18-7.407a3.165,3.165,0,0,0-3.091,0l-13.181,7.407a3.156,3.156,0,0,1-3.327-.146,3,3,0,0,1-1.275-3.01l3.078-17.129a2.956,2.956,0,0,0-.16-1.618,3.01,3.01,0,0,0-.994-1.3l-11.408-8.654a3,3,0,0,1-1.118-3.084,3.068,3.068,0,0,1,2.393-2.284l14.66-2.965a3.141,3.141,0,0,0,1.281-.578,3.044,3.044,0,0,0,.885-1.072l7.918-16.013a3.133,3.133,0,0,1,5.587,0Z" id="rating" transform="translate(-629.938 -210)"/></svg>`;
	return star;
}

export {getOutlineStar, getFillStar}