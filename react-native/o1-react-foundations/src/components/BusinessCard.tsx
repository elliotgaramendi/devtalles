import Likes from "./Likes";

interface Address {
  country: string;
  city: string;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isAlive: boolean;
  skills: string[];
  address?: Address;
}

const BusinessCard = () => {
  const isAdult = (age: number): boolean => {
    return age >= 18;
  };

  const person: Person = {
    firstName: 'Elliot',
    lastName: 'Garamendi',
    age: 28,
    isAlive: true,
    skills: ['React', 'React Native', 'Next.js', 'Astro'],
    address: {
      country: 'Perú',
      city: 'Lima'
    }
  };

  return (
    <section>
      <h2>Business Card</h2>
      <h3>{person.firstName} <sup>{person.age}</sup><sub>{person.isAlive ? 'true' : 'false'}</sub> <small>{isAdult(person.age) ? '🟢' : '🔴'}</small></h3>
      <h4>{person.skills.join(', ')}</h4>
      <Likes />
    </section>
  );
};

export default BusinessCard;