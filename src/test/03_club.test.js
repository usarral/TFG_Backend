import { matchers } from 'jest-json-schema'
import { BASEURL } from '../config.js'
import fetch from 'node-fetch'
expect.extend(matchers)
let createdId
describe('Tests de API de Club', () => {
  test('Listado Clubs vacio', async () => {})
  test('Crear Club con error', async () => {})
  test('Crear Club correctamente', async () => {})
  test('Obtener Clubs', async () => {})
  test('Obtener Club por ID inválido', async () => {})
  test('Obtener Club por ID válido', async () => {})
  test('Modificar Club con error', async () => {})
  test('Modificar Club correctamente', async () => {})
  test('Eliminar Club con error', async () => {})
  test('Eliminar Club correctamente', async () => {})
})
