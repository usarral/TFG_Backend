import { matchers } from 'jest-json-schema'
import { BACKEND_URL } from '../config.js'
import fetch from 'node-fetch'
expect.extend(matchers)
let createdId

// describe('Tests de API de Arbitro', () => {
//   test('Test Crear Arbitro', async () => {
//     const arbitro = {
//       nombre: 'Arbitro Test',
//       apellido: 'Apellido Test',
//       apellido2: 'Apellido2 Test',
//       DNI: '12345678Z',
//       telefono: '+34123456789',
//       email: 'arbitro@test.com',
//       fechaNacimiento: new Date(2000, 1, 1).toISOString(),
//       direccion: 'Calle Test',
//       municipio: 'Municipio Test',
//       provincia: 'Provincia Test',
//       CP: 12345,
//       foto: 'https://www.test.com/foto.jpg'
//     }
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(arbitro),
//       headers: { 'Content-Type': 'application/json' }
//     }
//     const res = await fetch(`${BACKEND_URL}/arbitro`, options)
//     const body = await res.json()
//     createdId = body.arbitro.id
//     expect(res.status).toBe(201)
//     expect(body).toMatchSchema({
//       properties: {
//         message: { type: 'string' },
//         arbitro: {
//           type: 'object',
//           properties: {
//             id: { type: 'string' },
//             nombre: { type: 'string' },
//             apellido: { type: 'string' },
//             apellido2: { type: 'string' },
//             fechaNacimiento: { type: 'string' },
//             DNI: { type: 'string' },
//             telefono: { type: 'string' },
//             email: { type: 'string' },
//             direccion: { type: 'string' },
//             municipio: { type: 'string' },
//             provincia: { type: 'string' },
//             CP: { type: 'number' },
//             foto: { type: 'string' },
//             partidos: { type: 'array' },
//             fechaAlta: { type: 'string' }
//           }
//         }
//       }
//     })
//   })
//   test('Test Obtener Arbitros', async () => {
//     const schema = {
//       properties: {
//         id: { type: 'string' },
//         nombre: { type: 'string' },
//         apellido: { type: 'string' },
//         apellido2: { type: 'string' },
//         foto: { type: 'string' }
//       }
//     }
//     const arbitros = await fetch(`${BACKEND_URL}/arbitro`).then(res => res.json())
//     expect(arbitros).toMatchSchema(schema)
//   })
//   test('Test Obtener Arbitro por ID', async () => {
//     const schema = {
//       properties: {
//         id: { type: 'string' },
//         nombre: { type: 'string' },
//         apellido: { type: 'string' },
//         apellido2: { type: 'string' },
//         fechaNacimiento: { type: 'string' },
//         DNI: { type: 'string' },
//         telefono: { type: 'string' },
//         email: { type: 'string' },
//         direccion: { type: 'string' },
//         municipio: { type: 'string' },
//         provincia: { type: 'string' },
//         CP: { type: 'number' },
//         foto: { type: 'string' },
//         partidos: { type: 'array' },
//         fechaAlta: { type: 'string' }
//       }
//     }
//     const arbitro = await fetch(`${BACKEND_URL}/arbitro/${createdId}`).then(res =>
//       res.json()
//     )
//     expect(arbitro).toMatchSchema(schema)
//   })
//   test('Test Modificar Arbitro por ID', async () => {
//     const arbitro = {
//       nombre: 'Arbitro Test Modificado',
//       apellido: 'Apellido Test Modificado',
//       apellido2: 'Apellido2 Test Modificado',
//       fechaNacimiento: new Date(2000, 1, 1).toISOString(),
//       DNI: '12345678Z',
//       telefono: '+34123456789',
//       email: 'nuevo@arbi.es',
//       direccion: 'Calle Test Modificado',
//       municipio: 'Municipio Test Modificado',
//       provincia: 'Provincia Test Modificado',
//       CP: 12345,
//       foto: 'https://www.test.com/foto.jpg',
//       partidos: []
//     }
//     const options = {
//       method: 'PUT',
//       body: JSON.stringify(arbitro),
//       headers: { 'Content-Type': 'application/json' }
//     }
//     const res = await fetch(`${BACKEND_URL}/arbitro/${createdId}`, options)
//     const body = await res.json()
//     expect(res.status).toBe(200)
//     expect(body).toMatchSchema({
//       properties: {
//         message: { type: 'string' },
//         arbitro: {
//           type: 'object',
//           properties: {
//             id: { type: 'string' },
//             nombre: { type: 'string' },
//             apellido: { type: 'string' },
//             apellido2: { type: 'string' },
//             fechaNacimiento: { type: 'string' },
//             DNI: { type: 'string' },
//             telefono: { type: 'string' },
//             email: { type: 'string' },
//             direccion: { type: 'string' },
//             municipio: { type: 'string' },
//             provincia: { type: 'string' },
//             CP: { type: 'number' },
//             foto: { type: 'string' },
//             partidos: { type: 'array' },
//             fechaAlta: { type: 'string' }
//           }
//         }
//       }
//     })
//   })
//   test('Test Eliminar Arbitro por ID', async () => {
//     const res = await fetch(`${BACKEND_URL}/arbitro/${createdId}`, {
//       method: 'DELETE'
//     })
//     const body = await res.json()
//     expect(res.status).toBe(200)
//     expect(body).toMatchSchema({
//       properties: {
//         message: { type: 'string' }
//       }
//     })
//   })
// })
describe('Tests de API de Arbitro', () => {
  test('Listado Arbitros vacío', async () => {})
  test('Creación de Arbitro con error', async () => {})
  test('Creación de Arbitro correctamente', async () => {})
  test('Listar Arbitros con datos', async () => {})
  test('Obtener Arbitro por ID inválido', async () => {})
  test('Obtener Arbitro por ID válido', async () => {})
  test('Modificar Arbitro con error', async () => {})
  test('Modificar Arbitro correctamente', async () => {})
  test('Eliminar Arbitro con error', async () => {})
  test('Eliminar Arbitro correctamente', async () => {})
})
