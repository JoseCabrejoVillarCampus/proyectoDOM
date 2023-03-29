let wsMyArticle={
    showArticle(article){
        const data = article.map((val, id)=>{
            return (
                (val.listar)
                ? this.list(val)
                : this.cards(val)
            );
        });
        /* console.log(data.join("")); */
        return data.join(""); 
      },
      cards(p1){
          return `<div ><article class="blog-post my-4 lh-lg">
            <h2 class="blog-post-title">${p1.title}</h2>
            <p class="blog-post-meta">${p1.date}<a href="#">  ${p1.by}</a></p>
            <p>${p1.paragraph}</p><hr></div>`
      },
      list(p1){
          return`<h3>${p1.title}</h3>
            <p>${p1.paragraph}</p>
            <ul>${p1.listar.map((val, id)=>`<li id="links"><a >${val.name}</a></li><br></ul>`)}`;
      },
    
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyArticle[`${e.data.module}`](e.data.data));
})