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



});
