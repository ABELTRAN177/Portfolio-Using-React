// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    // Get the first character of the string, convert it to uppercase, and concatenate it with the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to remove spaces from a string
function removeSpaces(string) {
    // Split the string into an array of words, then join the words back together without spaces
    return string.split(' ').join('');
}

// Function to validate an email address
function validateEmail(email){
    // Define a regular expression for email addresses
    var re = /\S+@\S+\.\S+/;
    // Test the email address against the regular expression and convert the result to lowercase
    return re.test(email).toLowerCase();
}

// Export the functions as named exports
export default { capitalizeFirstLetter, removeSpaces, validateEmail };