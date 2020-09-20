import * as restify from 'restify'
import {environment} from '../common/environment'
import {Router} from '../common/router.js'
import * as mongoose from 'mongoose'
import {handlerError} from './error.handler'

export class Server{

    application: restify.Server

    initializeDb(){
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

    }

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject)=>{
            try{
                this.application = restify.createServer({
                    name: 'marvel-api',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())

                //rotas

                for (let router of routers){
                    router.applyRoutes(this.application)
                }

                this.application.listen(environment.server.port, ()=>{
                    resolve(this.application)
                })

                this.application.on('restifyError', handlerError)

            }catch(error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initializeDb().then(()=>
               this.initRoutes(routers).then(()=>this))
    }

    shutdown(){
        return mongoose.disconnect().then(()=>this.application.close())
    }
}