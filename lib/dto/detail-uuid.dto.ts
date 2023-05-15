import { IsNotEmpty, IsUUID } from 'class-validator';
import { IDetailUuidDTO } from '../interfaces/detail-uuid.dto';
import { FunctionWithClass } from '../interfaces/function-with-class.interface';
import { BaseEntity } from 'typeorm';
import { IsExists } from '../validator/is-exists.validator';

export const DetailUuid = function (
  entity?: BaseEntity
): FunctionWithClass<IDetailUuidDTO> {
  class DtoSchema implements IDetailUuidDTO {
    @IsUUID()
    @IsExists('id', entity)
    @IsNotEmpty()
    id: string;
  }

  return DtoSchema;
};
