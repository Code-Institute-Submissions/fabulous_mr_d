      function validate()
      {
      
         
          if( document.book_form.full_name.value.length < 3 )
         {
            alert( "Please provide at least 4 characters long name!" );
            document.book_form.full_name.focus() ;
            return false;
         }
             if( document.book_form.mobile.value.length != /^[0]\d{10}$/
               )
         {
            alert( "Please provide a valid UK mobile number with a leading 0!" );
            document.book_form.mobile.focus() ;
            return false;
         }  
         return( true );   

      }
      