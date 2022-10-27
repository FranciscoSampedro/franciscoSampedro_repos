export interface PokemonPagination {
    count:    number;
    next:     string;
    previous: string | null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

export interface SimplePokemon {
    id     : string;
    name   : string;
    picture: string;
    color? : string;
}
