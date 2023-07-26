const Decor = ({ padding }: { padding: boolean }) => {
  return (
    <div className={`decor ${padding ? 'padding' : ''}`}>
      <div className="decor__image"></div>
      <div className="decor__line"></div>
    </div>
  );
};

export default Decor;
