import whiteChicken from "../assets/coop/chickenWhite.png";
import brownChicken from "../assets/coop/chickenBrown.png";
import whiteChickenWithEgg from "../assets/coop/chickenWhiteEgg.png";
import brownChickenWithEgg from "../assets/coop/chickenBrownEgg.png";
import { ChickenColour } from "../types/ChickenColour"

export const chickenMoveInterval = 3000;
export const chickenLayInterval = 4000;
export const chickenSize = 48;
export const chickenCanvasSizeMultiplier = 10;
export const chickenCanvasSize = chickenSize * chickenCanvasSizeMultiplier;

export const getChickenImage = (chickenColour : ChickenColour, hasEgg : boolean) : string =>  {
    switch (chickenColour) {
        case ChickenColour.White:
            return hasEgg ? whiteChickenWithEgg : whiteChicken;
        case ChickenColour.Brown:
            return hasEgg ? brownChickenWithEgg : brownChicken;
    }
}
