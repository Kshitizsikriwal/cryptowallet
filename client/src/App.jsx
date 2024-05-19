
import { Navbar, Greet, Footer, Services, Transaction } from "./components";


const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Greet />

      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
