//Product calculation starts
function productCalculation(Isincrease,totalcount,value,totalprice) {

    const countValue = document.getElementById(totalcount);
    const countValueInt = parseInt(countValue.value);
    let newcountValueInt = countValueInt ;

    if(Isincrease) {
         newcountValueInt = countValueInt + 1;
    }
    if(Isincrease == false && newcountValueInt>0){
        newcountValueInt = countValueInt - 1;
    }
    
    countValue.value = newcountValueInt ;
    const caseTotal = newcountValueInt * value ;
    document.getElementById(totalprice).innerText =  caseTotal ;

   CalculateTotal();
   TaxCalculation();

}

// Product calculation ends 

// Total Calculation starts 

function CalculateTotal () {

    const PhoneTotal  = document.getElementById('total-price');
    const PhoneTotalInt = parseInt(PhoneTotal.innerText);
    const caseTotal1 = document.getElementById('total-pricecase') ;
    const caseTotalInt = parseInt(caseTotal1.innerText);

    const subtotal = PhoneTotalInt + caseTotalInt ;

    document.getElementById('subtotal').innerText = subtotal ;

}


// Total Calculation ends 


// Tax Calculation Starts 

function TaxCalculation () {
   const subtotal= document.getElementById('subtotal').innerText;
   const  subtotalFloat = parseFloat(subtotal) ;
   const tax = document.getElementById('tax').innerText;
   const taxFloat = parseFloat(tax);

   const taxTotal = (subtotalFloat * taxFloat)/ 100 ;

   const grandTotal = taxTotal + subtotalFloat ;

   document.getElementById('grandtotal').innerText = grandTotal ;
}

// Tax Calculations ends 


// Remove Item Function starts 

function removeItem(idCart,idPrice) {

    document.getElementById(idCart).style.display='none';
    const totalPricePhone = document.getElementById(idPrice).innerText;
    const totalPricePhoneInt = parseFloat(totalPricePhone);
    const subtotal= document.getElementById('subtotal').innerText;

    const  subtotalInt = parseFloat(subtotal) ;
    console.log(subtotalInt);

    const TotalSubtotal = subtotal - totalPricePhoneInt ;
     console.log(TotalSubtotal);
    document.getElementById('subtotal').innerText = TotalSubtotal ;

    TaxCalculation();

}

// Remove Item Ends 

//Checkout function starts 

function CheckOut() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('thankyou').style.display = 'block' ;
    document.getElementById('thankyou').addEventListener('click',()=>{
        document.getElementById('thankyou').style.backgroundColor ='red';
        console.log('clicked');
    })
}


// CheckOut function ends 