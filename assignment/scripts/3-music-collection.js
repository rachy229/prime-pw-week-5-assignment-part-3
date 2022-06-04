console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title , artist , yearPublished) {
    let newAlbum = {
        title ,
        artist ,
        yearPublished 
    }
    collection.push(newAlbum);
    return newAlbum
}

console.log('adding new album:' , addToCollection('Back Home Again' , 'John Denver' , 1974));
console.log(collection);
