import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player';
import { useStaticQuery, graphql } from 'gatsby';

import './front.css';
import video from '../../../assets/erutufsmelborp.mp4';
import App from '../app';

/**
 * ReactPlayer configurations
 * @source https://www.npmjs.com/package/react-player#config-prop
 */
const REACT_PLAYER_CONFIG = {
	youtube: {
		playerVars: {
			modestbranding: 1,
			showinfo: 1,
		},
	},
	vimeo: {
		playerOptions: {
			badge: 0,
			byline: 0,
			portrait: 0,
			title: 0,
		},
	},
};

/**
 * Front
 */
const Front = ({ children }) => {
	const data = useStaticQuery(graphql`
		query {
			maskImage: file(relativePath: { eq: "video-mask.png" }) {
				childImageSharp {
					fluid(maxWidth: 1400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<App>
			<div className="front">
				<figure className="front__gfx" title="Future Problems">
					<div className="front__gfx-mask">
						<Img fluid={data.maskImage.childImageSharp.fluid} />
					</div>
					<ReactPlayer
						className="front__gfx-video"
						config={REACT_PLAYER_CONFIG}
						controls={false}
						height={null}
						loop={true}
						muted={true}
						playing={true}
						playsinline={true}
						url={video}
						volume={0}
						width={null}
					/>
					{children}
				</figure>
			</div>
		</App>
	);
};

Front.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Front;
