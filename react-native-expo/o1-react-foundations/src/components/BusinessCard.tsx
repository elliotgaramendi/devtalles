const BusinessCard = () => {
  const name = 'Elliot';
  const age = 29;
  const isAlive = true;
  const skills = ['React', 'Astro', 'Figma', 'OpenAI', 'LLaMA'];

  return (
    <>
      <h2>Business Card</h2>
      <h3>{name} <sup>{age}</sup><sub>{isAlive ? 'true' : 'false'}</sub></h3>
      <h4>{skills.join(', ')}</h4>
    </>
  );
};

export default BusinessCard;