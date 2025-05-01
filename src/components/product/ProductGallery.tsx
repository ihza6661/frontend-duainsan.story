
interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-48 flex items-center justify-center text-gray-400">
        No image available
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden">
      {images.length > 1 ? (
        <div className="grid grid-cols-1 gap-2">
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${productName} ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
      ) : (
        <img
          src={images[0]}
          alt={productName}
          className="w-full h-auto object-cover"
        />
      )}
    </div>
  );
};

export default ProductGallery;
