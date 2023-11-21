/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function DisplaySetCards({ cards }: any) {
  const router = useRouter();
  const [toggleType, setToggleType] = useState("");
  const supertypes: string[] = ["Pokémon", "Trainer", "Energy"];
  const cardsAscending = [...cards].sort((a, b) => a.number - b.number);
  function CreateCard(i: any) {
    const CardElement = () => {
      return (
        <div>
          <button
            id={i.id}
            className={`text-black flex flex-col justify-center items-center hover:rounded-md hover:bg-gradient-to-r from-red-300 via-green-300 to-blue-300 p-1`}
            onClick={() => router.push(`/card/${i.id}`)}
            type={i.supertype}
          >
            <div>
              <div>
                {i.number}/{i.set.total}
              </div>
            </div>
            <img
              src={`${i.images.small}`}
              alt={"pokemon image"}
              width={300}
              height={100}
              loading="lazy"
            ></img>
          </button>
        </div >
      );
    };
    //filters cards rendered by toggle selected
    return toggleType === "" ? (
      <CardElement key={i.id} />
    ) : toggleType === i.supertype ? (
      <CardElement key={i.id} />
    ) : (
      <></>
    );
  }
  function CardsArr() {
    let arr = []
    for (let i: number = 0; i < Object.values(cardsAscending).length; i++) {
      arr.push(CreateCard(cardsAscending[i]))
    }
    return arr
  }
  return (
    <div>
      <div className="flex justify-center gap-10 text-black">
        {supertypes.map((i) => {
          return (
            <button
              key={i}
              value={i}
              className={`border border-black px-3 mb-6 rounded-md font-bold ${toggleType === i ? "bg-emerald-300 " : " bg-white"
                }`}
              onClick={() =>
                toggleType === i ? setToggleType("") : setToggleType(i)
              }
            >
              {i}
            </button>
          );
        })}
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        <CardsArr />
      </div>
    </div>
  );
}