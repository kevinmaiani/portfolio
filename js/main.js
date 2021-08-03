
(function ($) {
    "use strict";
  const foo = {
    bar() {
      console.log(error);
    },
  }
    
    /*==================================================================
    [ Validate ]*/
    var form = $('.contact1-form');
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');
    var button = $('.contact1-form-btn');

    button.on("click", (e) => 
    {
      e.preventDefault();
      e.stopPropagation();
      fetch("https://formsubmit.co/ajax/kevin.maiani5k@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: name.val(),
          message: message.val(),
          subject: subject.val(),
          email: email.val()
      })
  })
      .then(response => { 
        response.json();
        form[0].reset();
        $("#alertEmailSuccess").addClass("alert alert-success");
        $("#alertEmailSuccess").text("Grazie per avermi contattato, riceverai una risposta il prima possibile.");
        window.setTimeout(function() {
          $("#alertEmailSuccess").fadeTo(500, 0).slideUp(500, function(){
          $(this).remove(); 
        });
      }, 2500);
      })
      .catch(error => {
        console.log(error)
      });
    });

    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    
 

})(jQuery);