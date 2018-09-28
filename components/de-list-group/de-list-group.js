// components/de-list-group/de-list-group.js
Component({
  relations: {
    '../de-list/de-list': {
      type: 'child',
      linked() {
        this._checkLastOne()
      },
      linkChanged() {
        this._checkLastOne()
      },
      unlinked() {
        this._checkLastOne()
      }
    }
  },
  properties: {

  },

  data: {

  },

  methods: {
    _checkLastOne () {
      let lists = this.getRelationNodes('../de-list/de-list')

      if (lists.length > 0) {
        let lastIndex = lists.length - 1

        lists.forEach((list, index) => {
          list._setFirstOne(true)
          list._setLastOne(index === lastIndex)
        })
      }
    }
  }
})
