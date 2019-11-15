import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => {
	const data = useStaticQuery(graphql`
		query {
			sketchFront: file(relativePath: { eq: "sillylilstage-front.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 700) {
						...GatsbyImageSharpFluid
					}
				}
			}
			sketchSide: file(relativePath: { eq: "sillylilstage-side.jpg" }) {
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
				title="Silly Little Stage"
				description="The Silly Little Stage is a small improv theatre stage, lovingly constructed by hand for participants to discover the expanse of each others imagination. It’s a place to take a load off, get silly with reality, and laugh till your heart aches. Here all the world is a silly little stage."
			/>
			<h1>Silly Little Stage</h1>
			<p>
				The Silly Little Stage is a small improv theatre stage, lovingly
				constructed by hand for participants to discover the expanse of each
				others imagination. It’s a place to take a load off, get silly with
				reality, and laugh till your heart aches. Here all the world is a silly
				little stage.
			</p>
			<h2>The Installation</h2>
			<p>
				<Img fluid={data.sketchFront.childImageSharp.fluid} />
			</p>
			<p>
				<Img fluid={data.sketchSide.childImageSharp.fluid} />
			</p>
			<p>
				The Silly Little Stage will be a small, hand-built proscenium stage with
				seating in front and a platform with a spotlight. The stage itself will
				be an enclosed structure, constructed primarily of wood and cloth. From
				a distance, it will be hard to decipher what it is (obviously not too
				hard, no darkwads). People might think, “!? What is that?” But, when
				participants get closer to investigate, they will find an illuminated
				inviting space to explore and perform for each other. The seating area
				will be four rows of tier benches that get progressively taller and more
				precarious to climb onto. The ten foot tall spotlight platform behind
				it, will have a small area to climb up to and use the spotlight.
			</p>
			<h2>Mission &amp; Philosophy</h2>
			<p>
				The goal with this piece is to support creative human interaction by
				creating an inviting space for the ultimate act of immediacy: putting
				yourself on a stage and doing whatever comes to mind. By setting the
				stage, this piece challenges our participants to fill it. Once something
				is happening, it seeks to engage the viewers to become participants as
				well and create a positive, creative feedback loop that will leave
				everyone wondering, “Where did the time go!? That was a silly little
				stage!”
			</p>
			<p>
				The Silly Little Stage is a surprising place, a place where you can
				spend hours doing seemingly nothing at all. Our dearest hope is that by
				creating the stage, someone will stand on it and share a bit of their
				soul with their fellow participants. The Silly Little Stage will have
				just enough inspiration to get you started on the creative journey, by
				providing a few (non-moopy) props and prompt wheel, but not enough to
				impede you from showing the world the magical performance artist you may
				or may not have known was living inside you. Not only is it a stage, but
				an entire show, with multiple roles to play: run the spotlight, make
				sound effects, turn on the “Applause” sign at inappropriate times. This
				piece seeks to engage everyone that is interacting with it in
				spontaneous creative performance. At the Silly Little Stage we hope that
				participants will become engrossed in creative flow that they will
				hardly realize the sun has set and their friends went to the porto and
				came back already.
			</p>
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
