import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => {
	const data = useStaticQuery(graphql`
		query {
			first: file(relativePath: { eq: "love-bikes-1.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 700) {
						...GatsbyImageSharpFluid
					}
				}
			}
			second: file(relativePath: { eq: "love-bikes-2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 700) {
						...GatsbyImageSharpFluid
					}
				}
			}
			# third: file(relativePath: { eq: "love-bikes-3.jpg" }) {
			# 	childImageSharp {
			# 		fluid(maxWidth: 700) {
			# 			...GatsbyImageSharpFluid
			# 		}
			# 	}
			# }
			fourth: file(relativePath: { eq: "love-bikes-4.jpg" }) {
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
			<SEO title="Love Bikes" description="The Love trikes' first debut was in 2012 at Burning Man as a mobile art installation. We've since outfitted them with mobile infrastructure and hundreds of LEDs with the intention of bringing more sparkle and delight to the streets of Portland.  " />
			<h1>Love Bikes</h1>
			<p>
				The Love trikes' first debut was in 2012 at Burning Man as a mobile art installation. 
				People were invited to cover them in anonymous love letters that they could give and 
				take at will. First created by Richard Stein and Gary Evans, Future Problems Art 
				Collective gained stewardship of the Love trikes in 2020. 
				</p>
				<p>
				We've since outfitted them with mobile infrastructure and hundreds of LEDs with 
				the intention of bringing more sparkle and delight to the streets of Portland. 
				So far, the trikes have brought the love to BLM protests, and this year will be 
				seen leading a bike tour celebrating other installations of the 
				Winter Light Festival. 
			</p>
			<p>
				<Img fluid={data.fourth.childImageSharp.fluid} />
			</p>
			<p>
				<Img fluid={data.first.childImageSharp.fluid} />
			</p>
			<p>
				<Img fluid={data.second.childImageSharp.fluid} />
			</p>
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
