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
			participation fueling our creativity. We’ve contributed to Love Beets,
			Suburbia, and Black Rock Gladiators! Members have also been the driving
			forces behind Spoonlandia, Dessert Dwellers, Cleu Camp, and many more.
			We’ve helped bring the art cars The Beethen and The Turkey to the playa,
			as well as art pieces such as the Tree of Time, Writer's Block, Rhythmoop,
			Temple of Kulkukan, Her Secret Garden, the Lillium Gigantum, the
			A-MAZE-ING Cleu, The Cleu Labyrinth, AND MORE. Our members also count
			among the ranks of Rangers, Conclave, Temple Guardians, Burn Perimeter,
			Greeters, Lamp Lighters, Post Office, and Box Office.
		</p>
		<h2>Multiverse – Art Projects</h2>
		<ul>
			<li>
				<Link to="/multiverse/hingesoffreewill">Hinges of Free Will</Link>
			</li>
			<li>
				<Link to="/multiverse/ingesting-infinity">Ingesting Infinity</Link>
			</li>
			<li>
				<Link to="/multiverse/sillylittlestage">Silly Little Stage</Link>
			</li>
			<li>
				<Link to="/multiverse/the-lamp">The Lamp</Link>
			</li>
			<li>
				<Link to="/multiverse/mobius-strip-club">The Mobius Strip Club</Link>
			</li>
			<li>
				<Link to="/multiverse/whattoexpect">What To Expect When Expecting</Link>
			</li>
		</ul>
		<p>
			<Link to="/">Back to the art</Link>
		</p>
	</Page>
);

export default Project;
