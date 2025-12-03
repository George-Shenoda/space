import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleDivClick = () => {
        // Perform any other logic here if needed
        navigate("/space/destination"); // Navigate to the specified route
    };
    return (
        <div className="home main">
            <div className="container">
                <div className="data">
                    <div className="info">
                        <h1>So, you want to travel to</h1>
                        <p className="space">Space</p>
                        <p className="text">
                            Let&apos;s face it; if you want to go to space, you
                            might as well genuinely go to outer space and not
                            hover kind of on the edge of it. Well sit back, and
                            relax because we&apos;ll give you a truly out of
                            this world experience!
                        </p>
                    </div>
                    <div className="explore">
                        <div className="circle" onClick={handleDivClick}>
                            <div className="overlay"></div>
                            <div className="text">
                                <p>Explore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
