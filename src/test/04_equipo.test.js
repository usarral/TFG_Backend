import { matchers } from 'jest-json-schema'
import { BACKEND_URL } from '../config.js'
import fetch from 'node-fetch'
expect.extend(matchers)
let createdId

describe('Test de API de Equipo', () => {
  test('Listado Equipos vacio', async () => {})
  test('Crear Equipo con error', async () => {})
  test('Crear Equipo correctamente', async () => {})
  test('Obtener Equipos', async () => {})
  test('Obtener Equipo por ID inválido', async () => {})
  test('Obtener Equipo por ID válido', async () => {})
  test('Modificar Equipo con error', async () => {})
  test('Modificar Equipo correctamente', async () => {})
  test('Eliminar Equipo con error', async () => {})
  test('Eliminar Equipo correctamente', async () => {})
})
