import {useNavigate, useRouteError} from "react-router-dom";
import "../../styles/page/error.scss"
import {useLayoutEffect, useRef} from "react";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    const cordCanvas = useRef<HTMLCanvasElement>(null)
    useLayoutEffect(() => {
        if(cordCanvas.current) {
            const canvas = cordCanvas.current as HTMLCanvasElement
            const ctx= canvas.getContext('2d')
            const data = {
                    y1: 160,
                    y2: 100,
                    y3: 100,
                }
            const cond = {
                    y1Forward: true,
                    y2Forward: false,
                    y3Forward: true,
                }
            const animate = () => {
                requestAnimationFrame(animate as FrameRequestCallback);
                if(ctx) {
                    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    ctx.beginPath();
                    ctx.moveTo(130, 170);
                    ctx.bezierCurveTo(250, data.y1, 345, data.y2, 400, data.y3);

                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 8;
                    ctx.stroke();

                }
                if (data.y1 === 100) {
                    cond.y1Forward = true;
                }
                if (data.y1 === 300) {
                    cond.y1Forward = false;
                }
                if (data.y2 === 100) {
                    cond.y2Forward = true;
                }
                if (data.y2 === 310) {
                    cond.y2Forward = false;
                }
                if (data.y3 === 100) {
                    cond.y3Forward = true;
                }
                if (data.y3 === 317) {
                    cond.y3Forward = false;
                }

                cond.y1Forward ? data.y1 += 1 : data.y1 -= 1;
                cond.y2Forward ? data.y2 += 1 : data.y2 -= 1;
                cond.y3Forward ? data.y3 += 1 : data.y3 -= 1;
            };
            const drawVisor = () => {
                const canvas = document.getElementById('visor') as HTMLCanvasElement;
                if(canvas) {
                    const ctx = canvas.getContext('2d');
                    if(ctx) {
                        ctx.beginPath();
                        ctx.moveTo(5, 45);
                        ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);

                        ctx.lineTo(55, 20);
                        ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);

                        ctx.lineTo(15, 10);

                        ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
                        ctx.lineTo(5, 45);

                        ctx.fillStyle = '#2f3640';
                        ctx.strokeStyle = '#f5f6fa';
                        ctx.fill();
                        ctx.stroke();
                    }
                }
            }
            const run = () => {
                drawVisor();
                animate();
            };
            run()
        }

    }, [cordCanvas])
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="error-page">
            <div className="moon"></div>
            <div className="moon__crater moon__crater1"></div>
            <div className="moon__crater moon__crater2"></div>
            <div className="moon__crater moon__crater3"></div>

            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <div className="star star5"></div>

            <div className="error">
                <div className="error__title">404</div>
                <div className="error__subtitle">Hmmm...</div>
                <div className="error__description">It looks like one of the developers fell asleep</div>
                <button className="error__button error__button--active" onClick={handleBack}>Come Back</button>
            </div>

            <div className="astronaut">
                <div className="astronaut__backpack"></div>
                <div className="astronaut__body"></div>
                <div className="astronaut__body__chest"></div>
                <div className="astronaut__arm-left1"></div>
                <div className="astronaut__arm-left2"></div>
                <div className="astronaut__arm-right1"></div>
                <div className="astronaut__arm-right2"></div>
                <div className="astronaut__arm-thumb-left"></div>
                <div className="astronaut__arm-thumb-right"></div>
                <div className="astronaut__leg-left"></div>
                <div className="astronaut__leg-right"></div>
                <div className="astronaut__foot-left"></div>
                <div className="astronaut__foot-right"></div>
                <div className="astronaut__wrist-left"></div>
                <div className="astronaut__wrist-right"></div>

                <div className="astronaut__cord">
                    <canvas ref={cordCanvas} id="cord" height="500px" width="500px"></canvas>
                </div>

                <div className="astronaut__head">
                    <canvas id="visor" width="60px" height="60px"></canvas>
                    <div className="astronaut__head-visor-flare1"></div>
                    <div className="astronaut__head-visor-flare2"></div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage