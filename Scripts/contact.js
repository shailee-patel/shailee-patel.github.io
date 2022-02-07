/**
 * Name: Shailee Patel, varun Patel
  Student Id: 100800440, 100739468
  Date: 6 February, 2022
 */

class Contact
{
    // public properties (getters and setters)
    get FullName()
    {
        return this.m_fullName;
    }

    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    get Message()
    {
        return this.m_message = message;
    }

    set Message(message)
    {
        this.m_message = message;
    }

    // constructors
    constructor(fullName = "", contactNumber = "", emailAddress = "")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
        this.Message = message;
    }


    // public utility methods
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "" && this.Message !== "")
        {
            return `${this.FullName},${this.ContactNumber},${this.EmailAddress},${this.Message}`;
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
        this.Message = propertyArray[3];
    }


    // public overrides
    toString()
    {
        return `Full Name      : ${this.FullName}\nContact Number : ${this.ContactNumber}\nEmail Address  : ${this.EmailAddress}\nMessage  : ${this.Message}`; 
    }
}