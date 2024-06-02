import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";

const PrivacySection = () => {
    return (
        <React.Fragment>
            {/* [Header] */}
            <Head>
                <title>Privacy Policy | La Hora Libre</title>
                <meta name="description" content="An impartial and quality source of articles in the digital era with the aim of providing complete, balanced, and summarized journalistic coverage, committed to the ethical and professional principles of modern digital journalism." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre home, la hora libre privacy, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/small_logo.png" sizes="any" />
            </Head>

            {/* [Logotype] */}
            <div className='container-fluid d-flex mt-5 justify-content-center w-75'>
                <Image src={'/project_logo.png'} height={120} width={400} alt='La Hora Libre' />
            </div>

            {/* [Document Title] */}
            <div className="container-fluid mt-5 w-75">
                <h2 className="text-center">
                    PRIVACY POLICY
                </h2>
            </div>

            {/* [Document Body] */}
            <div className="container-fluid mt-4 w-75">
                <p>
                    This Privacy Policy sets out the terms and conditions for the use and protection of information provided by users of www.lahoralibre.com when using its website. This company is committed to the security of its users' data. When we ask you to fill in personal information fields that can identify you, we do so by ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change over time or be updated, so we recommend and emphasize that you review this page continuously to ensure that you agree to any such changes.
                </p>

                <h3 className="mt-5">
                    Information Collected
                </h3>
                <p>
                    Our website may collect personal information such as name, contact information like email address, and demographic information. Additionally, specific information may be required to process an order or make a delivery or billing.
                </p>

                <h3 className="mt-5">
                    Use of Collected Information
                </h3>
                <p>
                    Our website uses the information to provide the best possible service, particularly to maintain a record of users, orders if applicable, and improve our products and services. Periodic emails may be sent through our site with special offers, new products, and other advertising information that we consider relevant to you or that may provide you with some benefit. These emails will be sent to the address you provide and can be canceled at any time.
                </p>
                <p>
                    www.lahoralibre.com is highly committed to fulfilling the commitment to keep your information secure. We use the most advanced systems and constantly update them to ensure that there is no unauthorized access.
                </p>

                <h3 className="mt-5">
                    Cookies
                </h3>
                <p>
                    A cookie refers to a file that is sent with the purpose of requesting permission to be stored on your computer. By accepting this file, a cookie is created, and it serves to have information about web traffic and also facilitates future visits to a recurring website. Another function of cookies is that websites can recognize you individually and therefore provide you with the best personalized service on their website.
                </p>
                <p>
                    Our website uses cookies to identify visited pages and their frequency. This information is used solely for statistical analysis, and then the information is permanently deleted. You can delete cookies at any time from your computer. However, cookies help provide a better service for websites. They do not give access to information from your computer or from you unless you want to provide it directly. You can accept or decline the use of cookies, but most browsers automatically accept cookies as it serves to have a better web service. You can also change your computer's settings to decline cookies. If you decline, you may not be able to use some of our services.
                </p>

                <h3 className="mt-5">
                    Third-Party Links
                </h3>
                <p>
                    This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site you are redirected to, and therefore we are not responsible for the terms or privacy or protection of your data on those other third-party sites. These sites are subject to their own privacy policies, so it is advisable to consult them to confirm that you agree to them.
                </p>

                <h3 className="mt-5">
                    Control of Your Personal Information
                </h3>
                <p>
                    At any time, you can restrict the collection or use of personal information provided to our website. Whenever you are asked to fill out a form, such as a user registration form, you can check or uncheck the option to receive information by email. If you have opted to receive our newsletter or advertising, you can cancel it at any time.
                </p>
                <p>
                    This company will not sell, assign, or distribute personal information collected without your consent, unless required by a judge with a court order.
                </p>

                <p className="mt-5">
                    We reserve the right to change the terms of this Privacy Policy at any time.
                </p>
            </div>
        </React.Fragment>
    );
};

export default PrivacySection;
