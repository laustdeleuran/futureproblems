import React from 'react';
import { Link } from 'gatsby';

import Front from '../components/presentational/front';
import SEO from '../components/logic/seo';

const IndexPage = () => (
	<Front>
		<SEO title="Home" />
		<Link to="/about" title="Art projects">
			See the art projects
		</Link>
	</Front>
);

export default IndexPage;
