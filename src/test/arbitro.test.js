import { matchers } from 'jest-json-schema'
expect.extend(matchers)
import { BASEURL } from '../config.js'
import fetch from 'node-fetch'
let createdId

describe('Tests de API de Arbitro', () => {
  test('Test Crear Arbitro', async () => {})
  test('Test Obtener Arbitros', async () => {
    const schema = {
      properties: {
        id: { type: 'string' },
        nombre: { type: 'string' },
        apellido: { type: 'string' },
        apellido2: { type: 'string' },
        foto: { type: 'string' }
      }
    }
    let arbitros = await fetch(`${BASEURL}/arbitro`).then(res => res.json())
    console.log(arbitros)
    expect(arbitros).toMatchSchema(schema)
  })
  test('Test Obtener Arbitro por ID', async () => {})
  test('Test Modificar Arbitro por ID', async () => {})
  test('Test Eliminar Arbitro por ID', async () => {})
})
