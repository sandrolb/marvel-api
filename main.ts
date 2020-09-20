
import {Server} from './server/server'
import {characterRouter} from './characters/characters.router'

const server = new Server()
server.bootstrap([characterRouter]).then(server=>{
    console.log('Servidor Online na porta:',server.application.address())
}).catch(
    error=>{
        console.log('Houve um erro ao tentar iniciar o servidor.')
        console.error()
        process.exit(1)
    }
)




