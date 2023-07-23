import React from "react";
import { useEffect, useRef } from "react"
import { Chicken } from "../../../types/Chicken";
import { chickenSize, getChickenImage } from "../../../logic/ChickenValues";

interface ChickenCanvasProps {
    chickens: Chicken[];
    canvasWidth: number;
    canvasHeight: number;
}

export const ChickenCanvas = ({chickens, canvasWidth, canvasHeight} : ChickenCanvasProps) => {
    let canvasRef = useRef<HTMLCanvasElement | null>(null);
    let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext("2d");
            let ctx = canvasCtxRef.current;
            ctx!.clearRect(0, 0, canvasWidth, canvasHeight);
            chickens.forEach(chicken => {
                const imagePath = getChickenImage(chicken.colour, chicken.hasEgg);
                const image = new Image();
                image.src = imagePath;
                ctx!.drawImage(image, chicken.x, chicken.y, chickenSize, chickenSize);
            })
        }
    }, [chickens])

    return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
}