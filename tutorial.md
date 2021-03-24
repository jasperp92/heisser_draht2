# Kipplicht

## Step 1

Lass die LED in grün leuchten, wenn der Calliope
mini aufrecht steht.
Wenn der Calliope mini kopfüber steht, dann soll die LED rot leuchten!


## Step 2

Füge einen weiteren ``||input.Eingabe||``-Block ``||input.wenn geschüttelt||`` hinzu und wähle die noch fehlende Eingabe-Option aus.

```blocks
input.onGesture(Gesture.LogoUp, function () {
})
input.onGesture(Gesture.LogoDown, function () {
})
```

## Step 3

Wähle nun jeweils für eine ``||input.Eingabe||`` den ``||basic.Setze RGB-LED-Farbe auf||``-Block auf die entsprechende Farbe.

```blocks
input.onGesture(Gesture.LogoUp, function () {
    basic.setLedColor(0x00ff00)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.setLedColor(0xff0000)
})
```


## Step 4

Super! Dein Kipplicht ist fertig. Du kannst gerne die Farben oder auch die Lageposition der Eingabe nach deinem Belieben ändern.
Klicke auf ``|Herunterladen|``, um dein Programm auf deinen Calliope mini zu übertragen!
```template
input.onGesture(Gesture.LogoUp, function () {
})
```
