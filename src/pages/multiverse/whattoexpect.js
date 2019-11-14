import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => {
	const data = useStaticQuery(graphql`
		query {
			sketch: file(relativePath: { eq: "what-to-expect.jpg" }) {
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
				title="What To Expect When Expecting"
				description="What to Expect When Expecting is an invitation to step inside of another's body and explore what could have been and what might be. Participants are asked to face the dichotomy of bringing forth life and dreams in a world that is facing climate destruction."
			/>
			<h1>What To Expect When Expecting</h1>
			<p>
				What to Expect When Expecting is an invitation to step inside of
				another's body and explore what could have been and what might be.
				Participants are asked to face the dichotomy of bringing forth life and
				dreams in a world that is facing climate destruction.
			</p>
			<h2>The Installation</h2>
			<p>
				<Img fluid={data.sketch.childImageSharp.fluid} />
			</p>
			<p>
				A 5 sided, wooden platform has a body cast of a different pregnant belly
				and chest at each side. Each cast has been created using plaster strips,
				then sealed. They're on metal posts, secured to the platform and can be
				raised and lowered to more perfectly fit the participant's height. The
				implication when stepping up on the platform is to step directly into
				the cast, and then to wear/experience a new body. Fragmented pieces of
				mirror are sandwiched between two sheets of plexiglass, this stands to
				the side of each body cast/participant, so that they can see themselves
				in this new shape in the mirrors, while being broken by the surrounding
				scene on the playa. Each cast is transformed to represent a particular
				climate issue that we face- rising sea levels, forest fires, etc, using
				collage.{' '}
			</p>
			<h2>Mission &amp; Philosophy</h2>
			<p>
				We plan to combine woodworking, welding, mirror play, plaster sculpture
				and collage. We're excited to have our whole group contribute on an
				artistic level that fits different skills and interests. But once the
				installation is finished, its potential is only fully realized when a
				person at Burning Man steps into a body cast and completes the
				sculpture. Without the participant, it's only an invitation. It's how
				they look, feel and think when inside the body that makes the
				installation come alive.
			</p>
			<p>
				We live in a time when the decision to have a child comes with the
				knowledge of an interdependent multi-reality: climate change and
				pollution conflicts with the desire for a family, and a hope for the
				future. In our artist collective, "Future Problems," we are in the midst
				of a potent shared experience; at least nine of us are considering
				having children in the next year. We don't know what to expect as we
				look towards what might come. As we consider our own choices, we want to
				help everyone who interacts with this installation appreciate how it
				might feel to be simultaneously filled with a dream and concerned about
				the state of the world.This dichotomy applies to all types of creation:
				babies, projects, thoughts, dreams, investments. Because each body is a
				cast of a different pregnant person, there's also an opportunity for
				participants of all genders to experience physically dwelling in someone
				else's body and shape, even if only for a moment.
			</p>
			<p>
				<Link to="/multiverse/">Back to the projects</Link>
			</p>
		</Page>
	);
};

export default Project;
