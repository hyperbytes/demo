dmx.config({
  "retyu": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "last_name"
        },
        {
          "type": "text",
          "name": "first_name"
        },
        {
          "type": "text",
          "name": "status"
        }
      ],
      "outputType": "array"
    }
  },
  "inplaceedit": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "number",
          "name": "author_id"
        }
      ],
      "outputType": "array"
    }
  },
  "multi": {
    "iterator1": {
      "meta": [
        {
          "type": "text",
          "name": "username"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "password"
        },
        {
          "type": "text",
          "name": "role"
        },
        {
          "name": "children",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "child_id"
            },
            {
              "type": "text",
              "name": "name"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "inplace1": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "forename"
        },
        {
          "type": "text",
          "name": "surname"
        }
      ],
      "outputType": "array"
    },
    "datastore1": [
      {
        "type": "number",
        "name": "price"
      }
    ],
    "repeat2": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "forename"
        },
        {
          "type": "text",
          "name": "surname"
        }
      ],
      "outputType": "array"
    }
  },
  "datastoresum": {
    "datastore1": [
      {
        "type": "number",
        "name": "price"
      }
    ]
  },
  "asdfasd": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "forename"
        },
        {
          "type": "text",
          "name": "surname"
        }
      ],
      "outputType": "array"
    },
    "var1": {
      "meta": null,
      "outputType": "text"
    }
  },
  "index": {
    "query": [
      {
        "type": "text",
        "name": "dir"
      }
    ]
  }
});
