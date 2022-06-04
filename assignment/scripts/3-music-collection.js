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

console.log('adding new album:' , addToCollection('Long Time Coming' , 'Sierrra Ferrell' , 2021));

console.log('adding new album:' , addToCollection('Cleopatra' , 'The Lumineers' , 2016));

console.log('adding new album:' , addToCollection('Seven + Mary' , 'Rainbow Kitten Surprise' , 2013));

console.log('adding new album:' , addToCollection('Rocky Mountain High' , 'John Denver' , 1972));

console.log('adding new album:' , addToCollection('maybe i will see you at the end of the world' , 'Sydney Sprague' , 2021));


console.log('current collection:' , collection);


