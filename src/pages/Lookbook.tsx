
import React from 'react';

const Lookbook = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-grow">
        <section className="py-10 bg-[#f7f7f7]">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-normal mb-3 uppercase tracking-wider">
                Lookbook
              </h2>
              <p className="text-shop-dark-gray mb-2">
                Explore our latest collections and style inspirations
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lookbook;
