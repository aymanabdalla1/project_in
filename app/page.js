import React from "react";
import Head from "next/head";

import "../public/css/bootstrap.css";

/* [Corpus; Sites] */
import Init from "./Home/HomeSection";

/* [Corpus; SECTIONS] */
import CienciasPosts from "./categorias/ciencias/PreviousPosts";
import EntretenimientoPosts from "./categorias/entretenimiento/PreviousPosts";
import FinanzasPosts from "./categorias/finanzas/PreviousPosts";
import SaludPosts from "./categorias/salud/PreviousPosts";
import TecnologiaPosts from "./categorias/tecnologia/PreviousPosts";

export const metadata = {
  title: 'Project In',
  description: 'Start your project with us!',
  keywords: ['software', 'project', 'software project', 'software engineering projects', 'swe'],
  authors: [{ name: 'lahoralibre' }, { name: 'lahoralibre.com', url: 'https://lahoralibre.com/' }],
  creator: 'lahoralibre.com/',
  publisher: 'lahoralibre.com',
  icons: {
    icon: '/small_logo.png',
  },
}
export default function Home() {
  return (
    <main>
      {/* [Corpus; HEADER] */}
      <Head>
        <title>Project In</title>
        <meta name="description" content="An impartial and quality source of articles in the digital era with the aim of providing complete, balanced, and summarized journalistic coverage, committed to the ethical and professional principles of modern digital journalism." />
        <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre inicio, la hora libre contacto, la hora libre support, la, hora, libre" />
        <meta name="author" content="lahoralibre" />
        <link rel="canonical" href="https://lahoralibre.com/" />
        <link rel="icon" href="/small_logo.png" sizes="any" />
      </Head>


      {/* [Corpus; CONTENT] */}
      <Init />

      {/* [Corpus; SPACE] */}
      <br />
      <br />
      <br />

      {/* [Corpus; Science] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Regarding Science
        </h3>
      </div>
      <CienciasPosts />
      <hr />

      {/* [Corpus; Entertainment] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Regarding Entertainment
        </h3>
      </div>
      <EntretenimientoPosts />
      <hr />

      {/* [Corpus; Finance] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Regarding Finance
        </h3>
      </div>
      <FinanzasPosts />
      <hr />

      {/* [Corpus; Health] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Regarding Health
        </h3>
      </div>
      <SaludPosts />
      <hr />

      {/* [Corpus; Technology] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Regarding Technology
        </h3>
      </div>
      <TecnologiaPosts />
      <hr />
    </main>
  )
}
