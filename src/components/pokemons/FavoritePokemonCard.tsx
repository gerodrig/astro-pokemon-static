import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { Show, createSignal, type Component } from 'solid-js';

type Props = {
  pokemon: FavoritePokemon;
  class?: string;
};

export const FavoritePokemonCard: Component<Props> = ({pokemon, class: customClass}) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavoritePokemon = () => {
    const favoritePokemons = JSON.parse(
      localStorage.getItem('favoritePokemons') ?? '[]'
    ) as FavoritePokemon[];

    const updatedPokemons = favoritePokemons.filter(
      (p ) => p.id !== pokemon.id
    );
    localStorage.setItem('favoritePokemons', JSON.stringify(updatedPokemons));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class={`flex flex-col justify-center items-center ${customClass}`}>
        <a href={`/pokemons/${pokemon.name}`}>
          <img class="w-24 h-24" src={imageSrc} alt={pokemon.name} style={`view-transition-name: ${pokemon.name}-image`}/>
          <p class="capitalize">
            #{pokemon.id} {pokemon.name}
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
