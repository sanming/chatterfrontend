import {Category} from './enumCategory';
import {ActionType} from './enumActionType';

//item met gegevens
export interface Item {
    category: Category;
    name: string;
    productNo: number;
    description: string;
    hallId: string;
    lastPerformedAction: {
        date: Date;
        type: ActionType;
        description: string;
    };
    nextAction: {
        date: Date;
        type: ActionType;
        description: string;
    };
    location: {
        startX: number;
        startY: number;
    }
}
