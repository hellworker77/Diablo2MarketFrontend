import {ItemRarityEnum} from "../types/models/enums/ItemRarityEnum";

export const rarityToColorConverter = (rarity: ItemRarityEnum | undefined) : string =>{
    let color = "#B6B7B4";

    if(rarity === ItemRarityEnum.Magic) {
        color = "#3A386F";
    }

    if(rarity === ItemRarityEnum.Rare){
        color = "#C7C681";
    }

    if(rarity === ItemRarityEnum.Legend){
        color = "#B4AC9A";
    }

    if(rarity === ItemRarityEnum.Set) {
        color = "#20D00D"
    }

    if(rarity === ItemRarityEnum.RuneWord){
        color = "#867A55"
    }

    return color;
}