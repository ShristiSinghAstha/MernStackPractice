// 5. Create a secure password checker using closure: createPassword('admin123') should return a
// function to validate input.

function createPassword(){
    let input;
    return{
        createPassword: function(password){
            input = password;
            if(input=="admin123"){
                return "Access granted";
            } else {
                return "Access denied";
            }
        }
    }
}
const passw=createPassword();
console.log(passw.createPassword("admin123"));
console.log(passw.createPassword("user123"));
