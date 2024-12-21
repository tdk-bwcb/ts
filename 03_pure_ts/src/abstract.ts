abstract class TakePhoto {
    constructor(
        cameraMode: string,
        filter: string,
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        // .....
        return 8
    }

}

// const hc = new TakePhoto("ihsde", "eufsu") // -> ❌ if abstract class

class Instagram1 extends TakePhoto{
    constructor(
            cameraMode: string,
            filter: string,
            burst: number,
        ){
            super(cameraMode, filter)
        }
        getSepia(): void {
            console.log("Sepia");
        }
}
const  hc1 = new Instagram1("test", "test1", 675) // -> ✅ for extending abstract class
hc1.getReelTime()