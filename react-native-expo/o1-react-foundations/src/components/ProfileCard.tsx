import FollowButton from "./FollowButton";

interface Address {
  country: string;
  city: string;
}

interface Person {
  firstName: string;
  lastName: string;
  roles: string[];
  age: number;
  isAlive: boolean;
  skills: string[];
  image: string;
  address?: Address;
}

const isAdult = (age: number): boolean => {
  return age >= 18;
};

const BusinessCard = ({ followers, onFollowersChange }: { followers: number, onFollowersChange: (value: number) => void }) => {
  const person: Person = {
    firstName: 'Elliot',
    lastName: 'Garamendi',
    roles: ['💻 Frontend Developer ', '🤖 AI Engineer'],
    age: 29,
    isAlive: true,
    skills: ['React', 'Astro', 'OpenAI', 'LLaMA'],
    image: 'https://i.postimg.cc/s2D6D148/elliotgaramendi-card.webp',
    address: {
      country: 'Perú',
      city: 'Lima'
    }
  };

  const { firstName, lastName, roles, age, isAlive, skills, image, address } = person;

  return (
    <div className="flex flex-col items-center max-w-xs bg-gray-900 border border-gray-800 rounded-xl">
      <img src={image} alt={`${firstName} ${lastName}`} className="-mt-8 rounded-xl" width={200} height={200} />
      <div className="flex flex-col gap-4 p-8">
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-sky-400">
            {firstName} {lastName} <sup>{age}</sup>
            <sub>{isAlive && isAdult(person.age) ? '🟢' : '🔴'}</sub>
          </h2>
          <p className="text-xs text-gray-400">{roles.join(', ')}</p>
          <p className="text-center text-gray-500 text-xs">{address?.city}, {address?.country} 📌</p>
        </div>
        <div className="flex justify-around text-center">
          <div className="flex flex-col">
            <span className="text-lg font-medium text-sky-400">{skills[1]}</span>
            <span className="text-xs text-gray-400 tracking-wide">Front</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium text-white">{followers}</span>
            <span className="text-xs text-gray-400 tracking-wide">Followers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium text-sky-400">{skills[3]}</span>
            <span className="text-xs text-gray-400 tracking-wide">AI</span>
          </div>
        </div>
        <div className="flex gap-4">
          <FollowButton onClick={() => onFollowersChange(followers + 1)} />
          <button className="flex-1 py-2 bg-gray-700 text-gray-200 rounded-lg font-medium hover:bg-gray-600 transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;