fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json()).then(json => {
    console.log(json)
    let data=" ";
    json.map((values)=>{ data +=`
    <div id="card">
       <h1 id="name">${values.name}</h1>
       <p id="isbn">Isbn: ${values.isbn}</p>
       <p id="numberOfPages">NumberOfPages: ${values.numberOfPages}</p>
       <p id="numberOfPages">Publisher:${values.publisher}</p>
       <p id="numberOfPages">Released:${values.released}</p>
    </div>
 `}
   )
 console.log(data);
 document.getElementById("cards").innerHTML=data;
})