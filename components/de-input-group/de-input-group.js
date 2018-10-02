Component({
  relations: {
    '../de-input/de-input': {
      type: 'child',
      linked() {
        this._checkFirstAndLast()
      },
      linkChanged() {
        this._checkFirstAndLast()
      },
      unlinked() {
        this._checkFirstAndLast()
      }
    }
  },
  properties: {

  },

  data: {

  },

  methods: {
    _checkFirstAndLast() {
      let inputs = this.getRelationNodes('../de-input/de-input')

      if (inputs.length > 0) {
        let lastIndex = inputs.length - 1
        inputs.forEach((list, index) => {
          list._setFirstOne(true)
          list._setLastOne(index === lastIndex)
        })
      }
    }
  }
})
