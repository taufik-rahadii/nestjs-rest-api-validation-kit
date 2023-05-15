"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchConstraints = exports.Match = void 0;
var class_validator_1 = require("class-validator");
function Match(propertyName, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: __assign({}, validationOptions),
            constraints: [propertyName],
            validator: MatchConstraints,
        });
    };
}
exports.Match = Match;
var MatchConstraints = /** @class */ (function () {
    function MatchConstraints() {
    }
    MatchConstraints.prototype.validate = function (value, validationArguments) {
        var relatedPropertyName = validationArguments.constraints[0];
        var relatedValue = validationArguments.object[relatedPropertyName];
        return value === relatedValue;
    };
    return MatchConstraints;
}());
exports.MatchConstraints = MatchConstraints;
