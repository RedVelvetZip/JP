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
					<ServciesH2>Reduce expenses</ServciesH2>
					<ServicesP>
						We helo reduce your fess and increse your overall revenue
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServciesIcon src={Icon2} />
					<ServciesH2>Virtual Offices</ServciesH2>
					<ServicesP>
						You can access our platform online anywhere in the world!
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServciesIcon src={Icon3} />
					<ServciesH2>Premium Benefits</ServciesH2>
					<ServicesP>
						Unlock our special membership card that return 5% cash back.
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
