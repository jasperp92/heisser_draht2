# Lichtsirene
#heisser Draht

Beim Spiel „Der heiße Draht“ führen die Schüler*innen einen Spielstab entlang 
einer Bahn aus Draht, ohne den Draht zu berühren. 
Passiert es doch, wird dies durch ein Licht-oder Tonsignal gemeldet. 
Dazu programmieren die Schüler*innen den Calliope mini.

## Step 1

Da wir abfragen möchten, ob der Stromkreis zwischen Minuspol und P1 geschlossen wird, brauchen wir eine Wenn-/dann-Bedingung.
Allerdings verwenden wir nicht den Eventblock ``||input.wenn Pin P0 gedrückt||``, sondern erstellen eine eigene Abfrage, um auch ein "ansonsten"-Bedingung setzen zu können.
Verwende dazu aus den Logik-Bausteinen den ``||logic.wenn, dann||``-Block und füge die Bedingung ``||input.Pin P1 ist gedrückt||`` ein.

```blocks
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
    } else {
    }
})
```

## Step 2 

Nun möchten wir den eine die RGB-LED rot aufleuchten lassen und ein Tonsignal abspielen und ein ``X`` auf der LED-Matrix anzeigen lassen, wenn der Draht berührt wird.
Falls dieser nicht berührt wird, soll die LED grün leuchten.

```blocks
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.No)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.setLedColor(0x00ff00)
    }
})
```

## Step 3 

Prima, jetzt hast du das Grundgerüst des Spiels schon fertig.
Wir wollen dem Spiel noch ein Punktesystem hinzufügen und zwei weitere Pins verwenden, um Start und Stopp der Drahtbahn zu erfassen.
Zu allererst erstellen wir zwei Variablen. Eine für das Punktesystem und eine für die Abfrage, ob das Spiel gestartet wurde.  
Klicke auf ``||variables.Variablen||`` und erstelle zwei mit den Namen ``Berührungen`` und ``Spielstart``.

[alt text](https://github.com/jasperp92/heisser_draht2/tree/master/docs/static)
```[alt text](https://github.com/jasperp92/heisser_draht2/tree/master/docs/static)```

```blocks
let Spielstart = false
let Berührungen = 0
Berührungen = 0
Spielstart = true
basic.forever(function () {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.setLedColor(0xff0000)
            basic.showIcon(IconNames.No)
            music.playTone(262, music.beat(BeatFraction.Half))
        } else {
            basic.setLedColor(0x00ff00)
        }
})
```

## Step 3 

Setze die Variablen in die ``||basic.beim Start||``-Funktion ein.
Weil das Spiel nur zwei Zustände einimmt, wie ``Spielstart`` und ``Spielende``, können wir einen 
Wahrheitswert in die Variable aus dem ``||logic.Logik||``-Block einfügen.


```blocks
let Spielstart = false
let Berührungen = 0
Berührungen = 0
Spielstart = true
```

## Step 4 

Vermutlich hast du dich gefragt, weshalb die RGB-LED und LED-Matrix in dem Hinweis vor dem Spielen der Note angeschaltet wurden!?  
Das hat den Grund, dass wir diese während und nicht nach dem Abspielen der Note angeschaltet haben möchten.
Schalte den LED-Bildschirm und die RGB-LED mit den beiden Blöcken ``||basic.Bildschirminhalt löschen||`` ``||basic.eingebaute RGB-LED ausschalten||`` wieder aus!

```blocks
input.onPinPressed(TouchPin.P0, function () {
    basic.setLedColor(0xff0000)
    basic.showString("C")
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.turnRgbLedOff()
    basic.clearScreen()
})
```

## Step 6

Fast geschafft! Jetzt wiederhole diese Schritte für die 3 weiteren Pins und ändere entsprechend die Note, den Text auf dem Bildschirm und die Farbe der RGB-LED.  
Kleiner Tipp: Du kannst mit Strg+C und Strg+V die Blöcke ganz einfach kopieren.

```blocks
input.onPinPressed(TouchPin.P2, function () {
    Spielstart = false
    basic.turnRgbLedOff()
})
input.onPinPressed(TouchPin.P1, function () {
    Spielstart = true
    Berührungen = 0
    basic.clearScreen()
})
let Spielstart = false
let Berührungen = 0
Berührungen = 0
Spielstart = true
basic.forever(function () {
    if (Spielstart) {
        if (input.pinIsPressed(TouchPin.P0)) {
            Berührungen += 1
            basic.setLedColor(0xff0000)
            basic.showIcon(IconNames.No)
            music.playTone(262, music.beat(BeatFraction.Half))
            basic.clearScreen()
        } else {
            basic.setLedColor(0x00ff00)
        }
    } else {
        basic.showNumber(Berührungen)
    }
})
```

## Step 5 

Super, du hast die Programmierung des Spiels geschafft!  
Klicke auf ``|Herunterladen|``, um dein Programm auf deinen Calliope mini zu übertragen und Klavier zu spielen.

```template
```