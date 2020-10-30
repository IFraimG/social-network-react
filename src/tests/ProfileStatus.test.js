import React from "react"
import { create, act } from "react-test-renderer"
import ProfileStatusWithHook from "../components/Profile/ProfileInfo/ProfileStatus"

describe("ProfileStatusUpdate", () => {
  test("a status must be in the state", () => {
    let component = create(<ProfileStatusWithHook status="СТАТУС" />)
    let instance = component.root
    expect(instance.props.status).toBe("СТАТУС")
  })

  test("text in <span> must to have the correct status after creation", () => {
    let component = create(<ProfileStatusWithHook status="СТАТУС" />)
    let instance = component.root.findByType("span").children
    expect(instance[0]).toBe("СТАТУС")
  })

  test("input must be displayed in editMode", () => {
    let component = create(<ProfileStatusWithHook status="СТАТУС" />)
    let instance = component.root.findByType("span")
    
    act(() => {
      instance.props.onDoubleClick()
    })
    let input = component.root.findByType("input")
    expect(input.props.value).toBe("СТАТУС")
  })

  test("text in <input> must to have the correct status after creation", () => {
    let component = create(<ProfileStatusWithHook status="СТАТУС" />)
    // let instance = component.root.findByType("input")
    expect(() => {
      let instance = component.root.findByType("input")
      console.log(instance);
    }).toThrow()
  })

  test("status must be update", () => {
    let mockCallback = jest.fn()
    let component = create(<ProfileStatusWithHook status="СТАТУС" updateStatus={mockCallback} />)
    component.root.props.updateStatus("СТАТУС")
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})