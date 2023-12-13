import { CONFIG } from "../data/config";

const {
    ANIMATION_SPEED,
    ANIMATION_COLOR_COMPARE,
    ANIMATION_COLOR_FOUND,
    ANIMATION_COLOR_SWAP,
    ANIMATION_COLOR_VERIFY,
} = CONFIG;

const addAnimItem = (animList, bar1Index, bar1Value, bar2Index, bar2Value, effect, enableVisualization) => {
    if (enableVisualization)
        animList.push({ bar1: { idx: bar1Index, val: bar1Value }, bar2: { idx: bar2Index, val: bar2Value }, effect: effect });
}

const playAnimation = (animList, enableVisualization) => {
    if (enableVisualization) {
        var arrayBars = document.getElementsByClassName("array-bar");

        // Operation Styles
        for (let i = 0; i < animList.length; i++) {
            setTimeout(() => {
                const bar1Style = arrayBars[animList[i].bar1.idx].style;
                const bar2Style = arrayBars[animList[i].bar2.idx].style;

                switch (animList[i].effect) {
                    case "compare":
                        bar1Style.backgroundColor = ANIMATION_COLOR_COMPARE;
                        bar2Style.backgroundColor = ANIMATION_COLOR_COMPARE;
                        break;

                    case "found":
                        bar1Style.backgroundColor = ANIMATION_COLOR_FOUND;
                        bar2Style.backgroundColor = ANIMATION_COLOR_FOUND;
                        break;

                    case "swap":
                        bar1Style.backgroundColor = ANIMATION_COLOR_SWAP;
                        bar2Style.backgroundColor = ANIMATION_COLOR_SWAP;
                        bar1Style.height = `${animList[i].bar1.val}px`;
                        bar2Style.height = `${animList[i].bar2.val}px`;
                        break;

                    default:
                        break;
                }
            }, i * ANIMATION_SPEED);
        }

        // Verify Styles
        for (let i = 0; i < animList.length; i++) {
            setTimeout(() => {
                const bar1Style = arrayBars[animList[i].bar1.idx].style;
                const bar2Style = arrayBars[animList[i].bar2.idx].style;
                bar1Style.backgroundColor = ANIMATION_COLOR_VERIFY;
                bar2Style.backgroundColor = ANIMATION_COLOR_VERIFY;
            }, (animList.length - 1 + i) * ANIMATION_SPEED);
        }
    }
}

export { addAnimItem, playAnimation }