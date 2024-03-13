/// <reference path="../lib/cc.d.ts" />
import { Color } from "cc";
import { GComponent } from "./GComponent";
import { GObject } from "./GObject";
import { GTextField } from "./GTextField";
import { ByteBuffer } from "./utils/ByteBuffer";
export declare class GLabel extends GComponent {
    protected _titleObject: GObject;
    protected _iconObject: GObject;
    private _sound;
    private _soundVolumeScale;
    constructor();
    get icon(): string | null;
    set icon(value: string | null);
    get title(): string | null;
    set title(value: string | null);
    get text(): string | null;
    set text(value: string | null);
    get titleColor(): Color;
    set titleColor(value: Color);
    get titleFontSize(): number;
    set titleFontSize(value: number);
    set editable(val: boolean);
    get editable(): boolean;
    getTextField(): GTextField;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    protected constructExtension(buffer: ByteBuffer): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    private onClick_1;
}
