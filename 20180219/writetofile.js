const fs = require('fs')
let message =
    'Lorem 2 ipsum dolor 1 sit amet, consectetur adipiscing 12 elit. Ut sed tellus arcu. Pellentesque sapien purus, sagittis ac rutrum quis, rhoncus eu enim. Cras id interdum leo. Suspendisse at massa eget nibh scelerisque tincidunt. Integer in mauris id sapien euismod mattis. Maecenas augue ligula, ornare quis nulla at, pharetra finibus sem. Morbi vestibulum in eros eget eleifend. Duis lobortis nisl ac sem vulputate tristique. Praesent ut mollis eros.' +
    'Vivamus ligula leo, 5 convallis eget 7 vulputate porta, 8 vehicula 2 vitae sem. Nam velit lectus, sodales sit amet fermentum eget, efficitur quis orci. In sodales finibus egestas. Vestibulum ac quam quis tellus pharetra suscipit. Nulla.'
let outputFile = 'olamundo.txt'

fs.writeFile(outputFile, message, (err) => {
    if (err) throw err;
    console.log('O arquivo foi salvo com sucesso!')
})