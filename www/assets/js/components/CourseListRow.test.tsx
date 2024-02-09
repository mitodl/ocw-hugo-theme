import { mount } from "enzyme"
import React from "react"

import { makeCourseSearchResult } from "../factories/search"
import { courseSearchResultToLearningResource } from "../lib/search"
import CourseListRow from "./CourseListRow"

function setup() {
  const course = courseSearchResultToLearningResource(makeCourseSearchResult())

  const wrapper = mount(<CourseListRow course={course} />)

  return { course, wrapper }
}

test("should have a link with the course URL", () => {
  const { wrapper, course } = setup()
  expect(wrapper.find("a").prop("href")).toBe(course.url)
})

test("should show the cover image", () => {
  const { wrapper, course } = setup()
  expect(wrapper.find("img").prop("src")).toBe(course.image_src)
})

test("should show the title, coursenum, level", () => {
  const { wrapper, course } = setup()
  expect(wrapper.find("h4").text()).toBe(course.title)
  expect(wrapper.find(".coursenum").text()).toBe(course.coursenum)
  expect(wrapper.find(".level").text()).toBe(
    course.level ? course.level.join(", ") : ""
  )
})
