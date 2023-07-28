const app = require('../src/app.js');
const session = require('supertest');
const agent = session(app);

describe('Test de Rutas', ()=> {
    describe('GET /rickandmorty/character/:id',()=> {
    it('Responde con status: 200', async()=> {
    await agent.get('/rickandmorty/character/1').expect(200);
    });
  });
});