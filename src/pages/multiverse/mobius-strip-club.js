import React from 'react';
import { Link } from 'gatsby';

import Page from '../../components/presentational/page';
import SEO from '../../components/logic/seo';

const Project = () => (
	<Page>
		<SEO
			title="The Möbius Strip Club"
			description="If you travel along the surface of a Möbius Strip, you’ll eventually see both sides of everything, but you’ll never reach the end. Nothing stays the same and eventually everything happens, over and over, whether you like it or not, in this eternal Möbius Strip Club we call life. "
		/>
		<h1>The Möbius Strip Club</h1>
		<p>
			The Möbius Strip Club appears at first as a ring of LEDs chasing
			themselves around the space on an infinite journey. As burners enter the
			space, it lights up revealing a second climbable Möbius strip and dancing
			pole. The art burst to life with music and lights when participants begin
			to perform.
		</p>
		<h2>Physical Description</h2>
		<p>
			The Möbius Strip Club includes two primary structures, an outer wooden
			Möbius loop and an inner steel Möbius infinity sign. The Möbius loop
			contains the space and serves as seating for the club. The edges of the
			loop are lined with moving LEDs that visit both sides of the Möbius strip
			on their infinite journey. There is a sound system built into the outer
			Möbius loop that comes to life when participants interact with the art.
			Contained within the ring are eight foot high, steel monkey bars in the
			shape of a Möbius infinity sign. Mounted from the monkey bars in the
			center of the ring is a dancing pole. The monkey bars and pole are lit by
			motion activated, disco lights mounted along the edge of the outer loop.
		</p>
		<h2>Mission &amp; philosophy</h2>
		<p>
			Möbius Strip Club is a space defined by interaction with its visitors.
			Similar to life, it can be a very dark experience if left isolated and
			alone. And as with life, when we play and express ourselves, a symphony of
			lights and music bursts into existence. The energy they put in is
			amplified and reflected back to remind us how beautiful life is when we
			participate to our fullest, in itself creating a beautiful new loop of
			creativity.
		</p>
		<p>
			If you travel along the surface of a Möbius Strip, you’ll eventually see
			both sides of everything, but you’ll never reach the end. Nothing stays
			the same and eventually everything happens, over and over, whether you
			like it or not, in this eternal Möbius Strip Club we call life. Right and
			wrong, cause and effect, the sacred and the profane are all snakes biting
			their own tails.… Oon a long enough timeline, even the most polar of
			opposites reveal themselves to be two sides of the same story.
		</p>
		<p>
			Through this art piece, we hope to remind people that life is an eternal,
			interactive experience. Just as a stage is but a series of flattened
			boards until the performance begins, life isn’t all asthe amazing as it
			can be until we start to play. You can stand in the dark or play in the
			light, but there’s no way off of this Möbius strip we call life.
		</p>
		<p>
			<Link to="/multiverse/">Go back to the projects</Link>
		</p>
	</Page>
);

export default Project;
