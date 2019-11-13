import React from 'react';
import PropTypes from 'prop-types';

import App from '../app';
import './page.css';

const Page = ({ children }) => (
	<App>
		<article className="page">{children}</article>
	</App>
);

Page.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Page;
