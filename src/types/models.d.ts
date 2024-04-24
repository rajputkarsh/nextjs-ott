
export interface IAccount {
  uid: string;
  name: string;
  pin: string;
}

export interface IFavourite {
  uid: string;
  accountId: string;
  backdrop_path: string;
  poster_path: string;
  movieId: string;
  type: string;
  title: string;
  overview: string;
}