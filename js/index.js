const p = console.log;
// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>
let el = {
    fn: document.getElementById("fullname"),
    em: document.getElementById("email"),
    ms: document.getElementById("message"),
    sb: document.getElementById("submit")
};

// Declare variable that will 
// store regular expression for email
let emrex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateForm() {
           
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    let fdata = {};
    let error = {};

//    +-----------+    
//    | FULL NAME |
//    +-----------+
    // Check if fullname is not empty.
    if (el.fn.value) {
    // If so:
       // Pass the collected value
       // to your object "data".
        fdata.fullname = el.fn.value;
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your array "errors".
        error.fn = "Full name is missing";
    // End your conditional here.
    }


//    +-------+    
//    | EMAIL | 
//    +-------+
    // Check if email is not empty.
    if (el.em.value) {
       // Check if email is valid.
        if (emrex.test(el.em.value)) {
       // If so:
          // Pass the collected value
          // to your object "data".
            fdata.email = el.em.value;
        } else {
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
            error.em = "Email is invalid";
       // End your nested conditional here.
        }
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your array "errors"
        error.em = "Email is missing";
    // End your outer conditional here.
    }

//    +---------+    
//    | MESSAGE | 
//    +---------+
    // Check if message is not empty.
    if (el.ms.value) {
    // If so:
       // Pass the collected value
       // to your object "data".
        fdata.message = el.ms.value;
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your array "errors"
        error.ms = "Message is missing";
    // End your conditional here.
    }


//    +-----------------+
//    | FEEDBACK/ERRORS |
//    +-----------------+
    // Check if there is anything in array errors
    if (Object.keys(error).length > 0) {
       // If so: 
       // Print it in JavaScript console.
        p("ERRORS");
        p(error);
    // Otherwise:
    } else {
       // Print the data in JavaScript console.
        p("FORM DATA");
        p(fdata);
       // Clear text-fields
        el.fn.value = "";
        el.em.value = "";
        el.ms.value = "";
    // End your conditional here.
    }

// Close your function here
}

// Register your form to "click" event.
el.sb.addEventListener("click", validateForm);
