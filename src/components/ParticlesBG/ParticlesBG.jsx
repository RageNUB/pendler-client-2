import Particles from "react-tsparticles";
import particleConfig from "../ParticleConfig/ParticleConfig";

const ParticlesBG = () => {
    return (
        <div>
            <Particles params={particleConfig}></Particles>
        </div>
    );
};

export default ParticlesBG;