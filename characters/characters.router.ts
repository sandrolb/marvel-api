import * as restify from 'restify'
import {Router} from '../common/router'
import {Character} from './characters.model'

class CharactersRouter extends Router {

    applyRoutes(application: restify.Server){
            application.get('/v1/public/characters', (req, resp, next)=>{
                Character.find().select('-_id').then(this.render(resp, next))
                .catch(next)
            })

        application.get('/v1/public/characters/:id', (req, resp, next)=>{
            Character.findOne({id: req.params.id}).then(this.render(resp, next)).catch(next)
        })

        application.get('/v1/public/characters/:id/comics', (req, resp, next)=>{
            Character.findOne({id: req.params.id}).select('comics').then(this.render(resp, next)).catch(next)
        })

        application.get('/v1/public/characters/:id/events', (req, resp, next)=>{
            Character.findOne({id: req.params.id}).select('events').then(this.render(resp, next)).catch(next)
        })

        application.get('/v1/public/characters/:id/series', (req, resp, next)=>{
            Character.findOne({id: req.params.id}).select('series').then(this.render(resp, next)).catch(next)
        })

        application.get('/v1/public/characters/:id/stories', (req, resp, next)=>{
            Character.findOne({id: req.params.id}).select('stories').then(this.render(resp, next)).catch(next)
        })
    }
}

export const characterRouter = new CharactersRouter()