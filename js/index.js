window.onload = async () => {
  let productList = await fetch("http://localhost:8080/getAllProducts", {
    method: "GET",
  });
  productList = await productList.json();
  console.log(productList);
  if (productList) {
    let productListDiv = ``;
    productList.forEach((item) => {
      productListDiv += `<div class="card mt-2" style="width: 10rem;">
                          <img src="img/${item.pimg}" class="card-img-top" alt="${item.prodname}" height="150">
                          <div class="card-body">
                            <b class="card-title">${item.prodname}</b><br>
                            <span class="card-text text-danger">${item.price}원</span>
                            <a href="#" class="btn btn-outline-info">담기</a>
                          </div>
                        </div>`;
    });
    document.getElementById("productListDiv").innerHTML = productListDiv;
  }
};
