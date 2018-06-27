console.log(document);

const getCountries = () => {
    let response = [];
    fetch('https://free.currencyconverterapi.com/api/v5/countries')
    .then((res) => res.json())
    .then((data) =>{
        // console.log(data);
        if(data){
           return response = data;
            // console.log(response);
        }
       
    })
    .catch((err) => console.log(err));
    return response;
}

let count  = getCountries(); 
console.log(count);

const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if(amount && fromCurrency && toCurrency){
        let query = `${fromCurrency}_${toCurrency}`;
        fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`)
        .then((res) => res.json())
        .then(data => {
            // let query2 = parseInt(query);
            console.log(query);
            console.log(data);
            let newdata = data.query;
            console.log(newdata)
        })
        .catch((err) => console.log(err));

    }
}

// convertCurrency(2, 'EUR', 'NGN');



