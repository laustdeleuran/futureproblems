import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => {
	const data = useStaticQuery(graphql`
		query {
			sketch: file(relativePath: { eq: "ingesting-infinity.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 700) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Page>
			<SEO
				title="Ingesting Infinity"
				description="Rising from the ground, a stalk supports an intricately beaded, romanesco vegetable nestled in brassica leaves."
			/>
			<h1>Ingesting Infinity</h1>
			<p>
				An intricately beaded, oversized romanesco vegetable grows on the playa
				providing a sizable visual and interactive experience of nature’s golden
				ratio - the Fibonacci sequence manifest in an ordinary garden vegetable.
			</p>
			<h2>The Installation</h2>
			<p>
				<Img fluid={data.sketch.childImageSharp.fluid} />
			</p>
			<p>
				From afar, a romanesco vegetable illuminates against the ‘barren’ playa
				backdrop. Up close, participants admire the intricate beading and
				detailed fractal patterns of the veggie flesh. This oversized romanesco
				grows up from a large wood platform. Resting on a stalk of wood and
				steel, the beaded romanesco is nestled in large brassica leaves made
				from steel, fabric, and beads that provide a shaded sanctuary for the
				platform underneath. The fractal dome of the veggie flesh is made from
				intricately wired beads of different shapes, sizes and colors. The
				fractal dome is internally supported by 5 steel arms that form a
				circular armature. A hole near the stalk provides entryentrance to the
				center of the romanesco where 1 participant can sit in a comfy space and
				admire nature’s golden ratio from within.
			</p>
			<h2>Mission &amp; Philosophy</h2>
			<p>
				Our mission is to create interactive art that viewers can get up-close
				and personal with, relate to, and engage with physically and mentally.
				We want viewers to walk around it, lay underneath, touch it, get inside,
				and not only contemplate the philosophical questions that arise, but
				imagine how it was created and how they might do it differently. This
				piece is not behind a glass case, but accessible and textural. It comes
				to life with the personal and shared experiences viewers have with it.{' '}
			</p>
			<p>
				Installing an intricately-beaded and oversized romanesco on the playa,
				we hope to create something beautiful that also inspires challenging
				questions around: food politics, (how does privilege can vegetable
				familiarity be indicative of privilege? who has access to/eaten
				romanescos? what does it taste like? What does having a ‘fresh’
				vegetable represented on the dusty, dry playa spark for you?); the
				beauty of ordinary objects; what it means to feel small; roll reversal
				(being ingested by something we ingest); existential meaning and how we
				relate as humans to the phenomenon of Fibonacci’s sequence, the golden
				ratio, or the divine proportion.
			</p>
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
