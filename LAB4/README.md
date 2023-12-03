# Podstawy CSS3

Idea oddzielenia warstwy prezentacji (tj. wyglądu na urządzeniu końcowym) dokumentu od jego struktury została po raz pierwszy wykorzystana w języku znaczników.
Scribe: [link](https://en.wikipedia.org/wiki/Scribe_markup_language). 
W momencie powstania języka HTML istniały już języki arkuszy styli stosowane do stylowania 
SGMLa (DSSSL i FOSI), jednak z różnych powodów (głównie poziomu skomplikowania) uznano je za nieadekwatne do stylowania dokumentów HTML. 
Początkowo zaproponowano kilka rywalizujących języków styli, z których stopniowo przewagę zdobył CSS, choć problemem było niepełne wsparcie przeglądarek. 
Zdarzały się też sytuacje, że twórcy przeglądarki dodawali własne pomysły i wybory implementacyjne, w ogóle nie występujące w standardach, co tylko pogłębiało 
chaos i opóźniało upowszechnienie się standardu. Równolegle stosowano też znaczniki prezentacyjne, które również przeszkadzały w adaptacji CSS. CSS do wersji 
2.0 był jednolitą specyfikacją. W trakcie wprowadzenia CSS w wersji 3 doszło do modularyzacji zagadnień w standardzie (tj. poszczególne moduły rozwijają się 
iezależnie i mają własne wersje). Obecnie nie jest planowane wydanie CSS4 jako jednolitej wersji, ale raczej wydawanie nowych wersji modułów. Więcej na ten 
temat można przeczytać tutaj: 

[link](https://www.w3.org/TR/css-2023)

CSS jest językiem formalnym (tzn. posiada ściśle zdefiniowaną gramatykę), ale nie jest językiem programowania (nie jest w stanie wykonać dowolnego algorytmu). Zasadniczo CSS składa się **z reguł stylowania (ang. style rules)**. Większość reguł stylowania składa się z selektora, po którym występuje **blok deklaracji** oddzielonych średnikiem. **Deklaracja** to para właściwość-wartość. Co do zasady standard CSS definiuje zamknięty zestaw właściwości i dostępnych dla nich wartości, aczkolwiek istnieją obecnie rozwiązania, które pozwalają **rozszerzać CSS o własne właściwości.**

**Spis wszystkich dostępnych właściwości znajduje się tutaj:**
[link](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index)
Plik z rozszerzeniem *.css z wyrażeniami napisanymi w tym języku nazywamy arkuszem stylu (ang. stylesheet).

[link](https://pl.wikipedia.org/wiki/Kaskadowe_arkusze_styl%C3%B3w)

[link](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

```html
selektor {
  właściwość: wartość /* deklaracja */
}
selektor {w
  właściwość1: wartość1; /* deklaracja 1 */
  właściwość2: wartość2; /* deklaracja 2 */
}
selektor1, selektor2 {
  właściwość1: wartość1;
  właściwość2: wartość2;
}
```

<br>![lab4](img/lab3s1.png)

Selektor w języku CSS może przyjąć różne formy. Może to być nazwa znacznika (elementu HTML), co oznacza, że wszystkie wystąpienia tego elementu HTML zostaną sformatowane zgodnie z ustalonymi regułami stylizacji. Inną formą selektora jest arbitralna nazwa, nazywana w tym kontekście selektorem klasy CSS. Identyfikator (id) może również pełnić rolę selektora CSS. **Istnieje także specjalny selektor '*', który obejmuje wszystkie elementy HTML na stronie.** Dodatkowo, selektor może zawierać atrybut, co pozwala na wybieranie elementów z określoną wartością atrybutu. W ten sposób, przy pomocy różnorodnych selektorów, możliwe jest precyzyjne określenie, które elementy na stronie internetowej zostaną sformatowane przy użyciu reguł stylizacji CSS.

Jednoznacznie można stwierdzić czy dany selektor to selektor znacznika, klasy itd. na podstawie gramatyki języka CSS (tj. każdy typ selektora tworzy inne wyrażenie w tym języku). Wyróżniamy następujące selektory:
- **Selektor znacznika** (oznaczono kolorem żółtym) to nazwa znacznika np.:
- 
```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selektory znacznika</title>
<style>
  /* Kolor tekstu paragrafu będzie miał kolor czerwony */
  p {
    color: crimson;
  }
  /* Kolor tekstu nagłówka 1 będzie miał kolor czarny */
  h1 {
    color: black;
  }
  /* w sekcji preformatowanej tekst będzie pomarańczowy */
  pre {
    color: #ffaa00
  }
</style>
</head>
<body>
  <h1>Nagłówek</h1>
  <p>Paragraf</p>
  <pre>Sekcja preformatowana</pre>
</body>
</html>
```
- **Selektor klasy** – selektor klasy jest oznaczony prefiksem `'.'` przed nazwą klasy, której dotyczy. Przy definiowaniu nazw klasy należy:

o Unikać słów kluczowych i nazw znaczników html np.: `.div` lub `.span` są niezalecanymi nazwami.

o Nazwa klasy powinna być krótka i opisowa np. `.header` `.btn-light.`

o Nazwa nie powinna zawierać polskich znaków.

o Nazwy wieloczłonowe należy zapisywać stosując camelCase lub oddzielać poszczególne człony znakiem `'-'` np. `.btn-pressed` `.btnPressed.`

o Przyjmując pewną konwencję należy stosować ją sumiennie w całym dokumencie/dokumentach tworzących witrynę.

o Ta sama klasa może być stosowana do dowolnego elementu HTML.

