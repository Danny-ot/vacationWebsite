import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import {Vacation , Account , BookVacation} from './booking';


// Responsive Navbar
let menu = document.getElementById('menu');
let navbar = document.getElementById('nav');
menu.onclick = function(){
     menu.classList.toggle("active");
     navbar.classList.toggle("d-flex");
};


$(document).ready(function(){
    $("#signup-username").val("");
    $("#signup-email").val("");
    $("#signup-password").val("");
    $("#confirm-password").val("");
    $("#signin-email").val("");
    $("#signin-password").val("");
    let vacation = new Vacation();


    // Click Event For Showing Signup
   $('.sign-up-btn').click(()=>{
    $("#log-in").hide();
    $("#sign-up").toggle();
});

// Click Event For Showing Login
$(".sign-in-btn").click(()=>{
    $("#sign-up").hide();
    $("#log-in").toggle();
});



});
