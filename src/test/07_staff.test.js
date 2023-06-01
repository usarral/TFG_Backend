import { matchers } from 'jest-json-schema'
import { BACKEND_URL } from '../config.js'
import fetch from 'node-fetch'
expect.extend(matchers)
let createdId

describe('Test de API de Staff', () => {
  test('Listado Staff vacio', async () => {})
  test('Crear Staff con error', async () => {})
  test('Crear Staff correctamente', async () => {})
  test('Obtener Staff', async () => {})
  test('Obtener Staff por ID inválido', async () => {})
  test('Obtener Staff por ID válido', async () => {})
  test('Modificar Staff con error', async () => {})
  test('Modificar Staff correctamente', async () => {})
  test('Eliminar Staff con error', async () => {})
  test('Eliminar Staff correctamente', async () => {})
})
