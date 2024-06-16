import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";

const CookiesSection = () => {
    return (
      <React.Fragment>
        {/* [Header] */}
        <Head>
          <title>SignUp Page</title>
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
        <form class="form-signup">
          <p class="title-signup">Register </p>
          <p class="message-signup">Signup now and get full access to our app. </p>
          <div class="flex-signup">
            <label>
              <label for="firstname">Firstname</label>
              <input required="" placeholder="" type="text" class="input-signup" />
            </label>

            <label>
              <label for="lastname">Lastname</label>
              <input required="" placeholder="" type="text" class="input-signup" />
            </label>
          </div>

          <label>
            <label for="email">Email</label>
            <input required="" placeholder="" type="email" class="input-signup" />
          </label>

          <label>
            <label for="password">Password</label>
            <input required="" placeholder="" type="password" class="input-signup" />
          </label>
          <label>
          <label for="password">Confirm Password</label>
            <input required="" placeholder="" type="password" class="input-signup" />
          </label>
          <button class="submit-signup">Submit</button>
          <p class="signin-signup">
            Already have an acount ? <a href="/login/logform">Signin</a>{" "}
          </p>
        </form>
        </div>
      </React.Fragment>
    );
};

export default CookiesSection;
