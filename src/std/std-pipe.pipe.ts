import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';

@Injectable()
export class StdPipePipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {

    const Data = ["ACTIVE", "INACTIVE"];
    const students = ["AHMAD", "ALI", "ISLAM"];

    if (metadata.data === "status") {
      if (Data.includes(value.toUpperCase())) {
        return value;
      } else {
        throw new NotFoundException("the value not included to status");
      }
    }

    if (metadata.data === "student") {
      if (students.includes(value.toUpperCase())) {
        return value;
      } else {
        throw new NotFoundException("the value not included to student");
      }
    }

    return value;
  }
}