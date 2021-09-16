import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import PageNav from './components/pagenav';
import Advices from '../advicedata/Advices.json'
import ReactPaginate from 'react-paginate';


const Oldest = () => {


    return (
        <>
            <Head>
                <title>Advice Hub - Oldest</title>
            </Head>
            <PageNav />
            <div className="grid">
                <div className="blog-list">
                    <div className="blogcont">
                        <h1>Oldest</h1>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Oldest;