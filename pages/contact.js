import Layout from "../src/components/Layout";
import TypedText from "../src/components/TypedText";

const Contact = () => (
  <React.Fragment>
    <Layout>
      <div className="text-container">
        <img
          src="../static/img/IMG_1800.jpg"
          alt="Pic of Keith Maurice"
          className="keith-img"
        />
        <div className="text">
          <h1>Would Love To Chat! </h1>
          <div className="typed-text">
            <TypedText
              strings={[
                "Email me at <a href='mailto:kdingle88@yahoo.com' style='text-decoration:none;'><span style='color:#FC2F48'>kdingle88@yahoo.com</span></a>. <br><br><br>Or drop me a message on <a href='https://www.linkedin.com/in/keith-dingle-a73670163/' style='text-decoration:none;'target='_blank'><span style='color:#FC2F48'>LinkedIn</span></a>."
              ]}
            />
          </div>
        </div>
      </div>
    </Layout>

    <style jsx>{`
      .text-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
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

      .keith-img {
        width: 200px;
        height: 300px;
        object-fit: contain;

        margin-top: 50px;
        border-radius: 100px;
      }

      .typed-text {
        font-size: 12px;
      }

      h1 {
        text-align: center;
        color: #fff;
      }
    `}</style>
  </React.Fragment>
);

export default Contact;
