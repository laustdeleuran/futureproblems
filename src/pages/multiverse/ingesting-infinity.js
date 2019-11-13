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
				Rising from the ground, a stalk supports an intricately beaded,
				romanesco vegetable nestled in brassica leaves. Inside the romanesco is
				a soft, comfortable space for a single individual to enter, observe, and
				contemplate the fractal beauty of this vegetable’s insight into the
				nature of the universe.
			</p>
			<h2>Physical Description</h2>
			<p>
				This structure will be an oversized depiction of a romanesco vegetable
				like it grows in our gardens - a coned, fractal dome nestled in large
				brassica leaves, resting upon a thick, supportive stalk. The fractal
				spiral pattern of the vegetable flesh will be achieved with acrylic
				beads of varying sizes, shapes, and colors twisted and bound together by
				wire. The fractal dome will be supported by a thick stalk and base
				platform made from wood. The leaves will be made from beads, fabric and
				thick wire and extend beyond the vegetable body. The surface of the
				stalk will be covered in beads to achieve textural cohesion. An opening
				near the stalk will lead to a comfortable, cushy space in the center of
				the vegetable where a single human can fit and admire the beaded fractal
				composition of the vegetable from the inside out. Sunlight will play off
				the beads during the day and internal lights will illuminate the
				fractals from within, during the night.
			</p>
			<p>
				<Img fluid={data.sketch.childImageSharp.fluid} />
			</p>
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
