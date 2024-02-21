const Userdata ={
    firstname: "John",
    lastname: "Doe",
    age: 30,
    email: "john@example.com",
    isAdmin: false,
    fullname: function(){
        return this .firstName + " " + this.lastname;
    },
    userInformation: function(){
        console.log("Fullname: " + this.fullname());
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        if(this.isAdmin){
            console.log("Role: Admin");
        }
        else{
            console.log("Role: User")
        }
    },
    adminInformation: function(){
        this.isAdmin = true
        console.log("Fullname: " + this.fullname());
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        if(this.isAdmin){
            console.log("Role: Admin");
        }
        else{
            console.log("Role: User")
        }
    }
    
}
console.log("User Information");
Userdata.userInformation()

console.log("Admin Information");
Userdata.adminInformation()