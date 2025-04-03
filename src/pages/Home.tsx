import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';

const Home = () => {
  const categories = [
    { id: 1, name: 'Elektronik', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 2, name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
    { id: 3, name: 'Rumah Tangga', image: 'https://images.unsplash.com/photo-1484101403633-562f84f5d8f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  ];

  const popularProducts = [
    { id: 1, name: 'Smartphone X', price: 'Rp 8.999.000', image: 'https://images.unsplash.com/photo-1511707171634-5f6c7a0c0f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 2, name: 'Laptop Pro', price: 'Rp 15.999.000', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' },
    { id: 3, name: 'Headphone Premium', price: 'Rp 2.999.000', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Temukan Produk Terbaik</h1>
            <p className="text-xl mb-8">Belanja online dengan mudah dan aman. Berbagai produk berkualitas dengan harga terbaik.</p>
            <Link to="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Mulai Belanja
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Kategori Populer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Produk Terpopuler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 