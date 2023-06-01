import { matchers } from 'jest-json-schema'
import fetch from 'node-fetch'
import { BACKEND_URL } from '../config.js'
expect.extend(matchers)
let categoriaId

describe('Tests de API de Categoria', () => {
  test('Listado Categorías vacías', async () => {})
  test('Creación de Categorías con error', async () => {
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     nombre: 'Categoria Test',
    //     genero: 'X',
    //     minEdad: 18,
    //     maxEdad: 5
    //   }),
    //   headers: { 'Content-Type': 'application/json' }
    // }
    // const res = await fetch(`${BACKEND_URL}/categoria`, options)
    // expect(res.status).toBe(400)
    // const error = await res.json()
    // expect(error).toMatchObject({
    //   error: 'La edad minima no puede ser mayor a la edad maxima'
    // })
  })

  test('Creación de Categoría correctamente', async () => {
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     nombre: 'Categoria Test',
    //     genero: 'M',
    //     minEdad: 18,
    //     maxEdad: 99
    //   }),
    //   headers: { 'Content-Type': 'application/json' }
    // }
    // const res = await fetch(`${BACKEND_URL}/categoria`, options)
    // expect(res.status).toBe(201)
    // const categoria = await res.json()
    // expect(categoria).toMatchObject({
    //   message: 'Categoria creada correctamente',
    //   id: expect.any(String),
    //   nombre: 'Categoria Test',
    //   minEdad: 18,
    //   maxEdad: 99,
    //   genero: 'M'
    // })
    // categoriaId = categoria.id
  })

  test('Listar Categorías con datos', async () => {
    // const schema = {
    //   properties: {
    //     id: { type: 'string' },
    //     nombre: { type: 'string' },
    //     genero: { type: 'string' },
    //     edadMin: { type: 'number' },
    //     edadMax: { type: 'number' }
    //   },
    //   required: ['id', 'nombre', 'genero', 'edadMin', 'edadMax']
    // }
    // let categorias = await fetch(`${BACKEND_URL}/categoria`).then(res => res.json())
    // expect(categorias).toMatchSchema(schema)
  })
  test('Obtener Categoría por ID invalido', async () => {})
  test('Obtener Categoría por ID valido', async () => {
    // const res = await fetch(`${BACKEND_URL}/categoria/${categoriaId}`).then(res =>
    //   res.json()
    // )
    // expect(res).toMatchObject({
    //   nombre: 'Categoria Test',
    //   genero: 'M',
    //   minEdad: 18,
    //   maxEdad: 99
    // })
  })
  test('Modificar Categorías con error', async () => {})
  test('Modificar Categorías', async () => {
    // const options = {
    //   method: 'PUT',
    //   headers: { 'content-type': 'application/json' },
    //   body: '{"nombre":"CATEGORIA MODIFICADA POR EL TEST","min_edad":18,"max_edad":99,"genero":"M"}'
    // }
    // const res = await fetch(`${BACKEND_URL}/categoria/${categoriaId}`, options)
    //   .then(response => response.json())
    //   .catch(err => console.error(err))
    // expect(res).toMatchObject({
    //   nombre: 'CATEGORIA MODIFICADA POR EL TEST',
    //   genero: 'M',
    //   minEdad: 18,
    //   maxEdad: 99
    // })
  })
  test('Eliminar Categoria con error', async () => {})
  test('Eliminar Categoría valida', async () => {
    //   const options = {
    //     method: 'DELETE'
    //   }
    //   const res = await fetch(
    //     `${BACKEND_URL}/categoria/${categoriaId}`,
    //     options
    //   ).then(response => response.json())
    //   expect(res).toMatchObject({
    //     message: 'Categoria eliminada correctamente'
    //   })
  })
})
