


let fromcurrencyvalue = '';
let tocurrencyvalue = '';
let amountvalue = '';


const fromCurrency = document.getElementById('fromcurrency').addEventListener("click", (event) =>{
    fromcurrencyvalue = event.target.value;
});

const toCurrency = document.getElementById('tocurrency').addEventListener("click", (event) =>{
    tocurrencyvalue = event.target.value;
});

const amount = document.getElementById('amount').addEventListener("input", (event) =>{
    amountvalue = event.target.value;  
});




const getCountries = (divid1, divid2) => {
    let response = [];
    let clone = '';

    fetch('https://free.currencyconverterapi.com/api/v5/countries')
    .then((res) => {
        clone = res.clone();
       return res.json()
    })
    .then((data) =>{
        let results = data.results;
    response2 = clone.json().then(populateDropdown(divid2, results));
        // console.log(results)
        populateDropdown(divid1, results);
        
       
    })
    .catch((err) => console.log(err));
    return response;
};

getCountries('fromcurrency', 'tocurrency'); 
// getCountries('tocurrency'); 



const convertCurrency = (amount = 0, fromCurrency, toCurrency) => {
    if(amount && fromCurrency && toCurrency){
        let query = `${fromCurrency}_${toCurrency}`;
        fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`)
        .then((res) => res.json())
        .then(data => {
            // let query2 = parseInt(query);
         
            console.log(query);
            console.log(data);
            let newdata = Math.round(data[query].val * amount);
            document.getElementById('currencyresult').value = newdata;

        })
        .catch((err) => console.log(err));

    }
}


const submit = document.getElementById('submit').addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(fromcurrencyvalue+ 'asdads');
    // console.log(tocurrencyvalue+ 'asdads');
    // console.log(amountvalue+ 'asdads');
    if(fromcurrencyvalue && tocurrencyvalue && amountvalue){
        let convertedcurrency =  convertCurrency(amountvalue, fromcurrencyvalue,  tocurrencyvalue);
        console.log(convertedcurrency);
    }
    console.log('entered');
    // console.log(tocurrencyvalue);
    // console.log(amountvalue);
});
// convertCurrency(2, 'EUR', 'NGN');

const populateDropdown = (divid, results) => {
                    var opt =  ''; for (var key in results) {
                        //            var keyy = isoCountries[key];
                                    var val = results[key].currencyId;
                        
                                    opt +=  "<option value="+val+">"+val+"</option>";
                            }  document.getElementById(divid).innerHTML = opt
}











