import AppRouter from "./components/Router";
import Header from "./components/Header";
import Banner from "./components/Banner"
import Card from "./components/Card"

const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
      <Banner />
      <Card />
    </div>
  );
};

export default App