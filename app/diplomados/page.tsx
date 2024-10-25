import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for components that might not be immediately necessary
const DiplomadosNav = dynamic(() => import("@/components/graduate/diplomadosNav"), {
  suspense: true,
});
const DashboardSkeleton = dynamic(() => import("@/components/home/skeletons"), {
  suspense: true,
});

export default function Main() {
  return (
    <div>
      {/* Background video section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Background video filling the defined width and height */}
        <video
          src="/video_ambiental.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dark layer over the video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        {/* Content overlay on the video */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl font-bold md:text-6xl">Nuestros Diplomados</h2>
          <p className="mt-4 text-lg md:text-2xl">
            ¡Te ofrecemos un servicio de calidad para asegurar el éxito de tu profesión!
          </p>
        </div>
      </div>

      {/* Diplomados section */}
      <div className="bg-transparent mx-auto max-w-screen-2xl px-4 md:px-8 mb-12">
        <div className="mt-8 mb-8">
          {/* Potentially more content here */}
        </div>

        {/* Suspense with fallback during the loading of the component */}
        <Suspense fallback={<DashboardSkeleton />}>
          <DiplomadosNav />
        </Suspense>
      </div>
    </div>
  );
}
