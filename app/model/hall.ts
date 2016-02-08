//hal met gegevens
import {Item} from "./item";
export interface Hall {
    id: string,
    name: string;
    area: number;
    amountItems: number;
    amountItemsNeedAttention: number;
    itemsId: number[];
    dimensions: {
        startX: number;
        startY: number;
        width: number;
        height: number;
    }
}