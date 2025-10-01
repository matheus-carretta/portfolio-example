export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Meu porfolio online!</h1>
          <p className="text-xl mb-8">
            Meu primeiro deploy com Next.js e Vercel
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Sobre mim
          </h2>
          <p className="text-lg">
            Desenvolvedor web Full Stack aprendendo a colocar aplicações no ar!
          </p>
        </div>
      </div>
    </main>
  );
}
