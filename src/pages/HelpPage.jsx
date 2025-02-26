import { useParams } from "react-router-dom";
import MedicalEmergency from "../components/MedicalEmergency";
import CrimeEmergency from "../components/CrimeEmergency";
import FireEmergency from "../components/FireEmergency";
// import { useNavigate } from "react-router-dom";
const HelpPage = () => {
    const { section } = useParams();
    // const navigate = useNavigate();
    return ( 
        <div>
            {(() => {
                switch (section) {
                    case "medical-assistance":
                        return <MedicalEmergency />;
                    case "report-a-crime":
                        return <CrimeEmergency />;
                    case "fire-emergency":
                        return <FireEmergency />;
                                        
                }
            })()}
        </div> 
     );
}
 
export default HelpPage;