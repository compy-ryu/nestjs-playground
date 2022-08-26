import { BadRequestException, ValidationError } from '@nestjs/common';

export default function validationExceptionFactory(errors: ValidationError[]) {
  const errorMessages = errors.map((error) => Object.values(error.constraints));

  return new BadRequestException(errorMessages.join('\n'));
}
