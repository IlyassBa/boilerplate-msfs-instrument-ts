import { describe, it, expect } from 'vitest';
import { AltimeterInteractor } from './AltimeterInteractor';

describe('AltimeterInteractor', () => {
  it('should be defined', () => {
    expect(new AltimeterInteractor()).toBeDefined();
  });
});