import Head from "next/head";

/**
 * Receive a react component from {children}, a title for the tab a description to be injected into the name
 * @param { Component, title, description } param0 
 * @returns 
 */
export default function Layout({children, title, description}) {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
        </Head>
        <h1>Desde el Layout</h1>
        {children}
    </>
  )
}
