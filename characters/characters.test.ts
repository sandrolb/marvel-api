import 'jest'
import * as request from 'supertest'
import {Server} from '../server/server'
import {characterRouter} from './characters.router'
import {environment} from '../common/environment'

let address: string
let server: Server

beforeAll(()=>{
    environment.server.port = process.env.SERVER_PORT || 3001
    address = `http://localhost:${environment.server.port}`
    server = new Server()
    return server.bootstrap([characterRouter])
                 .catch(console.error)
})

afterAll(()=>{
    return server.shutdown()
})

test('TESTE: GET em /characters com listagem completa', ()=>{
  return request(address)
    .get('/v1/public/characters')
    .then(response=>{
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    }).catch(fail)

})

//ById

test('TESTE: GET em /characters/id com personagem encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/1010354')
      .then(response=>{
          expect(response.status).toBe(200)
          expect(response.body).toBeInstanceOf(Object)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id com personagem não encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/9999999')
      .then(response=>{
          expect(response.status).toBe(404)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id com id de personagem inválido', ()=>{
    return request(address)
      .get('/v1/public/characters/9a9a9c9')
      .then(response=>{
          expect(response.status).toBe(400)
      }).catch(fail)
  })

//comics

test('TESTE: GET em /characters/id/comics com personagem encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/1010354/comics')
      .then(response=>{
          expect(response.status).toBe(200)
          expect(response.body).toBeInstanceOf(Object)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/comics com personagem não encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/9999999/comics')
      .then(response=>{
          expect(response.status).toBe(404)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/comics com id de personagem inválido', ()=>{
    return request(address)
      .get('/v1/public/characters/9a9a9c9/comics')
      .then(response=>{
          expect(response.status).toBe(400)
      }).catch(fail)
  })

  // teste em events

  test('TESTE: GET em /characters/id/events com personagem encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/1010354/events')
      .then(response=>{
          expect(response.status).toBe(200)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/events com personagem não encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/9999999/events')
      .then(response=>{
          expect(response.status).toBe(404)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/events com id de personagem inválido', ()=>{
    return request(address)
      .get('/v1/public/characters/9a9a9c9/events')
      .then(response=>{
          expect(response.status).toBe(400)
      }).catch(fail)
  })

  //series

  test('TESTE: GET em /characters/id/series com personagem encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/1010354/series')
      .then(response=>{
          expect(response.status).toBe(200)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/series com personagem não encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/9999999/series')
      .then(response=>{
          expect(response.status).toBe(404)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/series com id de personagem inválido', ()=>{
    return request(address)
      .get('/v1/public/characters/9a9a9c9/series')
      .then(response=>{
          expect(response.status).toBe(400)
      }).catch(fail)
  })

  //stories

  test('TESTE: GET em /characters/id/stories com personagem encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/1010354/stories')
      .then(response=>{
          expect(response.status).toBe(200)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/stories com personagem não encontrado', ()=>{
    return request(address)
      .get('/v1/public/characters/9999999/stories')
      .then(response=>{
          expect(response.status).toBe(404)
      }).catch(fail)
  })

  test('TESTE: GET em /characters/id/stories com id de personagem inválido', ()=>{
    return request(address)
      .get('/v1/public/characters/9a9a9c9/stories')
      .then(response=>{
          expect(response.status).toBe(400)
      }).catch(fail)
  })