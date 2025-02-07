import Header from "../components/Header";
import Banner from "../components/Banner"
import Card from "../components/Card"
import Background1 from "../assets/background1.png"


const Home = () => {
    return (
        <>
            <Header />
            <Banner image={Background1} />
            <Card />
        </>
    );
};

export default Home;
