import '../../css/AnimationTest.css'
import {useEffect, useState} from "react";

const AnimationTest = () => {
    const [doorStatus, setDoorStatus] = useState("close");
    const [timer, setTimer] = useState(0);
    const [positionX, setPositionX] = useState(-10);
    const [positionY, setPositionY] = useState(-80);
    const [angle, setAngle] = useState(0);
    const [direction, setDirection] = useState(1);
    const startSecond = 30;
    const roomieSecond = 20;
    const doorSecond = startSecond - 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1);
        }, 50);
        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {

        setDoorStatus(() => {
            if (timer <= doorSecond) {
                return "close";
            } else {
                return "open";
            }
        })

        setAngle(prev => {

            if (timer === 0) {
                return prev + 25;
            } else if (timer === startSecond + 32) {
                return 0;
            } else {
                return prev;
            }
        })

        setPositionX(prev => {

            if (timer <= startSecond) {
                return prev;
            } else if (timer <= startSecond + 32) {
                if (timer >= startSecond + 15) {
                    return prev - 4;
                }

                return prev + 4;
            } else if (timer <= startSecond + 80) {
                return prev + 3;
            } else {
                return prev;
            }
        })
    }, [timer]);

    return (
        <div className="image-container">
            <img
                src={timer <= startSecond + 32 ? `/루미삼분의일쪽.png` :
                    timer <= startSecond + roomieSecond + 32 ? `/루미좌우반전반갈죽.png` :
                        `/루미좌우반전.png`}
                alt="img not found"
                style={{transform: `translate(${positionX}px, ${positionY}px) rotate(${angle}deg)`}}
                className="roomie"
            />

            <div className="door-area">
                <img src="/닫힌문-배경없.png" alt="img not found" className={`door-closed ${doorStatus}`}/>
                <img src="/문틀왼쪽.png" alt="img not found" className={`door-frame-left ${doorStatus}`}/>
                <img src="/문틀오른쪽.png" alt="img not found" className={`door-frame-right ${doorStatus}`}/>
                <img src="/열린문짝.png" alt="img not found" className={`door-panel ${doorStatus}`}/>
            </div>
        </div>
    );
}

export default AnimationTest