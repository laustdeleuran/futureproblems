import React from 'react';
import { Link } from 'gatsby';

import Page from '../components/presentational/page';
import SEO from '../components/logic/seo';

const NotFoundPage = () => (
	<Page>
		<SEO title="404: Not found" />
		<h1>SMELBORP</h1>
		<p>You're lost. Resistance is mandatory.</p>
		<p>
			<Link to="/">Go back to the problems</Link>
		</p>
	</Page>
);

export default NotFoundPage;
