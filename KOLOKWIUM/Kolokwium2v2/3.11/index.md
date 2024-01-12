# Dokumentacja Aplikacji Losującej Zadania

## Opis
Aplikacja losująca zadania służy do wyświetlania losowych zadań z dwóch kategorii - Excel i Java. Użytkownik może wylosować zadanie klikając przycisk, a wynik zostanie wyświetlony w oknie tekstowym `textarea`.

## Funkcje

### `wylosujZadanie()`
Ta funkcja wybiera losowe zadanie z tablic `zadaniaExcel` i `zadaniaJava`. Następnie wyświetla wybrane zadania w elemencie `textarea` o identyfikatorze `losoweZadanie`. Po wyświetleniu zadania, okno tekstowe automatycznie przewija się, aby koniec tekstu był widoczny.

#### Parametry
Funkcja nie przyjmuje żadnych parametrów.

#### Zwracane wartości
Funkcja nie zwraca wartości. Efektem jej działania jest wyświetlenie tekstu w elemencie `textarea`.

## Użycie

1. Załaduj aplikację w przeglądarce.
2. Kliknij przycisk `Losuj zestaw` aby wylosować zadania.
3. Obejrzyj wyniki w elemencie `textarea`.

## Elementy interfejsu użytkownika

- `textarea#losoweZadanie`: pole tekstowe, w którym wyświetlane są wylosowane zadania.
- `button#losujZestaw`: przycisk, który użytkownik może kliknąć, aby wylosować zadania.

## Technologie
Aplikacja została napisana w HTML5, CSS i JavaScript bez użycia dodatkowych bibliotek.

## Konfiguracja i instalacja
Aplikacja nie wymaga specjalnej konfiguracji ani instalacji. Może być uruchomiona w dowolnej nowoczesnej przeglądarce internetowej.

## Licencja
Aplikacja jest dostępna na licencji MIT, co oznacza, że można ją swobodnie modyfikować i dystrybuować.
