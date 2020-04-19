// Generated entries
const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 1,
      "maxItems": 50,
      "items": {
        "id": {
          "type": "integer",
          "autoIncrement": true
        },
        "firstname": {
          "type": "string",
          "faker": "name.firstName"
        },
        "lastname": {
          "type": "string",
          "faker": "name.lastName"
        },
        "gender": {
          "type": "string",
          "pattern": "male|female"
        },
        "username": "",
        "memberSince": new Date().toLocaleString(),
        "status": {
          "type": "string",
          "pattern": "active|suspended"
        },
        "address": {
          "type": "string",
          "faker": "address.streetAddress"
        },
        "cellphoneNumber": {
          "type": "string",
          "faker": "phone.phoneNumberFormat"
        },
        "identificationNumber": {
          "type": "string",
          "pattern": "00-[0-9]{3}-[0-9]{3}-[0-9]{2}"
        },
        "profession": {
          "type": "string",
          "faker": "name.title"
        },
        "balance": {
          "type": "integer",
          "minimum": 1000,
          "maximum": 50000,
          "multipleOf": 500
        }
      }
    }
  },
  "required": ["users"]
};

module.exports = schema;
