!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}({19:function(e,t,n){"use strict";var o={apiVersion:2,apiVersionMinor:0},r=$("#googlePaygatewayMerchantId").val(),a=$("#googlePayMerchantID").val(),i=$("#googlePayEnvironment").val(),l={type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],allowedCardNetworks:["AMEX","DISCOVER","JCB","MASTERCARD","VISA"]}},c={tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"cybersource",gatewayMerchantId:r}},...l},d=null;function s(){var e={...o};return e.allowedPaymentMethods=[c],e.transactionInfo=v(),e.emailRequired=!0,e.merchantInfo={merchantId:a},e}function u(){return null===d&&(d="TEST"===i?new google.payments.api.PaymentsClient({environment:"TEST"}):new google.payments.api.PaymentsClient({environment:"PRODUCTION",merchantInfo:{merchantId:a}})),d}function f(){u().isReadyToPay({...o,allowedPaymentMethods:[l]}).then((function(e){if(e.result)n=u().createButton({onClick:y}),$("#js-googlepay-container").length>0&&document.getElementById("js-googlepay-container").appendChild(n),(t=s()).transactionInfo={totalPriceStatus:"NOT_CURRENTLY_KNOWN",currencyCode:"USD"},u().prefetchPaymentData(t);else{$('<div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Alert!!</h4></div><div class="modal-body"><div class="row"><div class="col"><h5>Unable to pay using Google Pay</h5></div></div></div>    <div class="modal-footer">        <div class="row">            <div class="col">            </div>            <div class="col">            </div>         </div>      </div>    </div>  </div></div>').modal()}var t,n}))}function v(){return{countryCode:"US",currencyCode:"USD",totalPriceStatus:"FINAL",totalPrice:$("body").find(".row.grand-total").find(".grand-total-sum").text().replace("$","")}}function y(){var e=s();e.transactionInfo=v(),u().loadPaymentData(e).then((function(e){!function(e){var t=window.googlepayval.sessionCallBack,n=window.googlepayval.submitURL,o=JSON.stringify(e);$("#dwfrm_billing").attr("action",t),$("#isgooglepayclicked").val("true"),$("#googletoken").val(o),$("input[name=dwfrm_billing_paymentMethod]").val("DW_GOOGLE_PAY");var r=$("#dwfrm_billing").serialize();$.ajax({url:$("#dwfrm_billing").attr("action"),type:"post",dataType:"json",data:r,success:function(e){e.error?(e.fieldErrors.length&&e.fieldErrors.forEach((function(e){var t,n;Object.keys(e).length&&(t=".payment-form",n=e,$.each(n,(function(e){$("*[name="+e+"]",t).addClass("is-invalid").siblings(".invalid-feedback").html(n[e])})))})),e.serverErrors.length&&e.serverErrors.forEach((function(e){$(".error-message").show(),$(".error-message-text").text(e)})),e.cartError&&(window.location.href=e.redirectUrl)):window.location.href=n},error:function(e){e.responseJSON.redirectUrl&&(window.location.href=e.responseJSON.redirectUrl)}})}(e)}))}var g=!1;"true"===$("#isGooglePayEnabled").val()&&"true"===$("#gPayPaymentMethodEnabled").val()&&$(".googlepay-tab-wrapper").click((function(){g||(f(),g=!0)}))}});