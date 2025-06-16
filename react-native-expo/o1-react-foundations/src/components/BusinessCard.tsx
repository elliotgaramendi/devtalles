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

const isAdult = (age: number): boolean => {
  return age >= 18;
};

const BusinessCard = () => {
  const person: Person = {
    firstName: 'Elliot',
    lastName: 'Garamendi',
    age: 29,
    isAlive: true,
    skills: ['React', 'React Native', 'Next.js', 'Astro'],
    address: {
      country: 'Perú',
      city: 'Lima'
    }
  };

  const { firstName, age, isAlive, skills, address } = person;

  return (
    <>
      <h2>Business Card</h2>
      <h3>
        {firstName} <sup>{age}</sup>
        <sub>{isAlive ? 'true' : 'false'}</sub> <small>{isAdult(person.age) ? '🟢' : '🔴'}</small>
      </h3>
      <h4>{address?.city}, {address?.country}</h4>
      <h5>{skills.join(', ')}</h5>
    </>
  );
};

export default BusinessCard;