(function($) {
    $('.dropdown-submenu').on('click',function(e){
        $('.dropdown-menu .dropdown-menu').hide();
        let dropdown = $(e.target).parent().find('.dropdown-menu');
        if (dropdown.length === 0) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        dropdown.fadeToggle('slow');
        console.log('Jquery',$(e.target).parent(), dropdown);        
    });
  }(jQuery))


