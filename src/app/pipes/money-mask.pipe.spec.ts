import { MoneyMaskPipe } from './money-mask.pipe';

describe('MoneyMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new MoneyMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
