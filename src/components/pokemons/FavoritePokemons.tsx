import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { For, Show, createSignal } from 'solid-js';
import { FavoritePokemonCard } from './FavoritePokemonCard';

const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = localStorage.getItem('favoritePokemons');
  return favoritePokemons ? JSON.parse(favoritePokemons) : [];
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <Show when={pokemons().length === 0}>
        <h1 class="mt-6">No Favorite Pokemons have been added yet!</h1>
      </Show>
      <Show when={pokemons().length > 0}>
        <For each={pokemons()} fallback={<div>Loading...</div>}>
          {(pokemon) => <FavoritePokemonCard class="mt-6" pokemon={pokemon} />}
        </For>
      </Show>
    </div>
  );
};
