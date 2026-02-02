class runCar{
    #EngineRunning(){
        console.log("Engine is running");
    }
    start(){
        this.#EngineRunning()
        console.log("Started!")
    }
}
const car = new runCar()
car.start();
