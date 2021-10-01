const emailPattern = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{2,3}$/;

function validateEmail(email) {
    if (email === undefined) {
        email = 'Unknown!';
    } else if (emailPattern.test(email) === false) {
        email = 'Invalid Email!';
    }
    if (email = '') { // will not test => will show it on coverage;
        throw Error('Undefined!');
    }
    return email;
}

module.exports = validateEmail;