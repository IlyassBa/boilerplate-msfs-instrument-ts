import { describe, it, expect } from 'vitest';
import { Altimeter } from './Altimeter';

describe('Altimeter', () => {
  it('should be defined', () => {
    expect(new Altimeter()).toBeDefined();
  });
});