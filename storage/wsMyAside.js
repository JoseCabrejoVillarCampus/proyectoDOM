let wsMyAside={
    showAside(p1){
        const data = this.nav.map((val, id)=>{
            return (
                (val,id)
                ? this.list(val)
                : this.cards(val)
            );
        });
    },
    cards(p1){
        return `
        <div class="p-4">
            <h4 class="titleaside fst-italic">${p1.title}</h4>
            <p class="lis mb-0">${p1.paragraph}</p>
          </div>
        `;
    },
    list(p1){
        return`
        <div class="p-4">
            <h4 class="titleaside fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
              ${p1.link.map((val, id)=>`<li ><a class="lis" href="${val.href}">${val.name}</a></li>`).join("")}
            </ol>
          </div>
        `;
    }
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyAside[`${e.data.module}`](e.data.data));
})