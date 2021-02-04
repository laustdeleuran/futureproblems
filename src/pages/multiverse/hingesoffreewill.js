import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => {
	const data = useStaticQuery(graphql`
		query {
			sketch: file(relativePath: { eq: "hinges.jpg" }) {
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
			<SEO title="Hinges of Free Will" description="Hinges of Free Will is an opportunity to explore the seemingly infinite choices that make up our experience we call existence." />
			<h1>Hinges of Free Will</h1>
			<p>
				Hinges of Free Will is an opportunity to explore the seemingly infinite
				choices that make up our experience we call existence. Every day we are
				faced with approximately 35,000 choices! The installation is meant to
				illuminate this fascinating part of our realities.
			</p>
			<h2>The Installation</h2>
			<p>
				<Img fluid={data.sketch.childImageSharp.fluid} />
			</p>
			<p>
				The installation will be a series of doorways. They will be stand alone
				units as portals to pass through. From a birds eye view, the
				installation will form an infinity symbol. There will be various types
				of individual doors (saloon, pocket, French, front, Dutch etc.) with
				thematic expressions, lighting and design so they will shine as stand
				alone pieces. The central doorway is a revolving door. The supporting
				doors will guide you inward and outward from the center point. The
				doorways will also have small placards of choices for consideration as
				they pass through to the other side.
			</p>
			<h2>Mission &amp; Philosophy</h2>
			<p>
				This installation encourages participation in exploring the choices and
				interacting with 100% of the objects. The participant can use the open
				doorways to physically frame their experience of the surrounding desert
				and BRC, or to allow for individual contemplation.
			</p>
			<p>
				This expression is meant to provide participants with an opportunity for
				inward/outward exploration of the choices they have made that have led
				them to the very moment they are now interacting with this piece. The
				odds of existing at all are hard to comprehend. We are a series of
				molecules that became sentient. We have the capacity for thoughts and
				considerations that lead us to make choices that, in turn, affect our
				own lives and those around us. The self referential nature of the piece
				is physically expressed through the mathematical infinity symbol, and
				thematically through the various choices that are outlined as you
				explore the inward and outward flow of the piece.
			</p>
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
