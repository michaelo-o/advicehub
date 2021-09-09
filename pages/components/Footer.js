import Link from "next/link";
const Footer = () => {
    return (
        <div className="footer">
            <div className="backtotop">
                <Link href="/">
                    <a>
                        <p>Back To Home/Top</p>
                    </a>
                </Link>
            </div>
            <div className="copyright">
                <p>© 2021 Copyright</p>
            </div>
            <div className="project">
                <p>
                    A Side Project by
                    <Link href="https://web.facebook.com/michael.okwuosah/">
                        <a target="_blank"> Michael Okwuosah</a>
                    </Link>
                </p>

                <p>
                    This is a clone of
                    <Link href="https://advicehub.tk/">
                        <a target="_blank"> Advice Hub.tk</a>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
