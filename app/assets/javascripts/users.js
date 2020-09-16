/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
 var theForm = $('#pro_form');
 var submitBtn = $('#form-submit-btn');
//Set Stripe public key.
Stripe.setPublishableKey($('meta[name= "stripe-key"]').attr('content') )
submitBtn.click(function(event){
  event.preventDefault();
  
  //collect credit card fields
  var ccNum = $('#card_number').val(),
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
  //send credit card fields to stripe
  Stripe.createToken({
    number: ccNum,
    cvc: cvcNum,
    exp_month: expMonth,
    exp_year: expYear
  }, stripeResponseHandler );
  
});
//When user clicks form submit btn, prevent default submission behavior


//stripe will return a card token
//proccess registration with the card token
//submit form to our rails app
});