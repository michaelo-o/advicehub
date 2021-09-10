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
                <div className="sitename">
                    <Link href="/"><a><h1 className="site-title">AdviceHub</h1></a></Link>
                </div>
                <div className="newADV">
                    <Link href="/newadvice" >
                        <a><h3 className="newadvicebutton">+ New Advice</h3></a>
                    </Link>
                </div>
                <div className="lightdark">
                    <Image src="/nightlight_round.png" alt="user" width={23} height={23} />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
