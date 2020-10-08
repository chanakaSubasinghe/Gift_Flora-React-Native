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
                category: 'Birthday',
                image: cake,
                description: "Celebrate any birthday in style with a freshly baked cake from Gift Flora. Our birthday celebration cake is a delicious, soft, moist 1kg (2.4lb) ribbon cake, sandwiched with light and airy vanilla cream icing and topped with festive parchment icing to make any birthday special."
            },
            {
                _id: 1001,
                title: 'Evelyn Flower',
                price: 2000,
                category: 'Love',
                image: rose,
                description: 'Make the precious people in your life feel happy, loved, cared and remembered throughout the life. Celebrate the significant days in your life in a unique way, and make a day memorable for a person you love. Here is a gift of nature, designed by the floral experts at Gift Flora,  for you to express yourself in a heartfelt manner.'
            }
        ]
    },
    {
        container: [
            {
                _id: 1002,
                title: 'Mens Rolex Watch',
                price: 50000,
                category: 'Business',
                image: watch,
                description: "Diamonds are everyone's best friend. If you don't believe that, simply set your sight on this unworn Rolex GMT-Master II 40mm. Crafted from rose gold, this 40mm timepiece is finished with ornate rows of white diamonds, blue sapphire and red rubies. Add a touch of sparkle to any look."
            },
            {
                _id: 1003,
                title: 'New Diamond',
                price: 200000,
                category: 'Anniversary',
                image: jewellary,
                description: "Perfect and delicate, this authentic David Yurman necklace is the perfect everyday piece. Crafted in 18K white gold and shimmering diamonds, a petite cable Star of David hangs perfectly from the delicate chain. Whether it is a gift or not, this stunning piece a beautiful addition to any jewelry collection."
            }
        ]
    }
];