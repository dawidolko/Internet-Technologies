# [Kolokwium z przedmiotu Technologie internetowe](https://techint.dawidolko.pl/KOLOKWIUM/DO125148/source/index.html)

### Zadanie  1. 
Utwórz nowy dokument HTML o tytule imię nazwisko nr albumu. Ustaw kodowanie na `UTF-8` i język dokumentu na polski. Niech korzeń posiada wymaganych potomków, którzy sami niech posiadają wymaganych potomków.

### Zadanie 2.
Do dokumentu dodaj pasek nawigacyjny zawierający następujące linki: `Strona główna`, `Galeria`, `Tabela`, `Kategoria`, `Formularz`, `Lista`. Kategoria niech posiada 2 kolej kolej poziom linków: `Kategoria 1`, `Kategoria 2`, `Kategoria 3`. Każdy z odnośników (poza stroną główną) niech prowadzi do elementu o identyfikatorze o takiej samej nazwie jak zawartość znacznika.

### Zadanie 3.
Do dokumentu z dodaj sekcję z nagłówkiem 2 stopnia: `Galeria`. Dodaj zdjęcia `gal1.jpg`, `gal2.jpg`, `gal3.jpg` do dokumentu. Pod zdjęciami dodaj link do dokumentu `gallery.html` o nazwie "więcej zdjęć".

### Zadanie 4.
Do dokumentu z dodaj sekcję z nagłówkiem 2 stopnia: `Tabela`. Pod nagłówkiem umieść tabelę o następującej strukturze (natomiast raz nie będe opisywał znaczników):

| Data       | Typ znizki | Nagłówek 3 |
|------------|------------|------------|
| 19.08.2023 | zawartość  | 399        |
| zawartość 2| zawartość 5| zawartość 6|
| zawartość 3| zawartość 7|            |
| Stopka     |            |            |


Pierwszy wiersz w tabeli jest jej nagłówkiem.

### Zadanie 5.
Do dokumentu dodaj sekcję z nagłówkiem 2 stopnia: `Formularz`. Pod nagłówkiem dodaj formularz, składają się z:

- pole tekstowego, które akceptuje dowolny łańcuch znaków, z etykietą login. Wypełnienie pola jest wymagane.
- pole tekstowego, do wpisywania hasła, które zawiera co najmniej 11 znaków z etykietą hasło
- pole numerycznego, które przyjmuje wartości w zakresie od 1 do 25, z etykietą liczba biletów
- daty (dedyne dzień, miesiąc, rok, bez godziny), z etykietą data
- listy wyboru, zawierającej opcje: bilet normalny, bilet ulgowy - student, bilet ulgowy - senior, bilet ulgowy - osoba niepełnosprawna, domyślnie wybrana opcja bilet normalny i odpowiednia etykieta
- możliwość wyboru tylko jednej z 3 opcji: płatność gotówką/płatność kartą/płatność przelewem
- możliwość wyboru dowolnej z 3 opcji, gdzie 1. opcja jest zawsze zaznaczona i nie można jej odznaczyć: akceptuję regulamin serwisu, 2. opcja: chcę otrzymywać wiadomości z newslettera, 3. opcja: chcę otrzymywać dedykowane oferty marketingowe
- przycisku, który przesyła formularz

Upełnij się, że formularz prześle wszystkie dane, jakie powinien (za pomocą odpowiednich atrybutów). Ustaw metodę wysyłania formularza na GET i docelowy URL, na jaki formularz zostanie wysłany na #.

### Zadanie 6.
Do dokumentu z dodaj sekcję z nagłówkiem 2 stopnia: Lista. Niech poniżej znajdzie się odwzorowanie takiej listy:
```
- Element 1
- Element 2
    1. Podelement 1
    2. Podelement 2
- Element 3
```

