import Layout from "../components/Layout";
import CommentsFunctionality from "../components/InteractiveButtons";
import getPhotos from "../data/data.js";

const PhotoPage = (props) => (
  <Layout>
    <div className="container">
      <div className="display_image">
        <img src={props.image} alt="" />
      </div>
      <div className="comments">
        <div>
          <h2 className="tagline">{props.title}</h2>
          {/* {
                    typeof props.commentData !== "undefined" ? props.commentData.comments.map((comment, key) => <p key={key}><strong>{comment.user}:</strong>{comment.body}</p>) : "No Comments"
                } */}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            pretium dolor, ac consectetur lectus. Fusce molestie scelerisque
            sodales. Suspendisse et luctus turpis, sed mollis felis. Duis
            sollicitudin fringilla urna, in cursus massa aliquam tincidunt.
            Mauris gravida, enim vel congue ultrices, nisi sapien sollicitudin
            purus, at sodales neque felis at felis. Duis vehicula interdum
            tincidunt. Nullam ullamcorper sapien suscipit faucibus molestie.
            Integer sed justo justo. Sed elit arcu, sodales id nibh eget, tempor
            auctor leo.
          </p>
          <p>
            Quisque ac accumsan risus. Vivamus vestibulum volutpat dictum.
            Quisque blandit leo vel dolor condimentum, lobortis varius tortor
            ultrices. Nunc pharetra volutpat lectus, ut tincidunt diam consequat
            eget. Pellentesque auctor augue at purus tincidunt dignissim. Nunc
            diam massa, ultricies non massa nec, bibendum convallis sapien.
            Phasellus porttitor eget arcu vitae egestas. Donec tempus nibh et
            sapien condimentum mollis.
          </p>
        </div>
        <div className="request-info">
          <CommentsFunctionality />
        </div>
      </div>
    </div>
    <style>{`
            form{
                padding: 5px;
                background: var(--light-gray);
                border-top: 1px solid #dce2e4;
                overflow: auto;
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
            }
            form input {
                padding: 9px 3px;
                width: 90%;
                margin: 5px auto;
                display: block;
                background-color: var(--green);
                border: none;
                outline: none;
                color:white
            }
            form a {
                text-decoration: none;
                // margin-top: 5px;
                float: left;
                width: 50%;
                text-align: center;
                padding: 9px 0;
                // margin-top: 10px;
                color: white;
            }
            .tagline {
                border-bottom: 1px solid #dce2e4;
                padding-bottom: 10px;
                margin-bottom: 20px;
                display: inline-block;
                color: var(--green);
            }
            .comments{
                padding: 30px;
            }
            .comments .request-info {
                width: 50%;
                margin: 0 auto;
                padding: 50px;
            }
            .comments h2 {
                color: #333333;
            }
            .comments p {
                margin: 10px 0;
                font-size: 16px;
                line-height: 20px;
                color: #333333;
            }
            .comments strong {
                display: block;
            }
            .display_image{
                width: 50%;
            }
            .display_image img {width: 100%; display: block}
            .comments{
                position: relative;
                width: 50%;
            }
            .container {
                display: flex;
                width: 100%;
                background: var(--white);
                color: #AD0044;
                box-shadow: -12px 16px 75px -27px rgba(0,0,0,1);
            }
            @media only screen and (max-width: 768px) {
                .container {
                    flex-direction: column;
                }
                .display_image{
                    width: 100%;
                }
                .comments {
                    width: 100%
                }
                .comments .request-info {
                    width: 100%;                    
                }
            }
        `}</style>
  </Layout>
);

PhotoPage.getInitialProps = async ({ query }) => {
  // could fetch data here
  let { id, image, title } = { ...query };
  let commentData = getPhotos().find((m) => m.id == id);

  console.log(commentData);

  return { commentData, image, title };
};

export default PhotoPage;
