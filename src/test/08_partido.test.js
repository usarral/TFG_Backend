import { matchers } from 'jest-json-schema'
import { BASEURL } from '../config.js'
import fetch from 'node-fetch'
expect.extend(matchers)
let createdId

describe('Test de API de Partido', () => {
  test('Listado Partidos vacio', async () => {})
  test('Crear Partido con error', async () => {})
  test('Crear Partido correctamente', async () => {})
  test('Obtener Partidos', async () => {})
  test('Obtener Partido por ID inválido', async () => {})
  test('Obtener Partido por ID válido', async () => {})
  test('Modificar Partido con error', async () => {})
  test('Modificar Partido correctamente', async () => {})
  test('Eliminar Partido con error', async () => {})
  test('Eliminar Partido correctamente', async () => {})
})
