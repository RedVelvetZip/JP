import React from "react";
import Icon1 from "../../Images/img3.svg";
import Icon2 from "../../Images/img4.svg";
import Icon3 from "../../Images/img5.svg";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServciesIcon,
	ServciesH2,
	ServicesP,
} from "./SertvicesElements";

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServciesIcon src={Icon1} />
					<ServciesH2>SAT Prep</ServciesH2>
					<ServicesP>
						Prepare for the SAT, ACT, and college admissions.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServciesIcon src={Icon2} />
					<ServciesH2>High School Cirriculum</ServciesH2>
					<ServicesP>
						Get 1 on 1 focus for English, math, and sciences
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServciesIcon src={Icon3} />
					<ServciesH2>Software Development</ServciesH2>
					<ServicesP>
						Learn development at beginner, intermediate, or advanced levels
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
