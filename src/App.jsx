import Header from "./layout/Header.jsx";
import PageContent from "./layout/PageContent.jsx";
import Footer from "./layout/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}
