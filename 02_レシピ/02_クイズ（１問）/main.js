const choice1 = document.getElementByID("choice-1")
const choice2 = document.getElementByID("choice-2")
const choice3 = document.getElementByID("choice-3")

choice1.onclick = function(){
    feedback.textContent =
    "残念！ゴリアテは、旧約聖書の登場するダビデに石で殺される巨人だよ！"
}
choice2.onclick = function(){
    feedback.textContent =
    "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ！"
｝
choice3.onclick = function(){
    feedback.textContent =
    "正解！ガニメデは、木星の第三惑星だよ！"
    ｝
    