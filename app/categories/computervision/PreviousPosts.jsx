//"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import "/public/css/bootstrap.css";
import Data from "./info.json";


export default function PreviousPosts() {
    /* [Corpus; .JSONs] */
    const json1 = Data.elem1.jsonLink;
    const json2 = Data.elem2.jsonLink;
    const json3 = Data.elem3.jsonLink;
    const json4 = Data.elem4.jsonLink;
    const json5 = Data.elem5.jsonLink;
    const json6 = Data.elem6.jsonLink;

    /* [Corpus; Imges] */
    const img1 = Data.elem1.imageLink;
    const img2 = Data.elem2.imageLink;
    const img3 = Data.elem3.imageLink;
    const img4 = Data.elem4.imageLink;
    const img5 = Data.elem5.imageLink;
    const img6 = Data.elem6.imageLink;

    return (
      <React.Fragment>
        {/* [Corpus; Title] */}
        <div className="container-fluid mt-5 w-75 p-1">
          <h2>Popular Posts:</h2>
        </div>          
        
        {/* [EXAMPLE CARD- WORKING IN PROGRESS] */}
        <div className="wrapper">

          <div class="card2">
            <header class="card2-header">
              <p>May 3rd 2023</p>
              <span class="title">CARD 1</span>
            </header>
            <div class="card2-author">
              <a class="author-avatar" href="#">
                <span></span>
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div class="author-name">
                <div class="author-name-prefix">Author</div> Folarin Lawal
              </div>
            </div>
            <div class="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">web-dev</a>
            </div>
          </div>

          <div class="card2">
            <header class="card2-header">
              <p>May 3rd 2023</p>
              <span class="title">CARD 2</span>
            </header>
            <div class="card2-author">
              <a class="author-avatar" href="#">
                <span></span>
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div class="author-name">
                <div class="author-name-prefix">Author</div> Folarin Lawal
              </div>
            </div>
            <div class="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">web-dev</a>
            </div>
          </div>
          
          <div class="card2">
            <header class="card2-header">
              <p>May 3rd 2023</p>
              <span class="title">CARD 3</span>
            </header>
            <div class="card2-author">
              <a class="author-avatar" href="#">
                <span></span>
              </a>
              <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </svg>
              <div class="author-name">
                <div class="author-name-prefix">Author</div> Folarin Lawal
              </div>
            </div>
            <div class="tags">
              <a href="#">html</a>
              <a href="#">css</a>
              <a href="#">web-dev</a>
            </div>
          </div>
          





        </div>
{/*
        <div className="container-fluid w-75 p-1">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{json1.title}</h5>
              <p className="card-text">{json1.introduction}</p>
              <div className="d-flex justify-content-end">
                <Link href={"/categories/frontend/" + json1.routeTitle}>
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-2 w-75 p-1">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{json2.title}</h5>
              <p className="card-text">{json2.introduction}</p>
              <div className="d-flex justify-content-end">
                <Link href={"/categories/frontend/" + json2.routeTitle}>
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-2 w-75 p-1">
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">{json3.title}</h5>
              <p className="card-text">{json3.introduction}</p>
              <div className="d-flex justify-content-end">
                <Link href={"/categories/frontend/" + json3.routeTitle}>
                  <button className="btn btn-primary">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
*/}

      </React.Fragment>
    );
};