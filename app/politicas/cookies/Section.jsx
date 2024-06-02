import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";

const CookiesSection = () => {
    return (
        <React.Fragment>
            {/* [Header] */}
            <Head>
                <title>Cookie Policy</title>
                <meta name="description" content="ProjectIn: the central hub for sharing software project ideas. From apps to algorithms, ProjectIn fosters collaboration and sparks inspiration. Pitch your ideas, receive feedback, and connect with like-minded tech enthusiasts. Turn your imagination into reality with ProjectIn " />
                <meta name="keywords" content="projectin, software projects, swe projects, project ideas, software ideas, software engineering, swe, swe ideas" />
                <meta name="author" content="prject in" />
                <link rel="canonical" href="https://projectin.com/" />
                <link rel="icon" href="/project_logo.png" sizes="any" />
            </Head>

            {/* [Logotype] */}
            <div className='container-fluid d-flex mt-5 justify-content-center w-75'>
                <Image src={'/project_logo.png'} height={120} width={400} alt='La Hora Libre' />
            </div>

            {/* [Document Title] */}
            <div className="container-fluid mt-5 w-75">
                <h2 className="text-center">
                    COOKIE POLICY
                </h2>
            </div>

            {/* [Document Body] */}
            <div className="container-fluid mt-4 w-75">
                <p>
                    Access to this website may involve the use of cookies. Cookies are small amounts of information stored in the browser used by each User — on the different devices they may use to browse — so that the server remembers certain information that only the server that implemented it will read. Cookies facilitate navigation, make it more user-friendly, and do not damage the browsing device.
                </p>
                <p>
                    Cookies are automatic procedures for collecting information related to the preferences determined by the User during their visit to the website in order to recognize them as a User, personalize their experience and use of the website, and can also, for example, help identify and resolve errors.
                </p>
                <p>
                    The information collected through cookies may include the date and time of visits to the website, the pages viewed, the time spent on the website, and the sites visited immediately before and after. However, no cookie allows this information to be contacted with the User's telephone number or any other means of personal contact. No cookie can extract information from the User's hard drive or steal personal information. The only way for the User's private information to be part of the Cookie file is for the user to personally provide that information to the server.
                </p>
                <p>
                    Cookies that allow a person to be identified are considered personal data. Therefore, the Privacy Policy described above applies to them. In this regard, the User's consent will be necessary for their use. This consent will be communicated, based on an authentic choice, offered through an affirmative and positive decision, before the initial processing, removable, and documented.
                </p>

                <h3 className="mt-5">
                    Third-Party Cookies
                </h3>
                <p>
                    These are cookies used and managed by external entities that provide services requested by lahoralibre to improve the website and the user's browsing experience on the website. The main objectives for which third-party cookies are used are to obtain access statistics and analyze browsing information, i.e., how the User interacts with the website.
                </p>
                <p>
                    The information obtained refers, for example, to the number of pages visited, the language, the location from which the User's IP address accesses, the number of Users who access, the frequency and recurrence of visits, the time of visit, the browser used, the operator or type of device from which the visit is made. This information is used to improve the website and identify new needs to offer Users optimal quality content and/or service. In any case, the information is collected anonymously and trend reports of the website are prepared without identifying individual users.
                </p>
                <p>
                    You can obtain more information about cookies, information about privacy, or consult the description of the type of cookies used, their main characteristics, expiration period, etc. at the following link(s):
                </p>
                <p>
                    The entity(ies) responsible for supplying cookies may transfer this information to third parties, provided that it is required by law or a third party processes this information for such entities.
                </p>

                <h3 className="mt-5">
                    Disabling, Rejecting, and Deleting Cookies
                </h3>
                <p>
                    The User can disable, reject, and delete cookies — in whole or in part — installed on their device by configuring their browser (including, for example, Chrome, Firefox, Safari, Explorer). In this regard, the procedures for rejecting and deleting cookies may differ from one Internet browser to another. Therefore, the User should refer to the instructions provided by the Internet browser they are using. If the User rejects the use of cookies — in whole or in part — they may still use the website, although they may have limited use of some of its features.
                </p>
            </div>
        </React.Fragment>
    );
};

export default CookiesSection;
