# Proxy Turn Over

[![Build Status](https://travis-ci.com/Ganevru/proxy-turn-over.svg?branch=master)](https://travis-ci.com/Ganevru/proxy-turn-over)
[![npm](https://img.shields.io/npm/v/proxy-turn-over.svg?style=flat-square)](http://npm.im/proxy-turn-over)

Flip ip address and login:password in proxy.
If there is a protocol, it will always be at the beginning.

```
npm i proxy-turn-over
```

Examples:

ipAddress:port first (default):

```{js}
const proxyTurnOver = require('proxy-turn-over')
proxyTurnOver('https://superLogin:superPassword@123.123.2.42:8080')

// return this:
// 'https://123.123.2.42:8080@superLogin:superPassword'
```

login:password first (need a second argument - 'loginPass'):

```{js}
const proxyTurnOver = require('proxy-turn-over')
proxyTurnOver('123.123.2.42:8080@superLogin:superPassword', 'loginPass')

// return this:
// 'superLogin:superPassword@123.123.2.42:8080'
```
