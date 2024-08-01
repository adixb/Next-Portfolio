'use client';

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/NavBar";
import { MultiStepLoaderDemo } from '../../components/Loader';
import Head from 'next/head'; // Import Head from next/head

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Aditya Bhattacharjee Dev",
  description: "Dev Portfolio",
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    // Simulate loading completion after a delay
    const timer = setTimeout(() => {
      if (!buttonClicked) {
        setLoading(false);
      }
    }, 16000); // Adjust delay time as needed

    return () => clearTimeout(timer);
  }, [buttonClicked]);

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title> {/* Set the title */}
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" /> {/* Default favicon */}
      </Head>
      <body className={inter.className}>
        {loading ? (
          <MultiStepLoaderDemo setButtonClicked={setButtonClicked} />
        ) : (
          <>
            <NavBar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
