import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => {
	const data = useStaticQuery(graphql`
		query {
			sketch: file(relativePath: { eq: "the-lamp.jpg" }) {
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
				title="The Lamp"
				description="A burnable Lamp structure that sits on the playa with the intention of being burned.  The lamp represents light and can take on a number of symbolic representations. The central idea is that fire is the brightest light, especially in a world that is becoming more and more illuminated by neon, screens, leds, and others."
			/>
			<h1>The Lamp</h1>
			<p>
				A Lamp structure constructed with the intention of being burned. The
				lamp represents light and can take on a number of symbolic
				representations. The central idea is that fire is the brightest light,
				especially in a world that is becoming increasingly illuminated by neon,
				screens, leds, and others.
			</p>
			<h2>The Installation</h2>
			<p>
				<Img fluid={data.sketch.childImageSharp.fluid} />
			</p>
			<p>
				The burnable lamp will be a playa art installation. The vision of the
				lamp is to be constructed of mostly reclaimed lumber, with a base that
				can be entered by participants. The lamp will contain a shade, like a
				house lamp, with a geodesic cut-out pattern. Cut outs of the negative
				shapes of the shade will be used as ornament throughout the structure.
				Within the lamp's base, which people can enter, will be a ladder
				climbing up the center to a platform that lies on top of the geodesic
				shade. A pull chain will be installed at the base so people can interact
				with the installation by pulling it. When the chain is pulled it will
				trigger a change in the lamp. There may be an audio experience component
				that accompanies the lamp installation to highlight the relationship
				between sound and light.
			</p>
			<h2>Mission &amp; Philosophy</h2>
			<p>
				The mission is to create a burnable installation that people can
				interact with. We also wish to create a playa sanctuary that contains
				the elements of a space that you can enter and interact with. The end
				goal of the piece to see the lamp on fire to show a common household
				item associated with the distribution of light illuminated by flame.
				Throughout the process we want to build a space that invited people in
				to connect with their true selves and their light within.
			</p>
			<p>
				The philosophy of this piece is to create something that has a simple
				and identifiable shape that represents a common object for most of us.
				Within that there is a world of interpretation that can happen for
				anyone that engages with the piece, weather observers or participants.
				Lamps represent light. Fire is the original and brightest light that
				outshines all the others. Lamps typically emit light through
				electricity, which this installation will do all week up until it burns.
				By burning the lamp it provides a chance for a lamp to illuminate
				through our most natural form of light. The beauty of this piece for me
				is the potential meanings that it can take on for people, including
				myself, throughout the process of its becoming.
			</p>
			<p>
				Seeing a common object in a new way (on fire) is something that burning
				man can offer. The lamp as a symbol of light will illuminate new
				discoveries and figuring out what those are will be the fun part.
			</p>
			<p>
				Seeing a common object in a new way (on fire) is something that burning
				man can offer. The lamp as a symbol of light will illuminate new
				discoveries and figuring out what those are will be the fun part.
			</p>
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
