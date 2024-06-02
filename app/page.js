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
  authors: [{ name: 'aymanabdalla' }, { name: 'aymanabdalla', url: 'https://aymanabdalla.me' }],
  creator: 'aymanabdalla.me',
  publisher: 'aymanabdalla.me',
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
        <meta name="description" content="ProjectIn: the central hub for sharing software project ideas. From apps to algorithms, ProjectIn fosters collaboration and sparks inspiration. Pitch your ideas, receive feedback, and connect with like-minded tech enthusiasts. Turn your imagination into reality with ProjectIn ." />
        <meta name="keywords" content="projectin, software projects, swe projects, project ideas, software ideas, software engineering, swe, swe ideas" />
        <meta name="author" content="projectin" />
        <link rel="canonical" href="https://projectin.com/" />
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
          Front-End
        </h3>
      </div>
      <CienciasPosts />
      <hr />

      {/* [Corpus; Entertainment] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Back-End
        </h3>
      </div>
      <EntretenimientoPosts />
      <hr />

      {/* [Corpus; Finance] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Full-Stack
        </h3>
      </div>
      <FinanzasPosts />
      <hr />

      {/* [Corpus; Health] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Machine Learning
        </h3>
      </div>
      <SaludPosts />
      <hr />

      {/* [Corpus; Technology] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          Computer Vision
        </h3>
      </div>
      <TecnologiaPosts />
      <hr />
    </main>
  )
}
