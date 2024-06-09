import { SetMetadata } from '@nestjs/common';

export const EXECUTION_TIME = 'execution-time';

export const ExecutionTime = (...args: string[]) =>
  SetMetadata(EXECUTION_TIME, args);

export function LogExecutionTime() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor?.value;

    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const finish = performance.now();
      console.log(`${propertyKey} took ${finish - start} milliseconds`);
      return result;
    };
  };
}
