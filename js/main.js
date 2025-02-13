

$(document).ready(function(){ // Every Password input add icon to show password when clicked
  $('.password-with-icon input[type="password"]').after(`<span class="eye password_eye" > <i class="fa-solid fa-eye icon"></i></span>`);
});


    //Show Passowrd when Click on  Eye icon
    $(document).ready(function(){
      let passwords = $('.password_eye');
      passwords.each( function(i , ele) {
        $(ele).on('click', () =>{
          $(this).attr('type')
          let type =  $(this).siblings('input').attr('type');
          type == 'password' ? $(this).siblings('input').attr('type', 'text')             : $(this).siblings('input').attr('type', 'password');
          type == 'password' ? $(this).html(`<i class="fa-solid fa-eye-slash icon"></i>`) : $(this).html(`<i class="fa-solid fa-eye icon"></i>`);
        })
      } )
    });

function search(){
  let searchbar   =     document.querySelector('.search').value.toUpperCase();
  let ProductName =     document.querySelectorAll('.product_name_design');
  let SKU         =     document.querySelectorAll('.SKU_font');
  let Stock       =     document.querySelectorAll('.Price');
  let CATEGORY    =     document.querySelectorAll('.CATEGORY');
  let Tags        =     document.querySelectorAll('.Tags');
  let Actions     =     document.querySelectorAll('.Actions');
  let product     =     document.getElementsByTagName('th');
  
for (let i=0; i<ProductName.length;i++){
  let SearchResult = ProductName[i].textContent.toUpperCase().indexOf(searchbar);
    if (SearchResult >=0){
      ProductName[i].parentElement.style.display ="";
    }else{
      ProductName[i].parentElement.style.display ="none";
    }
  }
}
