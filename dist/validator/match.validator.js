"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchConstraints = exports.Match = void 0;
const class_validator_1 = require("class-validator");
function Match(propertyName, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: Object.assign({}, validationOptions),
            constraints: [propertyName],
            validator: MatchConstraints,
        });
    };
}
exports.Match = Match;
class MatchConstraints {
    validate(value, validationArguments) {
        const [relatedPropertyName] = validationArguments.constraints;
        const relatedValue = validationArguments.object[relatedPropertyName];
        return value === relatedValue;
    }
}
exports.MatchConstraints = MatchConstraints;
