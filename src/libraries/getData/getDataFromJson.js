import { readFile } from 'fs'

export default async function getDataFromJson(path) {
  const fileContent = await new Promise((resolve, reject) => {
    return readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data)
    })
  })

  return JSON.parse(fileContent)
}
