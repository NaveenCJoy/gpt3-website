import React from "react";
import { Article } from "../../components";
import "./blog.css";
import {
  Rectangle22,
  Rectangle23,
  Rectangle24,
  Rectangle25,
  Rectangle26,
} from "./imports2";
// import Rectangle22 from "../../assets/Rectangle22.png";
// import Rectangle23 from "../../assets/Rectangle23.png";
// import Rectangle24 from "../../assets/Rectangle24.png";
// import Rectangle25 from "../../assets/Rectangle25.png";
// import Rectangle26 from "../../assets/Rectangle26.png";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={Rectangle22}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={Rectangle23}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Rectangle24}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Rectangle25}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Rectangle26}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
