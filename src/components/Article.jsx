import React from 'react';

function Article() {
  return (
    <main>
      <article>
        <h2>On the street in Brooklyn</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
        <img src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg" alt="Description of Image 1" />
        <p>Continues... <a href="#">Read more</a></p>
      </article>
      <article>
        <h2>Vintage in Vogue</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
        <img src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg" alt="Description of Image 2" />
        <p>Continues... <a href="#">Read more</a></p>
      </article>
    </main>
  );
}
export default Article;