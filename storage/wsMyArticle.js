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
      cards(article){
          return `<div>${article.map((val, id)=>`<article class="blog-post mb-5">
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date}<a href="#"> ${val.by}</a></p>
            <p>${val.paragraph}</p><hr>`).join("")}</div>`
      },
      list(p1){
          return`<h3>${p1.title}</h3>
            <p>${p1.paragraph}</p>
            <ul>${p1.listar.map((val, id)=>`<li id="links"><a>${val.name}</a></li><br>`).join("")}</ul>`;
      },
    
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyArticle[`${e.data.module}`](e.data.data));
})