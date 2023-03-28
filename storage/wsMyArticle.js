let wsMyArticle={
    showArticle(article){
        const data = article.map((val, id)=>{
            return (
                (val.listar)
                ? this.list(val)
                : this.cards(val)
            );
        });
        return data; 
      },
      cards(p1){
          return `<article class="blog-post mb-5">
            <h2 class="blog-post-title">${p1.title}</h2>
            <p class="blog-post-meta">${p1.date}<a href="#"> ${p1.by}</a></p>
            <p>${p1.paragraph}</p><hr/>`
      },
      list(p1){
          return`<h3>${p1.title}</h3>
            <p>${p1.paragraph}</p>
            <ul>${p1.listar.map((val, id)=>`<li id="links"><a>${val.name}</a></li><br>`).join("")}</ul>`;
      },
    showTable(table){
        const data1 = table.map((val, id)=>{
            return (
                (val.camp)
                ? this.list1(val)
                : this.cards1(val)
            );
        });
        return data1;
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
                  </tr>.join("")}
                </tbody>
              </table>
  
              <nav class="blog-pagination" aria-label="Pagination">
              <a class="btn btn-outline-primary" href="#">Older</a>
              <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
            </nav>
          `;
      },
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyArticle[`${e.data.module}`](e.data.data));
})