const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '..', 'lib')

function loadModule(name) {
  try {
    return require(name)
  } catch (e) {
    return undefined
  }
}

function copy(name, version, vue) {
  vue = vue || 'vue'
  const src = path.join(dir, `v${version}`, name)
  const dest = path.join(dir, name)
  let content = fs.readFileSync(src, 'utf-8')
  content = content.replace(/'vue'/g, `'${vue}'`)
  fs.writeFileSync(dest, content, 'utf-8')
}

function updateVue2API() {
  const ignoreList = ['version', 'default']
  const VCA = loadModule('@vue/composition-api')

  const exports = Object.keys(VCA).filter(i => !ignoreList.includes(i))

  const update = (filename, content) => {
    const filePath = path.join(dir, filename)
    let fileContent = fs.readFileSync(filePath, 'utf-8')

    fileContent = fileContent.replace(
      /\/\*\*VCA-EXPORTS\*\*\/[\s\S]+\/\*\*VCA-EXPORTS\*\*\//m,
      `/**VCA-EXPORTS**/\n${content}\n/**VCA-EXPORTS**/`
    )

    fs.writeFileSync(filePath, fileContent, 'utf-8')
  }

  update('index.esm.js', exports.map(e => `export const ${e} = undefined;`).join('\n'))
  update('index.d.ts', exports.map(e => `export const ${e}: undefined;`).join('\n'))
  update('index.cjs.js', exports.map(e => `exports.${e} = undefined;`).join('\n'))
}

function switchVersion(version, vue) {
  copy('index.cjs.js', version, vue)
  copy('index.esm.js', version, vue)
  copy('index.d.ts', version, vue)

  if (version === 2)
    updateVue2API()
}


module.exports.loadModule = loadModule
module.exports.switchVersion = switchVersion
