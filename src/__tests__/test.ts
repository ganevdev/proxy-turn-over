import proxyTurnOver from '../index';

describe('ipPort', () => {
  test('protocol://l:p@ip:port', () => {
    expect(
      proxyTurnOver('https://superLogin:superPassword@123.123.2.42:8080')
    ).toBe('https://123.123.2.42:8080@superLogin:superPassword');
  });

  test('protocol://ip:port same@l:p', () => {
    expect(
      proxyTurnOver('https://123.123.2.42:8080@superLogin:superPassword')
    ).toBe('https://123.123.2.42:8080@superLogin:superPassword');
  });

  test('l:p@ip:port', () => {
    expect(proxyTurnOver('superLogin:superPassword@123.123.2.42:8080')).toBe(
      '123.123.2.42:8080@superLogin:superPassword'
    );
  });

  test('no @', () => {
    expect(proxyTurnOver('123.123.2.42:8080')).toBe('123.123.2.42:8080');
  });

  test('protocol no @', () => {
    expect(proxyTurnOver('https://123.123.2.42:8080')).toBe(
      'https://123.123.2.42:8080'
    );
  });
});

describe('loginPass', () => {
  test('protocol://l:p@ip:port', () => {
    expect(
      proxyTurnOver(
        'https://superLogin:superPassword@123.123.2.42:8080',
        'loginPass'
      )
    ).toBe('https://superLogin:superPassword@123.123.2.42:8080');
  });
  test('protocol://ip:port@l:p', () => {
    expect(
      proxyTurnOver(
        'https://123.123.2.42:8080@superLogin:superPassword',
        'loginPass'
      )
    ).toBe('https://superLogin:superPassword@123.123.2.42:8080');
  });
  test('ip:port@l:p', () => {
    expect(
      proxyTurnOver('123.123.2.42:8080@superLogin:superPassword', 'loginPass')
    ).toBe('superLogin:superPassword@123.123.2.42:8080');
  });
  test('l:p@ip:port', () => {
    expect(proxyTurnOver('123.123.2.42:8080', 'loginPass')).toBe(
      '123.123.2.42:8080'
    );
  });
});
