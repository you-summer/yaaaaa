import ContentTop from "../components/content1/ContentTop";
import ContentMid1 from "../components/content2/ContentMid1";
import ContentMid2 from "../components/content3/ContentMid2";
import ContentMid3 from "../components/content4/ContentMid3";
import ContentMid4 from "../components/content5/ContentMid4";
import Footer from "../components/Footer";
import Header from "../components/Header";

import FadeFrameMotion from "../components/FadeFrameMotion";

const Home = () => {
  return (
    <>
      <Header />
      <FadeFrameMotion>
        <ContentTop />
      </FadeFrameMotion>

      <FadeFrameMotion>
        <ContentMid1 />
      </FadeFrameMotion>

      <FadeFrameMotion>
        <ContentMid2 />
      </FadeFrameMotion>

      <FadeFrameMotion>
        <ContentMid3 />
      </FadeFrameMotion>

      <FadeFrameMotion>
        <ContentMid4 />
      </FadeFrameMotion>

      <Footer />
    </>
  );
};
export default Home;
