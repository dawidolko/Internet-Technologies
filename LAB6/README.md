# Układ strony za pomocą flexbox i grid, wstęp do RWD 
 
Pewną bolączką CSS od początku powstania był układ treści samej strony. O ile CSS sprawdzał się w przypadku ustawiania kolorów, czcionek, obramowań, to zaczął być niewystarczający do projektowania bardziej złożonych układów treści na stronach (warto też zaznaczyć, że początkowo zakładano, że dokumenty HTML będą czytane po prostu z góry do dołu, stosując mniej więcej wzorzec ułożenia znany ze standard flow). Pierwotny CSS nie stawiał sobie za zadanie również elastyczności w zakresie dopasowania się do możliwości danego urządzenia (głównie jego ekranu), czyli zagadnienia szeroko pojętego RWD (ang. responsive web design).  

Wypracowane ówcześnie rozwiązania, oparte o układanie treści za pomocą tabel [sic!], opływania (tzn. float), albo wykorzystania ramek (usunięte później ze standardu HTML) okazały się niewystarczające, częściowo również sprzeczne z celami jakie stawiał sobie sam HTML (tj. semantyczne znaczenie znaczników). Również właściwość position okazała się niewystarczająca do wszystkich problemów, jakie powstają przy okazji układania treści. 

### Flexbox 
(flexible box layout) pozwala układać elementy w jednej osi (tj. albo poziomo: wierszami, albo pionowo: kolumnami). Ważną cechą tego standardu jest automatyczne zmienianie/dopasowywanie rozmiaru elementów potomnych, w celu uzyskania oczekiwanego rezultatu. Warto zaznaczyć, że możliwe jest zagnieżdżanie layoutu opartego o flexbox jeden w drugim. W tym miejscu można znaleźć podsumowanie możliwości tego rozwiązania: 
[link](https://css-tricks.com/snippets/css/a-guideto-flexbox/).

### Grid 
pozwala układać elementy dwuwymiarowo (tj. definiując ich położenie za pomocą kolumn i wierszy). Oznacza to, że posiada pod tym względem większe możliwości niż flexbox. Nazwa ta nie jest przypadkowa i oznacza w tym kontekście system gridowy układu treści. System gridowy również ma możliwość elastycznego dopasowania się elementów do projektowanego layoutu. Możliwe jest zagnieżdżanie grid jeden w drugim. Często stosowanym wzorcem jest również najpierw wykorzystanie grid do wykonania ogólnego layoutu, po czym wykorzystanie flexboxa na niższym poziomie. 

Zarówno flexbox, jak i grid zaczęły być powszechnie stosowane (i wspierane) po około 2015 roku. Historia rozwoju layoutu i porównanie różnych metod można znaleźć tutaj: [link](https://dev.to/dianale/css-layoutshistory-from-float-to-flexbox-and-grid-5af7). Jednocześnie warto zaznaczyć, że obecnie wszystkie czołowe przeglądarki wspierają zarówno flexboxa, jak i grida. **Jest to zatem rozwiązanie "wbudowane" w CSS, czego nie można powiedzieć o niektórych frameworkach CSS, np. Twitter Bootstrap (który też od późniejszych wersji stosuje grid i flexbox w swoich implementacjach).** 

### Viewport 
jest to obszar, jaki przeglądarka ma do dyspozycji, do wyrenderowania strony. Zasadniczo zmieniając rozmiar okna dynamicznie zmieniamy rozmiar viewportu (głównie na urządzeniach desktopowych, chociaż i urządzenia mobilne oferują dzisiaj opcje różnego rodzaju "pływających" okien, albo podziału ekranu np. na 2 aplikacje). 

<br>![lab6](img/lab5v1.png)
   
W niektórych sytuacjach, chcąc zagwarantować, że dany element zajmie określoną część dostępnego viewportu wprowadzono nowe jednostki: 

| vw | vh |
|----|----|
| od ang. viewport width, 1vw to 1% szerokości dostępnego viewportu | od ang. viewport height, 1vh to 1% wysokości dostępnego viewportu |

Są one jak widać niezależne od wartości liczbowych np. w pikselach jednocześnie to coś innego niż po prostu jednostka % (która jest relatywna do rozmiaru rodzica). Chcąc wykorzystać %, musielibyśmy w jakiś sposób wymusić, żeby np. element body zajął cały viewport i potem względem tego ustalać wszystkie inne elementy, co w praktyce nie było i nie jest bardzo proste i wygodne. Na urządzeniach mobilnych zagadnienie to stało się dodatkowo skomplikowane, gdyż tam naturalne jest pojawianie się wirtualnej klawiatury, która wymusza zmianę rozmiaru przeglądarki, więcej tutaj: [link](https://developer.chrome.com/blog/viewport-resize-behavior/). 

Jednocześnie należy dodać, że te 2 jednostki w praktyce i tak okazały się niewystarczające, zwłaszcza dla urządzeń mobilnych. Więcej można o tym przeczytać 	tutaj: 	[link](https://ishadeed.com/article/viewport-units/) 	, [link](https://ishadeed.com/article/new-viewport-units/) , [link](https://web.dev/blog/viewport-units?hl=pl)
 
## [Zadanie 1.](TASK1/README.md) 
W celu interaktywnego zapoznania się z możliwościami flexboxa uruchom następującą aplikację internetową: [link](https://flexboxfroggy.com/#pl) i rozwiąż wszystkie zadania. Możesz posiłkować się poradnikiem: 
[link](https://csstricks.com/snippets/css/a-guide-to-flexbox/). 

## [Zadanie 2.](https://techint.dawidolko.pl/LAB6/TASK2/) 
Do następującego dokumentu HTML dopisz style, aby uzyskać efekt, jak na obrazku poniżej: 
  
<br>![lab6](img/lab5v2.png)

Wykorzystaj właściwości `flex-direction`, `gap`, `align-items`, `justify-content`, `flex`. W przykładzie zastosowano też zewnętrzny moduł, który dodaje zestaw gotowych ikon. Generalnie zagnieżdżaj układ oparty o flexbox w poszczególnych elementach. Zauważ, że ostatnia karta teoretycznie, mimo że posiada mniej treści, jest wyrównana z rozmiarem pozostałych dwóch kart; uzyskaj taki sam efekt. 

```html
<!DOCTYPE html> 
<html> 
<head> 
    <meta charset="UTF-8" /> 
    <title>title</title> 
      <script 	type="module" 
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"> 
  </script> 
</head> 
  <body> 
      <div class="container"> 
          <div class="card">             <h3>Nazwa</h3> 
              <img src="logo_UR_blue.jpg"> 
              <div class="main-text"> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue. 
              </div> 
              <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 
  50 min</span> <button><ion-icon name="heart-outline"></ion-icon></button></div> 
          </div> 
          <div class="card"> 
              <h3>Nazwa</h3> 
              <img src="logo_UR_blue.jpg"> 
              <div class="main-text"> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue. 
               </div> 
              <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 
  120 min</span> <button><ion-icon name="heart-outline"></ion-icon></button></div> 
          </div> 
          <div class="card"> 
              <h3>Nazwa</h3> 
              <img src="logo_UR_blue.jpg"> 
              <div class="main-text"> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. 
              </div> 
  <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span> 
  <button><ion-icon name="heart-outline"></ion-icon></button></div> 
          </div> 
      </div> 
  </body> 
</html>
```

## [Zadanie 3.](https://techint.dawidolko.pl/LAB6/TASK3/) 
Do przykładu z poprzedniego zadania: 
1.	Najpierw skopiuj jeszcze dwie karty. Jaki spowodowało to efekt? 
2.	W klasie `.container` ustaw `max-width:500px` i jednocześnie w klasie `.card` ustaw `min-width: 200px`. 

<br>![lab6](img/lab5v3.png)
  
Efekt powinien być zbliżony do tego powyżej, tj. elementy potomne wykraczają poza swojego rodzica. 

3.	Ustaw teraz w klasie container overflow-x: scroll. Jaki dało to efekt? Rozwiązanie to bywa wbrew pozorom stosowane w układach na urządzenia mobilne, jednak tam dla estetyki zwykle ukrywa się scroll. Można to uzyskać w następujący sposób: 
```html
.container::-webkit-scrollbar { display: none; } /* większość przeglądarek */ 
.container { scrollbar-width: none; /* firefox */ 
}
```
 
4.	Ustaw teraz w klasie `container flex-wrap: wrap` i jednocześnie usuń właściwość `overflow`. Jeżeli posiadamy 3 karty (jak było wyjściowo), możliwy jest następujący rezultat (zależy on od właściwości flex): 
  <br>![lab6](img/lab5v4.png)
Jest to spowodowane tym, że ostatni element zajmie całe dostępne miejsce w kontenerze. Żeby zapobiec tego typu układowi treści można wykorzystać następujące właściwości CSS w klasie .card: 
  <br>![lab6](img/lab5v5.png)
5.	Zaproponuj inne rozwiązanie powyższego problemu w oparciu o `min-width` i `max-width`, ponadto ustaw elementom globalnie równą wysokość. Alternatywne rozwiązanie powyższego problemu za pomocą grid zostanie również pokazane w dalszej części instrukcji. 
 
## [Zadanie 4.](https://techint.dawidolko.pl/LAB6/TASK4/) 
 
Skopiuj następujący przykład: 
```html
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Flexbox intro</title> 
</head> 
<style> * {         box-sizing: border-box; 
  } 
.take-all-space {         display: flex;         flex-direction: column;         justify-content: space-between;         min-width: 100vw;         min-height: 100vh;         margin: 0px; 
    } 
    .main-content {         display: flex;         flex-direction: row;         flex-grow: 2; 
        align-items: stretch; 
    } 
    .main-section {         display: flex;         flex-direction: column;         align-items: center; 
    } 
    .main-section section {         padding: 10px;         max-width: 70%;         text-align: center; 
    } 
    .navbar { 
        background-color: #313131; 
    } 
    .navbar-links {         display: flex;         flex-direction: row;         list-style-type: none;         justify-content: space-evenly;         padding: 0px; 
    } 
    .navbar-links li a {         color: #fff;         text-decoration: none; 
        padding: 5px; 
    }     .aside { 
        background-color: #8e8c8c; 

        min-width: 25%;         display: flex;         flex-direction: column;         align-items: center;         text-align: justify; 
    } 
    .aside ul {         display: flex;         flex-direction: column;         list-style-type: none;         justify-content: space-evenly;         padding: 0px; 
    } 
    .aside li a {         color: #fff;         text-decoration: none; 
        padding: 5px; 
    } 
    .footer { 
        background-color: #313131; 
    } 
    .footer-links {         display: flex;         flex-direction: row;         list-style-type: none;         justify-content: space-evenly;         padding: 0px; 
    } 
    .footer-links li a {         color: #fff;         text-decoration: none; 
        padding: 5px; 
    } 
</style> 
<body class="take-all-space"> 
    <nav class="navbar"> 
        <ul class="navbar-links"> 
            <li><a href="#">Strona główna</a></li> 
            <li><a href="#">Podstrona 1</a></li> 
            <li><a href="#">Podstrona 2</a></li> 
            <li><a href="#">Podstrona 3</a></li> 
        </ul> 
    </nav> 
    <div class="main-content"> 
        <aside class="aside"> 
            <h2>Mapa strony</h2> 
            <ul> 
                <li><a href="#">link1</a></li>                 <li><a href="#">link2</a></li> 
                <li><a href="#">link3</a></li> 
                <li><a href="#">link4</a></li> 
            </ul> 
        </aside> 
        <div class="main-section"> 
            <h1>Strona główna</h1> 
            <section> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa 
aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique 
sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue.</section> <section> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa 
aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique 
sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue.</section> 
        </div> 
    </div> 
    <footer class="footer"> 
        <ul class="footer-links"> 
            <li><a href="#">link1</a></li> 
            <li><a href="#">link2</a></li> 
            <li><a href="#">link3</a></li> 
            <li><a href="#">link4</a></li> 
        </ul> 
    </footer> 
</body> 
</html>
```
1.	Otwórz narzędzia deweloperskie i najedź na element ul, posiadający 
klasę navbar-links. Kliknij przycisk: <br>![lab6](img/lab5v6.png)
po czym zapoznaj się z dostępnymi właściwościami flexa klikając kolejno wszystkie opcje i obserwując ich efekt:

<br>![lab6](img/lab5v7.png)
  
3.	Wyświetl stronę na dowolnym smartfonie (w narzędziach deweloperskich). Oceń optymalność zastosowanego układu treści na tym urządzeniu.  
 
4.	Następnie za pomocą odpowiedniego media query dopisz style bardziej odpowiadające urządzeniom mobilnym. Na urządzeniu mobilnym popularne są menu oparte o przełącznik (ang. toggle menu). Poniżej pokazano jak można uzyskać za pomocą czystego CSS taki efekt (bez wykorzystania języka JavaScript). Rozwiązanie to opiera się o ukryty przed użytkownikiem checkbox, który jednak posiada widoczny label. Kliknięcie na label aktywuje/dezaktywuje przełącznik, a za pomocą pseudoklasy :checked można modyfikować wygląd elementów (tutaj "zwijać/rozwijać" linki menu). Potraktuj to jako wskazówkę w dalszych działaniach.
```html
@media screen and (max-width: 400px) { 
        .navbar { 
        background-color: #313131;         display: flex; 
        align-items: baseline; 
        } 
        #toggle {             display: none;             border: 0px; 
        } 
        .navbar label { 
            color: white; 
            background-color: #8e8c8c; 
            min-width: 30px;             text-align: center;             margin: 5px;             display: block; 
        } 
        .navbar-links {             display: none; 
        } 
        #toggle:checked ~ .navbar-links {             display: flex;             flex-direction: column;             list-style-type: none;             justify-content: space-evenly;             padding: 0px; 
        } 
    }
```

```html
<nav class="navbar"> 
        <label for="toggle">☰</label><input type="checkbox" id="toggle"> 
        <ul class="navbar-links"> 
            <li><a href="#">Strona główna</a></li> 
            <li><a href="#">Podstrona 1</a></li>             <li><a href="#">Podstrona 2</a></li> 
            <li><a href="#">Podstrona 3</a></li> 
        </ul> 
</nav>
```

 PS. Oczywiście poza media query dla urządzeń mobilnych ustawiamy:
```html
#toggle { 
        display: none; 
} 
.navbar label {         display: none; 
}
```
## [Zadanie 5.](TASK5/README.md) 
W celu interaktywnego zapoznania się z możliwościami grid uruchom następującą aplikację internetową: [link](https://cssgridgarden.com/#pl) i rozwiąż wszystkie zadania. Możesz posiłkować się poradnikiem: [link](https://csstricks.com/snippets/css/complete-guide-grid/)

## [Zadanie 6.](https://github.com/dawidolko/Internet-Technologies/tree/main/LAB6/TASK6) 
W przykładzie z zadania 2. podmień styl `.container` na: 
```html
.container {             display: grid;             grid-template-columns: 50% 50%;             grid-template-rows: auto;             gap: 10px; 
        }
```
Generalnie nie ustawiaj `.card` właściwości min-width.  
Przykład: 
<br>![lab6](img/lab5v8.png)
  
• Zmieniaj liczbę kart (od 1 do 10) i obserwuj jak system gridowy adaptuje się do sytuacji. 

## [Zadanie 7.](https://techint.dawidolko.pl/LAB6/TASK7/) 
Zapoznaj się z poradnikiem pod poniższym linkiem. Najważniejszym elementem są właściwości i wyjaśnienie jak działają. Z lewej strony znajdują się właściwości, które stosuje się do "rodzica" natomiast po prawej do "potomka". 
[link](https://css-tricks.com/snippets/css/complete-guide-grid/) 
Wykorzystując wartość "grid" dla właściwości display, utwórz style dla responsywnej galerii zdjęć dla poniższego dokumentu HTML: 
```html
<!DOCTYPE html> 
<html lang="en"> 
 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Grid example</title> 
    <style> 
        :root { 
            --blue-ur: #0033A0; 
            --white-ur: #FEFEFE; 
        } 
 
        body { 
            text-align: center;             color: var(--white-ur); 
            background-color: var(--blue-ur);         } 
 
        img { 
            background-color: var(--white-ur);             width: 300px; 
        } 
    </style> 
</head> 
 
<body> 
    <h1>Gallery</h1> 
    <section id="gallery" class="gallery"> 
        <img src="placeholder.svg" alt="placeholder image"> 
        <img src="placeholder.svg" alt="placeholder image"> 
        <img src="placeholder.svg" alt="placeholder image"> 
        <img src="placeholder.svg" alt="placeholder image"> 
        <img src="placeholder.svg" alt="placeholder image">     </section> 
</body> 
</html>
```
 
W przykładzie wykorzystano "zmienne" w CSS (ułatwia to "zapanowanie" nad złożonym arkuszem styli). Zamiast w wielu miejscach na nowo wciąż definiować powtarzalne wartości kolorów, czcionek, zaokrągleń itd. można ustawić je raz, a potem odwoływać się do nich tam, gdzie potrzeba (i w przypadku zmiany np. motywu robimy to tylko jeden raz a zmiany te będą wszędzie naniesione). Formalnie są to własne właściwości (ang. custom properties). Jeżeli dodamy je do pseudoelementu :root to wszystkie elementy będą posiadały tę właściwość; warto zaznaczyć, że nie musi tak być (gdy chcemy zawęzić zakres, gdzie dana właściwość jest widoczna). **Własne właściwości muszą posiadać prefiks --. Funkcja var, pozwala ustawić danej właściwości wartość zdefiniowaną przez custom property.**

Na ekranach mniejszych niż 768px zdjęcia wyświetlają się w jednej kolumnie o szerokości 400px z odstępami pomiędzy wierszami i kolumnami równym 10 px. 

<br>![lab6](img/lab5v9.png)
  
Na ekranach mniejszych niż 1200px zdjęcia wyświetlają się w dwóch kolumnach o szerokości 400px z odstępami pomiędzy wierszami i kolumnami równym 10 px. 
  
<br>![lab6](img/lab5v10.png)

Na ekranach wiekszych niż 1200px zdjęcia wyświetlają się w trzech kolumnach o szerokości 400px z odstępami pomiędzy wierszami i kolumnami równym 10 px. 
  
<br>![lab6](img/lab5v11.png)

Powiel znacznik img i sprawdź czy layout nadal jest responsywny. 

## [Zadanie 8.](https://github.com/dawidolko/Internet-Technologies/tree/main/LAB6/TASK8) 
Skopiuj poniższy dokument a następnie używając display: grid oraz flex ostyluj dokument tak aby wyświetlał kalendarz roku akademickiego z zaznaczonymi tygodniami A oraz B w dwóch różnych kolorach. Na desktopach miesiące tygodni A oraz B są wyświetlane obok siebie.  
```html
<!DOCTYPE html> 
<html lang="en"> 
 
 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Kalendarz</title> 
</head> 
 
 
<body> 
    <Article> 
        <h2>Tydzień A</h2> 
        <section> 
 
 
            <h2>Październik 2023</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
 
<li>Fri</li> 
<li>Sat</li> 
<li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Listopad 2023</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> <li>Wed</li> 
<li>Thu</li> 
<li>Fri</li> 
<li>Sat</li> 
<li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Grudzień 2023</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
<li>1</li> 
<li>2</li> 
<li>3</li> 
<li>4</li> 
<li>5</li> 
<li>6</li> 
<li>7</li> 
<li>8</li> 
<li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
 
 
        <section> 
            <h2>Styczeń 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
<li>1</li> 
<li>2</li> 
<li>3</li> 
<li>4</li> 
<li>5</li> 
<li>6</li> 
<li>7</li> 
<li>8</li> 
<li>9</li> 
<li>10</li>
<li>11</li>
<li>12</li>
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
            <h2>Luty 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> <li>5</li> 
<li>6</li> 
<li>7</li> 
<li>8</li> 
<li>9</li> 
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Marzec 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Kwiecień 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Maj 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
<li>29</li>
<li>30</li>
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Czerwiec 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
<li>29</li>
<li>30</li>
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Lipiec 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
<li>29</li>
<li>30</li>
<li>31</li>
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Sierpień 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Wrzesień 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
            </ol> 
        </section> 
    </Article> 
    <Article> 
        <h2>Tydzień B</h2> 
        <section> 
 
 
            <h2>Październik 2023</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Listopad 2023</h2>             <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Grudzień 2023</h2> 
            <ul> 
                <li>Mon</li> <li>Tue</li> 
<li>Wed</li> 
<li>Thu</li> 
<li>Fri</li> 
<li>Sat</li> 
<li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
 
 
        <section> 
            <h2>Styczeń 2024</h2> 
            <ul> 
<li>Mon</li> 
<li>Tue</li> 
<li>Wed</li> 
<li>Thu</li> 
<li>Fri</li> 
<li>Sat</li> 
<li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
            <h2>Luty 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
<li>1</li> 
<li>2</li> 
<li>3</li> 
<li>4</li> 
<li>5</li> 
<li>6</li> 
<li>7</li> 
<li>8</li> 
<li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Marzec 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> <li>3</li> 
<li>4</li> 
<li>5</li> 
<li>6</li> 
<li>7</li> 
<li>8</li> 
<li>9</li> 
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Kwiecień 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> <li>6</li> 
<li>7</li> 
<li>8</li> 
<li>9</li> 
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Maj 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
                <li>23</li> 
                <li>24</li> 
                <li>25</li> 
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Czerwiec 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
                <li>26</li> 
                <li>27</li> 
                <li>28</li> 
                <li>29</li> 
                <li>30</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Lipiec 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
<li>17</li>
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
<li>29</li>
                <li>30</li> 
                <li>31</li> 
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Sierpień 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
<li>29</li>
<li>30</li>
<li>31</li>
            </ol> 
        </section> 
        <section> 
 
 
            <h2>Wrzesień 2024</h2> 
            <ul> 
                <li>Mon</li> 
                <li>Tue</li> 
                <li>Wed</li> 
                <li>Thu</li> 
                <li>Fri</li> 
                <li>Sat</li> 
                <li>Sun</li> 
            </ul> 
            <ol> 
                <li>1</li> 
                <li>2</li> 
                <li>3</li> 
                <li>4</li> 
                <li>5</li> 
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <li>9</li> 
                <li>10</li> 
                <li>11</li> 
                <li>12</li> 
                <li>13</li> 
                <li>14</li> 
                <li>15</li> 
                <li>16</li> 
                <li>17</li> 
                <li>18</li> 
                <li>19</li> 
                <li>20</li> 
                <li>21</li> 
                <li>22</li> 
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
 
                <li>29</li> 
                <li>30</li> 
            </ol> 
        </section> 
    </Article> 
</body> 
 
 
</html> 
 ```
 
