import axios from 'axios'
import { generatePokemonPromises } from './pokemon'

describe('generatePokemonPromises', () => {
  it('should call axios with the correct URL', async () => {
    const spy = jest.spyOn(axios, 'get')
    await generatePokemonPromises()
    expect(spy).toBeCalledWith(expect.stringMatching(/pokemon\/\d+/))
  })

  it('should return an array of 150 promises', async () => {
    const promises = await generatePokemonPromises()
    expect(promises).toHaveLength(150)
    expect(promises).toBeInstanceOf(Array)
    expect(promises[0]).toBeInstanceOf(Promise)
  })
})
