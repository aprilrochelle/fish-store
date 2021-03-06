const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');
const applySale = require('./discount');

const whenFishesLoad = (data) => {
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
  applySale();
};

const whenFishesDontLoad = (error) => {
  console.error('No fish bish!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
