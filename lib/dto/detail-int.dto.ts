import { BaseEntity } from 'typeorm';
import { FunctionWithClass } from '../interfaces/function-with-class.interface';
import { IDetailIntDTO } from '../interfaces/detail-int.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { IsExists } from '../validator/is-exists.validator';

export const DetailIntDTO = function (
  entity?: BaseEntity
): FunctionWithClass<IDetailIntDTO> {
  class DtoSchema implements IDetailIntDTO {
    @IsNumber()
    @IsExists('id', entity)
    @IsNotEmpty()
    id: number;
  }

  return DtoSchema;
};
