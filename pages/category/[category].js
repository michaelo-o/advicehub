import Advices from '../../advicedata/Advices.json'
import { useRouter } from 'next/router'
import Head from 'next/dist/shared/lib/head'
import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import PageNav from '../components/pagenav'

const Category = () => {

    const router = useRouter()
    const { category } = router.query
    const adviceCat = category

    const advice = Advices

    return (
        <>
            <Head>
                <title>Category - {adviceCat} - Advice Hub Clone</title>
            </Head>
            <PageNav />
            <div className="advice-list">
                <div className="advicecont">
                    {advice.filter((thisAdvice) => {
                        if (thisAdvice.category === adviceCat) { // Changed this so an advice would match
                            return thisAdvice;
                        }
                    }).map(advice => (
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
                </div>
            </div>

        </>
    );
}

export default Category;