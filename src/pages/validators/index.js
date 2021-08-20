
export const isUniqueEmail = (context, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            checkEmail(context, value)
                .then(() => resolve(true))
                .catch(() => reject(false));
        }, 500);
    });
};

export const usernameLength = value => {
    if (value.length < 6) return false;
    return true;
};

export const passwordLength = value => {
    return value.length >= 8 ? true : false;
};

export const isLowercase = value => {
    return value.match(/[a-z]+/g) ? true : false;
};

export const isUppercase = value => {
    return value.match(/[A-Z]+/g) ? true : false;
};

export const isNumber = value => {
    return value.match(/\d+/g) ? true : false;
};
export const alphaSpace = value =>{
    return value.match(/[a-zA-Z0-9][a-zA-Z0-9 ]+[a-zA-Z0-9]$/g) ? true : false;
}
export const alphaNumeric = value =>{
    return value.match(/^[\w\-\s]+$/) ? true : false;
}
