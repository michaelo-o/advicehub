import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import PageNav from './components/pagenav';
import Advices from '../advicedata/Advices.json'
import ReactPaginate from 'react-paginate';



const Recent = () => {
    const [pageNumber, setpageNumber] = useState(0)
    const advicesPerPage = 24
    const pagesVisited = pageNumber * advicesPerPage


    const pageCount = Math.ceil(Advices.length / advicesPerPage)

    const changePage = ({ selected }) => { //selected is a ReactPaginate object-it is the number for the page we want to move to
        { setpageNumber(selected) };
    }

    return (
        <>
            <Head>
                <title>Advice Hub - Recent</title>
            </Head>
            <PageNav />
            <div className="advice-list">
                <div className="advicecont">
                    {Advices.slice(pagesVisited, pagesVisited + advicesPerPage).map(advice => (
                        <div className="advice-preview" key={advice.id}>
                            <div className="picandbookmark">
                                <div className="pic">
                                    O
                                </div>
                                <div className="bookmark">
                                    <button><Image src="/turned_in_not-1.svg" alt="user" width={23} height={23} /></button>
                                </div>
                            </div>
                            <Link href={"/category/" + advice.category}>
                                <a><p className="list-category">• {advice.category}</p></a>
                            </Link>


                            <div className="titlelist">
                                <Link href={"/advice/" + advice.id}>
                                    <a><h3 className="title">{advice?.title}</h3></a>
                                </Link>
                            </div>

                            <div className="dateandtime">
                                <p>Given {advice.date} at {advice.time}</p>
                            </div>
                            <div className="com-vot-share">
                                <button><Image src="/arrow_upward-1.svg" alt="user" width={23} height={23} /></button>
                                <button><Image src="/chat-1.svg" alt="user" width={23} height={23} /></button>
                                <button><Image src="/share-1.svg" alt="user" width={23} height={23} /></button>
                                <button><Image src="/arrow_downward-1.svg" alt="user" width={23} height={23} /></button>
                            </div>
                        </div>
                    )

                    )}
                    {

                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            //this is where the classname for the styles go
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />}
                </div>
            </div>
        </>
    );
}

export default Recent;