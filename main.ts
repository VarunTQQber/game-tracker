function scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 Score: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 Score: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PA += 1
    Rounds += 1
    basic.clearScreen()
    scoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    basic.clearScreen()
    scoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    PB += 1
    Rounds += 1
    basic.clearScreen()
    scoreboard()
})
input.onGesture(Gesture.Shake, function () {
    OLED.clear()
    reset()
})
function reset () {
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Let's play a game!")
    basic.pause(2000)
    scoreboard()
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
reset()
