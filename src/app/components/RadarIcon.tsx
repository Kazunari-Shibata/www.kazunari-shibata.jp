export function RadarIcon() {
    return (
        <>
            <span className="radar_icon"></span>
            <style jsx>
                {`
                    .radar_icon {
                        position: relative;
                        display: block;
                        width: 10px;
                        height: 10px;

                        &::before,
                        &::after {
                            content: '';
                            position: absolute;
                            background: var(--active_color);
                            border-radius: 50px;
                            width: 8px;
                            height: 8px;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                        &::after {
                            animation: circle_scale 3s infinite;
                        }
                    }
                    @keyframes circle_scale {
                        0% {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(1);
                        }
                        20% {
                            opacity: 0.5;
                        }
                        40% {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(3);
                        }
                        100% {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(1);
                        }
                    }
                `}
            </style>
        </>
    );
}
