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

## UIPackage.ts
- UIPackage 加载资源时，会将包里所有的资源都加载进来。但为了内存考虑，有些资源可以不加载或者暂时不加载，这里的修改就是为处理这个，详细的修改逻辑见代码和注释。

```diff
diff --git forkSrcPrefix/source/src/UIPackage.ts forkDstPrefix/source/src/UIPackage.ts
index 800b9fc2b472913aeeca52b6df196a5715769b55..647d9626a8b0f669d43a86654d9dcb80b332138a 100644
--- forkSrcPrefix/source/src/UIPackage.ts
+++ forkDstPrefix/source/src/UIPackage.ts
@@ -157,9 +157,40 @@ export class UIPackage {
             let cnt: number = pkg._items.length;
             let urls: Array<string> = [];
             let types: Array<any> = [];
+            let aloneTexs: Array<string> = [];
             for (var i: number = 0; i < cnt; i++) {
                 var pi: PackageItem = pkg._items[i];
+                // 优化内存处理：
+                //   - 将独立的贴图过滤掉不在这里加载，等需要使用的时候通过其他途径加载
+                //   - 如果包有分支，则只加载主干和当前分支的资源
+                // ===== 找出独立的贴图资源 =====
+                if (pi.type == PackageItemType.Image) {
+                    const as = pkg._sprites[pi.id];
+                    if (as.rect.x == 0 && as.rect.y == 0 &&
+                        as.rect.width == as.atlas.width &&
+                        as.rect.height == as.atlas.height) {
+                        // 记录单独的贴图，并且该 Image 也不用加载
+                        aloneTexs.push(as.atlas.file);
+                        continue;
+                    }
+                }
+                // ====================
+
                 if (pi.type == PackageItemType.Atlas || pi.type == PackageItemType.Sound) {
+                    // ===== 分支处理 =====
+                    if (pkg._branches && pkg._branches.length > 0) {
+                        // 当包有分支时，只加载主干和当前分支的资源（当前分支：UIPackage.branch）
+                        let willLoad = pi.file.endsWith(pi.id);
+                        willLoad = willLoad || (UIPackage.branch != '' && pi.file.endsWith(UIPackage.branch));
+                        if (!willLoad)
+                            continue;
+                    }
+
+                    // 独立的贴图不在这里加载
+                    if (aloneTexs.indexOf(pi.file) >= 0)
+                        continue;
+                    // ====================
+
                     let assetType = ItemTypeToAssetType[pi.type];
                     urls.push(pi.file);
                     types.push(assetType);

```


