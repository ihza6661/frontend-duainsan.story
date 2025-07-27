import { Button } from "@/components/ui/button";

const InstagramFollow = () => {
  return (
    <section className="py-16 bg-[#f3f0ea]">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl uppercase tracking-wider font-normal mb-3">
            Follow Us on Instagram
          </h2>
          <p className="font-normal text-shop-dark-gray mb-6">
            Stay updated with our latest collections and behind-the-scenes content.
          </p>

          <a
            href="https://www.instagram.com/duaInsan.story"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black font-normal tracking-widest hover:bg-black/90 px-8 py-3 rounded-none">
              @DuaInsan.Story
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFollow;

