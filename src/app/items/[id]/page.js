// "use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import { gql } from "@apollo/client";
import client from "../../../../apollo-client";
import Evolution from "../../../../comps/Evolution";

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

async function getAllpokemons(name) {
  const { data } = await client.query({
    query: gql`
      query {
        pokemon(name:"${name}"){
          id
          number
          name
          weight{
              minimum
              maximum
            }
           height{
            minimum
             maximum
               }
          classification
          types
          resistant
          weaknesses
          image
             }
           }
    `,
  });

  // const res = await fetch(`https://api.example.com/artist/${whichtwentyindex}`);
  // return res.json();
  return data;
}

async function getEvolution(name) {
  const { data } = await client.query({
    query: gql`
      query {
        pokemon(name:"${name}"){
          id
          name
          evolutions{
            id
            number
            name
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
           
            maxHP
            image
          }
             }
           }
    `,
  });

  // const res = await fetch(`https://api.example.com/artist/${whichtwentyindex}`);
  // return res.json();
  return data;
}

// {
//   pokemon( name: "Bulbasaur"){
//     id
//     name
//     evolutions{
//       id
//       number
//       name
//       classification
//       types
//       resistant
//       weaknesses
//       fleeRate
//       maxCP

//       maxHP
//       image
//     }
//   }
// }

// async function getAllpokemons(Id) {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         pokemon(id: "${Id}") {
//           id
//           number
//           name
//           types
//           image
//         }
//       }
//     `,
//   });

//   // const res = await fetch(`https://api.example.com/artist/${whichtwentyindex}`);
//   // return res.json();
//   return data;
// }

