const randomKeys = require("../config/random_keys")

const formatWriteJson = (data) => {
    return {
        name: data.firstName + data.secondName,
        address: getMatchedData(data)
    }
}

const getMatchedData = (data) => {
    const dataKeys = Object.keys(data.address)
    return data.address[dataKeys.find((key) => randomKeys.city.includes(key))] ?? ""
}

module.exports = formatWriteJson