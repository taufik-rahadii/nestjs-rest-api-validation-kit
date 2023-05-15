import { IDetailUuidDTO } from '../interfaces/detail-uuid.dto';
import { FunctionWithClass } from '../interfaces/function-with-class.interface';
import { BaseEntity } from 'typeorm';
export declare const DetailUuid: (entity?: BaseEntity) => FunctionWithClass<IDetailUuidDTO>;
