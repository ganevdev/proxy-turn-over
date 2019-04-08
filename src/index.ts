import splitProxy from 'split-proxy';

function protocol(proxy: string): string {
  if (splitProxy(proxy).protocol !== '') {
    return splitProxy(proxy).protocol + '://';
  } else {
    return '';
  }
}

function atSignExists(proxy: string): boolean {
  if (/@/.test(proxy)) {
    return true;
  } else {
    return false;
  }
}

function colonExists(proxy: string): boolean {
  if (/\:/.test(proxy)) {
    return true;
  } else {
    return false;
  }
}

function proxyTurnOver(
  proxy: string,
  order: 'loginPass' | 'ipPort' = 'ipPort'
): string {
  if (atSignExists(proxy) && colonExists(proxy)) {
    if (order === 'loginPass') {
      return (
        protocol(proxy) +
        splitProxy(proxy).login +
        ':' +
        splitProxy(proxy).password +
        '@' +
        splitProxy(proxy).host +
        ':' +
        splitProxy(proxy).port
      );
    } else {
      return (
        protocol(proxy) +
        splitProxy(proxy).host +
        ':' +
        splitProxy(proxy).port +
        '@' +
        splitProxy(proxy).login +
        ':' +
        splitProxy(proxy).password
      );
    }
  } else {
    return proxy;
  }
}

module.exports = proxyTurnOver;
export default proxyTurnOver;
