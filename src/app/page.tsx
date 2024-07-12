import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Envelope from '../components/Envelope';


const GoogleMapComponent = dynamic(() => import('../components/GoogleMapComponent'), { ssr: false });

const DraggableItem = dynamic(() => import('../components/DraggableItem'), { ssr: false });

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 40.6828, // Approximate coordinates for 2nd Pl & Court St, Brooklyn
  lng: -73.9957,
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-white text-black p-2">
      </a>
      <main id="main-content" className="flex flex-col w-full">
        <section className="h-screen w-full flex items-center justify-center bg-[#d8d5d5]">
          <Envelope>
          <div className="relative" style={{ width: '70%', height: '70%', marginLeft: '15%' }}>
            <Image
              src="/invitation.png"
              alt="Invitation"
              layout="fill"
              objectFit="contain"
            />
          </div>
          </Envelope>
        </section>

        <section className="h-screen w-full bg-[#d8d5d5] relative overflow-hidden">
  <div className="w-full h-24 bg-[#BB5C68] absolute top-0 left-0 right-0 z-10 flex items-center justify-center">
    <Image
      src="/DETAILS.png"
      alt="Details"
      width={300}
      height={300}
      objectFit="contain"
      className="max-h-full"
    />
  </div>
  <div className="absolute inset-0 pt-24">
    <div className="relative w-full h-full p-4 sm:p-8 md:p-16 lg:p-24 overflow-hidden">
      <DraggableItem 
        initialPosition={{ x: 20, y: 100 }} 
        polaroidSrc="/polaroid-1.png"
        contentSrc="/content-1.png"
        size={350}
      />
      <DraggableItem 
        initialPosition={{ x: 300, y: 150 }} 
        polaroidSrc="/polaroid-2.png"
        contentSrc="/content-2.png"
        size={350}
      />
      <DraggableItem 
        initialPosition={{ x: 580, y: 200 }} 
        polaroidSrc="/polaroid-3.png"
        contentSrc="/content-3.png"
        size={350}
      />
      <DraggableItem
        initialPosition={{ x: 450, y: 50 }}
        imageSrc="/star.png"
        size={100}
      />
      <DraggableItem
        initialPosition={{ x: 100, y: 30 }}
        imageSrc="/groovy.png"
        size={200}
      />
      <DraggableItem
        initialPosition={{ x: 600, y: 10 }}
        imageSrc="/logo.png"
        size={200}
      />
    </div>
  </div>
</section>
        <section className="h-screen w-full bg-[#BB5C68] relative p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="relative w-full h-full flex">
            <div className="w-2/3 flex">
              <div className="w-1/2 relative">
                <div className="absolute top-0 left-0">
                  <Image
                    src="/sticker-1.png"
                    alt="Sticker 1"
                    width={350}
                    height={350}
                    objectFit="contain"
                  />
                </div>
                <div className="text-center relative text-[#FFDBA6] left-[45%] top-[30%]">
            <p className="font-dm-mono text-[20px] mb-4">ONE DAY ONLY!</p>
            <h1 className="font-shrikhand text-[48px] leading-tight mb-2">Carroll Gardens</h1>
            <p className="font-shrikhand text-[48px] leading-tight mb-2">Aug 7th</p>
            <p className="font-shrikhand text-[48px] leading-tight mb-4">10am - 6pm</p>
            <p className="font-dm-mono text-[20px] mt-4">
              DISCOVER HIDDEN TREASURES<br />
              AT OUR STOOP SALE SPECTACULAR!
            </p>
          </div>
              </div>
              <div className="w-2/3 relative left-[15%]">
                <Image
                  src="/clothes.png"
                  alt="Clothes"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="w-2/5 bg-gray-200 relative">
              <GoogleMapComponent />
              <div className="absolute bottom-2 left-2 bg-white p-2 rounded shadow text-sm">
                <p className="font-bold">2nd Pl & Court St</p>
                <p>Brooklyn, NY 11231</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}