(function (core) {
class Contact
{
    
    // constructors
    constructor(fullName = "", contactNumber = "", emailAddress = "")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }


    // public utility methods
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
        console.error("One or more propperties of the Contact Object are missing or invalid");
        return null;
    }

    deserialize(data) // assume that the data is in a comma-seperated format (string array of properties)
    {
        let propertyArray = data.split(",")
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }


    // public overrides
    toString()
    {
        return `Full Name      : ${this.FullName}\nContact Number : ${this.ContactNumber}\nEmail Address  : ${this.EmailAddress}`; 
    }
}
core.Contact = Contact;
})(core || (core = {}));