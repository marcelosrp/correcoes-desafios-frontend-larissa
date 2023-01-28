import Image from 'next/image'
import { Pokemon } from '@/types'

export default function PokemonCard({ id, name, sprites, types }: Pokemon) {
  return (
    <div className="Card">
      <span className="Card--id">#{id}</span>
      <Image
        className="Card--image"
        src={sprites.front_default}
        alt={name}
        width={96}
        height={96}
      />
      <h1 className="Card--name">{name}</h1>
      <span className="Card--details">
        {types.map(poke => poke.type.name).join(', ')}
      </span>
    </div>
  )
}
