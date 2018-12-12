import _ from 'lodash'

export default {
  install (Vue, options) {
    Vue.prototype.setValidationErrors = function (response) {
      if (response.response.status === 422) {
        let errors = response.response.data.errors

        _.each(errors, (error, field) => {
          this.errors.add({ field, msg: error[0] })
        })
      }
    }
  }
}
