      function validate()
      {
      var mob=/^\d{11}$/;
      var mail=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         
          if( document.book_form.full_name.value.length < 3 )
         {
            alert( "Please provide at least 4 characters long name!" );
            document.book_form.full_name.focus() ;
            return false;
         }
             if(!mob.test(document.book_form.mobile.value)
               )
         {
            alert( "Please provide a valid UK mobile number with a leading 0!" );
            document.book_form.mobile.focus() ;
            return false;
         }
              if(!mail.test(document.book_form.email.value)
               )
         {
            alert( "Please provide a valid email address!" );
            document.book_form.mobile.focus() ;
            return false;
         }  
        
      $('#myModal').modal('show');

         return( true );   

      }
      