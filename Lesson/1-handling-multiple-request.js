// handling request with setTimeout()
// handling request with setTimeout() paharams
function Order(idOrder/*, timeOut*/) {
    console.log('Id Order ' + idOrder);
    OrderProccess(idOrder/*, timeOut*/);
}

function OrderProccess(idOrder, timeOut) {
    setTimeout(function () {
        console.log('ID Order ' + idOrder + ' Proccessed')
    },3000/*, timeOut*/)
}

Order(101/*, 5000*/);
Order(102/*, 4000*/);
Order(103/*, 3000*/) ;