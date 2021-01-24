import React, { useState } from 'react';

const Prices = ({ bpi }) => {
	const [currency, setCurrency] = useState('USD');

	let list = '';
	if (currency === 'USD') {
		list = (
			<li className='list-group-item'>
				Bitcoin rate for {bpi.USD.description} :{' '}
				<span className='badge badge-primary'>{bpi.USD.code}</span>{' '}
				<strong>{bpi.USD.rate}</strong>
			</li>
		);
	}

	if (currency === 'EUR') {
		list = (
			<li className='list-group-item'>
				Bitcoin rate for {bpi.EUR.description} :{' '}
				<span className='badge badge-primary'>{bpi.EUR.code}</span>{' '}
				<strong>{bpi.EUR.rate}</strong>
			</li>
		);
	}

	if (currency === 'GBP') {
		list = (
			<li className='list-group-item'>
				Bitcoin rate for {bpi.GBP.description} :{' '}
				<span className='badge badge-primary'>{bpi.GBP.code}</span>{' '}
				<strong>{bpi.GBP.rate}</strong>
			</li>
		);
	}

	return (
		<>
			<ul className='list-group'>{list}</ul>

			<br />

			<select
				className='form-control'
				value={currency}
				onChange={e => setCurrency(e.target.value)}
			>
				<option value='USD'>USD</option>
				<option value='EUR'>EUR</option>
				<option value='GBP'>GBP</option>
			</select>
		</>
	);
};

export default Prices;
