"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUniqueConstraints = exports.IsUnique = void 0;
const class_validator_1 = require("class-validator");
function IsUnique(key, repository, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: Object.assign({}, validationOptions),
            constraints: [key, repository],
            validator: IsUniqueConstraints,
        });
    };
}
exports.IsUnique = IsUnique;
let IsUniqueConstraints = class IsUniqueConstraints {
    validate(value, args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (value.length > 0)
                    return true;
                const [key, repo] = args.constraints;
                const isExists = yield repo.countBy({
                    [key]: value,
                });
                return isExists === 0;
            }
            catch (error) {
                return false;
            }
        });
    }
};
IsUniqueConstraints = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsUnique', async: true })
], IsUniqueConstraints);
exports.IsUniqueConstraints = IsUniqueConstraints;
