import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import "material-symbols";

import icons from "../src/icons.js";
import iconStyles from '../src/styles';

import Icon from "../src/components/Icon";
import Card from "../src/components/Card";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);
  const [selectedStyle, setSelectedStyle] = useState(iconStyles[0]);

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href={`/assets/${selectedStyle.name}/${selectedIcon}-fill.png`}
        ></link>
      </Head>

      <div className="bg-blue-400 w-full">
        <div className="container mx-auto py-4 px-2">
          <h1 className="text-lg font-bold text-white">App Icons</h1>
        </div>
      </div>

      <div className="border mb-4">
        <div className="container mx-auto">
          <input
            placeholder="Search..."
            className="w-full h-12 px-2 focus:outline-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row h-full">
        <div className="flex flex-row flex-wrap w-full lg:w-1/2 overflow-scroll">
          {icons
            .filter((icon) => icon.includes(query))
            .map((icon, index) => (
              <Card
                key={index}
                name={icon}
                src={`/assets/rounded/${icon}.svg`}
                alt={icon}
                onClick={() => setSelectedIcon(icon)}
              />
            ))}
        </div>

        <div className="flex flex-col w-full lg:w-1/2 h-full items-center">
          <div className="flex flex-row flex-wrap mb-4">
            {iconStyles
            .filter(style => style.enabled)
            .map((style, index) => (
              <div
                className={`m-1 h-6 w-6 cursor-pointer rounded-full border`}
                style={{
                  background: `linear-gradient(${style.gradient?.[0]}, ${style.gradient?.[1]})`,
                  backgroundColor: style.color,
                }}
                onClick={() => setSelectedStyle(style)}
              />
            ))}
          </div>
          <div>
            <Icon
              src={`/assets/${selectedStyle.name}/${selectedIcon}-fill.png`}
              alt={selectedIcon}
              onClick={() => {
                //
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
