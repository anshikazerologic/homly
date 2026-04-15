
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Home from "./page/Home";



export default function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </div>
  );
}
