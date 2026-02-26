export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Minh Thong Tra Quang
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Integrated Biosensing Systems Engineer
        </p>

        <p className="max-w-2xl text-lg text-gray-700">
          Aspiring PhD candidate interested in intelligent portable diagnostic systems,
          kinetic modeling, and real-time biochemical signal interpretation.
        </p>
      </section>

      {/* RESEARCH ALIGNMENT */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          Research Motivation
        </h2>

        <p className="mb-4 text-lg">
          My research interest lies in transforming raw biochemical sensing data
          into clinically meaningful interpretation through integrated hardware-software
          systems.
        </p>

        <p className="text-lg">
          I am particularly motivated by the development of portable point-of-care
          diagnostic devices that combine embedded firmware, real-time data acquisition,
          and intelligent kinetic modeling for translational healthcare applications.
        </p>
      </section>

      {/* CORE PROJECT */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold mb-10">
            Key Research Experience
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-3">
              EasyOKAPI – Real-Time Kinetic Analysis Platform
            </h3>

            <p className="mb-3">
              Developed an end-to-end integrated platform for real-time
              data acquisition from a colorimetric point-of-care device.
            </p>

            <p className="mb-3">
              Designed firmware using CircuitPython to control optical
              sensing hardware and implemented a Flask-based web
              application for kinetic parameter estimation and visualization.
            </p>

            <p>
              This work strengthened my interest in developing
              intelligent, portable biosensing systems capable of
              delivering immediate biochemical interpretation.
            </p>
          </div>

        </div>
      </section>

      {/* FUTURE PHD DIRECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          Proposed PhD Direction at QUT
        </h2>

        <p className="mb-4 text-lg">
          I aim to explore AI-assisted portable biosensing platforms
          capable of adaptive signal processing and robust kinetic modeling
          under real-world environmental conditions.
        </p>

        <p className="text-lg">
          I am particularly interested in interdisciplinary collaboration
          combining biomedical device engineering, intelligent data analysis,
          and translational research to improve accessibility of diagnostic technologies.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 Minh Thong Tra Quang
      </footer>

    </main>
  );
}