/// <reference path="../lib/cc.d.ts" />
import { AssetManager, Color, Font } from "cc";
export declare class UIConfig {
    constructor();
    static defaultFont: string;
    static windowModalWaiting: string;
    static globalModalWaiting: string;
    static modalLayerColor: Color;
    static buttonSound: string;
    static buttonSoundVolumeScale: number;
    static horizontalScrollBar: string;
    static verticalScrollBar: string;
    static defaultScrollStep: number;
    static defaultScrollDecelerationRate: number;
    static defaultScrollBarDisplay: number;
    static defaultScrollTouchEffect: boolean;
    static defaultScrollBounceEffect: boolean;
    static popupMenu: string;
    static popupMenu_seperator: string;
    static loaderErrorSign: string;
    static tooltipsWin: string;
    static defaultComboBoxVisibleItemCount: number;
    static touchScrollSensitivity: number;
    static loaderAssetsBundleName: string;
    static touchDragSensitivity: number;
    static clickDragSensitivity: number;
    static bringWindowToFrontOnClick: boolean;
    static frameTimeForAsyncUIConstruction: number;
    static linkUnderline: boolean;
    static defaultUILayer: number;
}
export declare function registerFont(name: string, font: Font | string, bundle?: AssetManager.Bundle): void;
export declare function getFontByName(name: string): Font;
