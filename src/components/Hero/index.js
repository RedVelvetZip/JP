import React, { useState } from "react";
import video from "../../videos/video.mp4";
import {
	HeroContainer,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroButton,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";

const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id='home'>
			<VideoBg autoPlay loop muted src={video} type='video/mp4' />
			<HeroContent>
				<HeroH1>Virtual Banking Mode Easy</HeroH1>
				<HeroP>
					Sing Up For a new tody and receive $250 in credit towards your next
					payment.
				</HeroP>
				<HeroButton
					primary='true'
					dark='true'
					to='/sing-in'
					onMouseEnter={onHover}
					onMouseLeave={onHover}
				>
					Get Started {hover ? <ArrowForward /> : <ArrowRight />}
				</HeroButton>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
