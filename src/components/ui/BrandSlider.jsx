import '../../index.css';

const Slider = () => {
  const items = Array.from({ length: 10 }, (_, idx) => (
    <div className="item text-lg tracking-widest" key={idx}>
      FEATURED THIS SEASON
    </div>
  ));

  return (
    <div>
      <div
        className="slider"
        style={{
          '--width': '250px',
          '--quantity': 10,
        }}
      >
        <div className="list flex">
          {items}
          {items} {/* duplicate for seamless loop */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
