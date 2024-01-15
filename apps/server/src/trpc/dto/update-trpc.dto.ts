import { PartialType } from '@nestjs/mapped-types';
import { CreateTrpcDto } from './create-trpc.dto';

export class UpdateTrpcDto extends PartialType(CreateTrpcDto) {
  id: number;
}
