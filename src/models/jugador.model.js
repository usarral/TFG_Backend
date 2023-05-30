import { Schema, model } from 'mongoose'
const jugadorSchema = new Schema(
  {
    nombreJugador: {
      type: String,
      required: true
    },
    apellidoJugador: {
      type: String,
      required: true
    },
    apellido2Jugador: {
      type: String,
      required: true
    },
    dniJugador: {
      type: String,
      required: true
    },
    telefonoJugador: {
      type: String,
      required: true
    },
    emailJugador: {
      type: String,
      required: true
    },
    direccionJugador: {
      type: String,
      required: true
    },
    ciudadJugador: {
      type: String,
      required: true
    },
    provinciaJugador: {
      type: String,
      required: true
    },
    CPJugador: {
      type: Number,
      required: true
    },

    fechaNacimientoJugador: {
      type: Date,
      required: true
    },
    fotoJugador: {
      type: String,
      required: false
    },
    categoriaJugador: {
      type: Schema.Types.ObjectId,
      ref: 'Categoria'
    },
    clubJugador: {
      type: Schema.Types.ObjectId,
      ref: 'Club'
    },
    equipoJugador: {
      type: Schema.Types.ObjectId,
      ref: 'Equipo'
    }
  },
  {
    collection: 'jugadores'
  }
)
export default model('Jugador', jugadorSchema)
