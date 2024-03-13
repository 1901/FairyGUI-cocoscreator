/// <reference path="../lib/cc.d.ts" />
import { Color, Graphics, Vec2 } from "cc";
import { GObject } from "./GObject";
import { ByteBuffer } from "./utils/ByteBuffer";
export declare class GGraph extends GObject {
    _content: Graphics;
    private _type;
    private _lineSize;
    private _lineColor;
    private _fillColor;
    private _cornerRadius?;
    private _sides?;
    private _startAngle?;
    private _polygonPoints?;
    private _distances?;
    private _hasContent;
    constructor();
    drawRect(lineSize: number, lineColor: Color, fillColor: Color, corner?: Array<number>): void;
    drawEllipse(lineSize: number, lineColor: Color, fillColor: Color): void;
    drawRegularPolygon(lineSize: number, lineColor: Color, fillColor: Color, sides: number, startAngle?: number, distances?: number[]): void;
    drawPolygon(lineSize: number, lineColor: Color, fillColor: Color, points: Array<number>): void;
    get distances(): number[];
    set distances(value: number[]);
    clearGraphics(): void;
    get type(): number;
    get color(): Color;
    set color(value: Color);
    private updateGraph;
    private drawPath;
    protected handleSizeChanged(): void;
    protected handleAnchorChanged(): void;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    protected _hitTest(pt: Vec2): GObject;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
}
