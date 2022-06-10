import React from 'react';

const NewsItem = (props) => {
	let { title, description, imageUrl, newsUrl, author, date, source } = props;
	return (
		<div className='my-3'>
			<div className='card'>
				<div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position: 'absolute' }}>
					<span className='badge rounded-pill bg-danger'>{source}</span>
				</div>
				<img
					src={
						!imageUrl
							? 'https://images.hindustantimes.com/tech/img/2022/06/07/1600x900/STScI-01EVSZTN3NZPWHHKNV7YGKYTRP_1654584076791_1654584089482.png'
							: imageUrl
					}
					className='card-img-top'
					alt='...'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>{description}</p>
					<p className='card-text'>
						<small className='text-muted'>
							By {author} on {new Date(date).toTimeString()}
						</small>
					</p>
					<a href={newsUrl} target='_blank' rel='noreferrer' className='btn btn-sm btn-primary'>
						Read More..
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
