export default{
    article:[
        {
            title:"Tenis De Mesa",
            date:"",
            by:"",
            paragraph:"",

        },
        {
            title:"También Conocido como Ping-Pong o Pimpón",
            date:"March 24, 2023 by",
            by:"Jose Cabrejo",
            paragraph:"Es un deporte de raqueta que se disputa entre dos jugadores o dos parejas (dobles). Es un deporte olímpico desde Seúl 1988, y el deporte con mayor número de practicantes, con 40 millones de jugadores compitiendo en todo el mundo.1​2​3​ Según un estudio realizado por la NASA, es el deporte más complicado que un ser humano puede practicar a nivel profesional.4​5​6​ Diversos estudios han demostrado que la práctica de este deporte mejora, entre otras, la capacidad y el tiempo de reacción, la coordinación ojo-mano, la concentración y la memoria. La regulación a nivel mundial de este deporte corre a cargo de la Federación Internacional de Tenis de Mesa (ITTF, por sus siglas en inglés), que agrupa a más de 200 organizaciones nacionales y 33 millones de federados a todos los niveles de competición, desde torneos de clubs hasta los campeonatos del mundo, que se celebran anualmente desde 1926 y bianualmente desde 1957, o el World Tour, un conjunto de torneos organizados por la ITTF que se celebran en todos los continentes y que reúne a los profesionales del más alto nivel. Nació en la década de 1870 en Inglaterra como una derivación del tenis. ",
        },
        {
            title:"Incorporación de los países asiáticos",
            date:"",
            by:"",
            paragraph:"El primer país asiático en frenar el dominio europeo fue Japón, que dominó los mundiales entre 1952 y 1957. Este dominio fue el reflejo de una incorporación técnica aportada por este país: la espuma. "
        },
        {
            title:"Condiciones de Juego",
            date:"",
            by:"",
            paragraph:"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highlyrepetitive body text used throughout. This is an example unordered list:",
            listar:[
                {
                    name:"El espacio de juego será rectangular y no menor de 14 m de largo, 7 m de ancho y 5 m de alto.",
                    href:"#",
                },
                {
                    name:"En competiciones por el título mundial u olímpico la intensidad luminosa, medida a la altura de la superficie de juego, deberá ser, como mínimo, de 1000 lux.",
                    href:"#",
                },
                {
                    name:"Cuando se juegue en varias mesas a la vez, el nivel de iluminación deberá ser el mismo para todas ellas. ",
                    href:"#",
                },
                {
                  name:"El fondo deberá ser, en general, oscuro y no podrá contener fuentes de luz brillante ni dejar pasar claridad a través de ventanas sin cubrir u otras aberturas.",
                  href:"#",
                },
                {
                  name:"El suelo no podrá ser de color claro, ni con brillo reflectante ni resbaladizo, y su superficie no podrá ser de ladrillo, cerámica, cemento o piedra. ",
                  href:"#",
                }
            ]
        },
        {
            title:"Inicios",
            date:"December 23, 2023 by",
            by:"Jose Cabrejo",
            paragraph:"Aunque a menudo se asocia el tenis de mesa con los países asiáticos, está ampliamente aceptado que este deporte nació en el último cuarto del siglo XIX en Inglaterra como una derivación del tenis. Es posible que jugadores de tenis ante la adversa climatología inventaran una especie de tenis en miniatura utilizando una mesa de billar o de comedor, en un club de tenis, y dividiéndola en dos campos con libros o simultáneamente con una cuerda. Como pelotas servirían algunos de los muchos modelos existentes para juegos infantiles, o incluso tapones de corcho convenientemente adaptados. Las raquetas serían tapas de cajas de puros o bates infantiles. Indudablemente se mezcla la leyenda con la realidad. Por esta versión se inclinan Gerald Gurney y Ron Crayden, dos profundos estudiosos en la historia del tenis de mesa. Los estudiantes universitarios adoptaron rápidamente el entonces juego de salón en toda Inglaterra. En 1884 la firma F. H. Ayres Ltd. (Frederick Henry Ayres) ya comercializaba un juego de tenis de salón en miniatura. El británico James Devonshire patenta, el 9 de octubre de 1885, su «Table Tennis», la primera vez de la que se tiene conocimiento en utilizar el término «tenis de mesa».11​ En julio de 1890, el industrial de Yorkshire David Forster, patentó un juego de mesa para sala, el cual consistía únicamente en una mesa rodeada con una especie de valla para mantener la pelota dentro de unos límites. No existen evidencias de su comercialización."
        },
    ],
    showArticle(){
      const data = this.article.map((val, id)=>{
          return (
              (val.listar)
              ? this.list(val)
              : this.cards(val)
          );
      });
      document.querySelector("#firehouse").insertAdjacentHTML("beforeend", data .join("")) 
    },
    cards(p1){
        return `
        <article class="blog-post mb-5">
          <h2 class="blog-post-title">${p1.title}</h2>
          <p class="blog-post-meta">${p1.date}<a href="#"> ${p1.by}</a></p>
          <p>${p1.paragraph}</p><hr/>
        `;
    },
    list(p1){
        return`
        <h3>${p1.title}</h3>
          <p>${p1.paragraph}</p>
          <ul>
          ${p1.listar.map((val, id)=>`<li id="links"><a>${val.name}</a></li><br>`).join("")}
          </ul>
        `;
    },
    table:[
      {
        title:"CAMPEONES",
        paragraph:"En la siguiente tabla se muestran los jugadores —hombres y mujeres— que han conseguido al menos cinco victorias individuales en sus participaciones en dichas competiciones: ",
        camp:[
          {
            name:"Ma Long",
            victorias:"2008-2019",
            jjoo:"4",
            cdm:"2",
            cm:"5",
            total:"11"
          },
          {
            name:"Wang Nan",
            victorias:"1997-2007",
            jjoo:"3",
            cdm:"4",
            cm:"2",
            total:"9"
          },
          {
            name:"Liu Shiwen",
            victorias:"2009-2019",
            jjoo:"1",
            cdm:"5",
            cm:"3",
            total:"9"
          },
          {
            name:"Ding Ning",
            victorias:"2011-2018",
            jjoo:"4",
            cdm:"3",
            cm:"1",
            total:"8",
          },
          {
            name:"Deng Yaping",
            victorias:"1991-1997",
            jjoo:"5",
            cdm:"1",
            cm:"1",
            total:"7"
          }
        ]
      }
    ],
    showTable(){
      const data = this.table.map((val, id)=>{
          return (
              (val.camp)
              ? this.list1(val)
              : this.cards1(val)
          );
      });
      document.querySelector("#firehouse").insertAdjacentHTML("beforeend", data .join("")) 
    },
    cards1(p1){
        return `
        <h3 class="cap">${p1.title}</h3>
            <p>${p1.paragraph}</p>
        `;
    },
    list1(p1){
        return`
        <h3 class="cap">${p1.title}</h3>
        <p>${p1.paragraph}</p>
        <table class="table">
              <thead class="text-center align-middle">
                <tr>
                  <th>NOMBRE</th>
                  <th>AÑOS DE VICTORIAS</th>
                  <th>JJOO</th>
                  <th>COPAS DEL MUNDO</th>
                  <th>CIRCUITO MUNDIAL</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody class="text-center align-middle">
                <tr></tr>
                  <td class="text-center align-middle w-25"><hr/>${p1.camp.map((val, id)=>`${val.name}<hr/>`).join("")}</td>
                  <td class="text-center align-middle"><hr/>${p1.camp.map((val, id)=>`${val.victorias}<hr/>`).join("")}</td>
                  <td class="text-center align-middle"><hr/>${p1.camp.map((val, id)=>`${val.jjoo}<hr/>`).join("")}</td>
                  <td class="text-center align-middle"><hr/>${p1.camp.map((val, id)=>`${val.cdm}<hr/>`).join("")}</td>
                  <td class="text-center align-middle"><hr/>${p1.camp.map((val, id)=>`${val.cm}<hr/>`).join("")}</td>
                  <td class="text-center align-middle"><hr/>${p1.camp.map((val, id)=>`${val.total}<hr/>`).join("")}</td>
                </tr>
              </tbody>
            </table>

            <nav class="blog-pagination" aria-label="Pagination">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
          </nav>
        `;
    },
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