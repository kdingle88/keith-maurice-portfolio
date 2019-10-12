import TypedText from "../src/components/TypedText";
import Layout from "../src/components/Layout";

const Index = () => (
  <React.Fragment>
    <Layout>
      <div className="text-container">
        <h1 className="title-text">Hey I'm Keith,</h1>
        <div className="typed-text">
          <TypedText
            strings={[
              "A <span style='color:#FC2F48'>Software Engineer</span>.",
              "A <span style='color:#FC2F48'>Problem Solver</span>.",
              "A <span style='color:#FC2F48'>Creative Thinker</span>.",
              "An <span style='color:#FC2F48'>Entrepreneur</span>.",
              "A <span style='color:#FC2F48'>Jack of Many Trades</span>.",
              "A <span style='color:#FC2F48'>Ginger Beer Connoisseur</span>.",
              "A <span style='color:#FC2F48'>Musician</span> <span style='font-size: 12px'>...well sort of</span>",
              "A <span style='color:#FC2F48'>Gamer</span> <span style='font-size: 12px'>...I beast at Smash Bros</span>"
            ]}
          />
        </div>
      </div>
    </Layout>
    <style jsx>{`
      .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 32px double #fd3048;
        border-radius: 32px;
        flex: 2;
        background-color: rgba(238, 238, 238, 0.1);
        width: 500px;
        height: 500px;

        padding-bottom: 50px;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5),
          0 15px 12px rgba(0, 0, 0, 0.42);
      }

      .title-text {
        font-size: 48px;
        color: #fff;
      }
      .typed-text {
        font-size: 32px;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        .title-text {
          font-size: 32px;
        }
        .typed-text {
          font-size: 24px;
          font-weight: bold;
        }
        .text-container {
          margin-top: 50px;
          width: 400px;
        }
      }
    `}</style>
  </React.Fragment>
);

export default Index;
