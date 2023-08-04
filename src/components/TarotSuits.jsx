import { CupsCards } from "./CupsCards"
import { PentaclesCards } from "./PentaclesCards"
import { SwordsCards } from "./SwordsCards"
import { WandsCards } from "./WandsCards"

export const TarotSuits = () => {

    return <div>
        <CupsCards />
        <SwordsCards />
        <PentaclesCards />
        <WandsCards />
    </div>
}