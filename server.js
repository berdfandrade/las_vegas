

const express = require('express');
const server = express();


server.get('/', (req, res) => {
    return res.json({gameState: "false"}) // Configurar a 
    // lógica especifica da challenge para a res... Criar as roas para aplicação até o front... 
});


const port = 3000;


server.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
})
