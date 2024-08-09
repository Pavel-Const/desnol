type ValidatorFunction = (value: string) => string | undefined;

interface Validator {
    [key: string]: ValidatorFunction;
}

interface Values {
    [key: string]: string;
}

interface Errors {
    [key: string]: string;
}

const validator: Validator = {
    password: (value: string): string | undefined => {
        /*const regExp = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/;*/
        if (!value) {
            return "Это обязательное поле";
        } /*else if (!regExp.test(value)) {
            return "From 8 to 40 characters, at least one capital letter and a number";
        }*/
    },
    login: (value: string): string | undefined => {
        if (!value) {
            return "Это обязательное поле";
        }
    },
};

export const validateForm = (values: Values): Errors => {
    const errors: Errors = {};
    Object.keys(values).forEach(key => {
        const foo = validator[key];
        if (foo) {
            const error = foo(values[key]);
            if (error !== undefined) {
                errors[key] = error;
            }
        }
    });
    return errors;
};
