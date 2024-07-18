import '../../css/AnimationTest.css'
import {useEffect, useState} from "react";

const AnimationTest = () => {
    const [isReady, setIsReady] = useState(false);
    const [timer, setTimer] = useState(0);
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [angle, setAngle] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1);
        }, 50);
        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        setAngle(prev => {
            if (timer <= 32) {
                if (timer >= 15) {
                    setDirection(-1);
                }

                return prev + direction * 4;
            } else {
                return prev;
            }
        })
    }, [timer]);

    // useEffect(() => {
    //     setPositionX(prev => {
    //         if (prev >= 300) {
    //             setDirection(-1);
    //         } else if (prev <= 0) {
    //             setDirection(1);
    //         }
    //         return prev + direction * 5;
    //     });
    // }, [timer]);

    return (
        <div className="image-container">
            <img
                src="/roomie.png"
                alt="img not found"
                style={{transform: `translate(${positionX}px, ${positionY}px) rotate(${angle}deg)`}}
                className={"roomie"}
            />
        </div>
    );
}

export default AnimationTest