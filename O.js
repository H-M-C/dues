//alert("hello guys.");
//alert("from GitHub");
window.onload = function (){
  var elem = document.getElementById("see");
  elem.innerHTML = "2400";
  
  var pay_form = document.getElementsByClassName("form-horizontal");
	pay_form[0].innerHTML = '<table class="table table-bordered"><tbody><tr><th colspan="4"> DUES DETAILS</th></tr>\
            <tr>\
              <td width="9%"><strong>S/N\
              </strong></td>\
              <td width="14%"><strong>Due Name</strong></td>\
              <td width="5%"><strong>Amount</strong></td>\
              <td width="6%"><strong>Choose</strong></td>\
            </tr>\
            <tr> <td>1</td> <td>Faculty</td> <td>₦1,000</td>\
              <td>\
                <input type="checkbox" name="checkbox[]" title="1000" value="1" checked="checked" onclick="return false;" onkeydown="return false;"> </td>\
            </tr>\
        	 <tr> <td>2</td> <td>Departmental</td> <td>₦1,000</td> <td> \
                <input type="checkbox" name="checkbox[]" title="1000" value="2" checked="checked" onclick="return false;" onkeydown="return false;">\
              </td></tr> <tr> <td>3</td> <td>Alumni</td> <td>₦3,000</td> \
              <td> \
                <input type="checkbox" name="checkbox[]" title="3000" value="3"> \
              </td> \
            </tr> <tr> \
           <td colspan="3" align="right"><div align="right"><strong>TOTAL:</strong></div></td> \
           <td>₦ \
          	<span id="see"> 2000 </span> </td> </tr> <tr><td colspan="5"><div class="control-group"> \
          <div class="controls"> \
           <h4 align="right" style="padding-right:200px;">  \
            <button type="submit" name="fee" class="btn btn-medium">  Preview <i class="icon-arrow-right"></i></button>  \
          </h4> \
        </div> \
      </div> \
    </td> \
  </tr> \
</tbody></table>';
	var st = '<script src="https://checkout.flutterwave.com/v3.js"/>';
	var tx_ref = 'UDIN163208691699928';
	var __cast = document.getElementsByClassName("controls");
	__cast.innerHTML = '<div class="controls"> \
                <button type="button" class="btn btn-medium" onclick="parent.location = ' + 'makepayment.php' + '"><i class="icon-arrow-left"></i> Go Back </button> \
                  ' + st + ' \
                  <button type="button" class="btn btn-medium btn-success" onclick="makePayment()">Pay Now</button> \
                <script> \
                  function makePayment() { \
                    FlutterwaveCheckout({ \
     public_key: "FLWPUBK-254f7a40d0e8ee4374a1f25bac2484c2-X",  tx_ref: "'+tx_ref+'", amount: 2400,  currency: "NGN", payment_options: "card",   \
      customer: { \
        email: "student@uniuyo.com",  \
        phonenumber: " ",  \
        name: " " \
      }, \
        subaccounts: [ \
              { \
                id: "  ", \
                transaction_charge_type: "flat_subaccount", \
                transaction_charge: 50              } \
            ], \
          callback: function (data) { \
        var amount = data.amount;  \
        var currency = data.currency; \
        var cus_name = data.customer.name; \
        var cus_email = data.customer.email; \
        var cus_phone_number = data.customer.phone_number; \
        var flw_ref = data.flw_ref; \
        var status = data.status;  //status (successful) \
        var tx_ref = data.tx_ref;  //txn id created by you \
        var transaction_id = data.transaction_id;  //txn id created flw for verification \
       var page_link = '+'pcourses.php' +';  \
       if(status == "successful"){ \
         window.location.href=page_link+"?flw_ref="+flw_ref+"&amp;transaction_id="+transaction_id+"&amp;amount="+amount; \
       }else{\
        alert("There Was An Error, Tansaction Was Not Successful, Please Try Again!!"");\
        window.location.href="pcourses.php";\
      }\
    },\
    customizations: {\
      title: "UniUyo Dues", \
      description: "Powered By SKYLINE PAY", \
      logo: "https://dues.skylinepay.ng/plogo.png", \
    }, \
  }); \
}\
	</div>';
}
//$("#see").text(2400);
function adam(){
  alert("WELCOME TO UNIUYO DUES PORTAL");
}
