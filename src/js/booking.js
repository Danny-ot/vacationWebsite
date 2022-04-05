// Vacation Class
export class Vacation{
     constructor(){
         this.accounts = {

         };
     }
     addAccount(account){
         this.accounts[account.email] = account;
     }
     findAccount(email , password){
         if(this.accounts[email] !== undefined){
            if(this.accounts[email].email === email && this.accounts[email].password === password){
                return this.accounts[email];
            }else{
                return "Invalid password or email";
            }
         }else{
             return false;
         }
     }
}

// Account Class
export class Account{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.bookings = {

         };
         this.bookingId = 0;
         this.lastBooking = "";
    }
    assignId(){
        this.bookingId += 1;
        return this.bookingId;
    }
    book(ticket){
        ticket.id = this.assignId();
        this.bookings[ticket.id] = ticket;
        this.lastBooking = new Date().toLocaleDateString();
    }
}

// BookVation Class 
export class BookVacation{
    constructor(country , state ,  hotel , month , deparDate , duration){
        this.month = month;
        this.country = country;
        this.hotel = hotel;
        this.state = state;
        this.deparDate = deparDate;
        this.duration = duration;
     }
    getDeparture(){
        let departTime = ["12:00pm" , "4:00pm" , "8:30pm" , "11:30pm"]
        let time = Math.floor(Math.random() * departTime.length)
        return departTime[time]
    }
}