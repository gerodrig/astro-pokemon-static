import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = ():FavoritePokemon[] => {
    const favoritePokemons = localStorage.getItem('favoritePokemons');
    return favoritePokemons ? JSON.parse(favoritePokemons) : [];
}

export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
                <For each={pokemons()} fallback={<div>Loading...</div>}>
                    {(pokemon) => <FavoritePokemonCard class="mt-6" pokemon={pokemon} />}
                </For>
        </div>
    );
};