const writeFishes = (fishes) => {
  let domString = '';
  fishes.forEach((fish) => {
    domString +=  `<div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">`;
    domString +=    `<div class="thumbnail">`;
    domString +=      `<img src="${fish.imageSoure}" alt="" width="40%">`;
    domString +=      `<div class="caption">`;
    domString +=        `<h3 id="thumbnail-label">${fish.name}</h3>`;
    domString +=        `<p>$<span class="price">${fish.basePrice}</span></p>`;
    domString +=      `</div>`;
    domString +=      `<div class="caption card-footer">`;
    domString +=        `<button class="add btn btn-danger">Add To Basket</button>`;
    domString +=      `</div>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
  });
  return domString;
};

module.exports = writeFishes;
