import Header from "../components/Header";
import Banner from "../components/Banner"; 
import Background2 from "../assets/background2.png"; 

const Propos = () => {
    return (
        <>
            <Header />
            <Banner image={Background2} showText={false} overlayOpacity={0.3} />
        </>
    );
};

export default Propos;
