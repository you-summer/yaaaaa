import ContentTop from "../components/content1/ContentTop";
import ContentMid1 from "../components/content2/contentMid1";
import ContentMid2 from "../components/content3/ContentMid2";
import ContentMid3 from "../components/content4/ContentMid3";
import ContentMid4 from "../components/content5/ContentMid4";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />

      <ContentTop />
      <ContentMid1 />
      <ContentMid2 />
      <ContentMid3 />
      <ContentMid4 />

      <Footer />
    </>
  );
};
export default Home;
