import { useState } from "react";

export default function Dist() {
    const [dist, setDist] = useState("moon");
    return (
        <div className="dist main">
            <div className="container">
                <div className="data">
                    <h1 className="title">
                        <span>01</span>
                        Pick your destination
                    </h1>
                    <div className="about">
                        <div className="img">
                            <img
                                src={`/assets/destination/image-${dist}.webp`}
                                alt=""
                            />
                        </div>
                        <div className="nav">
                            <div className="dest">
                                <ul>
                                    <li
                                        onClick={() => setDist("moon")}
                                        className={
                                            dist === "moon" ? "active" : ""
                                        }
                                    >
                                        Moon
                                    </li>
                                    <li
                                        onClick={() => setDist("mars")}
                                        className={
                                            dist === "mars" ? "active" : ""
                                        }
                                    >
                                        Mars
                                    </li>
                                    <li
                                        onClick={() => setDist("europa")}
                                        className={
                                            dist === "europa" ? "active" : ""
                                        }
                                    >
                                        Europa
                                    </li>
                                    <li
                                        onClick={() => setDist("titan")}
                                        className={
                                            dist === "titan" ? "active" : ""
                                        }
                                    >
                                        Titan
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="moon planet"
                                style={{
                                    display: dist === "moon" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="location">MOON</p>
                                    <p className="details">
                                        See our planet as you&apos;ve never seen
                                        it before. A perfect relaxing trip away
                                        to help regain perspective and come back
                                        refreshed. While you&apos;re there, take
                                        in some history by visiting the Luna 2
                                        and Apollo 11 landing sites.
                                    </p>
                                </div>
                                <hr />
                                <div className="long">
                                    <div className="distance">
                                        <p className="avg">AVG. Distance</p>
                                        <p className="length">384,400 km</p>
                                    </div>
                                    <div className="time">
                                        <p className="avg">Est. travel time</p>
                                        <p className="length">3 Days</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mars  planet"
                                style={{
                                    display: dist === "mars" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="location">Mars</p>
                                    <p className="details">
                                        Don&apos;t forget to pack your hiking
                                        boots. You&apos;ll need them to tackle
                                        Olympus Mons, the tallest planetary
                                        mountain in our solar system. It&apos;s
                                        two and a half times the size of
                                        Everest!
                                    </p>
                                </div>
                                <hr />
                                <div className="long">
                                    <div className="distance">
                                        <p className="avg">AVG. Distance</p>
                                        <p className="length">225 MIL. km</p>
                                    </div>
                                    <div className="time">
                                        <p className="avg">Est. travel time</p>
                                        <p className="length">9 months</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="europa  planet"
                                style={{
                                    display:
                                        dist === "europa" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="location">EUROPA</p>
                                    <p className="details">
                                        The smallest of the four Galilean moons
                                        orbiting Jupiter, Europa is a winter
                                        lover&apos;s dream. With an icy surface,
                                        it&apos;s perfect for a bit of ice
                                        skating, curling, hockey, or simple
                                        relaxation in your snug wintery cabin.
                                    </p>
                                </div>
                                <hr />
                                <div className="long">
                                    <div className="distance">
                                        <p className="avg">AVG. Distance</p>
                                        <p className="length">628 MIL. km</p>
                                    </div>
                                    <div className="time">
                                        <p className="avg">Est. travel time</p>
                                        <p className="length">3 years</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="titan planet"
                                style={{
                                    display:
                                        dist === "titan" ? "flex" : "none",
                                }}
                            >
                                <div className="info">
                                    <p className="location">TITAN</p>
                                    <p className="details">
                                        The only moon known to have a dense
                                        atmosphere other than Earth, Titan is a
                                        home away from home (just a few hundred
                                        degrees colder!). As a bonus, you get
                                        striking views of the Rings of Saturn.
                                    </p>
                                </div>
                                <hr />
                                <div className="long">
                                    <div className="distance">
                                        <p className="avg">AVG. Distance</p>
                                        <p className="length">1.6 BIL. km</p>
                                    </div>
                                    <div className="time">
                                        <p className="avg">Est. travel time</p>
                                        <p className="length">7 years</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
