import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { Show, createSignal, type Component } from 'solid-js';

type Props = {
  pokemon: FavoritePokemon;
  class?: string;
};

export const FavoritePokemonCard: Component<Props> = (props) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

  const deleteFavoritePokemon = () => {
    const favoritePokemons = JSON.parse(
      localStorage.getItem('favoritePokemons') ?? '[]'
    );
    const updatedPokemons = favoritePokemons.filter(
      (pokemon: FavoritePokemon) => pokemon.id !== props.pokemon.id
    );
    localStorage.setItem('favoritePokemons', JSON.stringify(updatedPokemons));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible}>
      <div class={`flex flex-col justify-center items-center ${props.class}`}>
        <a href={`/pokemons/${props.pokemon.name}`}>
          <img class="w-24 h-24" src={imageSrc} alt={props.pokemon.name} style={`view-transition-name: ${props.pokemon.name}-iamge`}/>
          <p class="capitalize">
            #{props.pokemon.id} {props.pokemon.name}
          </p>
        </a>
        <button
          onClick={deleteFavoritePokemon}
          class="bg-red-400 p-1 mt-1 rounded"
        >
          Remove
        </button>
      </div>
    </Show>
  );
};
