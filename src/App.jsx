import logo from "./assets/video/bnl_loop.gif";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main bg-base">
      <section className="section-base">
        <img src={logo} alt="" className="w-flex" />
      </section>
      <article className="bottom-caption relative">
        <a href="http://www.candyfactorylk.com/" className="link_cls">Coming Soon</a>
      </article>
      <Footer />
    </div>
  );
}

export default App;
