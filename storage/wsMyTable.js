let wsMyTable={
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
    
    list1(p1){
        let plantilla = p1.camp.map((val, id)=>{
        
        
            return ` 
            <h3 class="cap">${p1.title}</h3>
            <p>${p1.paragraph}</p><br>
            <table class="table text-center table-primary table-bordered">
            <thead  id="titulos">
            <tr>
              ${val.titulos.map((val, id)=>{return `<th>${val.name}</th>`}).join("")}
            </tr>
            </thead>
            <tbody class="bodyTable ">
            <tr>
            ${val.primer.map((val, id)=>{return`<th>${val.name}</th>`}).join("")} 
            </tr>
            <tr>
            ${val.segundo.map((val, id)=>{return`<th>${val.name}</th>`}).join("")}
            </tr>
            <tr>
            ${val.tercero.map((val, id)=>{return`<th>${val.name}</th>`}).join(" ")}
            </tr>
            <tr>
            ${val.cuarto.map((val, id)=>{return`<th>${val.name}</th>`}).join("")}
            </tr>
            <tr>
            ${val.quinto.map((val, id)=>{return`<th>${val.name}</th>`}).join("")}
            </tr>
            </tbody>
            </table>
            `
    
            
          })
          return plantilla.join("")
    },
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyTable[`${e.data.module}`](e.data.data));
})