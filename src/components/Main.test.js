import {useReducer} from "react";

function updateTimes(state, action) {
    return ["17:00","18:00","19:00","20:00","21:00"];
}
function initializeTimes() {
    return ["17:00","18:00","19:00","20:00","21:00"];
}


describe('Test the updateTimes and initializeTimes functions', () => {

    it('Test initializeTimes', () => {
      const result = initializeTimes()

      expect(result).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00"])

    })

    it('Test updateTimes', () => {
        const result = updateTimes()

        expect(result).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00"])

      })
  })