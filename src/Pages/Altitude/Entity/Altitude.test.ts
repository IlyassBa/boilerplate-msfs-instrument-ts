import { describe, it, expect } from 'vitest';
import { Altitude } from './Altitude';

describe('Altitude', () => {
  it('should be defined', () => {
    expect(new Altitude()).toBeDefined();
  });
});