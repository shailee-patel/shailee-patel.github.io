"use strict";
(function()
{
    // if user doesnt exist in session storage
    if(!sessionStorage.getItem("user"))
    {
        // redirect to the login page
        location.href = "login.html";
    }
})();