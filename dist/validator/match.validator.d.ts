import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare function Match(propertyName: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare class MatchConstraints implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean;
}
