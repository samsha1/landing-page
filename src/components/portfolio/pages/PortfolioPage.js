import React from 'react';
import PortfolioItems from '../PortfolioItems';
import PortfolioList from './PortfolioList';
import './styles.scss';

const PortfolioPage = (props) => {
	return (
		<div className="portfolio-page">
		<div className="content-grid">
		<h1>Portfolio</h1>
		<div className="portfolio-wrapper">
		{PortfolioList.map((item, i) => (
			<PortfolioItems render={item.render} key={i} />
			))}
		</div>
		</div>
		</div>

		);
};

export default PortfolioPage;