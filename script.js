function buySneaker(sneakerList) {
    // Your code here
    let result = {};
  
    for (let i = 0; i < sneakerList.length; i++) {
      let sneaker = sneakerList[i];
      console.log(sneaker['name']);
      console.log(sneaker['type']);
    }
    return result;
  }
  
  var sneakerList = [
    {
      name: 'Air Jordan 1 Retro High OG Dark Mocha',
      type: 'Nike'
    },
    {
      name: 'Air Jordan 1 Retro High OG Purple Court',
      type: 'Nike'
    },
    {
      name: 'Air Jordan 1 Retro High OG University Blue',
      type: 'Nike'
    },
    {
      name: 'Yeezy Boost 350 V2 Zyon',
      type: 'Adidas'
    },
    {
      name: 'Yeezy Boost 350 V2 Static',
      type: 'Adidas'
    },
    {
      nama: 'Yeezy Boost 700 Wave Runner',
      type: 'Adidas',
    }
  ];

  console.log(buySneaker(sneakerList));