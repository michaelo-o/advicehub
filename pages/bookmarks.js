import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import PageNav from './components/pagenav';
import ReactPaginate from 'react-paginate';;


const Bookmarks = () => {
    return (
        <>
            <Head>
                <title>Advice Hub - Bookmarks</title>
            </Head>
            <PageNav />
            <h2>Bookmarks</h2>


        </>);
}

export default Bookmarks;