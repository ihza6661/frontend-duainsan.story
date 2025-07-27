const ActualBrandSlider = () => {
  const brands = [
    // '/brand_logo/moe.avif',
    // '/brand_logo/lenitif.webp',
    // '/brand_logo/santa.avif',
    // '/brand_logo/nife.avif',
    // '/brand_logo/lalupa.avif',
    // '/brand_logo/figl.avif',
    '/brand_logo/duainsan.png',
    '/brand_logo/duainsan.png',
    '/brand_logo/duainsan.png',
    '/brand_logo/duainsan.png',
    '/brand_logo/duainsan.png',
    '/brand_logo/duainsan.png',

  ];

  const brandItems = brands.map((src, idx) => (
    <div className="item" key={idx}>
      <img src={src} alt={`Brand ${idx + 1}`} />
    </div>
  ));

  return (
    <div className="slider">
      <div className="list">
        {[...Array(3)].flatMap((_, i) =>
          brandItems.map((item, j) => (
            <div className="item" key={`${i}-${j}`}>
              {item.props.children}
            </div>
          ))
        )}
      </div>
    </div>

  );
};


export default ActualBrandSlider;
