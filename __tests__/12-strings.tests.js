import makeCensored from '../solutions/12-strings.js';

describe('makeCensored', () => {
  it('test 1', () => {
    const sentence = 'When you play the game of thrones, you win or you die';
    const actual = makeCensored(sentence, ['die']);
    const expected = 'When you play the game of thrones, you win or you $#%!';
    expect(actual).toEqual(expected);
  });

  it('test 2', () => {
    const sentence = 'chicken chicken? chicken! chicken';
    const actual = makeCensored(sentence, ['chicken']);
    const expected = '$#%! chicken? chicken! $#%!';
    expect(actual).toEqual(expected);
  });

  it('test 3', () => {
    const sentence = 'chicken chicken? chicken! ? chicken';
    const actual = makeCensored(sentence, ['?', 'chicken']);
    const expected = '$#%! chicken? chicken! $#%! $#%!';
    expect(actual).toEqual(expected);
  });

  it('test 4', () => {
    const sentence = 'chicken chicken? chicken! ? ! @ chicken';
    const actual = makeCensored(sentence, ['?', '!', '@', 'chicken']);
    const expected = '$#%! chicken? chicken! $#%! $#%! $#%! $#%!';
    expect(actual).toEqual(expected);
  });
});
