# proxy-turn-over

```
npm i proxy-turn-over
```

Examples:

```{js}
proxyTurnOver('123.123.2.42:8080@superLogin:superPassword')

// return this:
// 'superLogin:superPassword@123.123.2.42:8080'
```

```{js}
proxyTurnOver('superLogin:superPassword@123.123.2.42:8080', 'lp:ip')

// return this:
// '123.123.2.42:8080@superLogin:superPassword'
```

```{js}
proxyTurnOver('123.123.2.42:8080@superLogin:superPassword', 'ip:lp')

// return this:
// 'superLogin:superPassword@123.123.2.42:8080'
```
