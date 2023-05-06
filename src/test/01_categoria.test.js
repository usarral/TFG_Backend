import { matchers } from 'jest-json-schema'
import fetch from 'node-fetch'
import { BASEURL } from '../config.js'
expect.extend(matchers)
let categoriaId

describe('Tests de API de Categoria', () => {
  test('Test Crear Categoria SUCCESS', async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        nombre: 'Categoria Test',
        genero: 'M',
        minEdad: 18,
        maxEdad: 99
      }),
      headers: { 'Content-Type': 'application/json' }
    }
    const res = await fetch(`${BASEURL}/categoria`, options)
    expect(res.status).toBe(201)
    const categoria = await res.json()
    expect(categoria).toMatchObject({
      message: 'Categoria creada correctamente',
      id: expect.any(String),
      nombre: 'Categoria Test',
      minEdad: 18,
      maxEdad: 99,
      genero: 'M'
    })

    categoriaId = categoria.id
  })
  test('Test Crear Categoria ERROR', async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        nombre: 'Categoria Test',
        genero: 'X',
        minEdad: 18,
        maxEdad: 5
      }),
      headers: { 'Content-Type': 'application/json' }
    }
    const res = await fetch(`${BASEURL}/categoria`, options)
    expect(res.status).toBe(400)
    const error = await res.json()
    expect(error).toMatchObject({
      error: 'La edad minima no puede ser mayor a la edad maxima'
    })
  })

  test('Test Obtener Categorias', async () => {
    const schema = {
      properties: {
        id: { type: 'string' },
        nombre: { type: 'string' },
        genero: { type: 'string' },
        edadMin: { type: 'number' },
        edadMax: { type: 'number' }
      },
      required: ['id', 'nombre', 'genero', 'edadMin', 'edadMax']
    }
    let categorias = await fetch(`${BASEURL}/categoria`).then(res => res.json())
    expect(categorias).toMatchSchema(schema)
  })
  test('Test Obtener Categoria por ID', async () => {
    const res = await fetch(`${BASEURL}/categoria/${categoriaId}`).then(res =>
      res.json()
    )
    expect(res).toMatchObject({
      nombre: 'Categoria Test',
      genero: 'M',
      minEdad: 18,
      maxEdad: 99
    })
  })
  test('Test Obtener Categoria por ID No Valido', async () => {})
  test('Test Modificar Categoria por ID', async () => {
    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: '{"nombre":"CATEGORIA MODIFICADA POR EL TEST","min_edad":18,"max_edad":99,"genero":"M"}'
    }

    const res = await fetch(`${BASEURL}/categoria/${categoriaId}`, options)
      .then(response => response.json())
      .catch(err => console.error(err))
    expect(res).toMatchObject({
      nombre: 'CATEGORIA MODIFICADA POR EL TEST',
      genero: 'M',
      minEdad: 18,
      maxEdad: 99
    })
  })
  test('Test Eliminar Categoria por ID', async () => {
    const options = {
      method: 'DELETE'
    }
    const res = await fetch(
      `${BASEURL}/categoria/${categoriaId}`,
      options
    ).then(response => response.json())

    expect(res).toMatchObject({
      message: 'Categoria eliminada correctamente'
    })
  })
})
