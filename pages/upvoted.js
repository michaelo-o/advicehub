import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import PageNav from './components/pagenav';
import ReactPaginate from 'react-paginate';

const Upvoted = () => {
    return (
        <>
        <Head>
            <title>Advice Hub - Upvoted</title>
        </Head>
            <PageNav />
            <h2>Upvoted</h2>


        </>);
}

export default Upvoted;