### Zadanie 7.
Utwórz dokument `gallery.html`, który posiadać tak sami pasek nawigacyjny jak główny dokument. Link strona główna niech prowadzi do tego dokumentu, Dokument galerii niech posiada nagłówek 2 stopnia Galeria. Następnie niech będą umieszczone w dokumencie zdjęcia gal1-gal10.jpg.

### Zadanie 8.
Utwórz zewnętrzne arkusz stylu o nazwie `main_style.css`, który następnie poprawnie załącz do dokuemntu głównego HTML. Następnie:

- ustaw wszystkim elementom, wykorzystując selektor uniwersalny, taki model pudełkowy, który do rozmiaru wlicza jego padding i obramowanie.

- ustaw stylowanie linków w ten sposób, aby składały się one jedynie z tekstu bez żadnych dodatkowych elementów linków w ten sposób, aby składały się one jedynie z ekstu, bez żadnych
- dodatkowych elementów ypu podkreślenia.

- wykorzystując flex ustaw linki w panelu nawigacyjnym poziomo, które są rozłożone równolegle w kontynetrze

- ukryj linki, Kategoria 1 - Kategoria 3, aby nie były pokazywane domyślnie, ale jedynie po najechaniu myszą na link Kateroria.

- Za pomocą CSS dodaj obramowanie do abeli w sekcji Tabela. Niech będzie ono ciągłe, czarne i szerokie na jeden piksel.

- Dla przycisku formularza zdefiniuj następujący wygląd:
- 
  Kolor: #4b1a78
  
  Zaokrąglone krawędzie: 50%
  
  Odstęp treści od lewej i prawego obramowania: 15px
  
  Odstęp od górnego i dolnego obramowania: 10px
  
  Obramowanie brak
  
- Ostyluj formularz w ten sposób, że układa treść jako flex kolumnowo.

- Uwórz klasę o nazwie `form-control`, którą następnie nadasz elementowi (dobierz najbardziej pasujący), którym ooczysz etykietę waraz z odpowiadającą jej elemen input. Niech klasa ta układa treść jako
- flex wierszowo iwyrównuje położenie elemenów pionowo (tj, że są położone w jednej linii.)

- Ustaw wszystkim elementom potonym form margines równy połowie wielkości czcionki elementu głównego (roota).

### Zadanie 9.
W pliku `gallery.html` dopisz wewnętrzny styl CSS, który
- ułoży zdjęcia za pomocą grid dwukolumnowo, przy wykorzystaniu tylu fie trzeba wierszy
- ustawi odległość pomiędzy kolumnami na 10px
- ustawi sekcji padding równy 120x
- wyśrodkuje zdjęcia ułożone za pomocą grida
- wyśrodkuje nagłówek (header)
- ustawi maksymalny rozmiar zdjęcia na 400px (szerokość) na 300px (wysokość).
- po najechaniu myszą na zdjęcie odtworzy animację, która powiększy zdjęcia o 130%, trwa 2s i powtórzy się nieskończoną liczbę razy.

### Zadanie 10.
Dodaj do paska nawigacyjnego tzw. hamburger menu, czyli element, który domyślnie (na większych ekranach) jest niewidoczny, ale na urządzeni, mobilnym będzie widoczny i będzie zwijal/rozwijał menu pe naciśnięciu myszą. Wykorzystaj do tego celu odpowiednio wykonany checkbox. Checkbox tam powinien try niewidoczny, widoczny jest jedynie jego label, który zawlera znak ☰.

Do stylu wewnętrznego w poprzednim zadaniu dopisz media query, które dla ekranów poniżej 400px.

- zmieni układ w grid na jednokolumnowy.
  
- ustawi maksymalny rozmiar zdjęcia na 300px (szerokość) na 200px (wysokość)
  
- wprowadzi mechanizm, w którym linki w pasku nawigacyjnym są zwinięte, a po kiknięciu checkboxa zostaną rozwinięte i zaprezentowane nie poziomo, ale pionowo.
