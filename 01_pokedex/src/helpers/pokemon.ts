import axios from 'axios'
import { GetPokemonData } from '@/types'

const getPokemonURL = (id: number): string =>
  `https://pokeapi.co/api/v2/pokemon/${id}`

export const generatePokemonPromises = () => {
  return Array<number>(150)
    .fill(150)
    .map((_, index) =>
      axios
        .get<GetPokemonData>(getPokemonURL(index + 1))
        .then(({ data }) => data)
        .catch(error => {
          if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message)
            return error.message
          } else {
            console.log('unexpected error: ', error)
            return 'An unexpected error occurred'
          }
        }),
    )
}
