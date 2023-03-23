export default{
    article:[
        {
            title:"From the Firehose"
        },
        {
            title:"Sample blog post",
            date:"January 1, 2021 by",
            by:"Mark",
            paragraph:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
        },
        {
            title:"Blockquotes",
            paragraph:"This is an example blockquote in action:"
        },
        {
            title:"Example lists",
            paragraph:"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highlyrepetitive body text used throughout. This is an example unordered list:",
            list:[
                {
                    name:"First list item",
                },
                {
                    name:"Second list item with a longer description",
                },
                {
                    name:"Third list item to close it out",
                }
            ]
        },
        {
            title:"Another blog post",
            date:"December 23, 2020 by",
            by:"Jacob",
            paragraph:"This is some additional paragraph placeholder content. It has been written to fill the available space andshow how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text."
        },
        {
            title:"Example Table",
            paragraph:"And don't forget about tables in these posts:"
        }

    ],
    showArticle(){
      this.article.forEach((val, id)=>{
        if(val.date){
          
          document.querySelector("#firehouse").insertAdjacentHTML("beforeend",`
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
              ${val.title}
              </h3>
          <article class="blog-post">
          <h2 class="blog-post-title">${val.title}</h2>
          <p class="blog-post-meta">${val.date}<a href="#">${val.by}</a></p>
          <p>${val.paragraph}</p>
        }
      `
      )
      }});
    }
}
/* -->
 */
        /* <article class="blog-post">
          <h2 class="blog-post-title">Sample blog post</h2>
          <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

          <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic
            typography, lists, tables, images, code, and more are all supported as expected.</p>
          <hr>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h2>Blockquotes</h2>
          <p>This is an example blockquote in action:</p>
          <h3>Example lists</h3>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout. This is an example unordered list:</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
        <article class="blog-post">
          <h2 class="blog-post-title">Another blog post</h2>
          <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example table</h3>
          <p>And don't forget about tables in these posts:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
              </tr>
            </tfoot>
          </table>

          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout.</p>
        </article>

        <article class="blog-post">
          <h2 class="blog-post-title">New feature</h2>
          <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout.</p>
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
          <a class="btn btn-outline-primary" href="#">Older</a>
          <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
        </nav>

      </div>

      <div class="col-md-4" >
        <div id="about" class="position-sticky overflow-auto" style="height: 90vh; top: 2rem;">
        </div>
      </div> */