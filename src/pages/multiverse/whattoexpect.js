// import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
// import { useStaticQuery, graphql } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => {
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		sketch: file(relativePath: { eq: "ingesting-infinity.jpg" }) {
	// 			childImageSharp {
	// 				fluid(maxWidth: 700) {
	// 					...GatsbyImageSharpFluid
	// 				}
	// 			}
	// 		}
	// 	}
	// `);
	return (
		<Page>
			<SEO title="What To Expect When Expecting" description="" />
			<h1>What To Expect When Expecting</h1>
			<p>TBA</p>
			{/* <p>
				<Img fluid={data.sketch.childImageSharp.fluid} />
			</p> */}
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
