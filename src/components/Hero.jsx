import react, {useEffect, useRef} from 'react';

const Hero = () => {

    const videoRef = useRef();
    useEffect(() => {
        if (videoRef.current)videoRef.current.playbackRate =2;
    },[])
    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="title"/>
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay playsInline muted/>
            <button>Buy</button>
            <p>From $1599 or $133/mo fro 12 months</p>
        </section>
    )
}

export default Hero ;