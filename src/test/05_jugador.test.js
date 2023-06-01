import { matchers } from 'jest-json-schema'
import { BACKEND_URL } from '../config.js'
import fetch from 'node-fetch'
expect.extend(matchers)
let createdId
describe('Test de API de Jugador', () => {
  test('Listado Jugadores vacio', async () => {})
  test('Crear Jugador con error', async () => {})
  test('Crear Jugador correctamente', async () => {})
  test('Obtener Jugadores', async () => {})
  test('Obtener Jugador por ID inválido', async () => {})
  test('Obtener Jugador por ID válido', async () => {})
  test('Modificar Jugador con error', async () => {})
  test('Modificar Jugador correctamente', async () => {})
  test('Eliminar Jugador con error', async () => {})
  test('Eliminar Jugador correctamente', async () => {})
})
