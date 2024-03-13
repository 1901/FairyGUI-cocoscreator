/// <reference path="../lib/cc.d.ts" />
import { EditBox, HorizontalTextAlignment, VerticalTextAlignment } from "cc";
import { GTextField } from "./GTextField";
import { ByteBuffer } from "./utils/ByteBuffer";
export declare class GTextInput extends GTextField {
    _editBox: EditBox;
    private _promptText;
    constructor();
    protected createRenderer(): void;
    set editable(val: boolean);
    get editable(): boolean;
    set maxLength(val: number);
    get maxLength(): number;
    set promptText(val: string | null);
    get promptText(): string | null;
    set restrict(value: string | null);
    get restrict(): string | null;
    get password(): boolean;
    set password(val: boolean);
    get align(): HorizontalTextAlignment;
    set align(value: HorizontalTextAlignment);
    get verticalAlign(): VerticalTextAlignment;
    set verticalAlign(value: VerticalTextAlignment);
    get singleLine(): boolean;
    set singleLine(value: boolean);
    requestFocus(): void;
    protected markSizeChanged(): void;
    protected updateText(): void;
    protected updateFont(): void;
    protected updateFontColor(): void;
    protected updateFontSize(): void;
    protected updateOverflow(): void;
    private onTextChanged;
    private onTouchEnd1;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
}
