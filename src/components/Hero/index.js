import React, { useState } from "react";
import video from "../../videos/video2.mp4";
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
				<HeroH1>Tutorra Tutoring Service</HeroH1>
				<HeroP>
					Reach out today to accelerate academic growth with Tutorra
				</HeroP>
				<HeroButton
					primary='true'
					dark='true'
					to='contact'
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
