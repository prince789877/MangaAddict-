import React from "react";

const featured = [
  { name: "One Piece", image: "https://i.imgur.com/LGkQK5P.jpg" },
  { name: "Dragon Ball", image: "https://i.imgur.com/Y4XW9Wk.jpg" },
  { name: "Bleach", image: "https://i.imgur.com/3vZKn8C.jpg" },
  { name: "Naruto", image: "https://i.imgur.com/jHPG3Zz.jpg" },
  { name: "Solo Leveling", image: "https://i.imgur.com/qKwOMXu.jpg" },
  { name: "Vinland Saga", image: "https://i.imgur.com/cPv3bpD.jpg" },
  { name: "Vagabond", image: "https://i.imgur.com/N1uFDXK.jpg" },
  { name: "Blue Lock", image: "https://i.imgur.com/JjKpZJj.jpg" },
  { name: "Haikyuu", image: "https://i.imgur.com/xZspDT5.jpg" },
  { name: "Jujutsu Kaisen", image: "https://i.imgur.com/ODn5TSc.jpg" },
];

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Featured Manga</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featured.map((manga) => (
          <div key={manga.name} className="bg-gray-800 p-2 rounded-lg shadow-lg">
            <img src={manga.image} alt={manga.name} className="rounded-lg w-full h-48 object-cover" />
            <h2 className="mt-2 text-center">{manga.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
