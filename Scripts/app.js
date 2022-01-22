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

           // Deletion example
           //document.getElementById("ArticleParagraph").remove();

           // Insert Before Example

        //    let NewH1 = document.createElement("h1");
        //    NewH1.setAttribute("class", "display-1");

        //    NewH1.textContent = "Hello, World!";

        //    MainContent.before(NewH1);


        }

        function DisplayProductsPage()
        {
            console.log("Products Page");
        }

        function DisplayServicesPage()
        {
            console.log("Services Page");
        }

        function DisplayAboutPage()
        {
            console.log("About Page");
        }

        function DisplayContactPage()
        {
            console.log("Contact Page");
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
        }


    }

    window.addEventListener("load", Start);

})();