import Link from "next/link";
import Image from "next/dist/client/image";

const Navbar = () => {

    function submit(event) {
        event.preventDefault();
        console.log("search sumitted");
    }


    return (
        <>
            <nav className="navbar">
                <Link href="/"><a><h2>Advice Blog (Currently in the works)</h2></a></Link>
                <div className="links">
                    <Link href="/newblog" >
                        <a><h3 className="newblogbutton">+ New Advice</h3></a>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
