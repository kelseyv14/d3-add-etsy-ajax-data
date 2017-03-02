// for (var i = 0; i < 12; i++) {
//     createSearchResultCard({
//         src: 'http://unsplash.it/600?random',
//         description: 'Some product description...',
//         seller: 'HBakerStudio',
//         price: '$18.00'
//     });
// }


var searchResults= {};
getUsers();
function getUsers() {
    fetch('https://thinksaydo.com/tiyproxy.php?https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop')
        .then(response => response.json())
        .then(data => {
            searchResults = data;
            resultCards();
        });
}



function resultCards() {
    searchResults.results.forEach(createSearchResultCard)
}



function createSearchResultCard(data) {
    var card = `<div class="col-sm-4 col-md-3">
        <div class="card">
            <img src="${data.Images[0].url_170x135}"/>
            <div class="card-caption">
                <div>${data.title.slice(0,50)}...</div>
                <div>
                    <span class="text-muted">${data.Shop.shop_name}</span>
                    <span class="text-success pull-right">${data.price}</span>
                </div>
            </div>
        </div>
    </div>`;

    document.querySelector('#cards').innerHTML += card;
}




















// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: '1995 UNOPENED in plastic Hail...',
//     seller: 'StutzyVintageGames', 
//     price: '$23.70'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Vintage Inspector Gadget Board Game -', 
//     seller: 'FunkyKoala', 
//     price: '$19.99'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Domino farm, Domino Fernand...', 
//     seller: 'RecreVintage', 
//     price: '$13.08'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Clue board game. Vintage 1995...', 
//     seller: 'BuyfromGroovy', 
//      price: '$30.99'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Vintage Go Board Game From T...', 
//     seller: 'TinkerbellVintage', 
//     price: '$17.92'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Vintage and rare 1950\'s board g...', 
//     seller: 'Littlepeoplerock' ,
//     price: '$20.00'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: '1990\'s "The American Girls Gam..', 
//     seller: 'TravelinTimeTreasure', 
//     price: '$14.95'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Chess set, Vintage chess, Ches...', 
//     seller: 'GiftShopUkraine', 
//     price: '$65.00'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'GO Board Game -- Reiss Games', 
//     seller: 'VintageByJessie', 
//     price: '$12.00'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Vintage Backgammon Board Ga...', 
//     seller: 'MEMsArtShop', 
//     price: '$28.16'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Vintage Risk Board Game Cards...', 
//     seller: 'KKMSvintage', 
//     price:  '$2.00'
// });
// createResultCard({
//     src: 'https://unsplash.it/200/300/?random',
//     caption: 'Horse Race Game OOAK Racing..', 
//     seller: 'hometowngeralstore',
//     price: '$39.16'
// });
// function createResultCard(image) {
//     var card = `<div class="row card" id="app">
//                 <div class= "col-sm-9">
//                 <img src="${image.src}" alt= "Image"/><br>
//                 ${image.caption}<br>
//                 ${image.seller} ${image.price}
//                 </div>
//                </div>`;
//     document.querySelector('#app').innerHTML += card;    
// }



