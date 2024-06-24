const BusinessCard = () => {
  const person = {
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
    <div>
      <h2>Tarjeta de presentación</h2>
      <h3>{person.firstName} {person.lastName} <sup>{person.age}</sup><sub>{person.isAlive ? 'true' : 'false'}</sub></h3>
      <h4>{person.address.city} {person.address.country}</h4>
      <h5>{person.skills.join(', ')}</h5>
    </div>
  );
};

export default BusinessCard;