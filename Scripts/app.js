// IIFE -- Immediately Invoked Function Expression


// AKA -- Anonymous Self-Executing Function
(function()
{
    // named funstion option 
    function Start()
    {
        
        /**
         * Displays the information in Home Page through JavaScript.
         */
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
            let img = document.createElement("img");
            let Article = document.createElement("article");
            let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">Zuuwa is an IT based company located in Ontario, Canada . 
            The company is serving from last 5 years in the Website Design & Development, 
            Digital Media & Graphic Design. Our dedicated designers & developers can completed all your tasks 
            and deliver quality work on/before time and within your budget. Expertise in Website Design and Development, 
            Newsletter Design and Banner Design. Create wow moments for any clients are our achievement. </p>`;

            // Step 3 configure new element
            MainParagraph.setAttribute("id", "MainParagraph");
            MainParagraph.setAttribute("class", "mt-3");
            
            
            Article.setAttribute("class", "container");
            img.setAttribute("id", "Image");
            img.setAttribute("class", "container");
            img.style.width = "200px";
            img.src = "http://zuuwa.com/wp-content/uploads/2021/08/Page-1-quality100-1-scaled.jpg";

            // Step 4 add / insert new element
            MainContent.appendChild(MainParagraph);
            Article.innerHTML = ArticleParagraph;
            DocumentBody.appendChild(img);
            DocumentBody.appendChild(Article);
            document.getElementById("projectname").innerHTML = "Project";



        }

        /**
         * Displays the information in Products Page through JavaScript.
         */
        function DisplayProductsPage()
        {
            console.log("Our Products Page");
            document.getElementById("projectname").innerHTML = "Project";

        }

        /**
         * Displays the information in Services Page through JavaScript.
         */
        function DisplayServicesPage()
        {
            console.log("Our Services Page");
            document.getElementById("projectname").innerHTML = "Project";

        }

        /**
         * Displays the information in About Page through JavaScript.
         */
        function DisplayAboutPage()
        {
            console.log("About Us Page");
            document.getElementById("projectname").innerHTML = "Project";

        }

        /**
         * Displays the information in Contact Page through JavaScript.
         */
        function DisplayContactPage()
        {
            console.log("Contact Us Page");
            document.getElementById("projectname").innerHTML = "Project";

            let sendButton = document.getElementById("sendButton");

            sendButton.addEventListener("click", function(event)
            {
                event.preventDefault();
                        
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value, message.value);
                console.log(contact.toString());

                // The idea for this line of code is taken from https://stackoverflow.com/questions/51660097/redirect-to-home-page-after-3-seconds
                setTimeout(function() {window.location = "../index.html";}, 3000);

                
            });

            
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
            case "Navbar":
                navbar();
                break;          
        }



    }


    window.addEventListener("load", Start);
    

})();