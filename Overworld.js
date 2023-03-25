class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }


init() {
    const image = new Image();
    image.onload = () => {
        this.ctx.drawImage(image, 0,0)
    };
    image.src = "/images/Image.png";

    const x = 500;
    const y = 260;
    const hero = new Image();
    hero.onload = () => {
        this.ctx.drawImage(hero, 
        0, // left cut
        0, // top cut,
        32, // width of sprite sheet cut
        32, // height of sprite sheet cut
        x, // coordinate x
        y, // coordinate y
        32,
        32
        )
    };
    hero.src ="images/pixelCharSpriteSheet.png"
};




}