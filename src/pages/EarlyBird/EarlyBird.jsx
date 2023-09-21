import Navbar from "../../components/Navbar/Navbar";
import EarlyBirdForm from "../Home/EarlyBirdForm/EarlyBirdForm";

const EarlyBird = () => {
    return (
        <div className="bg-slate-900">
            <Navbar></Navbar>
            <EarlyBirdForm></EarlyBirdForm>
        </div>
    );
};

export default EarlyBird;