import ClientLogoSection from "../../ClientLogoSection/ClientLogoSection";
import BreadCrumb from "../BreadCrumbs/BreadCrumb";
import Profile from "../Profile/Profile";

const ViewAccountPage = () => {
    return (
        <div>
            <BreadCrumb
                name='Account'
            ></BreadCrumb>
            <Profile></Profile>
            <ClientLogoSection></ClientLogoSection>
        </div>
    );
};

export default ViewAccountPage;