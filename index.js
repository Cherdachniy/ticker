let tickerWrapper = document.querySelector('.ticker-wrapper');
let ticker = tickerWrapper.querySelector('.ticker')
let tickerTextElement = ticker.querySelector('span')
let tickerRect = ticker.getBoundingClientRect()
let mainContent = document.querySelector('main')
let positionForCreate = (mainContent.clientWidth - tickerRect.width) / 2

console.log(ticker.getBoundingClientRect())
console.log(tickerTextElement.getBoundingClientRect())

slideElement(tickerTextElement)

// -- animationSlide --
function slideElement(element) {
    let position = parseInt(window.getComputedStyle(element).left)

    let animationTicker = setTimeout(function timer() {
        let elementPositions = element.getBoundingClientRect()
        position -= 30
        element.style.left = `${position}px`
        if (element.classList.contains('last')) {
            if (tickerRect.right - elementPositions.right > positionForCreate) {
                createtickerElement()
                element.classList.remove('last')
            }
        }

        if (elementPositions.x < -10) {
            element.remove()
            return clearTimeout(animationTicker)
        }

        setTimeout(timer, 1000)
    }, 1000)
}

function createtickerElement() {
    let span = document.createElement('span')
    span.classList.add('last')
    span.innerHTML = tickerTextElement.innerHTML
    ticker.append(span)
    slideElement(span)
}
