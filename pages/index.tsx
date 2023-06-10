import React from "react";
import Head from "next/head";
import Portfolio from "./portfolio";

export default function home() {
  return (
    <>
      <Head>
        <title>Codedamn Frontend Assessment</title>
        <meta name="description" content="Bleep boop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Portfolio />
      </div>
    </>
  );
}
