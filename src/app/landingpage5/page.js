// "use client";

import Image from "next/image";
import styles from "./../page.module.css";
import Link from "next/link";

import { gql } from "@apollo/client";
import client from "../../../apollo-client";

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//   };
// }

async function getAllpokemons() {
  const { data } = await client.query({
    query: gql`
      query {
        pokemons(first: 100) {
          id
          number
          name
          types
          image
        }
      }
    `,
  });

  // const res = await fetch(`https://api.example.com/artist/${whichtwentyindex}`);
  // return res.json();
  return data;
}

export default async function Home() {
  const allpokemons = getAllpokemons();
  // const [itemsShowen, setItemsShowen] = useState(1);

  // const albums = await promise;
  // const albums = await promise;

  const pokemons = await allpokemons;

  let itemsShowen;
  itemsShowen = pokemons.pokemons.slice(80, 100);

  // console.log(itemsShowen);

  // useEffect(() => {
  //   // (itemsShowen) => pokemons.slice(0, 20);
  //   // setItemsShowen((ItemsShowen0) => pokemons.slice(0, 20));
  //   pokemons.pokemons.slice(0, 20);
  // }, [pokemons]);

  // console.log(pokemons);

  // console.log(albums);
  // console.log(pokemons);

  return (
    <div className={styles.HomeComponent}>
      {/* <div>main page data</div>
      <div>display 20 pokemon and 3 tabs ( 20 each )</div>
      <div>Display each Pokemon's image, number, name, and types.</div>
      <div>
        Statically render the first three paginated pages at build time.
      </div>
      <div>will use normal fetch for the first 60 items </div>
      <div>
        then do a sequential loading for the rest. using graphQL and certain
        data
      </div>
      <div>
        Render the remaining pages in real-time (the other pokes pages as long
        as there are )
      </div>
      <div>Buttoms 1 2 3 4 5 </div>
      
      <div>
        We can Use imported component and we send sent in the page number based
        on current page clicked , and this will update the UI
      </div> */}

      {/* #d56723 Fighting - flying half #3dc7ef half brown - Dragon half blue half orange*/}

      <div className={styles.itemComponent}>
        {itemsShowen.map((pokemon) => (
          <div key={pokemon.id}>
            <a href={"/items/" + pokemon.name}>
              <Image src={`${pokemon.image}`} width={170} height={170}></Image>
              <div>#0{pokemon.number}</div>
              <div className={styles.itemName}>{pokemon.name}</div>
              <div className={styles.itemType}>
                {/* {pokemon.types[0] === "Grass" ||
                (pokemon.types[0] === "Bug" && (
                  <div
                    className={styles.itemType}
                    style={{ backgroundColor: "green" }}
                  >
                    {pokemon.types[0]}
                  </div>
                ))} */}

                <div
                  className={styles.itemType}
                  style={{
                    backgroundColor:
                      pokemon.types[0] === "Grass" || pokemon.types[0] === "Bug"
                        ? "green"
                        : pokemon.types[0] === "Fire"
                        ? "red"
                        : pokemon.types[0] === "Fighting"
                        ? "#d56723"
                        : pokemon.types[0] === "Dragon" ||
                          pokemon.types[0] === "Flying"
                        ? "#3dc7ef"
                        : pokemon.types[0] === "Water" ||
                          pokemon.types[0] === "Ice"
                        ? "blue"
                        : pokemon.types[0] === "Normal" ||
                          pokemon.types[0] === "Steel"
                        ? "silver"
                        : pokemon.types[0] === "Poison" ||
                          pokemon.types[0] === "Ghost" ||
                          pokemon.types[0] === "Psychic" ||
                          pokemon.types[0] === "Fairy"
                        ? "Orchid"
                        : pokemon.types[0] === "Ground" ||
                          pokemon.types[0] === "Rock" ||
                          pokemon.types[0] === "Electric"
                        ? "Gold"
                        : "none",
                  }}
                >
                  {pokemon.types[0]}
                </div>

                {pokemon.types[1] && (
                  <div
                    className={styles.itemType}
                    style={{
                      backgroundColor:
                        pokemon.types[1] === "Grass" ||
                        pokemon.types[1] === "Bug"
                          ? "green"
                          : pokemon.types[1] === "Fire"
                          ? "red"
                          : pokemon.types[1] === "Fighting"
                          ? "#d56723"
                          : pokemon.types[1] === "Dragon" ||
                            pokemon.types[1] === "Flying"
                          ? "#3dc7ef"
                          : pokemon.types[1] === "Water" ||
                            pokemon.types[1] === "Ice"
                          ? "blue"
                          : pokemon.types[1] === "Normal" ||
                            pokemon.types[1] === "Steel"
                          ? "silver"
                          : pokemon.types[1] === "Poison" ||
                            pokemon.types[1] === "Ghost" ||
                            pokemon.types[1] === "Psychic" ||
                            pokemon.types[1] === "Fairy"
                          ? "Orchid"
                          : pokemon.types[1] === "Ground" ||
                            pokemon.types[1] === "Rock" ||
                            pokemon.types[1] === "Electric"
                          ? "Gold"
                          : "none",
                    }}
                  >
                    {pokemon.types[1]}
                  </div>
                )}

                {/* <div>{pokemon.types[0]}</div> */}
                {/* {pokemon.types[1] && <div>{pokemon.types[1]}</div>} */}
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* <div className={styles.blockLoadMoreComponent}>
        <button className={styles.loadMoreButton}>Load more Pokémon</button>
      </div> */}

      <div className={styles.landingPageNavigation}>
        <a href="/">1</a>
        <a href="/landingpage2">2</a>
        <a href="/landingpage3">3</a>
        <a href="/landingpage4" >
          4
        </a>
        <a href="/landingpage5" className={styles.linkpageactive}>5</a>
      </div>

      {/* <div className={styles.blockLoadMoreComponent}>
        <button
          onClick={() => {
            setValue((value) => value + 1);
            setItemsShowen((ItemsShowen0) => allItems.slice(0, 10));
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setItemsShowen((ItemsShowen0) => allItems.slice(10, 20));
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setItemsShowen((ItemsShowen0) => allItems.slice(20, 30));
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setItemsShowen((ItemsShowen0) => allItems.slice(30, 40));
          }}
        >
          4
        </button>
      </div> */}

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

// Albums Component
// async function Albums({ promise }) {
//   // Wait for the albums promise to resolve
//   const albums = await promise;
