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
}
$("#see").text(2400);
function adam(){
  alert("WELCOME TO UNIUYO DUES PORTAL");
}
