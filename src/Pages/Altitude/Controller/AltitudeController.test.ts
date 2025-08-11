import { describe, it, expect } from 'vitest';
import { AltitudeController } from './AltitudeController';

describe('AltitudeController', () => {
  it('should be defined', () => {
    expect(new AltitudeController()).toBeDefined();
  });
});