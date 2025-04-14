import Link from 'next/link';

export default function HomePage() {
  return (
    // Darker background, closer to the image's feel
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-indigo-950 to-purple-950 p-4 text-center">
      {/* Icon */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/liberty-icon.png"
        alt="Liberty Heights Logo"
        width={100} // Slightly smaller icon
        height={100}
        className="mb-5 rounded-md shadow-lg"
      />

      {/* Title - GTA Style: Blocky, White, Shadowed, Split Line */}
      <div className="mb-8 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
        <h1 className="text-6xl font-black uppercase tracking-wide text-white sm:text-7xl md:text-8xl"
            // Using impactful system fonts as fallback
            style={{ fontFamily: "'Impact', 'Arial Black', 'Franklin Gothic Heavy', sans-serif", lineHeight: '1.1' }}
        >
          Libert
          <span className="relative inline-block">
            y
            {/* Stylized NYC - Positioned approximately. Fine-tuning might need custom CSS */}
            <span className="absolute -right-8 -top-1 text-3xl font-bold italic text-blue-400 sm:-right-10 sm:text-4xl md:-right-12 md:text-5xl"
                  style={{ fontFamily: "'Brush Script MT', cursive", transform: 'rotate(-10deg)' }}>
              NYC
            </span>
          </span>
        </h1>
        <h1 className="text-6xl font-black uppercase tracking-wide text-white sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Impact', 'Arial Black', 'Franklin Gothic Heavy', sans-serif", lineHeight: '1.1' }}
        >
          Heights
        </h1>
      </div>

      {/* Subtitle - Removed for cleaner look, closer to image */}
      {/* <p className="mb-8 text-xl font-medium text-gray-300 sm:text-2xl">
        Technical Documentation
      </p> */}

      {/* Description - Slightly more concise */}
      <p className="mb-10 max-w-md text-base text-gray-300 sm:text-lg">
        Developer Docs for Liberty Heights
      </p>

      {/* Call to Action Button - Darker, bordered style */}
      <Link
        href="/docs/core-concepts" // Link directly to the first section
        className="inline-flex items-center justify-center rounded-sm border-2 border-white bg-black/50 px-8 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Enter Docs
      </Link>
    </main>
  );
}
