module.exports = {
  "type": "object",
  "properties": {
    "Reviewer": {
      "type": "object",
      "properties": {
        "First Name": {"type": "string"},
        "Last Name": {"type": "string"},
      }
    },
    "Dimensions": {
      "type": "array",

      "items": {
        "type": "object",

        "properties": {
          "Description": {
            "type": "string"
          },

          "Expected": {
            "type": "number",
          },

          "Actual": {
            "type": "number",
          }

        }
      }
    }
  }
};
