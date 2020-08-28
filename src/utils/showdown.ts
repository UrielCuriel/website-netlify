import { Converter } from "showdown"

const converter = new Converter()
converter.setOption("strikethrough", true)
converter.setOption("requireSpaceBeforeHeadingText", true)
converter.setOption("disableForced4SpacesIndentedSublists", false)
export { converter }
