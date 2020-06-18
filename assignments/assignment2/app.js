var fortunes = [
    "Love For All, Hatred For None",
    "Change the world by being yourself",
    "Every moment is a fresh beginning",
    "Never regret anything that made you smile",
    "Die with memories, not dreams",
    "All limitations are self-imposed",
    "Oh, the things you can find, if you don’t stay behind",
    "Whatever you do, do it well"

]

function newFortune() {
    var random = Math.floor(Math.random() * (fortunes.length))
    document.getElementById('fortuneShow').innerHTML = fortunes[random]
}