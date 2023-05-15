import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare function IsExists(key: string, repository: any, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare class IsExistsConstraints implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): Promise<boolean>;
}
