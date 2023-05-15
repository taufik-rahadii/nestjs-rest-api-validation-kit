import { BaseEntity } from 'typeorm';
import { FunctionWithClass } from '../interfaces/function-with-class.interface';
import { IDetailIntDTO } from '../interfaces/detail-int.dto';
export declare const DetailIntDTO: (entity?: BaseEntity) => FunctionWithClass<IDetailIntDTO>;
