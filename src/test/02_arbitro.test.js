import { matchers } from 'jest-json-schema'
expect.extend(matchers)
import { BASEURL } from '../config.js'
import fetch from 'node-fetch'
let createdId

describe('Tests de API de Arbitro', () => {
  test('Test Crear Arbitro', async () => {
    const arbitro = {
      nombre: 'Arbitro Test',
      apellido: 'Apellido Test',
      apellido2: 'Apellido2 Test',
      DNI: '12345678Z',
      telefono: '+34123456789',
      email: 'arbitro@test.com',
      fechaNacimiento: new Date(2000, 1, 1).toISOString(),
      direccion: 'Calle Test',
      municipio: 'Municipio Test',
      provincia: 'Provincia Test',
      CP: 12345,
      foto: 'https://www.test.com/foto.jpg'
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(arbitro),
      headers: { 'Content-Type': 'application/json' }
    }
    const res = await fetch(`${BASEURL}/arbitro`, options)
    const body = await res.json()
    createdId = body.arbitro.id
    expect(res.status).toBe(201)
    expect(body).toMatchSchema({
      properties: {
        message: { type: 'string' },
        arbitro: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            nombre: { type: 'string' },
            apellido: { type: 'string' },
            apellido2: { type: 'string' },
            fechaNacimiento: { type: 'string' },
            DNI: { type: 'string' },
            telefono: { type: 'string' },
            email: { type: 'string' },
            direccion: { type: 'string' },
            municipio: { type: 'string' },
            provincia: { type: 'string' },
            CP: { type: 'number' },
            foto: { type: 'string' },
            partidos: { type: 'array' },
            fechaAlta: { type: 'string' }
          }
        }
      }
    })
  })
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
    expect(arbitros).toMatchSchema(schema)
  })
  test('Test Obtener Arbitro por ID', async () => {
    const schema = {
      properties: {
        id: { type: 'string' },
        nombre: { type: 'string' },
        apellido: { type: 'string' },
        apellido2: { type: 'string' },
        fechaNacimiento: { type: 'string' },
        DNI: { type: 'string' },
        telefono: { type: 'string' },
        email: { type: 'string' },
        direccion: { type: 'string' },
        municipio: { type: 'string' },
        provincia: { type: 'string' },
        CP: { type: 'number' },
        foto: { type: 'string' },
        partidos: { type: 'array' },
        fechaAlta: { type: 'string' }
      }
    }
    let arbitro = await fetch(`${BASEURL}/arbitro/${createdId}`).then(res =>
      res.json()
    )
    expect(arbitro).toMatchSchema(schema)
  })
  test('Test Modificar Arbitro por ID', async () => {
    const arbitro = {
      nombre: 'Arbitro Test Modificado',
      apellido: 'Apellido Test Modificado',
      apellido2: 'Apellido2 Test Modificado',
      fechaNacimiento: new Date(2000, 1, 1).toISOString(),
      DNI: '12345678Z',
      telefono: '+34123456789',
      email: 'nuevo@arbi.es',
      direccion: 'Calle Test Modificado',
      municipio: 'Municipio Test Modificado',
      provincia: 'Provincia Test Modificado',
      CP: 12345,
      foto: 'https://www.test.com/foto.jpg',
      partidos: []
    }
    const options = {
      method: 'PUT',
      body: JSON.stringify(arbitro),
      headers: { 'Content-Type': 'application/json' }
    }
    const res = await fetch(`${BASEURL}/arbitro/${createdId}`, options)
    const body = await res.json()
    expect(res.status).toBe(200)
    expect(body).toMatchSchema({
      properties: {
        message: { type: 'string' },
        arbitro: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            nombre: { type: 'string' },
            apellido: { type: 'string' },
            apellido2: { type: 'string' },
            fechaNacimiento: { type: 'string' },
            DNI: { type: 'string' },
            telefono: { type: 'string' },
            email: { type: 'string' },
            direccion: { type: 'string' },
            municipio: { type: 'string' },
            provincia: { type: 'string' },
            CP: { type: 'number' },
            foto: { type: 'string' },
            partidos: { type: 'array' },
            fechaAlta: { type: 'string' }
          }
        }
      }
    })
  })
  test('Test Eliminar Arbitro por ID', async () => {
    const res = await fetch(`${BASEURL}/arbitro/${createdId}`, {
      method: 'DELETE'
    })
    const body = await res.json()
    expect(res.status).toBe(200)
    expect(body).toMatchSchema({
      properties: {
        message: { type: 'string' }
      }
    })
  })
})
