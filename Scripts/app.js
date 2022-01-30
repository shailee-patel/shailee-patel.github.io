// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    // named funstion option 
    function Start()
    {
        
        function DisplayHomePage()
        {
            console.log("Home Page");
            let AboutUsButton = document.getElementById("AboutUsButton");
            AboutUsButton.addEventListener("click", function()
            {
                location.href = "about.html";
            });

            // Step 1 get a reference to an entry point(s) (insertion point / deletion point)
            let MainContent = document.getElementsByTagName("main")[0];
            let DocumentBody = document.body;
            
            // Step 2 create an element to insert
            let MainParagraph = document.createElement("p");
            let Article = document.createElement("article");
            let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

            // Step 3 configure new element
            MainParagraph.setAttribute("id", "MainParagraph");
            MainParagraph.setAttribute("class", "mt-3");
            let FirstParagraphString = "This is";
            // Example for template string
            let SecondParagraphString = `${FirstParagraphString} the main Paragraph`;
            MainParagraph.textContent = SecondParagraphString;
            Article.setAttribute("class", "container");

            // Step 4 add / insert new element
            MainContent.appendChild(MainParagraph);
            Article.innerHTML = ArticleParagraph;
            DocumentBody.appendChild(Article);

        }

        function DisplayProductsPage()
        {
            console.log("Our Products Page");
        }

        function DisplayServicesPage()
        {
            console.log("Our Services Page");
        }

        function DisplayAboutPage()
        {
            console.log("About Us Page");
        }

        function DisplayContactPage()
        {
            console.log("Contact Us Page");

            let sendButton = document.getElementById("sendButton");
            let subscribeCheckbox = document.getElementById("subscribeCheckbox");

            sendButton.addEventListener("click", function()
            {
                
                if(subscribeCheckbox.checked)
                {
                    let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                    if(contact.serialize())
                    {
                        let key = contact.FullName.substring(0, 1) + Date.now();

                        localStorage.setItem(key, contact.serialize());
                    }
                }
            });
        }

        function DisplayContactListPage()
        {
            console.log("Contact-List Page");
            if(localStorage.length > 0)
            {
                let contactList = document.getElementById("contactList");

                let data = ""; // data container -> add deserialized data from localstorage

                let keys = Object.keys(localStorage); // returns a string array of keys

                let index = 1; // counts how many keys

                // for every key in the keys array (collection), loop
                for (const key of keys) 
                {
                    let contactData = localStorage.getItem(key); // get localStorage data value related to the key

                    let contact = new Contact(); // create a new empty contact object
                    contact.deserialize(contactData);

                    // inject a repeatable row into the contactList
                    data += `<tr>
                    <th scope="row" class="text-center">${index}</th>
                    <td>${contact.FullName}</td>
                    <td>${contact.ContactNumber}</td>
                    <td>${contact.EmailAddress}</td>
                    <td></td>
                    <td></td>
                    </tr>
                    `;

                    index++;
                }

                contactList.innerHTML = data;
            }
        }

        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact-List":
                DisplayContactListPage();
                break;
        }


    }

    window.addEventListener("load", Start);

})();