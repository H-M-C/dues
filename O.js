//alert("Uniuyo is a Brand");
//alert("from GitHub");
window.onload = function (){
  //var elem = document.getElementById("see");
  //elem.innerHTML = "2400";
	var pay_form = document.getElementsByClassName("form-horizontal");
	pay_form[0].innerHTML = `<table class="table table-bordered">
    <tbody><tr>
      <th colspan="3"> DUES DETAILS</th>
    </tr>
    <tr>
      <td width="33%"><strong>S/N

      </strong></td>
      <td width="35%"><strong>Due Name</strong></td>
      <td width="32%"><strong>Amount</strong></td>
    </tr>      

    
      <tr>
      <td>1</td>
      <td> Faculty </td>
      <td>₦ 1,000</td>
      </tr> 

      
      <tr>
      <td>2</td>
      <td> Departmental </td>
      <td>₦ 1,000</td>
      </tr> 

        


    

    <tr>
     <td align="right">&nbsp;</td>
     <td align="right"><strong>TOTAL DUES:</strong></td>
     <td> ₦2,000 </td>
   </tr>
   
   <script>
  alert('You are about to pay a fee of N2,000. \nYou will be charged a Processing Fee of N400 \nThis item will remain pending on your account until payment is made Online via your ATM Card. \nDo you wish to Proceed?');
</script>  


            <tr>
    <td align="right">&nbsp;</td>
    <td align="right"><strong>TOTAL PAYMENT DUE:</strong></td>
    <td> <h4> ₦2,400</h4> </td>
  </tr>
  <tr>
    <td colspan="3"><div class="control-group">
      <div class="controls">
        <button type="button" class="btn btn-medium" onclick="parent.location = 'makepayment.php'"><i class="icon-arrow-left"></i> Go Back </button> 
        
          <script src="https://checkout.flutterwave.com/v3.js"></script>
          <button type="button" class="btn btn-medium btn-success" onclick="makePayment()">Pay Now</button>
        

        <script>
          function makePayment() {
window.location.href = "http://curmark.com/pay/buy.php";
            FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-75cfa2b8961d3a564466483124fae55c-X",  // Uni uyo dues
            tx_ref: "UDIN163211398930012",  //txn created by you
            amount: 2400,    //amt to be paid  
            currency: "NGN",   //cureency accepting
            payment_options: "card",   
            customer: {
            email: "student@uniuyo.com",   //cus email
            phonenumber: " ",  //cus phone number
            name: "16/BA/IN/300-Tom Saviour Monday",
            },
subaccounts: [
      {
        id: "RS_D6469D3468B2A4395320D84E458EBA83",
           
        transaction_charge_type: "flat_subaccount",
        transaction_charge: 50              }
    ],
  callback: function (data) { // specified callback function
var amount = data.amount;
var currency = data.currency;

var cus_name = data.customer.name;
var cus_email = data.customer.email;
var cus_phone_number = data.customer.phone_number;

var flw_ref = data.flw_ref; //txn id from flw
var status = data.status;  //status (successful)
var tx_ref = data.tx_ref;  //txn id created by you
var transaction_id = data.transaction_id;  //txn id created flw for verification
//var page_link = 'verify/check.php';  //enter the page link here
var page_link = 'pcourses.php';  //enter the page link here
//console.log(data);
if(status == "successful"){
 //verifying your payment
 window.location.href=page_link+'?flw_ref='+flw_ref+'&amp;transaction_id='+transaction_id+'&amp;amount='+amount;

}else{
alert('There Was An Error, Tansaction Was Not Successful, Please Try Again!!');
window.location.href='pcourses.php';
}

},
customizations: {
title: "UniUyo Dues",
description: "Powered By SKYLINE PAY",
logo: "https://dues.skylinepay.ng/plogo.png",
},
});
          }
          </script>
      </div>
    </div>
    
  </td>
</tr>
</tbody></table>`;
  
}
//$("#see").text(2400);
function adam(){
  alert("WELCOME TO UNIUYO DUES PORTAL");
}
