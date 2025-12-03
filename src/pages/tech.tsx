import { useState } from "react";

export default function Tech() {
    const [dist, setDist] = useState("launch-vehicle");
    console.log(window.innerWidth < 769);
    return (
        <div className="tech main">
            <div className="container">
                {" "}
                <div className="data">
                    <h1 className="title">
                        <span>03</span>
                        SPACE LAUNCH 101
                    </h1>
                    <div className="about">
                        <div className="dest">
                            <ul>
                                <li
                                    onClick={() => setDist("launch-vehicle")}
                                    className={
                                        dist === "launch-vehicle"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    1
                                </li>
                                <li
                                    onClick={() => setDist("spaceport")}
                                    className={
                                        dist === "spaceport" ? "active" : ""
                                    }
                                >
                                    2
                                </li>
                                <li
                                    onClick={() => setDist("space-capsule")}
                                    className={
                                        dist === "space-capsule" ? "active" : ""
                                    }
                                >
                                    3
                                </li>
                            </ul>
                        </div>
                        <div className="nav">
                            <div
                                className="planet"
                                style={{
                                    display:
                                        dist === "launch-vehicle"
                                            ? "flex"
                                            : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="position">Commander</p>
                                    <p className="name">launch-vehicle</p>
                                    <p className="details">
                                        A launch vehicle or carrier rocket is a
                                        rocket-propelled vehicle used to carry a
                                        payload from Earth's surface to space,
                                        usually to Earth orbit or beyond. Our
                                        WEB-X carrier rocket is the most
                                        powerful in operation. Standing 150
                                        metres tall, it's quite an awe-inspiring
                                        sight on the launch pad!
                                    </p>
                                </div>
                            </div>
                            <div
                                className="planet"
                                style={{
                                    display:
                                        dist === "spaceport" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="position">THE TERMINOLOGY…</p>
                                    <p className="name">SPACEPORT</p>
                                    <p className="details">
                                        A spaceport or cosmodrome is a site for
                                        launching (or receiving) spacecraft, by
                                        analogy to the seaport for ships or
                                        airport for aircraft. Based in the
                                        famous Cape Canaveral, our spaceport is
                                        ideally situated to take advantage of
                                        the Earth’s rotation for launch.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="planet"
                                style={{
                                    display:
                                        dist === "space-capsule"
                                            ? "flex"
                                            : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="position">THE TERMINOLOGY…</p>
                                    <p className="name">SPACE CAPSULE</p>
                                    <p className="details">
                                        A space capsule is an often-crewed
                                        spacecraft that uses a blunt-body
                                        reentry capsule to reenter the Earth's
                                        atmosphere without wings. Our capsule is
                                        where you'll spend your time during the
                                        flight. It includes a space gym, cinema,
                                        and plenty of other activities to keep
                                        you entertained.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="img">
                            <img
                                src={`/assets/technology/image-${dist}-${window.innerWidth > 769 ? "portrait" : "landscape"}.jpg`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
