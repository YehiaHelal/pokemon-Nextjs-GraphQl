"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// styles
import styles from "./Evolution.module.css";

const Evolution = (props) => {
  const [value, setvalue] = useState(1);

  function handleChangeValue() {
    setvalue(2);
  }

  // console.log(props);
  // console.log(props);

  let pokemon = props.value;
  let evolution = props.evolution.pokemon.evolutions;

  // console.log(evolution);

  // console.log(props.value.name);

  useEffect(() => {}, [value]);
  // console.log(value);
  return (
    <div>
      <div className={styles.ShowEvolutionButtonComponent}>
        <button
          className={styles.ShowEvolutionButton}
          onClick={handleChangeValue}
        >
          Show Pokemon Evolution
        </button>
      </div>

      {value === 2 && (
        <div className={styles.itemComponent}>
          <div>
            <Image
              src={`${pokemon.image}`}
              width={170}
              height={170}
              alt="none"
            ></Image>
            <div className={styles.itemNameandNubmer}>
              <div>{pokemon.name}</div>
              <div>#0{pokemon.number}</div>
            </div>

            <div className={styles.itemType}>
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
                      pokemon.types[1] === "Grass" || pokemon.types[1] === "Bug"
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
            </div>
          </div>

          {evolution[0] && (
            <div>
              <Image
                src={`${evolution[0].image}`}
                width={170}
                height={170}
                alt="none"
              ></Image>
              <div className={styles.itemNameandNubmer}>
                <div>{evolution[0].name}</div>
                <div>#0{evolution[0].number}</div>
              </div>
              <div className={styles.itemType}>
                <div
                  className={styles.itemType}
                  style={{
                    backgroundColor:
                      evolution[0].types[0] === "Grass" ||
                      evolution[0].types[0] === "Bug"
                        ? "green"
                        : evolution[0].types[0] === "Fire"
                        ? "red"
                        : evolution[0].types[0] === "Fighting"
                        ? "#d56723"
                        : evolution[0].types[0] === "Dragon" ||
                          evolution[0].types[0] === "Flying"
                        ? "#3dc7ef"
                        : evolution[0].types[0] === "Water" ||
                          evolution[0].types[0] === "Ice"
                        ? "blue"
                        : evolution[0].types[0] === "Normal" ||
                          evolution[0].types[0] === "Steel"
                        ? "silver"
                        : evolution[0].types[0] === "Poison" ||
                          evolution[0].types[0] === "Ghost" ||
                          evolution[0].types[0] === "Psychic" ||
                          evolution[0].types[0] === "Fairy"
                        ? "Orchid"
                        : evolution[0].types[0] === "Ground" ||
                          evolution[0].types[0] === "Rock" ||
                          evolution[0].types[0] === "Electric"
                        ? "Gold"
                        : "none",
                  }}
                >
                  {evolution[0].types[0]}
                </div>
                {evolution[0].types[1] && (
                  <div
                    className={styles.itemType}
                    style={{
                      backgroundColor:
                        evolution[0].types[1] === "Grass" ||
                        evolution[0].types[1] === "Bug"
                          ? "green"
                          : evolution[0].types[1] === "Fire"
                          ? "red"
                          : evolution[0].types[1] === "Fighting"
                          ? "#d56723"
                          : evolution[0].types[1] === "Dragon" ||
                            evolution[0].types[1] === "Flying"
                          ? "#3dc7ef"
                          : evolution[0].types[1] === "Water" ||
                            evolution[0].types[1] === "Ice"
                          ? "blue"
                          : evolution[0].types[1] === "Normal" ||
                            evolution[0].types[1] === "Steel"
                          ? "silver"
                          : evolution[0].types[1] === "Poison" ||
                            evolution[0].types[1] === "Ghost" ||
                            evolution[0].types[1] === "Psychic" ||
                            evolution[0].types[1] === "Fairy"
                          ? "Orchid"
                          : evolution[0].types[1] === "Ground" ||
                            evolution[0].types[1] === "Rock" ||
                            evolution[0].types[1] === "Electric"
                          ? "Gold"
                          : "none",
                    }}
                  >
                    {evolution[0].types[1]}
                  </div>
                )}{" "}
              </div>
            </div>
          )}
          {evolution[1] && (
            <div>
              <Image
                src={`${evolution[1].image}`}
                width={170}
                height={170}
                alt="none"
              ></Image>
              <div className={styles.itemNameandNubmer}>
                <div>{evolution[1].name}</div>
                <div>#0{evolution[1].number}</div>
              </div>
              <div className={styles.itemType}>
                <div
                  className={styles.itemType}
                  style={{
                    backgroundColor:
                      evolution[1].types[0] === "Grass" ||
                      evolution[1].types[0] === "Bug"
                        ? "green"
                        : evolution[1].types[0] === "Fire"
                        ? "red"
                        : evolution[1].types[0] === "Fighting"
                        ? "#d56723"
                        : evolution[1].types[0] === "Dragon" ||
                          evolution[1].types[0] === "Flying"
                        ? "#3dc7ef"
                        : evolution[1].types[0] === "Water" ||
                          evolution[1].types[0] === "Ice"
                        ? "blue"
                        : evolution[1].types[0] === "Normal" ||
                          evolution[1].types[0] === "Steel"
                        ? "silver"
                        : evolution[1].types[0] === "Poison" ||
                          evolution[1].types[0] === "Ghost" ||
                          evolution[1].types[0] === "Psychic" ||
                          evolution[1].types[0] === "Fairy"
                        ? "Orchid"
                        : evolution[1].types[0] === "Ground" ||
                          evolution[1].types[0] === "Rock" ||
                          evolution[1].types[0] === "Electric"
                        ? "Gold"
                        : "none",
                  }}
                >
                  {evolution[1].types[0]}
                </div>
                {evolution[1].types[1] && (
                  <div
                    className={styles.itemType}
                    style={{
                      backgroundColor:
                        evolution[1].types[1] === "Grass" ||
                        evolution[1].types[1] === "Bug"
                          ? "green"
                          : evolution[1].types[1] === "Fire"
                          ? "red"
                          : evolution[1].types[1] === "Fighting"
                          ? "#d56723"
                          : evolution[1].types[1] === "Dragon" ||
                            evolution[1].types[1] === "Flying"
                          ? "#3dc7ef"
                          : evolution[1].types[1] === "Water" ||
                            evolution[1].types[1] === "Ice"
                          ? "blue"
                          : evolution[1].types[1] === "Normal" ||
                            evolution[1].types[1] === "Steel"
                          ? "silver"
                          : evolution[1].types[1] === "Poison" ||
                            evolution[1].types[1] === "Ghost" ||
                            evolution[1].types[1] === "Psychic" ||
                            evolution[1].types[1] === "Fairy"
                          ? "Orchid"
                          : evolution[1].types[1] === "Ground" ||
                            evolution[1].types[1] === "Rock" ||
                            evolution[1].types[1] === "Electric"
                          ? "Gold"
                          : "none",
                    }}
                  >
                    {evolution[1].types[1]}
                  </div>
                )}{" "}
              </div>
            </div>
          )}
        </div>
      )}

      {value === 3 && <div>Hello</div> && (
        <div className={styles.itemComponent}>
          {pokemons.pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <a href={"/items/" + pokemon.name}>
                <Image
                  src={`${pokemon.image}`}
                  width={170}
                  height={170}
                  alt="none"
                ></Image>
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
                        pokemon.types[0] === "Grass" ||
                        pokemon.types[0] === "Bug"
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
      )}
    </div>
  );
};

export default Evolution;
