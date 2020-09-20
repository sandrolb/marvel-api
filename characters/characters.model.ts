import * as mongoose from 'mongoose'

const characterSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  modified: {
    type: Date
  },
  thumbnail: {
    path: {
      type: String
    },
    extension: {
      type: String
    }
  },
  resourceURI: {
    type: String
  },
  comics: {
    available: {
      type: Number
    },
    collectionURI: {
      type: String
    },
    items: {
      type: [
        "Mixed"
      ]
    },
    returned: {
      type: Number
    }
  },
  series: {
    available: {
      type: Number
    },
    collectionURI: {
      type: String
    },
    items: {
      type: [
        "Mixed"
      ]
    },
    returned: {
      type: Number
    }
  },
  stories: {
    available: {
      type: Number
    },
    collectionURI: {
      type: String
    },
    items: {
      type: [
        "Mixed"
      ]
    },
    returned: {
      type: Number
    }
  },
  events: {
    available: {
      type: Number
    },
    collectionURI: {
      type: String
    },
    items: {
      type: [
        "Mixed"
      ]
    },
    returned: {
      type: Number
    }
  },
  urls: {
    type: [
      "Mixed"
    ]
  }
},
{
  autoCreate: true
})

export const Character = mongoose.model('Character', characterSchema)
