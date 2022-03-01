## DISCLAIMER!
### A self-botozást a Discord tiltja és a fiókod elvesztésével járhat, tehát mindenki saját felelősségére használja!

## RUNTIME & DEPENDENCIES
#### NodeJS szükséges a bot futtatásához! 
#### Kérlek szedd le innen a legfrissebb verziót: https://nodejs.org/en/
#### Szükséges a függőségeseket is fel kell tenni, tehát nyiss egy CMD-t és navigálj a mappába, ahol a bot van, azon belül is a package.json fájl, ha ez megvan, akkor írd be, az alábbi parancsot, hogy fel tedd a függőségeket!
```bat
npm install
```
## CONFIG
#### [.ENV]

A .env fájlban találni fogsz egy TOKEN= és egy CLIENTID= sort. 
Tokenhez írd be a Discord tokent, aminek megszerzéséhez itt találsz segítséget: https://www.youtube.com/watch?v=YEgFvgg7ZPI

ClientId-hoz pedig a felhasználó fiókod ID-ját. Ehhez szükséges bekapcsolnod a Developer módot, és saját nevedre jobb klikk és Copy ID! Ehhez segítséget itt találsz: https://www.youtube.com/watch?v=_2gpDnAdkbo

#### [CONFIG.JSON]
Az időt percben add meg, minimum és maximum távlatban, e két érték között fog random választani a bot.
```json
{
    "mistakeRate": 50,
    "channels": [
        {
            "id": "Ide kerül a channel ID-ja, ahova írni szeretnél",
            "guild": {
                "id": "Ide kerül szerver ID-ja, ahol a szoba és a role található"
            },
            "text": "A szöveg amit spammelni szeretnél",
            "mistakes": ["esetleges", "fake", "hibázást", "pedig", "ide", "írd"],
            "time": {
                "min": 5,
                "max": 15               
            },
            "role": {
                "id": "Ide kerül a role ID-ja, aminek megszerzése után leáll a spammelés."
            }
        }
    ]
}
```
Ezt a szekciót másold ha több szobát is szeretnél. Vesszőt mindig tegyél az előtte lévő zárásához!
```json
        {
            "id": "Ide kerül a channel ID-ja, ahova írni szeretnél",
            "guild": {
                "id": "Ide kerül szerver ID-ja, ahol a szoba és a role található"
            },
            "text": "A szöveg amit spammelni szeretnél",
            "mistakes": ["esetleges", "fake", "hibázást", "pedig", "ide", "írd"],
            "time": {
                "min": 5,
                "max": 15               
            },
            "role": {
                "id": "Ide kerül a role ID-ja, aminek megszerzése után leáll a spammelés."
            }
        }
```

## INDÍTÁS

#### [BAT]
Mellékeltem egy start.bat fájlt, amivel indítani lehet a botot. Ez az egyszerűbbik megoldás.
#### [CLI]
CMD-ből is indítható, akkor navigálj a bot mappájába, majd írd be a következő parancsot: 
```bat 
node ./src/app.js 
```

Ha ezzel készen vagy, akkor ezt fogja neked kiírni a bot, 20-30 másodperc elteltével: 


![74976967f609630114da78c4967a4c26](https://user-images.githubusercontent.com/76904667/155232766-3704c87c-1b08-48e6-93c4-7af5ff20a82c.png)

És innentől igazából már semmi teendőd nincs csak hátradőlni, és élvezni a modern technológia gyümölcsét.
