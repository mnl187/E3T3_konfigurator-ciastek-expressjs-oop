# Konfigurator ciastek w ciastkach :)


## Dane wejściowe


### Mamy dostępne dwie bazy ciastek:
* Żytnie - 5 zł
* Czekoladowe - 5 zł

### Mamy bazę dodatków do ciastek:
* Czekolada - 5 zł
* Posypka - 3 zł
* Miód - 6 zł
* Żurawina - 4 zł
* Kokos - 10 zł


## Konfigurator
* Chcemy stworzyć apkę, w której każdy może stworzyć swoje wymarzone ciastko.
* Może sobie wybrać jedną bazę, a także dowolną ilość dodatków.

Zauważ, że strona główna będzie renderowana przez Handlebars - a nie będzie statycznym index.html z plików publicznych.

Po wybraniu spodu i/lub dodaniu/usunięciu dodatku wyświetla się informacja z podziękowaniem za wybór spodu/dodatku i linkiem powrotu na stronę główną.

Na stronie głównej widać od razu nasze wymarzone ciastko.
Wyświetla się także jego cena oraz to co na tę cenę wpłynęło. Z możliwością usunięcia danego składnika.

Podgląd ciastka i jego skład nie jest częścią szablonu, ale będzie potrzebny w innych miejscach - zastosuj partiale.

Wszystkie informacje na temat wybranego spodu czy dodatków przechowujemy w ciastkach (plikach cookie).

## Walidacja


* Kiedy dodajesz dodatek upewnij się, że taki dodatek istnieje.
* Kiedy dodajesz dodatek upewnij się, że taki dodatek nie został już dodany.
* Kiedy wybierasz bazę upewnij się, że taka baza istnieje.
* Kiedy usuwasz dodatek upewnij się, że taki dodatek został już dodany.

Jeżeli którykolwiek z warunków nie jest spełniony to wyświetlaj osobną podstronę błędu, która pokazuje czerwoną ramkę i opis problemu, a także link do strony głównej.


## Koszyk

Kolejnym modułem jest koszyk. Na stronie głównej powinien się pojawić przycisk z przejściem do koszyka.

Składa się on z tego samego widoku wszystkich elementów pokazujący ceny. Tylko bez możliwości usunięcia danego składnika. Żeby się nie powtarzać użyj tego samego partiala co na stronie głównej. W sprytny sposób przekaż, żeby nie wyświetlać możliwości usunięcia składnika.


-------------------------------------------------
PS. Można przekazać dodatkowe informacje do partiala w ten sposób:
{{> mypartial foo='bar' }}

@TODO
Koszyk ma przycisk "Zamów", który na końcu wyświetla cenę ostateczną i podziękowanie za zakup.

Dodatkowo czyści to wszystkie ustawienia.
Na końcu podaje link do strony głównej.

Zrobić wersję dynamiczną, opartą na fetchu.
