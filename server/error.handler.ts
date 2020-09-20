import * as restify from 'restify'

export const handlerError = (req: restify.Request, resp: restify.Response, err, done) => {
    err.toJSON = ()=>{
        return {
            message: err.message
        }
    }
    switch (err.name){
        case 'CastError': {
            err.statusCode = 400
            err.message = 'ERRO: O parâmetro <'+ err.value + '> enviado é inválido.'
        }
        break
    }
    done()
}