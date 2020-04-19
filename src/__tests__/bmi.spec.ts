import { getMetricBMI, getBMIType } from '../index';

test('getMetricBMI', () => {
  expect(getMetricBMI(91, 171)).toBe(31.12);
});

test('getBMIType', () => {
  expect(getBMIType(31)).toBe('Obese');
});
