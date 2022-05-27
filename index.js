const order = (beverageProduction) => {
    console.log("Order placed : ")
    beverageProduction();
};

const caffeLatteProduction = () => {
    console.log("Caffe Latte")
};

order(caffeLatteProduction);


