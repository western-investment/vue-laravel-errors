## Introduction

This is a very simple plugin to add helper method that sets validation errors from Laravel backend to Vue validator.

## Installation

First, add package to npm dependencies
```bash
npm install @western-investment/vue-laravel-errors --save
```

Finally, register the plugin:
```javascript
import ValidationPlugin from '@western-investment/vue-laravel-errors'

Vue.use(ValidationPlugin)
```

## Usage

This plugin adds `setValidationErrors` method on Vue instance. It makes it easy to set any errors that come with 422 response code from axios requests.

This is the most basic way to push validation errors to validator instance:
```javascript
axios.post('/some-url', data)
  .catch((response) => {
    if (response.response.status === 422) {
      let errors = response.response.data.errors

      _.each(errors, function(error, field) => {
        this.errors.add({ field, msg: error[0] })
      })
    }
})
```

You can see how this can cause a lot of duplication if you are making many axios requests. This plugin provides an easy way to replace all that with one simple line:
```javascript
axios.post('/some-url', data)
  .catch((response) => {
    this.setValidationErrors(response)
})
```
