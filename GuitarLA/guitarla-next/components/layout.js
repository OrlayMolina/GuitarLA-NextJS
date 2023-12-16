import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

/**
 * Receive a react component from {children}, a title for the tab a description to be injected into the content
 * @param { Component, title, description } param0 
 * @returns 
 */
export default function Layout({children, title = '', description = ''}) {
    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>

            <Header/>
            
            {children}

            <Footer/>
        </>
    )
}
