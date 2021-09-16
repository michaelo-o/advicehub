import Link from 'next/link'
import Advices from '../../advicedata/Advices.json'


const PageNav = () => {
    return (
        <>
                <div className="pagenav">
                    <div className="leftpagenav">
                        <Link href="/recent">
                            <a><h3>Recent</h3></a>
                        </Link>
                        <Link href="/oldest">
                            <a><h3>Oldest</h3></a>
                        </Link>
                        <Link href="/upvoted">
                            <a><h3>Upvoted</h3></a>
                        </Link>
                        <Link href="/bookmarks">
                            <a><h3>Bookmarks</h3></a>
                        </Link>
                    </div>
                    <div className="rightpagenav">
                        <form>
                            <select>
                                <option value="general">Category</option>
                                <option value="tech">tech</option>
                                <option value="mobile">tech</option>
                                <option value="land">tech</option>
                            </select>
                        </form>
                    </div>
                </div>







        </>
    );
}

export default PageNav;