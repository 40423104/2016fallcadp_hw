var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","url":"./pages/about/","tags":"misc","title":"About"},{"text":"Onshape 作業 W1 20161110 ONSHAPE-1 from Yan syuan on Vimeo . 1. W3 20161110 Onshape-1 from Yan syuan on Vimeo . 20161110 Onshape from Yan syuan on Vimeo . W4 W4 from Yan syuan on Vimeo . W5 W5 from Yan syuan on Vimeo . W6 W6 from Yan syuan on Vimeo .","url":"./2016fall-1208-onshape.html","tags":"2016fallcadp_hw","title":"2016Fall 12/08 Onshape"},{"text":"有關 Solvespace 零件, 組件, 機構模擬等功能介紹, 程式編譯與 API 延伸 Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory(引導性) tutorial(教程) is available(有用的), in which we draw the 'same part'(同一部分) that is shown in the 'demo video'(演示視頻). This covers most of the 'basic features'(基本功能) of SolveSpace, including sketches(草圖), constraints(約束), extrusions(擠出), and 'Boolean operations'(布爾運算). When we 'first run'(運行) SolveSpace, we will begin with an 'empty part'(空的部分). Initially, our 'view of'(視圖的) the part will be 'oriented onto'(面向上) the XY plane(平面); the label(標籤) for that plane is displayed(顯示的) at the 'bottom left'(左下角) of the screen(屏幕) (#XY, in dark grey). The axes(軸) are also indicated(指示) by the three colored arrows(箭頭) at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively(分別地). When we 'hover the mouse'(將滑鼠懸停) over any entity(實體), constraint, or other object(目標) in the sketch(草圖), that object will appear highlighted(突出) in yellow. For example, the XY plane, which is drawn as a dashed(虛線) square(正方形), will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially(最初) look like dashed lines, because they are 'being viewed on'(正在查看) edge(邊); but they still appear highlighted in yellow when we hold the mouse over them. It is similarly(類似的) possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). 翻譯: 我們提供了一個引導性教程，其中我們繪製演示視頻中表示的相同部分。 這涵蓋了 SolveSpace 的大部分基本功能，包括草圖、約束、擠出和布爾運算。 當我們首次運行SolveSpace時，我們將從一個空的部分開始。 最初，我們零件的視圖將被定向到XY平面上; 該平面的標籤顯示在屏幕的左下角（XY，深灰色）。 軸也由左下角的三個彩色箭頭指示: X、Y和Z軸分別繪製為紅色、綠色和藍色。 當我們將滑鼠懸停在草圖中的任何實體，約束或其他目標上時，該目標將以黃色突出顯示。 例如，當我們將滑鼠懸停在其上時，繪製為虛線正方形的XY平面將突出顯示。 YZ和ZX平面最初看起來像虛線，因為它們被邊查看; 但是當我們把鼠標放在他們上面時，它們仍然顯示為黃色。 同樣可以突出顯示X、Y和Z軸（以箭頭繪製）或原點（像所有點都繪製為綠色方塊）。 Extrude (平行長出或除料) Lathe (旋轉繞行長出或除料) 2016-12-01 22-41-29迴轉 from Yan syuan on Vimeo . 零組件繪圖練習 W12 組立","url":"./2016fall-1124-solvespace.html","tags":"2016fallcadp_hw","title":"2016Fall 11/24 Solvespace"},{"text":"有關 Solvespace 機構模擬功能介紹, 與 Python3 及 Brython 程式驗證 影片繪圖 20161128 005459 from Yan syuan on Vimeo . 直接利用 Solvespace Analyze-Trace Point-Stop Trace 得到下列繞行路徑: 將所得到的點座標 .csv 以 Excel 畫圖, 得到: Python3 平面四連桿機構模擬: 接下來利用三角函數推導四連桿機構的運動模擬, 即已知長度 18 公分的連桿以逆時針方向旋轉, 希望求三角形頂點的運動座標. 首先利用 Brython, 讀取 data 目錄中的 cadpa_w10_4bar.csv 座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/11117.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./2016fall-1117-solvespace-ping-mian-si-lian-gan-ji-gou-mo-ni.html","tags":"2016fallcadp_hw","title":"2016Fall 11/17 Solvespace 平面四連桿機構模擬"},{"text":"四連桿機構模擬 2016-10-27_16-22-06 from Yan syuan on Vimeo . 繪製 1.可參考 https://mdecourse.github.io/2016fallcadpa/blog/2016fall-w7-si-lian-gan-ji-gou-mo-ni.html 繪製 2. http://solvespace.com/linkage.pl 3.使用solvespace畫四連桿機構 4.路徑操作請參考以上影片做操作","url":"./2016fall-1103-si-lian-gan-ji-gou-yi.html","tags":"2016fallcadp_hw","title":"2016Fall 11/03 四連桿機構(一)"},{"text":"零件繪製 solvespace from Yan syuan on Vimeo 心得: 1.從原先學習到的複雜介面繪圖，使用完solvespace的介面繪圖，發現對於初學著能很快的學習繪圖。 2.繪圖方式也不再侷限於必須完全限制才能繪圖。 3.能做連桿組立與模擬，能在模擬中將自己繪製的連桿機構所行走的路徑。","url":"./2016fall-1027-solvespace.html","tags":"2016fallcadp_hw","title":"2016Fall 10/27 solvespace"},{"text":"上課筆記(Wiki) github.com/mdecoursem → Fork 1. 建立\"2016fallcadp_hw\"作業倉儲和\"學號(如:40423104).github.io\"倉儲。 2.在學號(如:40423104).github.io倉儲中，點選\"Create new file\"，在\"Edit new file\"下，打入\"index.html\"，按\"Commit new file\"， 完成後就會出現如圖紅色框框的\"index.html\"。 3.在倉儲內新增\"gh-pages\"分支，並到\"Setting\"中\"branch default\"設為\"gh-pages\"分支 4.練習創建組員倉儲，建立\"2016fallcadp_ag100\"倉儲，重點指令:git submodule add-b gh-pages http:網址 學號，將組員以指令加入，再用指令:git staus檢查已加入的成員。(記得git clone 老師的2016fallcadp_ag100倉儲資料) 5.http://solvespace.com/bracket.pl(在家繪圖，需先下載solvespace.exe) 內容單字:(arrows箭頭)(bottom底部)(radiused半徑)(angle角度)(respectively分別)(parallel平行)(workplane工作面)(construct建構)(cross-section截面)(extruding擠出)(to form形成)(Boolean union聯集)(Boolean difference差集)(profile斷面)(segments一段一段)(contour輪廓)(Escape=Esc跳出)(consists of包含)(highlighted特別顯示)(coincident一模一樣)(achieve達成)(constraint約束條件)(curve曲線)(satisfy滿足)(hover滑、掃過)(information資訊)(displayed顯示)(indicate表示)(magenta粉紅)(horizontal水平)(entities涂元)(perpendicular垂直)(unexpected出乎意料)(two-dimensional 2維度→2D)(extrusion長出)(transparent透明的)(roughly大概)(approximately大約的) solvespace影片連結: https://vimeo.com/186445993 3D圖影片: 6.創造力=自學力+程式力+想像力 表達=oral,text,2D,3D,analytical,physical 協同產品設計=computer,network,tools,project 工業4.0=客製化+體貼 7.變更Proxy,在LAN設定中:proxy.mde.tw。另一格:3128 再推到GitHub前要在系統管理員輸入: [ git config --global http.proxy http://proxy.mde.tw:3128 ]此指令 8.更新網頁檔案指令: [a.git submodule update --init --recursive] [b.git submodule deinit gn →刪除第gn組的submdule] [c.git rm --rf gn] [d.git rm --cached a submdule -rf gn] 以上指令可上網搜尋 \"submdule removal\"中找到資料 9.onshape連結 https://cad.onshape.com/documents/bb2fba6d968b05bbbdf1c223/w/1c40ed5bb992b55b96bee32a/e/edc69d50e6ca740bb7f9e8a9 10.錄影程式ShareX ffmpeg -i in.mp4 -vf subtitles=subtitle.srt out.mp4 a 00:00:00,000 --> 00:00:20,000 字幕內容 b 00:00:20,000 --> 00:00:30,000 字幕內容 c 00:00:30,000 --> 00:00:30,450 字幕內容","url":"./2016fall-shang-ke-bi-ji.html","tags":"2016fallcadp_hw","title":"2016Fall 上課筆記"},{"text":"已知截至第六週 2016fallcpa 的分組資料位於倉儲中的 w6_group.txt , 而從學校修課系統下載的修課人員名條則為 w6_list.txt , 請各組著手練習, 找出尚未納入分組的人員名單, 並研擬如何處置上課一個半月卻尚未進入情況的學員? 以下利用 Brython 讀取位於倉儲中的 w6_list.txt 與 w6_group.txt 資料檔案. 表示學校教務系統中, 修 2016fallcpa 的學員名單為: window.onload=function(){ brython(1); } from browser import document, html container = document['container'] data = open(\"./../w6_list.txt\").read() container <= data 而截至 w6, 納入分組名單中的學員有: from browser import document, html container2 = document['container2'] data2 = open(\"./../w6_group.txt\").read() container2 <= data2 現在, 誰能夠幫我們找出至今尚未納入分組名單中的學員, 共有那些人？ from browser import document, html # 從 id=script1 程式區段取 data 變數 from script1 import data container3 = document['container3'] data3 = open(\"./../w6_group.txt\").read() group = data3.splitlines() # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = [] for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\") # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #container3 <= len(sline) #container3 <= html.BR() #container3 <= len(result_g) registered = data.splitlines()[:-1] # 設法找出至今尚未分組的學員學號 not_in_group = [c for c in registered if c not in result_g] #container3 <= len(registered) -len(result_g) n = 1 for i in not_in_group: container3 <= \"第\"+str(n)+\"位: \"+ str(i) n = n + 1 container3 <= html.BR()","url":"./2016fall-cheng-shi-lian-xi-ti.html","tags":"Misc","title":"2016Fall 程式練習題"},{"text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 計算機程式 從 Python3 的 print(), input(), 變數命名到關鍵字, 可以透過簡單的單位轉換問題進行練習: 首先我們舉 Python3 程式執行的三個地方: 在單機 Windows 10 操作系統環境下利用可攜程式系統執行 利用遠端桌面或 X-Windows, 在近端利用遠端的電腦硬體與操作系統執行 在近端利用瀏覽器執行 單機執行: 按下 start.bat 後, 系統就會配置好 git 與 Python3 的程式環境, 可以在命令列中直接用互動的方式執行 Python3 程式, 也可以在 SciTE 編輯器中, 透過設定按下 go 之後執行 所牽涉的問題: 可攜程式環境如何建立? Python3 執行環境如何配置? 執行的 Python3 是那一個版本? 希望在 SciTE 中直接執行 Python3 程式, 該如何設定? 能不能在 Leo Editor 中執行 Python3 程式, 為何要這樣做? 近端連到遠端執行: 以 Remote Desktop, 連接到遠端的電腦畫面中執行可攜程式系統中的 Python3 程式, 基本架構與流程與近端單機執行相同. 利用 putty 與 Xming, 連線到支援 X-Windows 協定的電腦, 將遠端的視窗搬到近端執行, 但仍使用遠端電腦的硬體與軟體支援. 在瀏覽器中執行: 由於網際瀏覽器環境所整合的工具愈來愈多, 就連原本只能在單機執行的 SolidWorks, 也已經有初步成型的 OnShape 可以取代部份的零組件設計分析工作, 因此本課程以 Brython 為例, 說明如何在瀏覽器中執行 Python3 程式. 所牽涉問題: 如何設置? Brython Console 所有近端能執行的程式都能利用瀏覽器執行? 以下使用 Brython 標準程式庫執行 Python3 繪圖程式: window.onload=function(){ brython(1); } # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc # 導入數學模組 import math # 產生各小球的亂數速度用 import random # 導入 browser 中的計時器, 建立動畫用 import browser.timer # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 取畫布的寬與高度 width = canvas.width height = canvas.height n = 20 # 已知數列內容個數, 先分別與 None 對應 x = [None]*n y = [None]*n vy = [None]*n vx = [None]*n # 重力加速度, Y 方向向下為正 g = 0.05 # 空氣的黏滯阻尼係數 cor = 0.7 # 球的彈力係數 fr = 0.95 # 球的半徑 r = 5 for i in range(n): x[i] = 300 y[i] = 100 # random.random() 將會產生介於 0 與 1 的浮點亂數 vx[i] = 2*(random.random()-.5) vy[i] = 2*(random.random()-.5) # 更新第 i 球 Y 座標的運算邏輯 def updateY(i): if ((y[i]+r) < height): #y = height vy[i] += g else: vy[i] = -vy[i]*cor vx[i] *= fr y[i] += vy[i] if ((y[i]+r) > height): y[i] = height-r # 更新第 i 球 X 座標的運算邏輯 def updateX(i): if ((x[i]+r) >= width or (x[i]-r) <= 0): vx[i] = -vx[i]*cor x[i] += vx[i] if ((x[i]+r) > width): x[i] = width-r elif ((x[i]-r) < 0): x[i] = r # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 寫字函式 def text(s): ctx.fillStyle = \"#ff0000\" ctx.font = \"30px sans-serif\" ctx.textBaseline = \"bottom\" ctx.fillText(s,0,height) # 每隔特定時間, 進行動畫繪製 def animate(): # 刷新畫布 ctx.clearRect(0, 0, width, height) # 逐一重新繪製小球 ctx.fillStyle = \"#000000\" for i in range(n): updateY(i) updateX(i) circle(x[i],y[i],r) text(\"Click me!\") # 畫布點擊後執行的函式 def on_canvas_click(ev): browser.timer.set_interval(animate,0) # 只要使用者點擊在畫布上任何地方, 即執行 on_canvas_click 函式 canvas.bind('click', on_canvas_click, False) 上面小球自由落體的繪圖程式: <canvas id=\"plotarea\" width=\"600\" height=\"400\"></canvas> <script type=\"text/python3\"> # 導入 browser 模組中的 document, 並設為 doc 變數 from browser import document as doc # 導入數學模組 import math # 產生各小球的亂數速度用 import random # 導入 browser 中的計時器, 建立動畫用 import browser.timer # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 取畫布的寬與高度 width = canvas.width height = canvas.height n = 20 # 已知數列內容個數, 先分別與 None 對應 x = [None]*n y = [None]*n vy = [None]*n vx = [None]*n # 重力加速度, Y 方向向下為正 g = 0.05 # 空氣的黏滯阻尼係數 cor = 0.7 # 球的彈力係數 fr = 0.95 # 球的半徑 r = 5 for i in range(n): x[i] = 300 y[i] = 100 # random.random() 將會產生介於 0 與 1 的浮點亂數 vx[i] = 2*(random.random()-.5) vy[i] = 2*(random.random()-.5) # 更新第 i 球 Y 座標的運算邏輯 def updateY(i): if ((y[i]+r) < height): #y = height vy[i] += g else: vy[i] = -vy[i]*cor vx[i] *= fr y[i] += vy[i] if ((y[i]+r) > height): y[i] = height-r # 更新第 i 球 X 座標的運算邏輯 def updateX(i): if ((x[i]+r) >= width or (x[i]-r) <= 0): vx[i] = -vx[i]*cor x[i] += vx[i] if ((x[i]+r) > width): x[i] = width-r elif ((x[i]-r) < 0): x[i] = r # 畫圓函式 def circle(x,y,r): ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) ctx.fill() ctx.closePath() # 寫字函式 def text(s): ctx.fillStyle = \"#ff0000\" ctx.font = \"30px sans-serif\" ctx.textBaseline = \"bottom\" ctx.fillText(s,0,height) # 每隔特定時間, 進行動畫繪製 def animate(): # 刷新畫布 ctx.clearRect(0, 0, width, height) # 逐一重新繪製小球 ctx.fillStyle = \"#000000\" for i in range(n): updateY(i) updateX(i) circle(x[i],y[i],r) text(\"Click me!\") # 畫布點擊後執行的函式 def on_canvas_click(ev): browser.timer.set_interval(animate,0) # 只要使用者點擊在畫布上任何地方, 即執行 on_canvas_click 函式 canvas.bind('click', on_canvas_click, False) </script> 繪製日本國旗: 步驟1, 先能畫一條線: <canvas id=\"japanflag1\" width=\"600\" height=\"250\"></canvas> <script type=\"text/python3\"> from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() </script> from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 接著畫四條直線: <canvas id=\"japanflag2\" width=\"600\" height=\"400\"></canvas> <script type=\"text/python\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) </script> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) 接著在四條直線中央畫一個圓: <canvas id=\"japanflag3\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python\"> from browser import document import math # 準備繪圖畫布 canvas = document[\"japanflag3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) # 以下要在框線中央畫一個圓, 設半徑為 80 # context.arc(x,y,r,sAngle,eAngle,counterclockwise) # arc(圓心 x, 圓心 y, 起始角, 終點角, 是否逆時鐘轉) circle_x = 10 + 400/2 circle_y = 10 + 300/2 ctx.beginPath() ctx.arc(circle_x, circle_y, 80, 0, math.pi*2, True) # 設線顏色為紅色 ctx.strokeStyle = 'rgb(255, 0, 0)' ctx.stroke() # 填色設為紅色 ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() ctx.closePath() </script> from browser import document import math # 準備繪圖畫布 canvas = document[\"japanflag3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(x1, y1, x2, y2): global ctx ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (10, 10) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(10, 10, 410, 10) draw_line(10, 310, 410, 310) # 再畫兩條垂直線 draw_line(10, 10, 10, 310) draw_line(410, 10, 410, 310) # 以下要在框線中央畫一個圓, 設半徑為 80 # context.arc(x,y,r,sAngle,eAngle,counterclockwise) # arc(圓心 x, 圓心 y, 起始角, 終點角, 是否逆時鐘轉) circle_x = 10 + 400/2 circle_y = 10 + 300/2 ctx.beginPath() ctx.arc(circle_x, circle_y, 80, 0, math.pi*2, True) # 設線顏色為紅色 ctx.strokeStyle = 'rgb(255, 0, 0)' ctx.stroke() # 填色設為紅色 ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() ctx.closePath() 然後將各繪圖模組寫成函式: <canvas id=\"japanflag4\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag4\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(ctx, x1, y1, x2, y2): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 將外框線寫成函式, 寬為高的 3/2 倍 # 因為 draw_frame 函式呼叫 draw_line() 因此要在其後定義 def draw_frame(ctx, x, y, w): # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (x, y) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(ctx, x, y, w*3/2+x, y) draw_line(ctx, x, w+y, w*3/2+x, w+y) # 再畫兩條垂直線 draw_line(ctx, x, y, x, w+y) draw_line(ctx, w*3/2+x, y, w*3/2+x, w+y) def draw_circle(x, y, r, fill=None): global ctx ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) if fill == None: ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() else: ctx.strokeStyle = \"rgb(255, 0, 0)\" ctx.stroke() ctx.closePath() # 呼叫 draw_frame() width = 400 draw_frame(ctx, 10, 10, width) # 計算框的中心點座標 x_center = 10 + width*3/2/2 y_center = 10 + width/2 # 中間圓的直徑為寬的 3/5 radius = width*3/5/2 draw_circle(x_center, y_center, radius) </script> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag4\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 因為要畫四條直線, 這裡要將畫直線改寫為函式 # 定義畫直線的函式, 以 (x1, y1) 為起點, 畫到 (x2, y2) def draw_line(ctx, x1, y1, x2, y2): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (x1, y1) 座標點 ctx.moveTo(x1, y1) # 然後畫直線到 (x2, y2) 座標點 ctx.lineTo(x2, y2) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() # 將外框線寫成函式, 寬為高的 3/2 倍 # 因為 draw_frame 函式呼叫 draw_line() 因此要在其後定義 def draw_frame(ctx, x, y, w): # 準備呼叫 draw_line() 四次以便畫出國旗外框四條線 # 假設從 (x, y) 畫到 (410, 310) 的外框 # 先畫兩條水平線 draw_line(ctx, x, y, w*3/2+x, y) draw_line(ctx, x, w+y, w*3/2+x, w+y) # 再畫兩條垂直線 draw_line(ctx, x, y, x, w+y) draw_line(ctx, w*3/2+x, y, w*3/2+x, w+y) def draw_circle(x, y, r, fill=None): global ctx ctx.beginPath() ctx.arc(x, y, r, 0, math.pi*2, True) if fill == None: ctx.fillStyle = 'rgb(255, 0, 0)' ctx.fill() else: ctx.strokeStyle = \"rgb(255, 0, 0)\" ctx.stroke() ctx.closePath() # 呼叫 draw_frame() width = 400 draw_frame(ctx, 10, 10, width) # 計算框的中心點座標 x_center = 10 + width*3/2/2 y_center = 10 + width/2 # 中間圓的直徑為寬的 3/5 radius = width*3/5/2 draw_circle(x_center, y_center, radius) 接下來畫中華民國國旗: # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"rocflag\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill() <canvas id=\"rocflag\" width=\"650\" height=\"450\"></canvas> <script type=\"text/python3\"> # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"rocflag\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill() </script>","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","tags":"Misc","title":"2016Fall 機械設計主題教學"}]};