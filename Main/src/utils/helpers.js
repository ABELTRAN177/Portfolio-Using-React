export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeSpaces(string) {
    return string.split(' ').join('');
}

export function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email).toLowerCase();
}

