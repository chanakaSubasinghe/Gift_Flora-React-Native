const cake = require('../assets/choco.jpg');
const rose = require('../assets/ross.jpg');
const watch = require('../assets/watch.jpg');
const jewellary = require('../assets/jewellary.jpg');

export const itemsArray = [

    {
        container: [
            {
                _id: 1000,
                title: 'Chocolate Fudge Cake',
                price: 5000,
                image: cake
            },
            {
                _id: 1001,
                title: 'Evelyn Flower',
                price: 2000,
                image: rose
            }
        ]
    },
    {
        container: [
            {
                _id: 1002,
                title: 'Mens Rolex Watch',
                price: 50000,
                image: watch
            },
            {
                _id: 1003,
                title: 'New Diamond',
                price: 200000,
                image: jewellary
            }
        ]
    }
];