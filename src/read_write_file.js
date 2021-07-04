const fs = require('fs')
const formatWriteJson = require('./utils/writeFormatter')

const readWriteData = async () => {
    fs.readFile('./data/customer_details.json','utf-8',(error,fileData) => {
        if(error){
            console.log('Unable to read file')
            return
        }

        var readJson = JSON.parse(fileData)
        writeData(readJson)
    })
}

const writeData = (data) => {
    fs.writeFile('./data/formatted_customer_data.json',JSON.stringify(formatWriteJson(data)), (error) => {
        if(error){
            console.log('Error writting file')
            return
        }
        console.log('File written successfully')
    })
}

readWriteData()