const randomKeys = require("../config/random_keys")

const formatWriteJson = (data) => {
    dataKeys = Object.keys(data.address)
    return {
        name: data.firstName + data.secondName,
        address: data.address[dataKeys.find((key) => randomKeys.city.includes(key))] ?? ""
    }
}

module.exports = formatWriteJson