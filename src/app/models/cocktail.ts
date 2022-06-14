export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strInstructionsIT: string;
    strDrinkThumb: string;
    isFavorite?: boolean;
}

export interface Response {
    drinks: Cocktail[] | null;
}