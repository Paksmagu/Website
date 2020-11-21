    $(document).ready(function(){
            $('#email-subscription').click(function(e){
                e.preventDefault();

                if($('#email-subscription-form')[0][0].checkValidity()){
                    ga('send', {
                            hitType: 'event',
                            eventCategory: 'Email Subscription',
                            eventAction: 'Click',
                            eventLabel: 'Subscription Popup'
                        });
                  $('#email-subscription-form-from').val(window.location.href);
                  $('#email-subscription-form').submit();
                }
            });
        });
