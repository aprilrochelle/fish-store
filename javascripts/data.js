const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');

const whenFishesLoad = (data) => {
  $('#available').append(writeFishes(data.fishes));
};

const whenFishesDontLoad = (error) => {
  console.error('No fish bish!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
