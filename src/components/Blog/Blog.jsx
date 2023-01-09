import React from "react";
import "./Blog.css";
import { BsArrowRightShort } from "react-icons/bs";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import Blog4 from "../../assets/blog4.jpg";

const blogs = [
  {
    id: 1,
    blogImg: Blog1,
    title: "Beautiful Morocco, let's travel",
    desc: "The Kingdom of Morocco is a country in the Maghreb region of North Africa. It has a Mediterranean coastline on the Atlantic Ocean and is bordered by Algeria to the east, Mauritania to the south, and the disputed territory of ...",
    link: "https://www.google.com/search?q=beautiful+morocco&oq=beautiful+morocco&aqs=chrome..69i57j0l7.1001j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    id: 2,
    blogImg: Blog2,
    title: "The best places to visit in 2023",
    desc: "The best places to visit in 2023 are the ones that are not only beautiful but also have a lot to offer. These places are not only beautiful but also have a lot to offer. These places are not only beautiful but also have a lot to offer in terms of ...",
    link: "https://www.google.com/search?q=best+places+to+visit+in+2023&oq=best+places+to+visit+in+2023&aqs=chrome..69i57j0l7.1001j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    id: 3,
    blogImg: Blog3,
    title: "Romantic moments under Eiffel Tower",
    desc: "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was ...",
    link: "https://www.google.com/search?q=romantic+moments+under+Eiffel+Tower&oq=romantic+moments+under+Eiffel+Tower&aqs=chrome..69i57j0l7.1001j0j7&sourceid=chrome&ie=UTF-8",
  },
  {
    id: 4,
    blogImg: Blog4,
    title: "Let's have an adventure in Nigeria",
    desc: "Nigeria is a country in West Africa, bordering Niger in the north, Chad in the northeast, Cameroon in the east, and Benin in the west. Its southern coast is on the Gulf of Guinea in the Atlantic Ocean. Nigeria is a federal republic comprising 36 states and a cap...",
    link: "https://www.google.com/search?q=let's+have+an+adventure+outside+Nigeria&oq=let's+have+an+adventure+outside+Nigeria&aqs=chrome..69i57j0l7.1001j0j7&sourceid=chrome&ie=UTF-8",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog container section">
      <div className="sec-container">
        <div className="sec-intro">
          <div className="sec-title">
            <h2>Our Blog Spots</h2>
            <p>An insight to the incredible experience in the world!</p>
          </div>
        </div>

        <div className="main-content grid">
          {/* Map the array of blogs and render them here using map function */}
          {blogs.map(({ id, blogImg, title, desc, link }) => {
            return (
              <div key={id} className="single-post grid">
                <div className="img-div">
                  <img src={blogImg} alt={title} />
                </div>

                <div className="post-details">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>

                <div className="post-link flex">
                  <a href={link}>Read More</a>
                  <BsArrowRightShort className="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
