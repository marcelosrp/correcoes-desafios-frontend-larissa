import axios from 'axios'
import { GetPokemonData } from '@/types'

const getPokemonURL = (id: number): string =>
  `https://pokeapi.co/api/v2/pokemon/${id}`

export const generatePokemonPromises = () => {
  return Array.from({ length: 150 }).map(async (_, index) => {
    try {
      const { data } = await axios.get<GetPokemonData>(getPokemonURL(index + 1))
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
        return error.message
      } else {
        console.log('unexpected error: ', error)
        return 'An unexpected error occurred'
      }
    }
  })
}
