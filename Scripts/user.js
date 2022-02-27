(function(core){

    class User
    {
        // constructor
        constructor(FirstName = "", lastName = "", emailAddress= "", username = "", password = "")
        {
            this.firstName = FirstName;
            this.LastName = lastName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        // overriden functions
        toString()
        {
            return `First Name   : ${this.firstName}\nLast Name  : ${this.LastName}\nEmail Address  : ${this.EmailAddress}\nUser Name   : ${this.Username}`;
        }

        serialize()
        {
            if(this.firstName !== "" && this.LastName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.firstName},${this.LastName},${this.EmailAddress},${this.Username}`;
            }
            console.error("One or more propperties of the User Object are missing or invalid");
            return null;
        }

        deserialize(data) 
        {
            let propertyArray = data.split(",")
            this.firstName = propertyArray[0];
            this.LastName = propertyArray[1];
            this.EmailAddress = propertyArray[2];
            this.Username = propertyArray[3];
        }
    }

    core.User = User;

})(core || (core={}));