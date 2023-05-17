# NestJS Rest API Validation Kit

This package contains some custom validations decorator, using class-validator and typeorm if you want to validate using database as well.

## Validators

<hr>

### @IsUnique

Is unique validator used to check the value into the database. You can use column name as a first argument and inject your repository as a second argument.

```typescript
export class RegisterUserDTO {
  @IsUnique('email', User, {
    message: ({ value }) => `User with email '${value}' is already exists.`,
  })
  email: string;
}
```

NOTE: remember to add your validation options too.

<hr>

### @IsExists

Is exists validator used to check if the given value is exists on the database. Same as IsUnique, pass the column name as a first argument and inject your repository as a second argument.

```typescript
export class CreateUserDTO {
  @IsUUID()
  @IsExists('id', Role, {
    message: ({ value }) => `Role with id '${value}' was not exists.`,
  })
  roleId: string;
}
```

<hr>

### @Match

Match validator used to compare given value to another field from request body. Pass a field name as a first argument.

```typescript
export class ResetPasswordDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Match('password', {
    message: ({ value }) => `Password confirmation not same.`,
  })
  confirmPassword: string;
}
```

<hr>

## DTO Classes

<hr>

### DetailUuid & DetailInt

You can extends this DTO to your own DTO reduce code redundant. If you want to validate your request body, query params, or path params, and that object has an id properties with type of UUID in it.

```typescript
export class DetailProductDTO extends DetailUuid(new Product()) {}

export class DetailProductCategoryDTO extends DetailInt(
  new ProductCategory()
) {}
```

Now your DetailProductDTO and DetailProductCategoryDTO has a validated id property.
