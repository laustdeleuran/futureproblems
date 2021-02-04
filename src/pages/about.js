import React from 'react';
import { Link } from 'gatsby';

import Page from '../components/presentational/page';
import SEO from '../components/logic/seo';

const Project = () => (
	<Page>
		<SEO
			title="Art - Future Problems"
			description="Future Problems is a Portland-based collective of artists, builders and creatives with over 100 years of Black Rock City participation combined."
		/>
		<h1>Future Problems</h1>
		<p>
			Future Problems is a Portland-based collective of artists, builders, and
			creatives.
		</p>
		<h2>Art Projects</h2>
		<ul>
			<li>
				<Link to="/love-bikes">Love Bikes</Link>
			</li>
			<li>
				<Link to="/multiverse">Burning Man: Multiverse</Link>
			</li>
		</ul>
		<p>
			<Link to="/">Back to the problems</Link>
		</p>
	</Page>
);

export default Project;
