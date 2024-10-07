 function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

 function removeSpaces(string) {
    return string.split(' ').join('');
}

 function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email).toLowerCase();
}

export default { capitalizeFirstLetter, removeSpaces, validateEmail };