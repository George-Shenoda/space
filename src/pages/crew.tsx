import { useState } from "react";

export default function Crew() {
    const [dist, setDist] = useState("commander");
    return (
        <div className="crew main">
            <div className="container">
                <div className="data">
                    <h1 className="title">
                        <span>02</span>
                        MEET YOUR CREW
                    </h1>
                    <div className="about">
                        <div className="nav">
                            <div
                                className="planet"
                                style={{
                                    display:
                                        dist === "commander" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="position">Commander</p>
                                    <p className="name">Douglas Hurley</p>
                                    <p className="details">
                                        Douglas Gerald Hurley is an American
                                        engineer, former Marine Corps pilot and
                                        former NASA astronaut. He launched into
                                        space for the third time as commander of
                                        Crew Dragon Demo-2.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="planet"
                                style={{
                                    display:
                                        dist === "specialist" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="position">
                                        Mission Specialist
                                    </p>
                                    <p className="name">MARK SHUTTLEWORTH</p>
                                    <p className="details">
                                        Mark Richard Shuttleworth is the founder
                                        and CEO of Canonical, the company behind
                                        the Linux-based Ubuntu operating system.
                                        Shuttleworth became the first South
                                        African to travel to space as a space
                                        tourist.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="planet"
                                style={{
                                    display: dist === "pilot" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="position">PILOT</p>
                                    <p className="name">Victor Glover</p>
                                    <p className="details">
                                        Pilot on the first operational flight of
                                        the SpaceX Crew Dragon to the
                                        International Space Station. Glover is a
                                        commander in the U.S. Navy where he
                                        pilots an F/A-18.He was a crew member of
                                        Expedition 64, and served as a station
                                        systems flight engineer.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="planet"
                                style={{
                                    display:
                                        dist === "engineer" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="position">Flight Engineer</p>
                                    <p className="name">Anousheh Ansari</p>
                                    <p className="details">
                                        Anousheh Ansari is an Iranian American
                                        engineer and co-founder of Prodea
                                        Systems. Ansari was the fourth
                                        self-funded space tourist, the first
                                        self-funded woman to fly to the ISS, and
                                        the first Iranian in space.
                                    </p>
                                </div>
                            </div>
                            <div className="dest">
                                <ul>
                                    <li
                                        onClick={() => setDist("commander")}
                                        className={
                                            dist === "commander" ? "active" : ""
                                        }
                                    ></li>
                                    <li
                                        onClick={() => setDist("specialist")}
                                        className={
                                            dist === "specialist"
                                                ? "active"
                                                : ""
                                        }
                                    ></li>
                                    <li
                                        onClick={() => setDist("pilot")}
                                        className={
                                            dist === "pilot" ? "active" : ""
                                        }
                                    ></li>
                                    <li
                                        onClick={() => setDist("engineer")}
                                        className={
                                            dist === "engineer" ? "active" : ""
                                        }
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div className="img">
                            <img
                                src={`assets/crew/image-${dist}.png`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
