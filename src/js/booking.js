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

