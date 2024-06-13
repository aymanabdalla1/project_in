import React from 'react';
import Head from 'next/head';
import Signup from "./Section";

export const metadata = {
    title: 'SignUp Page',
    description: 'Notice about Cookie Policy',
    keywords: ['software', 'project', 'software project', 'software engineering projects', 'swe'],
    authors: [{ name: 'aymanabdalla' }, { name: 'aymanabdalla', url: 'https://aymanabdalla.me' }],
    creator: 'aymanabdalla.me',
    publisher: 'aymanabdalla.me',
    icons: {
      icon: '/small_logo.png',
    },
}
export default function CookiesSection() {
    return (
        <React.Fragment>
            {/* [Header] */}
            <Head>
                <title>Cookie Policy</title>
                <meta name="description" content="ProjectIn: the central hub for sharing software project ideas. From apps to algorithms, ProjectIn fosters collaboration and sparks inspiration. Pitch your ideas, receive feedback, and connect with like-minded tech enthusiasts. Turn your imagination into reality with ProjectIn ." />
                <meta name="keywords" content="projectin, software projects, swe projects, project ideas, software ideas, software engineering, swe, swe ideas" />
                <meta name="author" content="projectin" />
                <link rel="canonical" href="https://projectin.com/" />
                <link rel="icon" href="/small_logo.png" sizes="any" />
            </Head>

            {/* [Content] */}
            <Signup />
        </React.Fragment>
    )
}
