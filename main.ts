controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . 8 8 . . . . 8 8 8 . . . 
        . . . . 8 8 8 . . . 8 8 8 8 . . 
        . . . . 9 9 9 9 9 9 9 8 8 8 8 . 
        . . . . 8 8 8 . . . 8 8 8 8 . . 
        . . . . 8 8 . . . . 8 8 8 . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . . 9 . . . . . . . 
        . . . . . . . . . . 9 9 9 9 . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space_normly_computer, -100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let alians: Sprite = null
let projectile: Sprite = null
let space_normly_computer: Sprite = null
space_normly_computer = sprites.create(img`
    . . . . . . 8 8 f . . . . . . . 
    . . . . . f 8 8 f 1 1 . . . . . 
    . . . . . f 8 8 f . . . . . . . 
    . . . . . f . 8 . . . . . . . . 
    . . 8 8 8 f 8 8 8 8 8 . . . 8 . 
    . . 8 8 8 8 8 8 8 8 8 . . 8 8 . 
    . . 8 8 8 8 8 8 8 8 8 . 9 8 8 1 
    . . . 8 8 8 8 8 8 8 8 . 9 8 8 . 
    . . . 8 8 8 8 8 8 8 8 8 9 . 8 . 
    . . . 8 8 8 8 8 8 8 8 9 9 . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(space_normly_computer, 100, 100)
space_normly_computer.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    alians = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . a a a a a a a a a a a a . . 
        . a a a a a a a a a a a a a a . 
        . . a a a a a a a a a a a a . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 . . . . . . . . 7 . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 . . . . 7 . . . . . 
        `, SpriteKind.Enemy)
    alians.setVelocity(-100, 50)
    alians.setPosition(160, randint(0, 115))
    alians.setFlag(SpriteFlag.AutoDestroy, true)
})
