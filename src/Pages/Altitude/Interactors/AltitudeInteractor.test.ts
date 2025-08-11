import { describe, it, expect } from 'vitest';
import { AltitudeInteractor } from './AltitudeInteractor';

describe('AltitudeInteractor', () => {
  it('should be defined', () => {
    expect(new AltitudeInteractor()).toBeDefined();
  });
});