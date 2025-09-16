import React from 'react';

const brands = [
    { name: 'PHC', logo: 'https://boodmo.com/media/images/brand/4f106b0.webp' },
    { name: 'DKMAX', logo: 'https://boodmo.com/media/images/brand/ff1cc61.webp' },
    { name: 'Elofic', logo: 'https://boodmo.com/media/images/brand/6d1831f.webp' },
    { name: 'Lemforder', logo: 'https://boodmo.com/media/images/brand/987fd20.webp' },
    { name: 'Sachs', logo: 'https://boodmo.com/media/images/brand/1586c06.webp' },
    { name: 'Spark Minda', logo: 'https://boodmo.com/media/images/brand/6b0985f.webp' },
    { name: 'EuroMac', logo: 'https://boodmo.com/media/images/brand/7fab5d4.webp' },
    { name: 'Shinshine', logo: 'https://boodmo.com/media/images/brand/551a859.webp' },
    { name: 'IGB', logo: 'https://boodmo.com/media/images/brand/3408b8a.webp' },
    { name: 'UNO Mind', logo: 'https://boodmo.com/media/images/brand/e5b18f5.webp' },
    { name: 'technix', logo: 'https://boodmo.com/media/images/brand/52704b7.webp' },
    { name: 'Valeo', logo: 'https://boodmo.com/media/images/brand/af34236.webp' },
    { name: 'Macklite', logo: 'https://boodmo.com/media/images/brand/af34236.webp' },
    { name: 'sc', logo: 'https://boodmo.com/media/images/brand/a2c58ac.webp' },
    { name: 'MGT', logo: 'https://boodmo.com/media/images/brand/f50f113.webp' },
];

const carMakers = [
    'MARUTI', 'HYUNDAI', 'MAHINDRA', 'TATA', 'CHEVROLET',
    'HONDA', 'SKODA', 'VW', 'TOYOTA', 'NISSAN',
    'RENAULT', 'FORD', 'FIAT', 'KIA',
];

export default function BrandTrustAndCarMakers() {
    return (
        <div className="px-6 py-12 bg-white">

            <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Brands we <span className="text-sky-400">Trust</span>
                    </h2>
                    <a href="#" className="text-sm text-blue-600 hover:underline">VIEW ALL</a>
                </div>


                <div className="overflow-hidden relative w-full">
                    <div className="flex animate-scroll whitespace-nowrap">
                        {brands.concat(brands).map((brand, index) => (
                            <img
                                key={index}
                                src={brand.logo}
                                alt={brand.name}
                                className="h-12 mx-8 inline-block object-contain"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Popular <span className="text-sky-400">Car Makers</span>
                    </h2>
                    <a href="#" className="text-sm text-blue-600 hover:underline">VIEW ALL</a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 rounded">
                    {carMakers.map((maker) => (
                        <button
                            key={maker}
                            className="bg-white border border-gray-250 shadow-sm py-5 px-4 rounded-md text-sm font-medium hover:bg-gray-100 hover:shadow-lg">
                            {maker}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}
