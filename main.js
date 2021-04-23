let sneakerList = [
    {
      name: 'Air Jordan 1 Retro High OG Dark Mocha',
      brand: 'Nike',
      stock: 5,
      price: 6500000,
      img: 'assets/sneakers_nike.jpg',
      id: 1
    },
    {
      name: 'Air Jordan 1 Retro High OG Purple Court',
      brand: 'Nike',
      stock: 7,
      price: 4500000,
      img: 'assets/sneakers_nike.jpg',
      id: 2
    },
    {
      name: 'Air Jordan 1 Retro High OG University Blue',
      brand: 'Nike',
      stock: 12,
      price: 5400000,
      img: 'assets/sneakers_nike.jpg',
      id: 3
    },
    {
      name: 'Yeezy Boost 350 V2 Zyon',
      brand: 'Adidas',
      stock: 7,
      price: 3599000,
      img: 'assets/sneakers_nike.jpg',
      id: 4
    },
    {
      name: 'Yeezy Boost 350 V2 Static',
      brand: 'Adidas',
      stock: 3,
      price: 3700000,
      img: 'assets/sneakers_nike.jpg',
      id: 5
    },
    {
      name: 'Yeezy Boost 700 Wave Runner',
      brand: 'Adidas',
      stock: 5,
      price: 4700000,
      img: 'assets/sneakers_nike.jpg',
      id: 6
    }
  ];


  const konten = document.querySelector('#content')
  konten.innerHTML = generateCard(sneakerList)
  
  function generateCard (data) {
      let result = ''
      for (let i = 0; i < data.length; i++) {
          result += `<div class="card" style="width: 18rem;">
          <img src="/assets/sneakers_nike.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <span class="badge badge-warning">${data[i].brand}</span>
          <h5 class="card-title product-card-name font-weight-bold">${data[i].name}</h5>
          <p class="product-card-price">Price: IDR ${data[i].price}</p>
          <p class="product-card-stock">Stock: ${data[i].stock}</p>
          <span class="d-inline-block" style="width: 100%; text-align: right;">
          <button class="btn btn-success btn-addToCart" onClick="addToCart(sneakerList, ${data[i].id})">Add to cart</button> 
          </span>
          </div>
          </div>`
        }

        return result
    }
        

    let colImg = document.querySelector("#productCartImgBody")
    let colInfo = document.querySelector("#productCartInfoBody")
    let colBtnDel = document.querySelector("#productCartBtnDelBody")


    function addToCart(data, id) {
        let tableBody = document.querySelector("#cartTable").getElementsByTagName(`tbody`)[0]
        let row = tableBody.insertRow()
        let colBtnDelete = row.insertCell(colBtnDel)
        let colCartInfo = row.insertCell(colInfo)
        let colCartImg = row.insertCell(colImg)
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                colCartImg.innerHTML = `<img src="${data[i].img}" alt="" style="width: 120px; height: 70px;">`
                colCartInfo.innerHTML = `<h5 class="product-cart-name font-weight-bold" style="margin-bottom: 0;">${data[i].name}</h5>
                <p class="product-cart-price" style="margin-bottom: 0;">IDR ${data[i].price}</p>
                <p class="product-cart-qty">Qty: 1</p>`
                colBtnDelete.innerHTML = `<button id="btn-delete" class="btn btn-danger" onClick="delInCart(this)">&times;</button>`
            }
        }
        return
        
    }
   
    function delInCart(row) {
        let i = row.parentNode.parentNode.rowIndex;
         document.getElementById('cartTable').deleteRow(i)
    }


    

