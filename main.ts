function function1 () {
    scene.setBackgroundImage(assets.image`star sky`)
    mySprite = sprites.create(assets.image`purple cat`, SpriteKind.Player)
    mySprite2 = sprites.create(assets.image`yummy hambger`, SpriteKind.Food)
    mySprite2.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    controller.moveSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite2, assets.tile`transparency16`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(mySprite2)
    mySprite2 = sprites.create(assets.image`yummy hambger`, SpriteKind.Food)
    mySprite2.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
function1()
