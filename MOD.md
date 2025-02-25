# Modified

为了适应项目需求，对原版本做出了以下改动：
- 修改 `FairyGUI.ts` 导出 `GPath`/`GPathPoint`/`TweenManager`

## GRichTextField.ts
- 修改 `GRichTextField.ts` 文件处理富文本的描边问题
- 文字显示偏上的问题，重写了`handlePositionChanged` 方法，重新设置了一下位置信息

## ScrollPane.ts
- 去掉 isMobile 的逻辑判断，处理在有些手机设备上滑动没有惯性的问题
```diff
- // var isMobile: boolean = sys.isMobile;
+ var isMobile: boolean = false;
```