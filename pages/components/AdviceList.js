import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Advices from '../../advicedata/Advices.json'
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

const Advicelist = () => {

    const [pageNumber, setpageNumber] = useState(0)
    const advicesPerPage = 24
    const pagesVisited = pageNumber * advicesPerPage


    const pageCount = Math.ceil(Advices.length / advicesPerPage)

    // const pageCount = 5
    const changePage = ({ selected }) => { //selected is a ReactPaginate object-it is the number for the page we want to move to
        { setpageNumber(selected) };
    }

    return (
        <>
            <div className="blog-list">
                <div className="blogcont">
                    {Advices.slice(pagesVisited, pagesVisited + advicesPerPage).map(advice => (
                        <div className="blog-preview" key={advice.id}>
                            <div className="picandbookmark">
                                <div className="pic">
                                    O
                                </div>
                                <div className="bookmark">
                                    <Image src="/bookmark.png" alt="user" width={20} height={20} />
                                </div>
                            </div>

                            <p>•
                                {advice.category}
                            </p>

                            <div className="titlelist">

                                <h3 className="title">{advice?.title}</h3>

                            </div>

                            <p>Written by {advice.author}</p>

                            <div className="dateandtime">
                                <p>Given {advice.date} at {advice.time}</p>
                            </div>
                        </div>
                    )

                    )}
                </div>
            </div>


        </>
    );
}

export default Advicelist;