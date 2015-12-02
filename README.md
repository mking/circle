Setup
===
```
nvm use
npm install
tsd install
npm start
# Visit http://localhost:8080
```

Issues
---
- As far as I can tell, hot reloading only works when targeting es6, but this makes it impossible to use `$('content')` with the current type definition.
- [Default exports](https://github.com/Microsoft/TypeScript/issues/2719)
- [Stateless function components](https://github.com/Microsoft/TypeScript/pull/5596)
