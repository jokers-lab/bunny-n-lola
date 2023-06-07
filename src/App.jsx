import logo from "./assets/img/updated-gif.gif";
import text from "./assets/img/text.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main bg-base">
      <section className="section-base">
        <img src={logo} alt="" className="w-flex" />
        <img src={text} alt="" className="w-text" />
        <p>
          A World of <b>Elephant Hugs</b> and <b>Bunny Smiles!</b>
        </p>
      </section>
      <article className="bottom-caption relative">
        <p>Coming Soon</p>
      </article>
      <Footer />
    </div>
  );
}

export default App;
