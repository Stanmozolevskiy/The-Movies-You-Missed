import React from 'react'
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";


const RatingCircle = ({ rating, className }) => {
    return (
        <AnimatedProgressProvider

            valueStart={0}
            valueEnd={rating * 10}
            duration={0.9}
            easingFunction={easeQuadInOut}
        >
            {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbar className={className}
                        value={value}
                        text={`${roundedValue}%`}
                        strokeWidth={7}
                        styles={buildStyles({
                            pathTransition: "none",
                            trailColor: 'white',
                            pathColor: 'gold'
                        })}
                    />
                );
            }}
        </AnimatedProgressProvider>

    );
}

export default RatingCircle;