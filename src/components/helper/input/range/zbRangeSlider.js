export default function (id) {
    var self = this
    var startX = 0
    var x = 0

    // retrieve touch button
    var slider = document.getElementById(id)
    var touchLeft = slider.querySelector('.slider-touch-left') // using this we can set values
    var touchRight = slider.querySelector('.slider-touch-right') // and this
    var lineSpan = slider.querySelector('.slider-line span')

    // get some properties
    var min = parseFloat(slider.getAttribute('se-min'))
    var max = parseFloat(slider.getAttribute('se-max'))

    // retrieve default values
    var defaultMinValue = min
    if (slider.hasAttribute('se-min-value')) {
        defaultMinValue = parseFloat(slider.getAttribute('se-min-value'))
    }
    var defaultMaxValue = max

    if (slider.hasAttribute('se-max-value')) {
        defaultMaxValue = parseFloat(slider.getAttribute('se-max-value'))
    }

    // check values are correct
    if (defaultMinValue < min) {
        defaultMinValue = min
    }

    if (defaultMaxValue > max) {
        defaultMaxValue = max
    }

    if (defaultMinValue > defaultMaxValue) {
        defaultMinValue = defaultMaxValue
    }

    var step = 0.0

    if (slider.getAttribute('se-step')) {
        step = Math.abs(parseFloat(slider.getAttribute('se-step')))
    }

    // normalize flag
    var normalizeFact = 26

    self.slider = slider
    self.reset = function () {
        touchLeft.style.left = '0px'
        touchRight.style.left = slider.offsetWidth - touchLeft.offsetWidth + 'px'
        lineSpan.style.marginLeft = '0px'
        lineSpan.style.width = slider.offsetWidth - touchLeft.offsetWidth + 'px'
        startX = 0
        x = 0
    }

    self.setMinValue = function (minValue) {
        var ratio = (minValue - min) / (max - min)
        touchLeft.style.left =
            Math.ceil(
                ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))
            ) + 'px'
        lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px'
        lineSpan.style.width = touchRight.offsetLeft - touchLeft.offsetLeft + 'px'
        slider.setAttribute('se-min-value', minValue)
    }

    self.setMaxValue = function (maxValue) {
        var ratio = (maxValue - min) / (max - min)
        touchRight.style.left =
            Math.ceil(
                ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) +
                normalizeFact
            ) + 'px'
        lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px'
        lineSpan.style.width = touchRight.offsetLeft - touchLeft.offsetLeft + 'px'
        slider.setAttribute('se-max-value', maxValue)
    }

    // initial reset
    self.reset()

    // usefull values, min, max, normalize fact is the width of both touch buttons
    var maxX = slider.offsetWidth - touchRight.offsetWidth
    var selectedTouch = null
    var initialValue = lineSpan.offsetWidth - normalizeFact

    // set defualt values
    self.setMinValue(defaultMinValue)
    self.setMaxValue(defaultMaxValue)

    // setup touch/click events
    function onStart(event) {
        // Prevent default dragging of selected content
        event.preventDefault()
        var eventTouch = event

        if (event.touches) {
            eventTouch = event.touches[0]
        }

        if (this === touchLeft) {
            x = touchLeft.offsetLeft
        } else {
            x = touchRight.offsetLeft
        }

        startX = eventTouch.pageX - x
        selectedTouch = this
        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', onStop)
        document.addEventListener('touchmove', onMove)
        document.addEventListener('touchend', onStop)
    }

    function getActualWidth(value) {
        let percentValue = value / (max - min); // percent
        console.log(percentValue);
        return (slider.offsetWidth - 20) * percentValue;
    }
// not needed
    // eslint-disable-next-line no-unused-vars
    self.valueMin = function setValueMin(value) {
        setRight(touchLeft, getActualWidth(value));
        updateLineSpan();
    }

    // eslint-disable-next-line no-unused-vars
    self.valueMax = function setValueMax(value) {
        setLeft(touchRight, getActualWidth(value));
        updateLineSpan();
    }

    function setRight(selectedTouch, x) {
        if (x > touchRight.offsetLeft - selectedTouch.offsetWidth + 10) {
            x = touchRight.offsetLeft - selectedTouch.offsetWidth + 10
        } else if (x < 0) {
            x = 0
        }
        selectedTouch.style.left = x + 'px'
        return x;
    }

    function setLeft(selectedTouch, x) {
        if (x < touchLeft.offsetLeft + touchLeft.offsetWidth - 10) {
            x = touchLeft.offsetLeft + touchLeft.offsetWidth - 10
        } else if (x > maxX) {
            x = maxX
        }
        selectedTouch.style.left = x + 'px';
        return x;
    }

    function updateLineSpan() {
        lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px'
        lineSpan.style.width = touchRight.offsetLeft - touchLeft.offsetLeft + 'px'
    }

    function onMove(event) {
        var eventTouch = event

        if (event.touches) {
            eventTouch = event.touches[0]
        }
        /// have to change toucheRight, toucheLeft , and lineSpan
        // first have to get percent from model calculate price as percent
        // then get overall width and multiply by that percent
        // then set selectedTouch and line span correspondingly
        // end
        x = eventTouch.pageX - startX
        if (selectedTouch === touchLeft) {
            x = setRight(selectedTouch, x);
        } else if (selectedTouch === touchRight) {
            x = setLeft(selectedTouch, x);
        }

        // update line span
        updateLineSpan();
        // write new value
        calculateValue()

        // call on change
        if (slider.getAttribute('on-change')) {
            // eslint-disable-next-line no-new-func
            var fn = new Function('min, max', slider.getAttribute('on-change'))
            fn(
                slider.getAttribute('se-min-value'),
                slider.getAttribute('se-max-value')
            )
        }

        if (self.onChange) {
            self.onChange(
                slider.getAttribute('se-min-value'),
                slider.getAttribute('se-max-value')
            )
        }
    }

    function onStop() {
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onStop)
        document.removeEventListener('touchmove', onMove)
        document.removeEventListener('touchend', onStop)

        selectedTouch = null

        // write new value
        calculateValue()
        // call did changed
        if (slider.getAttribute('did-changed')) {
            // eslint-disable-next-line no-new-func
            var fn = new Function('min, max', slider.getAttribute('did-changed'))
            fn(
                slider.getAttribute('se-min-value'),
                slider.getAttribute('se-max-value')
            )
        }

        if (self.didChanged) {
            self.didChanged(
                slider.getAttribute('se-min-value'),
                slider.getAttribute('se-max-value')
            )
        }
    }

    function calculateValue() {
        var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue
        var minValue = lineSpan.offsetLeft / initialValue
        var maxValue = minValue + newValue

        minValue = minValue * (max - min) + min
        maxValue = maxValue * (max - min) + min

        if (step !== 0.0) {
            var multi = Math.floor(minValue / step)
            minValue = step * multi

            multi = Math.floor(maxValue / step)
            maxValue = step * multi
        }

        slider.setAttribute('se-min-value', minValue)
        slider.setAttribute('se-max-value', maxValue)
    }

    // link events
    touchLeft.addEventListener('mousedown', onStart)
    touchRight.addEventListener('mousedown', onStart)
    touchLeft.addEventListener('touchstart', onStart)
    touchRight.addEventListener('touchstart', onStart)
}