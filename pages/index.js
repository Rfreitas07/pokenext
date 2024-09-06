import styles from "../styles/Home.module.css";

import Card from "../components/card";

import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "http://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokenext"
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
