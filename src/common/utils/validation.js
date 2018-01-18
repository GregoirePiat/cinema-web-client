const RULES = {
    required: /([^\s])/,
    number: /[0-9]+(\.[0-9][0-9]?)?/,
};

/**
 * @Input content : Object that will be tested
 * @Input rules : Arrays of rule (each rule need to match to referenced rules)
 * Return an array of error
 * Array Empty if the content pass all rules
 * **/
export const validate = (content, rules) => {
    return rules.filter(rule => {
        if(RULES.hasOwnProperty(rule)) {
            const match = RULES[rule].test(content);
            return !match;
        } else {
            return true
        }
    })
};

/**
 * Return an array of error
 * Array Empty if the content pass all rules
 * **/
const validator = (object, validations) => {
    const result = {
        valid: true,
        errors: {}
    };
    for (const validation in validations) {
        let errors = validations[validation];
        if (object && object.hasOwnProperty(validation)) {
            errors = validate(object[validation], validations[validation]);
        }
        if (errors.length > 0) {
            result.valid = false;
            result.errors[validation] = {
                rules: errors,
                value: object[validation]
            };
        }
    }
    return result;
};


export default validator;