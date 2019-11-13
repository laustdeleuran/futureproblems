import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import App from '../app';
import './page.css';

const Page = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
			logo: file(relativePath: { eq: "fp-logo.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<App>
			<article className="page">
				<Link to="/" className="page__logo">
					<Img
						fluid={data.logo.childImageSharp.fluid}
						title="Future Problems"
					/>
				</Link>
				{children}
			</article>
		</App>
	);
};

Page.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Page;
