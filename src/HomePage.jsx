export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start p-8 gap-12">
      <section className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to SiliCircle</h1>
        <p className="text-lg mb-2">
          Tackling plastic waste through smart reuse. SiliCircle is a mobile-first digital
          platform that tracks, gamifies, and empowers sustainable habits with reusable
          silicone food bags.
        </p>
        <p>
          Our mission is to create a smarter, data-driven ecosystem that makes reuse easy,
          measurable, and rewarding—for individuals and eco-conscious businesses alike.
        </p>
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="/A_digital_graphic_design_displays_four_smartphone_.png" alt="SiliCircle App Wireframe" className="rounded-xl shadow-md" />
          <div className="space-y-4 text-lg">
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Home Dashboard:</strong> Displays sustainability stats such as number of bags reused, washes, and waste saved.</li>
              <li><strong>Bag Registration:</strong> Enables QR/NFC-based tagging of each silicone bag, with history tracking and metadata.</li>
              <li><strong>Gamification:</strong> Users earn badges, streaks, and community impact scores to encourage continuous use.</li>
              <li><strong>Business Portal:</strong> Companies monitor inventory usage, environmental KPIs, and promote sustainable supply chains.</li>
              <li><strong>Resource Sharing:</strong> Community exchange and support for reuse practices and local partnerships.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Example Bag Collection</h2>
        <img src="/sandwich-bags.jpg" alt="Silicone Bag Product Collection" className="rounded-xl shadow-md mx-auto" />
        <p className="text-lg mt-4">SiliCircle supports a wide variety of silicone bag types, including stand-up, sandwich, bowl, and pocket sizes to suit any storage need.</p>
      </section>

      <section className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold">Emre Gencer</h3>
            <p>Co-founder / CMU IS 2028</p>
            <p>Developed business plan, research, and B2B strategy.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Joseph Soyigbe</h3>
            <p>Co-founder / CMU IS 2028</p>
            <p>Worked on app design, front-end, and marketing materials.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <a
          href="/business-plan-pitch.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-lg"
        >
          View Full Business Plan (PDF)
        </a>
      </section>

      <footer className="text-sm text-gray-500 mt-12 text-center">
        <p>
          References available <a href="/references" className="underline">here</a>.<br />
          &copy; {new Date().getFullYear()} SiliCircle. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
