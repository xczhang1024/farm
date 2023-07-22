import { useEffect, useState } from "react";
import soil from "../../../assets/soil.png";
import { Crop } from "../../../types/Crop";

interface CropComponentProps {
    soilIndex: string;
    crop: Crop;
    onHarvestedCallback: (crop : Crop) => void;
}

export const CropComponent = ({soilIndex, crop, onHarvestedCallback} : CropComponentProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [isFullyGrown, setIsFullyGrown] = useState<boolean>(false);
    const [isHarvested, setIsHarvested] = useState<boolean>(false);

    const growthInterval: number = 4000;

    useEffect(() => {
        const interval = setInterval(() => {
           const nextIndex = imageIndex + 1;
           if (nextIndex >= crop.cycle.length) {
            // Fully grown - stop
            setIsFullyGrown(true);
            clearInterval(interval);
           } else {
            // Grow another cycle
            setImageIndex(nextIndex);
           }
        }, growthInterval);

        return () => clearInterval(interval);
    })

    const onClickToHarvest = () => {
        if (isFullyGrown) {
            setIsHarvested(true);
            onHarvestedCallback(crop);
        }
    }

    const getContent = () => {
        if (isHarvested) {
            return <img src={soil} key={`soil-${soilIndex}`} alt={`soil-${soilIndex}`}/>
        }
        return <img 
            onClick={onClickToHarvest}
            src={crop.cycle[imageIndex]} 
            key={`crop-${soilIndex}`} 
            alt={`${crop.name}-${imageIndex}`} />
    }

    return <>
        {getContent()}
    </>
}