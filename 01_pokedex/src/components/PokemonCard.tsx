import Image from 'next/image'
import { Pokemon } from '@/types'
import styled from 'styled-components'

const Card = styled.div`
  width: 12rem auto;
  background: #5bb0ca;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border-top: 0.5px solid #e4c439;
  border-bottom: 0.5px solid #e4c439;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out all;

  :hover {
    transform: scale(1.05);
  }
`

const PokemonNumber = styled.span`
  background: #e4c439;
  width: 3rem;
  color: #fff;
  padding: 0.1rem;
  font-weight: 700;
  position: absolute;
  border-radius: 0 0 10px 0;
  top: 0;
  left: 0;
`

const PokemonName = styled.h2`
  text-transform: capitalize;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 700;
`

const PokemonImage = styled(Image)`
  width: 150px;
  display: block;
  margin: auto;
`

const PokemonType = styled.span`
  color: #e4c439;
  font-size: 1.3rem;
`

export default function PokemonCard({ id, name, sprites, types }: Pokemon) {
  return (
    <Card>
      <PokemonNumber>#{id}</PokemonNumber>
      <PokemonImage
        className="Card--image"
        src={sprites.front_default}
        alt={name}
        width={96}
        height={96}
      />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{types.map(poke => poke.type.name).join(', ')}</PokemonType>
    </Card>
  )
}
