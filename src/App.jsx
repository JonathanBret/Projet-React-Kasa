import AppRouter from "./components/Router";
import Header from "./components/Header";
import Banner from "./components/Banner"

const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
      <Banner />
    </div>
  );
};

export default App