import { sum } from "./example"

describe("sum", () => {
  it("sums up two values", () => {
    expect(sum(2, 4)).toBe(6)
  })
})

describe("examples of test", () => {
  it("true is truthy", () => {
    expect(true).toBe(true)
  })

  it("false is falsy", () => {
    expect(false).toBe(false)
  })
})
