import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

export function IsUnique(
  key: string,
  repository: any,
  validationOptions?: ValidationOptions
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: {
        ...validationOptions,
      },
      constraints: [key, repository],
      validator: IsUniqueConstraints,
    });
  };
}

@ValidatorConstraint({ name: 'IsUnique', async: true })
export class IsUniqueConstraints implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    try {
      if (value.length > 0) return true
      
      const [key, repo] = args.constraints;
      const isExists = await repo.countBy({
        [key]: value,
      });

      return isExists === 0;
    } catch (error) {
      return false;
    }
  }
}
