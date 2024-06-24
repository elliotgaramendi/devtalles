const BusinessCard = () => {
  const name = 'Elliot Garamendi';
  const age = 28;
  const isActive = true;
  const skills = ['React', 'React Native', 'Next.js', 'Astro'];

  return (
    <div>
      <h2>Tarjeta de presentación</h2>
      <h3>{name} <sup>{age}</sup><sub>{isActive ? 'true' : 'false'}</sub></h3>
      <h4>{skills.join(', ')}</h4>
    </div>
  );
};

export default BusinessCard;