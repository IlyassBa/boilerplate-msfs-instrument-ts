import { describe, it, expect } from 'vitest';
import { AltimeterController } from './AltimeterController';

describe('AltimeterController', () => {
  it('should be defined', () => {
    expect(new AltimeterController()).toBeDefined();
  });
});