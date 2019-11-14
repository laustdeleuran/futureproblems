import React from 'react';
import { Link } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => (
	<Page>
		<SEO
			title="Future Problems at Burning Man 2020"
			description="Future Problems is a Portland-based collective of artists, builders and creatives with over 100 years of Black Rock City participation combined."
		/>
		<h1>Future Problems</h1>
		<p>
			Future Problems is a Portland-based collective of artists, builders, and
			creatives who have over 100 combined years of Black Rock City
			participation fueling their creativity. They’ve contributed to Love Beets,
			Suburbia, and Black Rock Gladiators! Members have also been the driving
			forces behind Spoonlandia, Dessert Dwellers, Cleu Camp, and many more.
			They’ve helped bring the art cars The Beethen and The Turkey to the playa,
			as well as art pieces such as the Lillium Gigantum, the A-MAZE-ING Cleu,
			The Cleu Labyrinth, AND MORE. Their members also count among the ranks of
			Rangers, Conclave, Temple Guardians, Burn Perimeter, Greeters, Lamp
			Lighters, Post Office, and Box Office.{' '}
		</p>
		<h2>Art Projects</h2>
		<ul>
			<li>Audioverse Dimension Warp</li>
			<li>
				<Link to="/multiverse/hingesoffreewill">Hinges of Free Will</Link>
			</li>
			<li>
				<Link to="/multiverse/ingesting-infinity">Ingesting Infinity</Link>
			</li>
			<li>Playa Possibility Playground</li>
			<li>Silly Little Stage</li>
			<li>
				<Link to="/multiverse/mobius-strip-club">The Mobius Strip Club</Link>
			</li>
			<li>The Lamp</li>
			<li>
				<Link to="/multiverse/whattoexpect">What To Expect When Expecting</Link>
			</li>
		</ul>
		<p>
			<Link to="/">Back to the problems</Link>
		</p>
	</Page>
);

export default Project;
