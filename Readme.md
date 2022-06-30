# Styling Package

This package is very useful to style webpages creatively.

## Installation

Install this npm package using following command :-

```bash
  npm install npm-stylewebpages
```
    
## Documentation

Firstly give the class in the html document as 'box-shadow'. Now you can customize the box shadow using the following code :-

```javascript
import { boxShadow } from 'stylewebpage';

boxShadow({
    boxShadowType: 'soft',
    padding: true
});
```
## Features

This npm package supports 2 options, both of which are optional.

- *boxShadowType*: _hard | soft_ ( Default - _soft_ )
- *padding*: _true | false_ ( Default - _false_ )
## Authors

- [@hetref](https://www.github.com/hetref)