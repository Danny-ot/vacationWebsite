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

