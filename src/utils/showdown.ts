import { Converter } from "showdown"

const converter = new Converter()
converter.setOption("strikethrough", true)
export { converter }
