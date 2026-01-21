import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammed Labbi | Portfolio</title>
        <meta name="description" content="Portfolio de Mohammed Labbi - Administrateur de BDD Oracle" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-dark text-light p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-6xl font-bold mb-4 text-primary">Mohammed Labbi</h1>
            <h2 className="text-3xl text-secondary mb-8">Administrateur de Base de Données Oracle</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
              <div className="border border-white/20 p-6 rounded-lg bg-white/5">
                <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Formation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Licence Spécialisée en Ingénierie du Web et BDD (Ibn Tofail)</li>
                  <li>Technicien Spécialisée en Développement Informatique (OFPPT)</li>
                  <li>Administration de BDD Oracle (JobInTech)</li>
                </ul>
              </div>

              <div className="border border-white/20 p-6 rounded-lg bg-white/5">
                <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Expériences</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>RMA Assurance - Service Sinistre (2023)</li>
                  <li>MATU Assurance - Communication & Marketing (2021)</li>
                  <li>Digital Data System - Développement Web (2020)</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="bg-primary px-6 py-3 rounded-full font-bold hover:bg-opacity-80 transition">Mon CV</a>
              <a href="mailto:votre@email.com" className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-dark transition">Contact</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
