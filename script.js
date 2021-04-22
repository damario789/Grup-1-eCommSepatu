function filterSneaker(sneakerList) {
  let result = {};

  for (let i = 0; i < sneakerList.length; i++) {
    let sneakerName = sneakerList[i]['name'];
    let brandType = sneakerList[i]['brand'];
    if (result[brandType] === undefined) {
      result[brandType] = [];
      result[brandType].push(sneakerName);
    } else {
      result[brandType].push(sneakerName);
    }
  }
  return result;
}
  
  var sneakerList = [
    {
      name: 'Air Jordan 1 Retro High OG Dark Mocha',
      brand: 'Nike'
    },
    {
      name: 'Air Jordan 1 Retro High OG Purple Court',
      brand: 'Nike'
    },
    {
      name: 'Air Jordan 1 Retro High OG University Blue',
      brand: 'Nike'
    },
    {
      name: 'Yeezy Boost 350 V2 Zyon',
      brand: 'Adidas'
    },
    {
      name: 'Yeezy Boost 350 V2 Static',
      brand: 'Adidas'
    },
    {
      name: 'Yeezy Boost 700 Wave Runner',
      brand: 'Adidas'
    }
  ];

  console.log(filterSneaker(sneakerList));