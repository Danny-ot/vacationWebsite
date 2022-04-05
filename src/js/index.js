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

// SignUp Form Submit Event
$("#signup-form").submit((e)=>{
    e.preventDefault();
    let userName = $("#signup-username").val();
    let email = $("#signup-email").val();
    let passWord = $("#signup-password").val();
    let confirmPassword = $("#confirm-password").val();
    if(userName === "" || email === "" || passWord === "" || confirmPassword === ""){
        $("#signup-error").text("Input All Fields");
    }else{
        if(passWord !== confirmPassword){
            $("#signup-error").text("Passwords are no match");
        }else{
            $("#signup-error").text("");
            $("#signup-username").val("");
            $("#signup-email").val("");
            $("#signup-password").val("");
            $("#confirm-password").val("");

            let account = new Account(userName , email , passWord);
            vacation.addAccount(account);
            console.log(vacation);
        }
    }
});

// Login Form Submit Event
$("#login-form").submit((e)=>{
    e.preventDefault();
    let email = $("#signin-email").val();
    let passWord = $("#signin-password").val();
    if(email === "" || passWord === ""){
        $("#login-error").text("Input both fields");
    }else{
        let account = vacation.findAccount(email , passWord);
        if(account === false || account === "Invalid password or email"){
            $("#login-error").text("Invalid password or email");
        }else{
            $("#login-error").text("");
            $("#signin-email").val("");
            $("#signin-password").val("");
            $("#userpage-username").text(`Welcome Back ${account.username}`);
            $(".landing-page").hide();
            $(".user-page").show();
            

            // Book Submit Event
            $("#book-vaca").submit((e)=>{
                e.preventDefault();
                const country = $("#vaca-country").val();
                const state = $("#vaca-state").val();
                const duration = $("#duration-val").find(":selected").val();
                const departMonth = $("#vaca-depart-month").val();
                const deparDate = $("#vaca-depart-date").val();
                const vacaHotel = $("#vaca-hotel").val();

                const ticket = new BookVacation(country , state , vacaHotel , departMonth , deparDate , duration);
                account.book(ticket);

                $("#receipt-country").text(ticket.country);
                $("#receipt-state").text(ticket.state);
                $("#receipt-hotel").text(ticket.hotel);
                $("#receipt-depart-date").text(ticket.deparDate);
                $("#receipt-depart-time").text(ticket.getDeparture());
                $("#receipt-duration").text(ticket.duration);
                $("#book-vaca-parent").hide();
                $("#book-receipt").show
            });
        }
    }
});

});
