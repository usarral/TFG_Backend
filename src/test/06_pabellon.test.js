import { matchers } from 'jest-json-schema'
import { BASEURL } from '../config.js'
import fetch from 'node-fetch'
expect.extend(matchers)
let createdId

describe('Test de API de Pabellon', () => {
  test('Listado Pabellones vacio', async () => {})
  test('Crear Pabellon con error', async () => {})
  test('Crear Pabellon correctamente', async () => {})
  test('Obtener Pabellones', async () => {})
  test('Obtener Pabellon por ID inválido', async () => {})
  test('Obtener Pabellon por ID válido', async () => {})
  test('Modificar Pabellon con error', async () => {})
  test('Modificar Pabellon correctamente', async () => {})
  test('Eliminar Pabellon con error', async () => {})
  test('Eliminar Pabellon correctamente', async () => {})
})
