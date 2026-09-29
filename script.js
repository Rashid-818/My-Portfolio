let main = document.querySelector("#main")
let btn = document.querySelector("#btn")
let initPage = document.querySelector("#initPage")
let countDiv = document.querySelector(".count")
let wlcmDiv = document.querySelector(".wlcm")


btn.addEventListener("click", () => {
   btn.classList.add("oneBtn")

   let count = 0

   const timer = setInterval(() => {
      count++
      countDiv.textContent = `${count}%`

      if (count === 100) {
         clearInterval(timer)

         countDiv.textContent = ""
         wlcmDiv.classList.add("show")

         const enter = document.createElement("button")
         enter.setAttribute("id","btn")
         enter.textContent = "Enter to My World !"
          enter.style.top = "70%"
          enter.style.left = "43%"
         initPage.append(enter)

         enter.addEventListener("click", () => {
           
            initPage.style.transform = "translateY(-100%)"

            setTimeout(() => {
               initPage.style.display = "none"
               
            }, 2000)
         }, { once: true })
      }
   }, 20)
})