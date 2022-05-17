$(function() {
    $(".btn").click(function() {
    $(".form-lecture").toggleClass("form-lecture-left");
    $(".form-student").toggleClass("form-student-left");
    $(".frame").toggleClass("frame-short");
    $(".student").toggleClass("lecture-active");
    $(".lecture").toggleClass("student-inactive");
    $(this).removeClass("idle").addClass("active");
    });
    });
    
    $(function() {
    $(".btn-signup").click(function() {
    $(".nav").toggleClass("nav-up");
    $(".form-student-left").toggleClass("form-student-down");
    $(".success").toggleClass("success-left");
    $(".frame").toggleClass("frame-short");
    });
    });
    

setTimeout(function() {
    $('.error').fadeOut('fast');
    $('div.alert-success').fadeOut('fast');
    $('div.alert-danger').fadeOut('fast');
    }, 4000); 
   




function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

$(document).ready(function(){

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
    removeItemButton: true,
    maxItemCount:20,
    searchResultLimit:20,
    renderChoiceLimit:20
    });
    
    
    });