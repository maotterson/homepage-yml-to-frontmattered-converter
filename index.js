const fs = require('fs')
const inputPath = './yaml'
const outputPath = './md'

function convertYamls(){
  fs.readdir(inputPath, (err, files) => {
    files.forEach(file => {
      fs.readFile((inputPath + '/' + file),'utf-8',(err,content)=>{
        let mdOutput = "---\n"
        mdOutput += content + '---'
        const stream = fs.createWriteStream(outputPath + '/' + file.split('.')[0] + '.md')
        stream.on('open', () => {
          stream.write(mdOutput)
          stream.end()
        })
      })
    })
  })
}

convertYamls()