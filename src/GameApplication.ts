import * as PIXI from "pixi.js";

export class GameApplication extends PIXI.Application {

    public static STAGE_WIDTH: number = 800;
    public static STAGE_HEIGHT: number = 600;

    private static app: GameApplication;

    constructor() {
        super(GameApplication.getAppOptions());
        this.init();
    }

    public static getApp(): GameApplication {
        return this.app;
    }

    private init() {
        GameApplication.app = this;

        window.onload = () => {
            const gameContainer: HTMLCanvasElement = document.getElementById("gameContainer") as HTMLCanvasElement;
            gameContainer.appendChild(this.view);

            this.resizeCanvas();
            this.loadAssets();

            this.view.style.position = 'absolute';
            this.view.style.left = '50%';
            this.view.style.top = '50%';
            this.view.style.transform = 'translate3d( -50%, -50%, 0 )';
        };
    }

    private static getAppOptions() {
        return {
            backgroundColor: 0x000000,
            width: GameApplication.STAGE_WIDTH,
            height: GameApplication.STAGE_HEIGHT,
        }
    }

    private resizeCanvas(): void {
        const resize = () => {
            this.renderer.resize(GameApplication.STAGE_WIDTH, GameApplication.STAGE_HEIGHT);
        };

        resize();

        window.addEventListener("resize", resize);
    }

    private loadAssets() {

    }

}