export default async function Home({ params }) {
  const allpokemons = getAllpokemons(params.id);
  const pokeEvolution = getEvolution(params.id);

  // console.log(params.id);
  // // const [itemsShowen, setItemsShowen] = useState(1);

  // // const albums = await promise;
  // // const albums = await promise;

  // const pokemons = await allpokemons;

  // const pokemonEvolution = await pokeEvolution;

  const [pokemons, pokemonEvolution] = await Promise.all([
    allpokemons,
    pokeEvolution,
  ]);

  // console.log(pokemons);
  // console.log(pokemonEvolution);

  // console.log(pokemons);

  // console.log(params.id);

  // const { data } = await client.query({ query });

  // console.log(data);

  let itemsShowen;
  itemsShowen = pokemons.pokemon;

  // console.log(itemsShowen);

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
      <div className={styles.searchItemNameandNumber}>
        <div className={styles.itemName}>{itemsShowen.name}</div>
        <div>#0{itemsShowen.number}</div>
      </div>
      <div className={styles.itemComponent}>
        <Image src={`${itemsShowen.image}`} width={350} height={350}></Image>

        <div className={styles.searchItemheightandweight}>
          <div>
            <p>Height</p>
            <p className={styles.textcolorblack}>
              {itemsShowen.height.maximum}
            </p>
          </div>
          <div>
            <p>Weight</p>
            <p className={styles.textcolorblack}>
              {itemsShowen.weight.maximum}
            </p>
          </div>
          <div>
            <p>Category</p>
            <p className={styles.textcolorblack}>
              {itemsShowen.classification}
            </p>
          </div>
        </div>

        <div></div>

        <div className={styles.searchItemTypeandWeakness}>
          <div>Type</div>
        </div>

        <div></div>

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
                itemsShowen.types[0] === "Grass" ||
                itemsShowen.types[0] === "Bug"
                  ? "green"
                  : itemsShowen.types[0] === "Fire"
                  ? "red"
                  : itemsShowen.types[0] === "Fighting"
                  ? "#d56723"
                  : itemsShowen.types[0] === "Dragon" ||
                    itemsShowen.types[0] === "Flying"
                  ? "#3dc7ef"
                  : itemsShowen.types[0] === "Water" ||
                    itemsShowen.types[0] === "Ice"
                  ? "blue"
                  : itemsShowen.types[0] === "Normal" ||
                    itemsShowen.types[0] === "Steel"
                  ? "silver"
                  : itemsShowen.types[0] === "Poison" ||
                    itemsShowen.types[0] === "Ghost" ||
                    itemsShowen.types[0] === "Psychic" ||
                    itemsShowen.types[0] === "Fairy"
                  ? "Orchid"
                  : itemsShowen.types[0] === "Ground" ||
                    itemsShowen.types[0] === "Rock" ||
                    itemsShowen.types[0] === "Electric"
                  ? "Gold"
                  : "none",
            }}
          >
            {itemsShowen.types[0]}
          </div>

          {itemsShowen.types[1] && (
            <div
              className={styles.itemType}
              style={{
                backgroundColor:
                  itemsShowen.types[1] === "Grass" ||
                  itemsShowen.types[1] === "Bug"
                    ? "green"
                    : itemsShowen.types[1] === "Fire"
                    ? "red"
                    : itemsShowen.types[1] === "Fighting"
                    ? "#d56723"
                    : itemsShowen.types[1] === "Dragon" ||
                      itemsShowen.types[1] === "Flying"
                    ? "#3dc7ef"
                    : itemsShowen.types[1] === "Water" ||
                      itemsShowen.types[1] === "Ice"
                    ? "blue"
                    : itemsShowen.types[1] === "Normal" ||
                      itemsShowen.types[1] === "Steel"
                    ? "silver"
                    : itemsShowen.types[1] === "Poison" ||
                      itemsShowen.types[1] === "Ghost" ||
                      itemsShowen.types[1] === "Psychic" ||
                      itemsShowen.types[1] === "Fairy"
                    ? "Orchid"
                    : itemsShowen.types[1] === "Ground" ||
                      itemsShowen.types[1] === "Rock" ||
                      itemsShowen.types[1] === "Electric"
                    ? "Gold"
                    : "none",
              }}
            >
              {itemsShowen.types[1]}
            </div>
          )}
        </div>

        <div></div>

        <div className={styles.searchItemTypeandWeakness}>Weaknesses</div>

        <div></div>

        {/* <div>{itemsShowen.weaknesses[1]}</div> */}
        <div className={styles.itemType}>
          <div
            className={styles.itemType}
            style={{
              backgroundColor:
                itemsShowen.weaknesses[0] === "Grass" ||
                itemsShowen.weaknesses[0] === "Bug"
                  ? "green"
                  : itemsShowen.weaknesses[0] === "Fire"
                  ? "red"
                  : itemsShowen.weaknesses[0] === "Fighting"
                  ? "#d56723"
                  : itemsShowen.weaknesses[0] === "Dragon" ||
                    itemsShowen.weaknesses[0] === "Flying"
                  ? "#3dc7ef"
                  : itemsShowen.weaknesses[0] === "Water" ||
                    itemsShowen.weaknesses[0] === "Ice"
                  ? "blue"
                  : itemsShowen.weaknesses[0] === "Normal" ||
                    itemsShowen.weaknesses[0] === "Steel"
                  ? "silver"
                  : itemsShowen.weaknesses[0] === "Poison" ||
                    itemsShowen.weaknesses[0] === "Ghost" ||
                    itemsShowen.weaknesses[0] === "Psychic" ||
                    itemsShowen.weaknesses[0] === "Fairy"
                  ? "Orchid"
                  : itemsShowen.weaknesses[0] === "Ground" ||
                    itemsShowen.weaknesses[0] === "Rock" ||
                    itemsShowen.weaknesses[0] === "Electric"
                  ? "Gold"
                  : "none",
            }}
          >
            {itemsShowen.weaknesses[0]}
          </div>

          {itemsShowen.weaknesses[1] && (
            <div
              className={styles.itemType}
              style={{
                backgroundColor:
                  itemsShowen.weaknesses[1] === "Grass" ||
                  itemsShowen.weaknesses[1] === "Bug"
                    ? "green"
                    : itemsShowen.weaknesses[1] === "Fire"
                    ? "red"
                    : itemsShowen.weaknesses[1] === "Fighting"
                    ? "#d56723"
                    : itemsShowen.weaknesses[1] === "Dragon" ||
                      itemsShowen.weaknesses[1] === "Flying"
                    ? "#3dc7ef"
                    : itemsShowen.weaknesses[1] === "Water" ||
                      itemsShowen.weaknesses[1] === "Ice"
                    ? "blue"
                    : itemsShowen.weaknesses[1] === "Normal" ||
                      itemsShowen.weaknesses[1] === "Steel"
                    ? "silver"
                    : itemsShowen.weaknesses[1] === "Poison" ||
                      itemsShowen.weaknesses[1] === "Ghost" ||
                      itemsShowen.weaknesses[1] === "Psychic" ||
                      itemsShowen.weaknesses[1] === "Fairy"
                    ? "Orchid"
                    : itemsShowen.weaknesses[1] === "Ground" ||
                      itemsShowen.weaknesses[1] === "Rock" ||
                      itemsShowen.weaknesses[1] === "Electric"
                    ? "Gold"
                    : "none",
              }}
            >
              {itemsShowen.weaknesses[1]}
            </div>
          )}
          {itemsShowen.weaknesses[2] && (
            <div
              className={styles.itemType}
              style={{
                backgroundColor:
                  itemsShowen.weaknesses[2] === "Grass" ||
                  itemsShowen.weaknesses[2] === "Bug"
                    ? "green"
                    : itemsShowen.weaknesses[2] === "Fire"
                    ? "red"
                    : itemsShowen.weaknesses[2] === "Fighting"
                    ? "#d56723"
                    : itemsShowen.weaknesses[2] === "Dragon" ||
                      itemsShowen.weaknesses[2] === "Flying"
                    ? "#3dc7ef"
                    : itemsShowen.weaknesses[2] === "Water" ||
                      itemsShowen.weaknesses[2] === "Ice"
                    ? "blue"
                    : itemsShowen.weaknesses[2] === "Normal" ||
                      itemsShowen.weaknesses[2] === "Steel"
                    ? "silver"
                    : itemsShowen.weaknesses[2] === "Poison" ||
                      itemsShowen.weaknesses[2] === "Ghost" ||
                      itemsShowen.weaknesses[2] === "Psychic" ||
                      itemsShowen.weaknesses[2] === "Fairy"
                    ? "Orchid"
                    : itemsShowen.weaknesses[2] === "Ground" ||
                      itemsShowen.weaknesses[2] === "Rock" ||
                      itemsShowen.weaknesses[2] === "Electric"
                    ? "Gold"
                    : "none",
              }}
            >
              {itemsShowen.weaknesses[2]}
            </div>
          )}
          {itemsShowen.weaknesses[3] && (
            <div
              className={styles.itemType}
              style={{
                backgroundColor:
                  itemsShowen.weaknesses[3] === "Grass" ||
                  itemsShowen.weaknesses[3] === "Bug"
                    ? "green"
                    : itemsShowen.weaknesses[3] === "Fire"
                    ? "red"
                    : itemsShowen.weaknesses[3] === "Fighting"
                    ? "#d56723"
                    : itemsShowen.weaknesses[3] === "Dragon" ||
                      itemsShowen.weaknesses[3] === "Flying"
                    ? "#3dc7ef"
                    : itemsShowen.weaknesses[3] === "Water" ||
                      itemsShowen.weaknesses[3] === "Ice"
                    ? "blue"
                    : itemsShowen.weaknesses[3] === "Normal" ||
                      itemsShowen.weaknesses[3] === "Steel"
                    ? "silver"
                    : itemsShowen.weaknesses[3] === "Poison" ||
                      itemsShowen.weaknesses[3] === "Ghost" ||
                      itemsShowen.weaknesses[3] === "Psychic" ||
                      itemsShowen.weaknesses[3] === "Fairy"
                    ? "Orchid"
                    : itemsShowen.weaknesses[3] === "Ground" ||
                      itemsShowen.weaknesses[3] === "Rock" ||
                      itemsShowen.weaknesses[3] === "Electric"
                    ? "Gold"
                    : "none",
              }}
            >
              {itemsShowen.weaknesses[3]}
            </div>
          )}
        </div>
      </div>

      <Evolution value={itemsShowen} evolution={pokemonEvolution} />

      <div></div>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

// Albums Component
// async function Albums({ promise }) {
//   // Wait for the albums promise to resolve
//   const albums = await promise;
