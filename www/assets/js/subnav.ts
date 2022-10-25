const initSubNav = () => {
  // [START] Scrolling to appropriate section when subnav item is clicked
  $(".on-page-sub-nav .nav-link").on("click", e => {
    const navbar = $(".on-page-sub-nav")
    const clickedLink = $(e.target)
    navbar.find(".active").removeClass("active")
    clickedLink.addClass("active")
    $(".navbar-current-active").text(clickedLink.text())

    const target = $(clickedLink.attr("href")!).get(0)
    const yOffset = -(navbar.height()! + 20)
    const y = target!.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({
      top:      y,
      behavior: "smooth"
    })
  })
  // [END] Scrolling to appropriate section when subnav item is clicked

  // [START] highlight subnav item as user scrolls
  $(window).on("scroll", function() {
    const position = window.pageYOffset

    $(".section").each(function() {
      const target = $(this).offset()?.top
      const navHeight = $(".on-page-sub-nav").height()

      if (navHeight && target && position >= target - navHeight - 50) {
        const navLinks = $(".on-page-sub-nav  li a")
        navLinks.removeClass("active")

        const currentId = $(this).attr("id")
        const currentNavItem = $(`.on-page-sub-nav  li a[href="#${currentId}"]`)
        currentNavItem.addClass("active")

        const brandText = currentNavItem.text()
        $(".navbar-brand > span").text(brandText)
      }
    })
  })
  // [END] highlight subnav item as user scrolls
}

export { initSubNav }
