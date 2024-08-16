import Webcam from "react-webcam";
import { useRef, useState } from "react";

const WebCamTest = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const webcamRef = useRef(null);

    // 사용자 에이전트를 기반으로 모바일 장치인지 확인
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
    };

    return (
        <>
            {imageSrc === null ? (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={400}
                    height={300}
                    videoConstraints={
                        isMobileDevice
                            ? { facingMode: { exact: "environment" } } // 모바일일 경우 후면 카메라
                            : {} // 데스크탑일 경우 기본 설정
                    }
                />
            ) : (
                <img src={imageSrc} alt="Captured" style={{ width: '300px', height: 'auto' }} />
            )}
            <div>
                <button onClick={capture}>촬영하기</button>
            </div>
        </>
    );
};

export default WebCamTest;
