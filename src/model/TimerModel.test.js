const TimerModel = require("./TimerModel")
// @ponicode
describe("saveTime", () => {
    let inst

    beforeEach(() => {
        inst = new TimerModel.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.saveTime()
        }
    
        expect(callFunction).not.toThrow()
    })
})
