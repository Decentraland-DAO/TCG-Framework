/**     FACTION TEXTURE DATA
 *  desc pending
 */

/** defines splice sheets in an easily changable manner */
export enum TEXTURE_SHEET_CARD_FACTIONS {
    TYPE_BACKGROUND_0,
    TYPE_BACKGROUND_1,
    TYPE_BACKGROUND_2,
}

/** data interface for defining a card type's texture sheet */
export interface CardFactionTextureDataObject {
    id:TEXTURE_SHEET_CARD_FACTIONS,     //sheet name
    path:string,    //sheet path
    sheetDetails: { 
        totalSizeX: number,     //total width of sheet
        totalSizeY: number,     //total height of sheet
        elementSizeX: number,   //width of each element
        elementSizeY: number,   //height of each element
    }
}

/** listing of all card splice sheets used by cards (this method allows for non-conformity between sheets) */
export const CardFactionTextureData: CardFactionTextureDataObject[] = [
    //### DEMO BACKGROUND SPLICE
    {
        id: TEXTURE_SHEET_CARD_FACTIONS.TYPE_BACKGROUND_0, //sheet name
        path:"images/tcg-framework/card-backgrounds/card-type-example-0.png",  //sheet path
        sheetDetails: { 
            totalSizeX: 512,      //total width of sheet
            totalSizeY: 512,      //total height of sheet
            elementSizeX: 256,  //width of each element
            elementSizeY: 512,  //height of each element
        }
    },
    {
        id: TEXTURE_SHEET_CARD_FACTIONS.TYPE_BACKGROUND_1, //sheet name
        path:"images/tcg-framework/card-backgrounds/card-type-example-1.png",  //sheet path
        sheetDetails: { totalSizeX: 512, totalSizeY: 512, elementSizeX: 256, elementSizeY: 512 }
    },
    {
        id: TEXTURE_SHEET_CARD_FACTIONS.TYPE_BACKGROUND_2, //sheet name
        path:"images/tcg-framework/card-backgrounds/card-type-example-2.png",  //sheet path
        sheetDetails: { totalSizeX: 512, totalSizeY: 512, elementSizeX: 256, elementSizeY: 512 }
    },
];