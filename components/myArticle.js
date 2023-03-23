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
        const data = this.article.map((val, id)=>{
            return (
                (val,id)
                ? this.list(val)
                : this.cards(val)
            );
        });
        document.querySelector("#firehouse").insertAdjacentHTML("beforeend", data.join("")) 
    },
    cards(p1){
        return`<h3 class="pb-4 mb-4 fst-italic border-bottom">
        ${p1.title}
      </h3>
        `;
    }
}