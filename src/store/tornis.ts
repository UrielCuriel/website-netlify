import { writable } from "svelte/store"
import { watchViewport } from "tornis"

const sizeStore = writable({ x: 0, y: 0, docY: 0 })
const scrollStore = writable({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  velocity: {
    x: 0,
    y: 0,
  },
})
const mouseStore = writable({
  x: 0,
  y: 0,
  velocity: {
    x: 0,
    y: 0,
  },
})
const positionStore = writable({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  velocity: {
    x: 0,
    y: 0,
  },
})
const orientationStore = writable({
  alpha: 0,
  beta: 0,
  gamma: 0,
})
const devicePixelRatioStore = writable({ ratio: 0 })

const updateValues = ({
  size,
  scroll,
  mouse,
  position,
  orientation,
  devicePixelRatio,
}) => {
  if (size.changed) {
    sizeStore.set(size)
  }

  if (scroll.changed) {
    scrollStore.set(scroll)
  }

  if (mouse.changed) {
    mouseStore.set(mouse)
  }

  if (position.changed) {
    positionStore.set(position)
  }

  if (orientation.changed) {
    orientationStore.set(orientation)
  }

  if (devicePixelRatio.changed) {
    devicePixelRatioStore.set(devicePixelRatio)
  }
}

watchViewport(updateValues)

export {
  sizeStore,
  scrollStore,
  mouseStore,
  positionStore,
  orientationStore,
  devicePixelRatioStore,
}
