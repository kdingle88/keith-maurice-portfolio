import Layout from "../src/components/Layout";
import PortfolioGrid from "../src/components/PortfolioGrid";
import TypedText from "../src/components/TypedText";

const Portfolio = () => (
  <React.Fragment>
    <Layout>
      <div className="text-container">
        <div className="typed-text">
          <TypedText
            strings={[
              "Go Ahead <span style='color:#FC2F48'>Scroll Through</span>."
            ]}
          />
        </div>
        <PortfolioGrid />
      </div>
    </Layout>

    <style jsx>{`
      .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        flex: 2;

        width: 600px;
        height: 600px;
      }

      .typed-text {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
      }

      @media (max-width: 768px) {
        .text-container {
          width: 400px;
        }
      }
    `}</style>
  </React.Fragment>
);

export default Portfolio;
