import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";

const Profile = () => {
    return (
      <React.Fragment>
        {/* [Header] */}
        <Head>
          <title>Profile Page</title>
          <meta
            name="description"
            content="ProjectIn: the central hub for sharing software project ideas. From apps to algorithms, ProjectIn fosters collaboration and sparks inspiration. Pitch your ideas, receive feedback, and connect with like-minded tech enthusiasts. Turn your imagination into reality with ProjectIn "
          />
          <meta
            name="keywords"
            content="projectin, software projects, swe projects, project ideas, software ideas, software engineering, swe, swe ideas"
          />
          <meta name="author" content="prject in" />
          <link rel="canonical" href="https://projectin.com/" />
          <link rel="icon" href="/project_logo.png" sizes="any" />
        </Head>

        <div className="container-fluid d-flex mt-5 justify-content-center w-75"> 
        *** PROFILE PAGE ***</div>
      </React.Fragment>
    );
};

export default Profile;
