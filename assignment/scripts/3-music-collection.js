console.log('***** Music Collection *****')

let collection = [];

//addToCollection
function addToCollection (title , artist , yearPublished) {
    let newAlbum = {
        title ,
        artist ,
        yearPublished 
    }
    collection.push(newAlbum);
    return newAlbum
}
//end addToCollection


//adding albums to collection
console.log('adding new album:' , addToCollection('Back Home Again' , 'John Denver' , 1974));

console.log('adding new album:' , addToCollection('Long Time Coming' , 'Sierrra Ferrell' , 2021));

console.log('adding new album:' , addToCollection('Cleopatra' , 'The Lumineers' , 2016));

console.log('adding new album:' , addToCollection('Seven + Mary' , 'Rainbow Kitten Surprise' , 2013));

console.log('adding new album:' , addToCollection('Rocky Mountain High' , 'John Denver' , 1972));

console.log('adding new album:' , addToCollection('maybe i will see you at the end of the world' , 'Sydney Sprague' , 2021));

console.log('current collection:' , collection);
//end adding albums to collection


//showCollection
function showCollection (collectionToBeShown) {
    console.log(collectionToBeShown.length);
    for (let i=0; i<collectionToBeShown.length; i++){
        console.log(collectionToBeShown[i].title + ' by ' +collectionToBeShown[i].artist);
    }
} 
//end showCollection 

console.log(showCollection(collection));


//findByArtist
function findByArtist(art) {
    let results = [];
    for (let i=0; i<collection.length; i++) {
        if (collection[i].artist === art) {
            results.push(collection[i]);
        }
    }
    return results
}
//end findByArtist

//testing findByArtist
console.log('Testing FindByArtist:');
console.log('expect Rocky Mountain High and Back Home Again');
console.log(findByArtist('John Denver'));

console.log('expect no result');
console.log(findByArtist('Popcorn Shrimp'));

console.log('expect Seven + Mary');
console.log(findByArtist('Rainbow Kitten Surprise'));
//end testing findByArtist


//search
function search(item) {
    let results=[];
    for (let i=0; i<collection.length; i++) {
        if (collection[i].artist === item) {
            results.push(collection[i]);
        }
        else if (collection[i].artist === item) {
            results.push(collection[i])
        }
        else if (collection[i].yearPublished === item) {
            results.push(collection[i]);
        }
    }
    return results;
}
//end search

//testing search
console.log('Testing search');
console.log('expect Rocky Moutain High');
console.log(search(1972));

console.log('expect Seven + Mary');
console.log(search('Rainbow Kitten Surprise'));

console.log('expect no result');
console.log(search(2022));
//end testing search

console.log(collection);

//I know that isn't fully done but it is an attempt at the start of something
