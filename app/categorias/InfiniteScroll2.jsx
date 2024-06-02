"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import logsData from './logs.json';

import "./progress4.css";

export default function InfiniteScroll2() {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPagesContent = async () => {
            const cat2Pages = logsData.cat2.slice(0, 5); // Show only the first 5 pages
            const pagesContent = [];

            for (const page of cat2Pages) {
                try {
                    const response = await axios.get(page);
                    const html = response.data;
                    const $ = cheerio.load(html);

                    // Specify the selectors of the elements you want to exclude here
                    const navigationBarSelector = '.navbar';
                    const footerSelector = 'footer';

                    // Remove the navigation bar from the content
                    $(navigationBarSelector).remove();

                    // Remove the footer from the content
                    $(footerSelector).remove();

                    const pageContent = $.html();
                    pagesContent.push(pageContent);
                } catch (error) {
                    console.error(`[Barlow (ERROR); Error getting content from page ${page}: ${error}]`);
                }
            }

            setPages(pagesContent);
            setLoading(false); // Finish loading and hide the progress bar
        };

        fetchPagesContent();
    }, []);

    return (
        <div className='container-fluid'>
            <h3>Related Articles:</h3>
            {loading ? ( // Show the progress bar while loading is true
                <div className="container-fluid custom-loader d-flex justify-content-center mt-4"></div>
            ) : (
                pages.map((pageContent, index) => (
                    <div key={index}>
                        {/* <h2>Page {index + 1}</h2> */}
                        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
                    </div>
                ))
            )}
        </div>
    );
}
