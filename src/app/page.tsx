import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="https://pavise.com/cdn/shop/files/layer_1-2_1.png?v=1671175690"
            alt="Pavise Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }}
            quality={100}
            priority
          />
        </div> */}
        
        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6">
            Unparalleled skin regeneration at your fingertips
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8">
            Discover advanced biotechnology solutions for your skin
          </p>
          <Link href="/shop">
            <button className="uppercase border border-white px-6 py-3 md:px-10 md:py-4 hover:bg-white hover:text-black transition-colors duration-300 text-sm md:text-lg tracking-wider">
              SHOP ALL
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center uppercase tracking-wider">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Product 1 */}
            <div className="product-card bg-neutral-900 p-4 md:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-neutral-800 rounded-full flex items-center justify-center">
                  <Image
                    src="https://pavise.com/cdn/shop/files/GAP-with-AwardSeal-updated_8b20d0db-85db-4801-bba3-3f7bd0b40531.png?v=1738705766&width=400"
                    alt="Dynamic Age Defense"
                    width={120}
                    height={120}
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <h3 className="uppercase text-lg md:text-xl font-semibold mb-2 text-center">Dynamic Age Defense</h3>
              <p className="text-gray-400 text-center text-sm md:text-base mb-4 md:mb-6">Advanced protection against environmental stressors</p>
              <div className="text-center">
                <Link href="/shop/dynamic-age-defense">
                  <button className="text-sm uppercase tracking-wider hover:underline">
                    Shop Now →
                  </button>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card bg-neutral-900 p-4 md:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-neutral-800 rounded-full flex items-center justify-center">
                  <Image
                    src="https://pavise.com/cdn/shop/files/BSR-with-AwardSeals-updated-2.png?v=1738341500&width=400"
                    alt="Bioadaptive Stress Repair"
                    width={120}
                    height={120}
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <h3 className="uppercase text-lg md:text-xl font-semibold mb-2 text-center">Bioadaptive Stress Repair</h3>
              <p className="text-gray-400 text-center text-sm md:text-base mb-4 md:mb-6">Overnight cellular renewal and repair</p>
              <div className="text-center">
                <Link href="/shop/bioadaptive-stress-repair">
                  <button className="text-sm uppercase tracking-wider hover:underline">
                    Shop Now →
                  </button>
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card bg-neutral-900 p-4 md:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-neutral-800 rounded-full flex items-center justify-center">
                  <Image
                    src="https://pavise.com/cdn/shop/files/UVC-with-AwardSeals-updated_2.png?v=1738171430&width=400"
                    alt="Gentle Amino Powerwash"
                    width={120}
                    height={120}
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <h3 className="uppercase text-lg md:text-xl font-semibold mb-2 text-center">UV Camera</h3>
              <p className="text-gray-400 text-center text-sm md:text-base mb-4 md:mb-6">Visualize UV damage invisible to the naked eye</p>
              <div className="text-center">
                <Link href="/shop/uv-camera">
                  <button className="text-sm uppercase tracking-wider hover:underline">
                    Shop Now →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wider">Experience the Pavise® Difference</h2>
          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Our patented biotechnology platform leverages advanced cellular protection mechanisms to defend against UV damage, oxidative stress, and other environmental factors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/science">
              <button className="uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-wider">
                Discover our Science
              </button>
            </Link>
            <Link href="/partner-locator">
              <button className="uppercase border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-wider">
                Find a Partner
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
