const books = {
    "title" : "Almond",
    "published" : 2018,
    "genre" : "Psychology"
}
function ObjectDestructure(){
    let {title, published, genre} = books;
    return(
       
        <>
        <h1>Books: {[title, published, genre]}</h1>
        </>
    )
}

export default ObjectDestructure;