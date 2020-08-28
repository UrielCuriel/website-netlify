<script lang="ts">
  import { setContext } from "svelte"
  import { fade, fly } from "svelte/transition"
  import { goto, params } from "@sveltech/routify"
  import { writable } from "svelte/store"
  import { sizeStore } from "../store/tornis"
  let showCoreTitle = false
  let showXpTitle: boolean = false
  let showSkillsTitle: boolean = false
  let core: HTMLElement
  let xp: HTMLElement
  let skills: HTMLElement
  let hideTitle = true
  export let show: boolean = false
  let svg = writable<SVGSVGElement>(null)
  let width = writable<number>(600)
  let height = writable<number>(462.0794254424606)
  let x = 100
  let y = 100
  let moveSvg = (_x: number, _y: number) => {
    x = _x
    y = _y
  }
  $: {
    if ($width) {
      console.log($width)

      $height = $width * 0.7701323757374343
      console.log($height)
    }
  }
  setContext("landing", {
    show: (value) => {
      setTimeout(() => {
        show = $sizeStore.x > 800 ? value : false
      }, 700)
    },
    moveSvg,
    svg,
    showTitles: (value) => {
      hideTitle = !value
      showCoreTitle = value
      showXpTitle = value
      showSkillsTitle = value
    },
    setSize: (value) => {
      $width = value > 300 ? value : 300
    },
    width,
    height,
  })
  $: {
    if ($svg) {
      console.log($svg)
    }
  }
</script>

<slot />
{#if show}
  <svg
    transition:fade|local={{ delay: 700 }}
    class="fixed top-0 left-0 transition-all duration-700 ease-in-out z-30"
    style="width:{$width}px; transform: translate({x}px,{y}px)"
    bind:this={$svg}
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 928.17 758.44">
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="147.45"
        y1="229.11"
        x2="165.96"
        y2="202.67"
        gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" />
        <stop offset="0.77" stop-color="#ad2167" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="245.19"
        y1="229.11"
        x2="226.67"
        y2="202.67"
        xlink:href="#linear-gradient" />
      <linearGradient
        id="linear-gradient-3"
        x1="196.32"
        y1="224.21"
        x2="196.32"
        y2="112.71"
        xlink:href="#linear-gradient" />
      <linearGradient
        id="linear-gradient-4"
        x1="511.62"
        y1="335.02"
        x2="511.62"
        y2="360.7"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.31" stop-color="#f1f4f6" stop-opacity="0.23" />
        <stop offset="0.77" stop-color="#829ab1" stop-opacity="0.8" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-5"
        x1="534.15"
        y1="335.02"
        x2="534.15"
        y2="360.7"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-6"
        x1="534.15"
        y1="347.86"
        x2="534.15"
        y2="373.54"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-7"
        x1="511.62"
        y1="347.86"
        x2="511.62"
        y2="373.54"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-8"
        x1="466.56"
        y1="308.89"
        x2="466.56"
        y2="334.57"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-9"
        x1="489.09"
        y1="308.89"
        x2="489.09"
        y2="334.57"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-10"
        x1="489.09"
        y1="321.73"
        x2="489.09"
        y2="347.41"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-11"
        x1="466.56"
        y1="321.73"
        x2="466.56"
        y2="347.41"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-12"
        x1="511.62"
        y1="413.42"
        x2="511.62"
        y2="439.1"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-13"
        x1="534.15"
        y1="413.42"
        x2="534.15"
        y2="439.1"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-14"
        x1="534.15"
        y1="426.26"
        x2="534.15"
        y2="451.94"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-15"
        x1="511.62"
        y1="426.26"
        x2="511.62"
        y2="451.94"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-16"
        x1="466.56"
        y1="387.29"
        x2="466.56"
        y2="412.97"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-17"
        x1="489.09"
        y1="387.29"
        x2="489.09"
        y2="412.97"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-18"
        x1="489.09"
        y1="400.13"
        x2="489.09"
        y2="425.81"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-19"
        x1="466.56"
        y1="400.13"
        x2="466.56"
        y2="425.81"
        xlink:href="#linear-gradient-4" />
      <linearGradient
        id="linear-gradient-20"
        x1="884.89"
        y1="188.43"
        x2="884.89"
        y2="189.02"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.31" stop-color="#bef8fd" />
        <stop offset="0.77" stop-color="#e0fcff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-21"
        x1="884.16"
        y1="121.02"
        x2="884.16"
        y2="121.61"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.31" stop-color="#38bec9" />
        <stop offset="0.77" stop-color="#54d1db" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-22"
        x1="839.39"
        y1="138.67"
        x2="929.42"
        y2="138.67"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.31" stop-color="#2cb1bc" />
        <stop offset="0.77" stop-color="#54d1db" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-23"
        x1="884.16"
        y1="68.9"
        x2="884.16"
        y2="136.31"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.31" stop-color="#e0fcff" />
        <stop offset="0.77" stop-color="#54d1db" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-24"
        x1="884.4"
        y1="37.56"
        x2="884.4"
        y2="104.97"
        xlink:href="#linear-gradient-23" />
    </defs>
    <title>Uriel Curiel</title>
    <g
      id="base"
      class="hover:opacity-75 transition-opacity duration-300 ease-in-out
      cursor-pointer"
      on:click={() => {
        $goto('/', { ...$params })
      }}>
      <g>
        <g>
          <image
            width="909"
            height="466"
            transform="translate(19.17 292.44)"
            xlink:href="data:image/png;base64,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"
            style="opacity: 0.5" />
          <path
            d="M1108.53,377.72c28.47,23.69,25.46,80.86-4.36,101.74l-342.85,240a52.43,52.43,0,0,1-60.14,0l-342.85-240c-29.82-20.88-33.57-77.28-3.75-102.27"
            transform="translate(-257.83 -37.56)"
            style="fill: #627d98" />
        </g>
        <path
          d="M699.44,718.13,337.83,465c-31.45-22-35.4-81.5-3.95-107.85L699.44,121.28a55.29,55.29,0,0,1,63.42,0l366.21,236.43c30,25,26.85,85.28-4.6,107.3L762.86,718.13A55.29,55.29,0,0,1,699.44,718.13Z"
          transform="translate(-257.83 -37.56)"
          style="fill: #627d98" />
        <path
          d="M699.44,697.86,337.83,444.73c-31.45-22-31.45-68.59,0-90.61L699.44,101a55.29,55.29,0,0,1,63.42,0l361.61,253.12c31.45,22,31.45,68.6,0,90.61L762.86,697.86A55.32,55.32,0,0,1,699.44,697.86Z"
          transform="translate(-257.83 -37.56)"
          style="fill: #d9e2ec" />
      </g>
    </g>
    <g
      id="core"
      class="hover:opacity-75 transition-opacity duration-300 ease-in-out
      cursor-pointer"
      on:click={() => {
        $goto('/about',{...$params})
      }}
      on:mouseover={() => {
        showCoreTitle = true
      }}
      on:mouseout={() => {
        if (hideTitle) {
          showCoreTitle = false
        }
      }}
      transition:fly={{ y: -30, delay: 1000 }}>
      <g>
        <g>
          <image
            width="196"
            height="93"
            transform="translate(98.17 340.44)"
            xlink:href="data:image/png;base64,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"
            style="opacity: 0.6000000000000001" />
          <polygon
            points="275.54 352.33 117.09 352.33 196.32 408.08 275.54 352.33"
            style="fill: #5c0b33" />
        </g>
        <g>
          <polygon
            points="117.09 313.21 196.32 368.96 196.32 408.08 117.09 352.33
            117.09 313.21"
            style="fill: #fab8d9" />
          <polygon
            points="196.32 368.96 275.54 313.21 275.54 352.33 196.32 408.08
            196.32 368.96"
            style="fill: #ffe0f0" />
          <polygon
            points="196.32 257.46 117.09 313.21 196.32 368.96 275.54 313.21
            196.32 257.46"
            style="fill: #f191c1" />
        </g>
        <g>
          <image
            width="196"
            height="93"
            transform="translate(98.17 235.44)"
            xlink:href="data:image/png;base64,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"
            style="opacity: 0.6000000000000001" />
          <polygon
            points="275.54 246.7 117.09 246.7 196.32 302.45 275.54 246.7"
            style="fill: #5c0b33" />
        </g>
        <g>
          <polygon
            points="117.09 207.58 196.32 263.33 196.32 302.45 117.09 246.7
            117.09 207.58"
            style="fill: #c42d78" />
          <polygon
            points="196.32 263.33 275.54 207.58 275.54 246.7 196.32 302.45
            196.32 263.33"
            style="fill: #da4a91" />
          <polygon
            points="196.32 151.83 117.09 207.58 196.32 263.33 275.54 207.58
            196.32 151.83"
            style="fill: #ad2167" />
        </g>
        <g>
          <polygon
            points="117.09 168.46 196.32 224.21 196.32 263.33 117.09 207.58
            117.09 168.46"
            style="opacity: 0.25;fill: url(#linear-gradient)" />
          <polygon
            points="196.32 224.21 275.54 168.46 275.54 207.58 196.32 263.33
            196.32 224.21"
            style="opacity: 0.32;fill: url(#linear-gradient-2)" />
          <polygon
            points="196.32 112.71 117.09 168.46 196.32 224.21 275.54 168.46
            196.32 112.71"
            style="opacity: 0.22;fill: url(#linear-gradient-3)" />
        </g>
        {#if showCoreTitle}
          <g id="Title" transition:fade|local>
            <polyline
              points="196.32 98.75 196.32 72.14 0 72.14"
              style="fill: none;stroke: #9b1b5a;stroke-miterlimit: 10" />
            <text
              transform="translate(0 67.41)"
              style="font-size: 22.42257308959961px;fill: #c42d78;">
              Acerca
            </text>
          </g>
        {/if}
      </g>
    </g>
    <g
      id="xp"
      transition:fly={{ y: -30, delay: 1000 }}
      class="hover:opacity-75 transition-opacity duration-300 ease-in-out
      cursor-pointer"
      on:click={() => {
        $goto('/work',{...$params})
      }}
      on:mouseover={() => {
        showXpTitle = true
      }}
      on:mouseout={() => {
        if (hideTitle) {
          showXpTitle = false
        }
      }}>
      <g>
        <g>
          <image
            width="166"
            height="70"
            transform="translate(417.17 556.44)"
            xlink:href="data:image/png;base64,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"
            style="opacity: 0.5" />
          <polygon
            points="432.77 567.77 567.94 567.77 500.36 606.97 432.77 567.77"
            style="fill: #9fb3c8" />
        </g>
        <g>
          <polygon
            points="477.83 515.51 500.36 502.44 522.89 515.51 500.36 528.57
            477.83 515.51"
            style="fill: #627d98" />
          <polygon
            points="477.83 515.51 477.83 541.64 500.36 554.71 500.36 528.57
            477.83 515.51"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 515.51 500.36 528.57 500.36 554.71 522.89 541.64
            522.89 515.51"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="477.83 489.37 500.36 476.31 522.89 489.37 500.36 502.44
            477.83 489.37"
            style="fill: #627d98" />
          <polygon
            points="477.83 489.37 477.83 515.51 500.36 528.57 500.36 502.44
            477.83 489.37"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 489.37 500.36 502.44 500.36 528.57 522.89 515.51
            522.89 489.37"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="477.83 463.24 500.36 450.17 522.89 463.24 500.36 476.31
            477.83 463.24"
            style="fill: #627d98" />
          <polygon
            points="477.83 463.24 477.83 489.37 500.36 502.44 500.36 476.31
            477.83 463.24"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 463.24 500.36 476.31 500.36 502.44 522.89 489.37
            522.89 463.24"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="500.36 528.57 522.89 515.51 545.41 528.57 522.89 541.64
            500.36 528.57"
            style="fill: #627d98" />
          <polygon
            points="500.36 528.57 500.36 554.71 522.89 567.77 522.89 541.64
            500.36 528.57"
            style="fill: #9fb3c8" />
          <polygon
            points="545.41 528.57 522.89 541.64 522.89 567.77 545.41 554.71
            545.41 528.57"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="500.36 502.44 522.89 489.37 545.41 502.44 522.89 515.51
            500.36 502.44"
            style="fill: #627d98" />
          <polygon
            points="500.36 502.44 500.36 528.57 522.89 541.64 522.89 515.51
            500.36 502.44"
            style="fill: #9fb3c8" />
          <polygon
            points="545.41 502.44 522.89 515.51 522.89 541.64 545.41 528.57
            545.41 502.44"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="500.36 360.48 522.89 347.41 545.41 360.48 522.89 373.54
            500.36 360.48"
            style="fill: #627d98" />
          <polygon
            points="500.36 360.48 500.36 386.61 522.89 399.68 522.89 373.54
            500.36 360.48"
            style="fill: #9fb3c8" />
          <polygon
            points="545.41 360.48 522.89 373.54 522.89 399.68 545.41 386.61
            545.41 360.48"
            style="fill: #829ab1" />
          <polygon
            points="522.89 335.02 522.89 347.64 500.36 360.7 500.36 348.09
            522.89 335.02"
            style="fill: url(#linear-gradient-4)" />
          <polygon
            points="522.89 335.02 522.89 347.64 545.41 360.7 545.41 348.09
            522.89 335.02"
            style="fill: url(#linear-gradient-5)" />
          <polygon
            points="545.41 347.86 522.89 360.93 522.89 373.54 545.41 360.48
            545.41 347.86"
            style="fill: url(#linear-gradient-6)" />
          <polygon
            points="500.36 347.86 500.36 360.48 522.89 373.54 522.89 360.93
            500.36 347.86"
            style="fill: url(#linear-gradient-7)" />
        </g>
        <g>
          <polygon
            points="522.89 541.64 545.41 528.57 567.94 541.64 545.41 554.71
            522.89 541.64"
            style="fill: #627d98" />
          <polygon
            points="522.89 541.64 522.89 567.77 545.41 580.84 545.41 554.71
            522.89 541.64"
            style="fill: #9fb3c8" />
          <polygon
            points="567.94 541.64 545.41 554.71 545.41 580.84 567.94 567.77
            567.94 541.64"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="522.89 515.51 545.41 502.44 567.94 515.51 545.41 528.57
            522.89 515.51"
            style="fill: #627d98" />
          <polygon
            points="522.89 515.51 522.89 541.64 545.41 554.71 545.41 528.57
            522.89 515.51"
            style="fill: #9fb3c8" />
          <polygon
            points="567.94 515.51 545.41 528.57 545.41 554.71 567.94 541.64
            567.94 515.51"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="522.89 489.37 545.41 476.31 567.94 489.37 545.41 502.44
            522.89 489.37"
            style="fill: #627d98" />
          <polygon
            points="522.89 489.37 522.89 515.51 545.41 528.57 545.41 502.44
            522.89 489.37"
            style="fill: #9fb3c8" />
          <polygon
            points="567.94 489.37 545.41 502.44 545.41 528.57 567.94 515.51
            567.94 489.37"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="455.3 528.57 477.83 515.51 500.36 528.57 477.83 541.64 455.3
            528.57"
            style="fill: #627d98" />
          <polygon
            points="455.3 528.57 455.3 554.71 477.83 567.77 477.83 541.64 455.3
            528.57"
            style="fill: #9fb3c8" />
          <polygon
            points="500.36 528.57 477.83 541.64 477.83 567.77 500.36 554.71
            500.36 528.57"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="455.3 502.44 477.83 489.37 500.36 502.44 477.83 515.51 455.3
            502.44"
            style="fill: #627d98" />
          <polygon
            points="455.3 502.44 455.3 528.57 477.83 541.64 477.83 515.51 455.3
            502.44"
            style="fill: #9fb3c8" />
          <polygon
            points="500.36 502.44 477.83 515.51 477.83 541.64 500.36 528.57
            500.36 502.44"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="455.3 334.34 477.83 321.28 500.36 334.34 477.83 347.41 455.3
            334.34"
            style="fill: #627d98" />
          <polygon
            points="455.3 334.34 455.3 360.48 477.83 373.54 477.83 347.41 455.3
            334.34"
            style="fill: #9fb3c8" />
          <polygon
            points="500.36 334.34 477.83 347.41 477.83 373.54 500.36 360.48
            500.36 334.34"
            style="fill: #829ab1" />
          <polygon
            points="477.83 308.89 477.83 321.5 455.3 334.57 455.3 321.95 477.83
            308.89"
            style="fill: url(#linear-gradient-8)" />
          <polygon
            points="477.83 308.89 477.83 321.5 500.36 334.57 500.36 321.95
            477.83 308.89"
            style="fill: url(#linear-gradient-9)" />
          <polygon
            points="500.36 321.73 477.83 334.79 477.83 347.41 500.36 334.34
            500.36 321.73"
            style="fill: url(#linear-gradient-10)" />
          <polygon
            points="455.3 321.73 455.3 334.34 477.83 347.41 477.83 334.79 455.3
            321.73"
            style="fill: url(#linear-gradient-11)" />
        </g>
        <g>
          <polygon
            points="477.83 541.64 500.36 528.57 522.89 541.64 500.36 554.71
            477.83 541.64"
            style="fill: #627d98" />
          <polygon
            points="477.83 541.64 477.83 567.77 500.36 580.84 500.36 554.71
            477.83 541.64"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 541.64 500.36 554.71 500.36 580.84 522.89 567.77
            522.89 541.64"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="477.83 515.51 500.36 502.44 522.89 515.51 500.36 528.57
            477.83 515.51"
            style="fill: #627d98" />
          <polygon
            points="477.83 515.51 477.83 541.64 500.36 554.71 500.36 528.57
            477.83 515.51"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 515.51 500.36 528.57 500.36 554.71 522.89 541.64
            522.89 515.51"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="477.83 489.37 500.36 476.31 522.89 489.37 500.36 502.44
            477.83 489.37"
            style="fill: #627d98" />
          <polygon
            points="477.83 489.37 477.83 515.51 500.36 528.57 500.36 502.44
            477.83 489.37"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 489.37 500.36 502.44 500.36 528.57 522.89 515.51
            522.89 489.37"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="500.36 554.71 522.89 541.64 545.41 554.71 522.89 567.77
            500.36 554.71"
            style="fill: #627d98" />
          <polygon
            points="500.36 554.71 500.36 580.84 522.89 593.9 522.89 567.77
            500.36 554.71"
            style="fill: #9fb3c8" />
          <polygon
            points="545.41 554.71 522.89 567.77 522.89 593.9 545.41 580.84
            545.41 554.71"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="500.36 528.57 522.89 515.51 545.41 528.57 522.89 541.64
            500.36 528.57"
            style="fill: #627d98" />
          <polygon
            points="500.36 528.57 500.36 554.71 522.89 567.77 522.89 541.64
            500.36 528.57"
            style="fill: #9fb3c8" />
          <polygon
            points="545.41 528.57 522.89 541.64 522.89 567.77 545.41 554.71
            545.41 528.57"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="500.36 438.88 522.89 425.81 545.41 438.88 522.89 451.94
            500.36 438.88"
            style="fill: #627d98" />
          <polygon
            points="500.36 438.88 500.36 465.01 522.89 478.08 522.89 451.94
            500.36 438.88"
            style="fill: #9fb3c8" />
          <polygon
            points="545.41 438.88 522.89 451.94 522.89 478.08 545.41 465.01
            545.41 438.88"
            style="fill: #829ab1" />
          <polygon
            points="522.89 413.42 522.89 426.04 500.36 439.1 500.36 426.49
            522.89 413.42"
            style="fill: url(#linear-gradient-12)" />
          <polygon
            points="522.89 413.42 522.89 426.04 545.41 439.1 545.41 426.49
            522.89 413.42"
            style="fill: url(#linear-gradient-13)" />
          <polygon
            points="545.41 426.26 522.89 439.33 522.89 451.94 545.41 438.88
            545.41 426.26"
            style="fill: url(#linear-gradient-14)" />
          <polygon
            points="500.36 426.26 500.36 438.88 522.89 451.94 522.89 439.33
            500.36 426.26"
            style="fill: url(#linear-gradient-15)" />
        </g>
        <g>
          <polygon
            points="432.77 541.64 455.3 528.57 477.83 541.64 455.3 554.71 432.77
            541.64"
            style="fill: #627d98" />
          <polygon
            points="432.77 541.64 432.77 567.77 455.3 580.84 455.3 554.71 432.77
            541.64"
            style="fill: #9fb3c8" />
          <polygon
            points="477.83 541.64 455.3 554.71 455.3 580.84 477.83 567.77 477.83
            541.64"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="432.77 515.51 455.3 502.44 477.83 515.51 455.3 528.57 432.77
            515.51"
            style="fill: #627d98" />
          <polygon
            points="432.77 515.51 432.77 541.64 455.3 554.71 455.3 528.57 432.77
            515.51"
            style="fill: #9fb3c8" />
          <polygon
            points="477.83 515.51 455.3 528.57 455.3 554.71 477.83 541.64 477.83
            515.51"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="432.77 489.37 455.3 476.31 477.83 489.37 455.3 502.44 432.77
            489.37"
            style="fill: #627d98" />
          <polygon
            points="432.77 489.37 432.77 515.51 455.3 528.57 455.3 502.44 432.77
            489.37"
            style="fill: #9fb3c8" />
          <polygon
            points="477.83 489.37 455.3 502.44 455.3 528.57 477.83 515.51 477.83
            489.37"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="455.3 554.71 477.83 541.64 500.36 554.71 477.83 567.77 455.3
            554.71"
            style="fill: #627d98" />
          <polygon
            points="455.3 554.71 455.3 580.84 477.83 593.9 477.83 567.77 455.3
            554.71"
            style="fill: #9fb3c8" />
          <polygon
            points="500.36 554.71 477.83 567.77 477.83 593.9 500.36 580.84
            500.36 554.71"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="455.3 528.57 477.83 515.51 500.36 528.57 477.83 541.64 455.3
            528.57"
            style="fill: #627d98" />
          <polygon
            points="455.3 528.57 455.3 554.71 477.83 567.77 477.83 541.64 455.3
            528.57"
            style="fill: #9fb3c8" />
          <polygon
            points="500.36 528.57 477.83 541.64 477.83 567.77 500.36 554.71
            500.36 528.57"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="455.3 412.74 477.83 399.68 500.36 412.74 477.83 425.81 455.3
            412.74"
            style="fill: #627d98" />
          <polygon
            points="455.3 412.74 455.3 438.88 477.83 451.94 477.83 425.81 455.3
            412.74"
            style="fill: #9fb3c8" />
          <polygon
            points="500.36 412.74 477.83 425.81 477.83 451.94 500.36 438.88
            500.36 412.74"
            style="fill: #829ab1" />
          <polygon
            points="477.83 387.29 477.83 399.9 455.3 412.97 455.3 400.35 477.83
            387.29"
            style="fill: url(#linear-gradient-16)" />
          <polygon
            points="477.83 387.29 477.83 399.9 500.36 412.97 500.36 400.35
            477.83 387.29"
            style="fill: url(#linear-gradient-17)" />
          <polygon
            points="500.36 400.13 477.83 413.19 477.83 425.81 500.36 412.74
            500.36 400.13"
            style="fill: url(#linear-gradient-18)" />
          <polygon
            points="455.3 400.13 455.3 412.74 477.83 425.81 477.83 413.19 455.3
            400.13"
            style="fill: url(#linear-gradient-19)" />
        </g>
        <g>
          <polygon
            points="477.83 567.77 500.36 554.71 522.89 567.77 500.36 580.84
            477.83 567.77"
            style="fill: #627d98" />
          <polygon
            points="477.83 567.77 477.83 593.9 500.36 606.97 500.36 580.84
            477.83 567.77"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 567.77 500.36 580.84 500.36 606.97 522.89 593.9
            522.89 567.77"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="477.83 541.64 500.36 528.57 522.89 541.64 500.36 554.71
            477.83 541.64"
            style="fill: #627d98" />
          <polygon
            points="477.83 541.64 477.83 567.77 500.36 580.84 500.36 554.71
            477.83 541.64"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 541.64 500.36 554.71 500.36 580.84 522.89 567.77
            522.89 541.64"
            style="fill: #829ab1" />
        </g>
        <g>
          <polygon
            points="477.83 515.51 500.36 502.44 522.89 515.51 500.36 528.57
            477.83 515.51"
            style="fill: #627d98" />
          <polygon
            points="477.83 515.51 477.83 541.64 500.36 554.71 500.36 528.57
            477.83 515.51"
            style="fill: #9fb3c8" />
          <polygon
            points="522.89 515.51 500.36 528.57 500.36 554.71 522.89 541.64
            522.89 515.51"
            style="fill: #829ab1" />
        </g>
        {#if showXpTitle}
          <g id="Title-2" data-name="Title" transition:fade>
            <polyline
              points="500.36 617.79 500.36 654.58 862.43 654.58"
              style="fill: none;stroke: #334e68;stroke-miterlimit: 10" />
            <text
              transform="translate(760.46 648.31)"
              style="font-size: 22.420000076293945px;fill: #486581;">
              Portafolio
            </text>
          </g>
        {/if}
      </g>
    </g>
    <g
      id="skills"
      transition:fly={{ y: -30, delay: 1000 }}
      class="hover:opacity-75 transition-opacity duration-300 ease-in-out
      cursor-pointer"
      on:click={() => {
        $goto('/skills',{...$params})
      }}
      on:mouseover={() => {
        showSkillsTitle = true
      }}
      on:mouseout={() => {
        if (hideTitle) {
          showSkillsTitle = false
        }
      }}>
      <g>
        <g>
          <g>
            <image
              width="116"
              height="99"
              transform="translate(569.17 183.44)"
              xlink:href="data:image/png;base64,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"
              style="opacity: 0.5" />
            <ellipse
              cx="627.22"
              cy="227.79"
              rx="39.43"
              ry="31.34"
              style="fill: #14919b" />
          </g>
          <ellipse
            cx="626.82"
            cy="191.71"
            rx="44.77"
            ry="31.34"
            style="fill: #bef8fd" />
          <path
            d="M929.42,229.27c0,17.31-20,31.34-44.77,31.34s-44.77-14-44.77-31.34l.49,36.07c0,17.31,20,31.34,44.77,31.34s44.77-14,44.77-31.34Z"
            transform="translate(-257.83 -37.56)"
            style="fill: url(#linear-gradient-20)" />
        </g>
        <g>
          <g>
            <image
              width="111"
              height="100"
              transform="translate(571.17 115.44)"
              xlink:href="data:image/png;base64,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"
              style="opacity: 0.5" />
            <ellipse
              cx="626.53"
              cy="160.42"
              rx="37.23"
              ry="31.34"
              style="fill: #54d1db" />
          </g>
          <ellipse
            cx="626.09"
            cy="124.3"
            rx="44.77"
            ry="31.34"
            style="fill: #2cb1bc" />
          <path
            d="M928.69,161.86c0,17.31-20.05,31.34-44.78,31.34s-44.77-14-44.77-31.34l.49,36.07c0,17.31,20,31.34,44.77,31.34s44.78-14,44.78-31.34Z"
            transform="translate(-257.83 -37.56)"
            style="fill: url(#linear-gradient-21)" />
        </g>
        <g>
          <g>
            <image
              width="111"
              height="100"
              transform="translate(571.17 58.44)"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABkCAYAAACIAm6jAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4Xu29z3IcR5Lt/TsemVUFgNQfY3ePjHYXWvXi8iX6Jfp98D7zEnoJfotZ9WKM1tMafWyJBFCVGeHnLiKzqgCCpNQtqal7x82KWSgARGaePB4eHu4nZJv/sd+mxcd+4H/s07X/Ae83bMPHfuBTNUn62M/8FPNvcPzQb+GcPwzUtbh+/3ffa9cA1++9+N8CmJ8seI8Cdn397mcvX/7jDHzx4t2Lv4bHQP0UwfykwHsHsIdgnQP17Qvxp+X9q1f/GIDPn5tvlve/f3m6EeegXsNDMD8VIP/l4L3LsDM3uIL14kU/riC9fi14AS+A777rn715c/b/fH06/GX97PgGnj49XfRfn/X3X77qx+fP+/Hl/zb8e/+ZFczra4Dj7/6rQfyXgfcANC035nHAXj/XEag3bwRfw5ffi5sbwXO4eyv+Dbi9Xf7PP/Cu/e309s1lv+iLH8zVlflP4Opzw186sH995ntgfsOJmS9e+FNh468O3qOgnQN2ZNdz8dUC1tdfw/ffi5vPxWdvxe2t2D8RV3ficCmmg/gCOBwEn/f/eTros+WP/LDZLhf5fT/cbc1ma7a3/fObC7N7a95c+gjo68/N0+/Ms2fm5Uv48kvz/LmPjDyBCAsbf20AfzXwfhRo54B9+WVn1mefidsnonwXHC7F5UEcdmJ3EDcRbCc9mbcC8HYW8+b94984mRvQMJrx4LeHjRk3ZrM3+72525qnLe+B+buW94B8tTDyP577yMZ/f+FzJv5aIP7i4L0XtG+/FX/6U3eLz5+Lv/wluPlSfHkjhiGOzColOOxEKIi38WTeyqHwZhZ1I4ugVTGOcq2itf73djuotb8fBrPfQynWMJh5NqUfNYxWOhknKy/z7WEyV5ns96Z9lnzh5O0jQP71r+bLL30E8RF3+kuD+IuCdwbc40zbbuPIsv8uwRhxBOyNghJBKK5C4VBYBAeF4xAMgywFU39PDnJpIksHcPPgZFox0QwgOynF1GqZZLtN5tmyk3Qqnbpw3mQm66t9llQnu7em1mR6nh3EZXy8B+I1/Aqu9BcB7x7brq/1Dmgr0zab4LPPxP8fwaCgKAgFbS5HwLIWS0FmsbaBs1gEUowi0ByeCUoRmerHJkZwpgDUol9kpPGQRLNaMXbK5DQ6MamIhknZqVIaeZsqpcnOm7uh0TJ56qS1/roH4l/NixfJy/PA5pdl4c8O3gm4JeR/+VJ8+0L88WxMG4aglDiC1qZCibjKWrzbFmctzizOsTC2YmfZ5FC8JZxZ8NABzCxI4UYQKTrIIuLdcS/TRBg1w5BqaXCiaPJ6JInaZkVTlMY8N0VpKnPjEC1iaDdl38hMxrHdB3FKvv46efVqCWwWFgIriD83gD8reEfg1sn1y5e67yKfiQ1BvS1H0L6IuKrbkoe7gczizVgcGlzngRzKGBo8ZHHTgLO4lIJdcBTbZYDuTmmBCBxC7gGMU9LCOssoTYYpJHYKskkNRaO1JkVDrampH3Oo8+CqWhvDpiqzKqamQ2m324tK/nACcbttRyD/+sy84Bdn4c8G3j3g1oDkj3/sbLv6S/Dll+JwKJQS1KtCm8vVRS15iIHtpniaBocGh4YRj679PdJgMZAaitrgpoGSxY4OohTYxdDBixCZKvaJfZJbhMk0kgUJakCibEo1yIbUmqmyK6VUpavsKmKeB1fSHcB01bip0Vxvyr4xDI2bTWN4046u9GveZeHPDODPAt67wC1u8iHbcipczeVJuyg5xOByGDzFYHJ07IbROZocjUdLA5Sx2MvXDCg7mMlARAm7gAvQAYwQSSALW8cVL9lIxuoBCp15SE1ya1KjZVO4AlWOCpobOUuahWbsKjRX1RliVmaVYlbLGtusN3dD47LVd1h4OOR9AGGNSP9ZAP9p8N4B7txNrmPb4VCObBtiyKLBztHuQI0eOmgRG+PRqU0pHp1sgNH2iBgCRsRgaSAZCBdMgQjhAhlYop/T+bi3gGcDKZMJiRbGWU3qwGHXZAFMmiVPrWmW2kyUSbXNipyqNKuME3lXI2KWNN+2i8qwv8/C7bbdC2Z+xnHwnwLvo8AdDoX6tHA1lSd3ZcghhnRbQBvHsdSNPYwObVznrUObkto4tEFsnLkJYkS58QIcZpQZkIbFbRbjAlrGPAkyAliANCRpmSBJLYGKm1BDamQ2oFpUoIPWmBVMTTHJnhSeWnqSPRGelGVS5FTTk9CscTOp3dSImG/qZWW8a/ywaQx/b0xTcvN1HsfBnwnAfxi8DwJ3OBSGIbjdDFxdlKvhdsjcjke2tdgMRRvjrUMbw7Y0b423hm2J5XvWBmljeww8EjE6PYIHxCDUmScXRHSXKWEH/fTEmki2TUSu7AO1dbxLuWFVoRmyIk1GM1rAMlMWDupAHRochPorc9Kow9w8SdMcbZxUs94+LTO3t42nTyt/v2xMJDf8rAD+Q+B9FLj6ReGzqXBbhqshhqSNWcrGznGUtzl7aw1bBm8DtrZ24K2cOyhb4y2wldhgbazcQIzgUWgAj9ilj4sEuAQK90FO4Ogf+8i8Hm3aWKkg0+TiLhtyxVHB1WgGz5Im7ElmSnui6CA4ZHovdJBy31T2goNoB8GhooNaTlLMocMc0vy2XlWe5gnAr5cx98EY+I+A95PLIH4scE9LGRptzHEYc64bk5tB3iZsPZRdSXa2d7Z2Ect7YhfOHaEtZmtrI+VG1gZydGi0GYBB0tDHORU6cAUkOzv7MGBh0wG0hYxIo1SPNBOrgarJiqKKnLFmnLOtycFB1oQ5WN4HsUHeZ2qMkoMyhlQUqGWIEjGUmFtG1kFGekLV2zcDbL8TPKv8BbiBZQyE6w6gJP1UAH8y8yTp0ajyIXCtjTmXjUts3GIzZN25tJ0du4jYufnC4iJCOycXSDs5d0g7i63Qlsxtd5tspGXMS0ZEsT0gFSAEBSGsAKuDJhFAridud/aRGCvU0k6gCTesRjBjqsWMmYRniIPJA3CQYq/0PuW94E7mLovulLlv1p0i9tFyL+tQiYNKTqptKpT5rYb5HgMfutB/wH3+JObdS3t9++0JuGEIWgsup8JD4PB2kHcWu3S5KPKFrYsourDz0s0XEhfAzqELoa3snfGW0Eb2RmiDGJwekQaZImlhnYPuLqO/t0BaRjuh4+Kp+3sbKU2fpGMS0RxUTBVUwQyeuwvNSeaAYm/n1mIj1KPi0KBkMDEErUTL0kwoSgxRVaPf3lYbTwxv3wzwxS38/RL4C7y8OWPgNVxf+6cw8EeD9467/OMf340qax0uaaMvtqNLbka8zeqLLN65xEVxXlrlQvZlWpdYlwoubC6FdiIvDFtgJ7Eh2ToYgVFmGe8oaHmZYvfJucwaqPTztB8wb5kqLC7UVgIp0dmXNERFqsYVMcvMwIS0Md4IDqDRYiNrBA+2BsklVSKVEUgJygwGKrWcATiMfvsmoN7CZtMXfl+9Et++gJcv11v9o4CDn+A2O3jX4s/LOPeS4Irgd28LP/wwMI7DlS/HHKdNRmzcym7I2KV8YedlWJe2L6Po0smVQpfYl0aXggvwhdFO8o5ka7FhdZcw0qcHq7tcXWXghXmdZToy713zI68Eskc0NEEDVdY5XzJbzIID4uDkgDi5TPlW6NbyrdK3inKTLW8l36biVuYuIve1Dns5DjHkdKu7mVJmpi8q2+/bcSL/+nX+VPf5o5h3Yh3wzRKgfLUVh2edde2qXGUOuWljzrGx2A5qu5ROwImrsK5W4Oy8CuuS4NJwIXMhvDPaQm4FG8QIGk0f34SHPpKtWZXl1Z3k+WudJHS3eboN3XWm6QSxQanuOhO52TSgyqoo+/TBjIaNgpFkyfYwCAabIlQUCjsVQhkiMulhbTCQrqU6LV9OxbcUw525LH3F/gbx4rk6+65ZMzAfs4+C9667/PJsnCOotTBuh6x1tGP0EJshY+vMneEitAAnrjxwpeYntq9kriwu7VyYp51hJ7NB2gAbuwcp0pLH7BFlB66PdUIO+kghOvE6vGtu0yAtSbH+gZHs/p17DMRKQWMB0KhqSQ4IDe4PzzK/zP5AyWFHICQsCyIhQ4TtjLCHzKHZdS42g6+G9M12Sg7VbJ4Y/gKvNubbF3DNj44+PwreYqdpwUvEFeJ3b4N6V+CyXG72Q+6GIWtshtlbR9u5xK6kL9K+DJVLZ14JPzF6IrhCXAkuIS5sLiTvBFvkjd3TYhIDdh/nelDSAxQTEvI6Ge9zgA6evIQo6v90lMzRkWq9IQZblt3HvQ6iSOwGDIIKqpaL7EF9mlJsD1oiXaOQMmTCSD3oTYJwgkvDjcgg7aFmxpCg5K4k2pp621fkaw3++Cp5+Vor+z4G4AfBO2NdH1CP7vIQHLaFq6FcHYYhSxk8x2ZMbVLeOmIXcOHwZaBLu11JurL1ROIKeIK57MzjQsoL0Ba0sd2DAXkA1unAOiUI04MSg5bg5OQqV9QW3PrUDpYgZQ0FzsDTys8ELGP37EtBtJXtMgUYcA+UJBdbIRHCYYcQHXfJQnZik04p3ZSOIYdorbY5HUNeDpG305wMQ1JKdPe5TL/+/HKtOvynmXefdXwf/L71hHPdlSxvh8zdaGK06tYu2zA72xeKuLDzsrtIP5HUgevMuzRcSt4BO8NWeJQ0gkf6uXXQTFlm2EsGRQI/AO7ErXvn3u3hTfDy3XU8DIwXzqZE2gRoXXbqD5AId9YvwHXGS330RIHTS9ybGU3poBW1lqYh2lgia2bzMLerYc6b7XZxnz+Yp1+ZL1+J13hh3wfd53vBez/rnvVKrvmiXM53Q0YZPOQ4RNvYZWNyZ9En3rAGK5eCS+xL0OUROHyBtTPqqTAYcY5IBTN0phHua3Z9qadT6iFg58AtbvPsek9re+uH6kw8c6FxBFIduBVErdFsn5KIUM/o6Mhzd4dpbK1zyCQdTplm0SKipWlONytrZja220athVKSYQjePEtuEN8+/1Hs+xjzHmHd34LqgufiIQbjAXJ0lo3lbcHbbLqI4MJwYdSBcl46dCkv0SXuWRW8w2xAfUqABrInm42Wm2YRaBm5PgTc4iofI6Ef/OjqWzuKZ0Bq/eFlDpkCrQ64I76wDcAdvU5ckmXyb9SknnaLpGZkNaqOmAe5Vm+aJ+qVd+1mqI1Sgs2r4OnWfHm4x7732Uf686774dWrXnvy5U2v7Iov4nJXizebYjwOLTY+rgTELkI79/D/0vhS+NLq8znDTtIOtDVsfRZdAqOWFQNYXFVwevLXCPOYgEYLq06vR4GDM7BO7D3+ru7/n8fgiMAUwxqsjFgjYrTZqgdYu/6QcgFcYC6BiwguuqeJC4d2Tu0Ky8pJxobQ4Ohrm9RdrzDo7BOvX/ex73o5cz1+UY8y7+Qy6fM6XoqrF+Lyb32sm+dix2AOAx5GDzmCtwW2GbmD6BeTXCyAXQjtsC8EF9h9jDsBN7LcIIeiM2+5iV5udL+v/bzO2XW6rveh9pi5YwZ0IKF7wRW8lYWd74AlINXd4/JbXn+4s84oJTXjSs+RVtmzYY7QbGJyMEk5DemxWtWmXtnl5lYNPxFffi++ftH/+qmx5lHX+SHmdZf5J+Crr8TmVS+EleJyre6KGIbQ4NTGmRvjbRBb8DasHfIOscPsIC/cg5MtZiuObBtYgVtSXog1X3nOjBNT7gO2vn6KPfg9Lf/cG0tXpvdFXlwgwvjEQjy6z0e3oK1ga+eFvDywZme8i2XJy7ivWzZtzDAe2Ze1kLUXZf13Cb777lT2f33N++z94K2/tP4nd5+JQcHfa3EoPI6Fpd4EPBZpY7HtjNLO9k7Wzngn9cyJUluOmRNv6LnKQVAsTqvh5zfuw6D9HHYG5EMQ14eGdZnpCCBmwEveVRr7uN1BpD+gO+wd7qsktnYBW0sbZ9tgj2PVQJ0GtlmuPotet/r0Vvx1CF4/765zPclHXOc74N37oW9fdP/75pl4eiuK4qpEsN0UqoahasAeLW1sbSK1YVlI7RfhfnRsMRvkjddcJQzgQXgwlOOY5pVxx/P4pUB7zO6DeD6eHpPeHUCZskbFwOgeLW/Uk9idhcTCxj4VAm+t3JRSelEVOXoYitvYC4vjTR+WvrzpMcafWFzn9aPX/D7mnVzmixe9nerJExFvehVza8VDKyylegWPVm4Qm8jl5BcmCm0sb/pUQGPPxp8yJ8vc7Yxx9wA6P/6SoD20/rck4CGACBwWRbggVu8x2IzYfRwXy4PsLdImxMZWrwzAo/tDP4xVg7MVt1aI6M00d5/1Zpuj63z8JB8H79xlfvddb636u4J515s8spXRQ3EpxfZoGCFGuwNGX/negjbgzepevLCNNdEsjtkT7j/pPHL8te2MhecAnqJfrzU03XMMLEOI0Gh7I7yxtJFzg70h6LU4jrHg0dEGD1lwFg4RV3cRlB+66+TrD5xat4/N83rH6e+2olY92Q/RYhmXMgvkUILBMERfnBxJjwpGW/0ilMuYoD7Qa1kBd89W0G9KP+rMVd4//itNIJ8iXAMSSzQs6CUY6qsLNoPwCH1KAR7p1QCjzAbHaHnJ25YCUZwqjhYMoziE8Nijzv983ifsS7T5MNtyD7z74923y9P2v8TlrfBncrSwFHYrHlTsKGoeXBiUHiVGwyjHCNnHtlSvtXTPyIMLVpGO4D1wleu04JMA7mSn52o5Vwc9qR1LhLym0Aqs19ofYOyR0IjpAZ60VH4zeOm3QL2xht1OxFtxcxAvPv/ACX1wqvAn4AX8L2D/ROwO8mbW8Q85e94vXEgGRxSSZYK9VnlpkFY3SU/sEvGAdQ9Y9mlhtlg/qWOazTpjn9TT0gEUrctWUrFVwIOldXoxIA2RORC91wJnGdX7LVxnMU+92xc4ThneE7S8H7w/AV9917tTr+56F2rdyGtrFQrbxUSJI3AatCaUxWDngHutiSCQAxw6ppruvTiF6J8mgg/YB6A+9nmZ2nQA7XW+6iVT5EJfD1we+J7wLl6LhZdXKJ5sl87eu8/u34Nr3rFHwLvW2cweeA6HSz19CtZd70JVH/eGXobQTy5YFkxV3KPJQh8fexPI2cvHhdSHIH2amC12n33HuefCwlP6bo2clwd2mVIsw4VjAXCJrr2wjhzEOIp57q3b/8YDhYt37V3wrpfjcXL+VkwHedqINophEK2IeixyPQPlGH0FRCjX+RvL/G0dL46TX50iuU+cdautpLsfW0l9EVj0VeETkHYHke6tgr5K4hVkKSgplybXKm9ncTjopGzxfvt4tPlvQAX2c39W5ik8FJkiHbMgikhH9oBHYYfjmERWcMrKi+NStu4dPnHMFhNL5Hf29flheSi9Rs5xYuUCVi7vQ0GG+iLEoL6GP6kXqV0AP/Axe8RtntlD2o6j2GwhlxbiTDktnHJIPQLLPpHtyzeB6avefsi037C9Mx/1er391TMxAstavYy7i5X6MbMfI3obdmlitzv7I38AvuZD9mHwzszbWQBe1RaWfu/+Tes4FkTg83W3dQF1eQ45+9b5m/d8/WnaGWzvP2MJa7kv6qCdFoXv2/jg6+nwo+7Djwbvf+zTsx8Nng5jn+WX0n1+xMn3S0bLUJbZvfw6NvQV6l5ikCwfH3/14TrVo+tWn5z57PjeM7ZZO3KxOVZrP2Lzg6+Pik0ftg8HLOcCawDzbNxgKIZisGWMZKVtKZF6D1yvCUnUnb+PgOqDl/ybMN27hn5N8vrZOVBeStL715Zx9p8PmXT/OgbTMPMeYvWhfwNu4R1BmZN9PNr8L3rq+Olo2gHGTapikSZ6oSpyZpBkP9EUKWttZHSKBWTs+8/tctDZ8ZO293iKBbfVy6xsY6nKlnpDi0liLfB1ojQKL+I+RsUMk5kmfsy9eP88b5UuvHhiNltrM5kym1pNaWZYumzOXsIN0VUWyHTQ0PJ9sZSX4+NR50w8upRPm5VrXtj3Ttfu7WPrA9oLayGRmo/3yJksIj0sYNpJC6t1aS0dRrPdmsvLj96HR8a861PLLQCvYHvrN29AvkjKYNwVg6pZmvLVSHp/N26CitRIJ6a9C7J6hbIfAvXR8/1XWj+5ddxaXacXlukMsEVxwpAkSwW2GnKXDZHa+jNyfxG1a6KNo7ndmv/i3WHrgb0/YPmGLiR6dWVuLrqY2jBZds7uT5GkJrJlZiO6koL7lL5hqhQVuYH70+fe/WSvfubei0+efSe2nc5T68OohKVZs3uf/pIrqIGrjgIG7pov/WHv7HPXPXt7mPr/ffHD/XtwzTv2gWjzG+Al/Cewe2v2W2savf6hrhakRqoRVB0BpIJm497jbVVQ/1y0Ho4e++LOgFuPnyRu91nHGkH28+8Po5OujdVOYPVeB9mr0kSXComoZDYt6kvzwr4uJbk56YA+e9ZFeF7cl4Rc7R5498qqf//73gBx9br73+3eSnd/rWiq0dSyEV0lCGk2mgUzyhnUX+EZUSVVOpAN0byK2fAQxE+UffdZZ1CPpJfOWqCBlw6j9aFl9nJvaF0mRKsgT7jSsktmrYRId6nIm4vu8V7CUQP7Efv4PO/pU/PDE3O79dvs1MZOIhql1Ob+RCWaya5h4tQsPBvPsmYnM7j6JFTT4B77ljHQD4H7FAB0x+peYLWy7tiYCTTsLsZjKngGz0gTi7qEV2EeLx6quKLaFLUpnUxTF27dve19e1++8rlw+cOehcfBW2tYnj/v6q5X35svnIwL+6K0WbWptSYtbCNnyUv/tieIA3gCTYgZmFc30t3osZGxre7n/vzpdM78a2w5F3OKiPF59CxoJ9ZRHd3bWEySJluT7MnWhDxhT0nOSHNDs7JU1ejCddvMm4tF1/PNpe8Jmr/H3se87me/oTeZvP7cvH1r8mkXEi2lqZbWhdRcG5rl6GIz0YVm3DVMDsaTrMlmAs+WZ3o0WulKDKvbeeBCH06Ef1UQ+9/yQ+CU/UFTSvTxbfE8QJWZ+8OqCTOh5QWHNJPkCcUkeZI0y+6qglFa1/fMZHvbda6fPvVxunb96Dm+C979ce9lH/eeftdlepvzpmVymBqDax26P5c9SZ4yPIEOwAF86O99QHlATFhTv0A6gKYZdZ3LFTjpkUDmHgt/SRDP2Ma5J/Axc4R60OXuJlkkr9yvabI8yTkZDsIHS110p4sRHORFywzNImbVDpzsJJ92/c7XV11B9xt4X7ACHxrzzl0n9NC1OvliaEqn5rlB9AEYzW1hmuhiM5L2lvdCe1t74YPDB2Di+IR2EC2qvERp/eE5HwPPWPiLgHgCaAXtGDQdkwn3gBPq0WNoBvrY3h/YifQBaQ8+YO1JDqKrJqV91DFjYR2DK4ep3fyQSXN3mV/V/Nh4Bx9Oj5kXL+AbxO//aq5eJJd/C7zJ2xjaRWRTZq1WLYMniEn2IcmDiEPKe+XSj6DeXSOOFVZhO8Rahay+8mX31b7eWgXrWlg3nd1ULR+fX9DH80kne3AjDMuy49kHp4fG6wR8Ae7kLmdBH9fNZOkgsbe9V3Bney90l2gvvJd1aPIkRZcJyayqtUWMjaBRnfyuJZ8/63/39Wt+cq/CEeVr7rvOWjuty9i0yarNtqI6q2pmFVTL2Mtd6kLiznAnuLO4A+9t72FlaHel4HWg7wwUxwzE8ek/jYecbuo9DPzI60OfL//1OdPu/Z3+fs2EyF3malUGtLubxBOwl9hL3AF7mTuWe2Czl9mnYtEp00Hpqap2zc5xU2/K0HjqPEaZL19ycpkPH7STfWSqcN0Pz593H/z6yrSW5N/zdj80TVMTmmvJaVXEk3LfxdW4M74TurW5k31rdCfpzrBnca2SzwDs0lFLjrQCyapIe35Dj+7sbEx6F0x4eOFHsHjw+2eu+gRg/7uiCardJ9hwFNZZx/U9Ym86YBa3oDvDHdItcCd5r9YOTd4rPSlygpiVrtHc5Y5XcdWn33Wy/P6l19v/mMuEj68qdNe57uix3SaHP4jtd40cQ/NdVVAcZVbkRNPYQocIj2kNCg2yi3sJXKhXl/VCAHoVgG0cttKAjDS438Ci/u2gfy1Y3KmP7tScXCgci4LeYzp3tcvf69/oSeX+1RI40Ttck3SPhnuE7O4qO+O0B/bYd1h3Dt8qdWsWcR1zp+AucwGQOJBtqllmjZo1lnpDaZSxa3K+vjJ8br7F/P417w0zF3sv806u87p/cGTf951941273V5Uja1KMdccJ63iai53QotKkG5lboxvkW4Qt8Ct3JmJvJfZW9ojL3PDHpF6CcOlJV8KjTzLzJwng1fG3E+7nbGM+z/XMySn/8sL23TMlHS2dY8wLa+D7YPRHnSHuQPfYt1a3MiLGlLEjU1XQiJuVbjLiL3MIUZ1QbnMzrphf5I0Pg9U/v3DLhM+zjx4lH1VvQl+3+Kwq4xTZJYix0G1lSxRQhTTy95MhJzh/uzrSBSwO/9SPWBIeo4w6U0pidSLWKFrnfTf7ixM1Nl0rA15eDw33z9qUUJagPVSceIjsMtUQMd5HNYkMUEejPYSe4gOGNxI3JDcyL5FvpHiVrQ7JXsleykOcxumiJyDmG/mVqmbxmel8eZZ8pp3WPc+lwkfAc+2JfXdSP78586+l5grks/eNn4ouqHWy2ihUdNcFUOlkBlZIkKKrO61ioWQU1Z0aLrTs7S0A9vr8lLaNMkjqNG7bxY54qVsDtSB9Ark4jqX9frHwDsuP2nxyjayZdkLI73KWHmRcFyyQSarWLIkcDA6yOwRt3beafUu8luF3ibcRPNtlryVuWvmLuBQmydFnZWqkVTK2DhkH++efmc2B8PrhXX//kHWwY9jHrzLPtOGZHjS8H/Fbb2qF/tDxKipjhFDJWiOViJCfbuKQMvoZBuhJUiwV+HSaMZNuEnaQFQfex5Y+hyOTf7LXgp97OvIuXMowI9UaUnqjnEpV+gIyj4xb3Wfy6pAV/9TX8qZQJPV53GS9sCdvQRk4ga4EbpJuAn0NqPcKLlN+U4Re9U8aFLdREYAAAqvSURBVKNDaDPFnPPbctuIaLzdJq9fm5sb8+0L86fn5t+vDR9mHfwI8M7Y1/fI+Qbzx1cJQEVsh8ZtUyiUktQyaqBBSIRSVrgPLiHhXN2TUsoUWkDr0wT3/3WWvJF767N7y1SResk4XdhjUfxTLE9Dj4BQh9Nn7FuelB6fqCeVhRe3fAJObvZpQVnLFAYvmRPYgw6GO+G9pFtDV/xT3Di5ieAmzY3k28y8U7KPIQ+V4aBpmjXUelO3FZ5UhjfJviV8fRJOvX5xvO98xD4KHpwDCPz5pXn+gpP73DYOP+hmHHXljRgnpa3KRkNNpVCvtVkBtA2WlDjSQZWj2a6IKmumtwLPmFnhs25aFS8TffXy+cWNemGhdA+04wWsb86nBssCqs8kG60z2UZmUl2yURz0ULIx1KNIfGvFLeJGztu0b6W4TeWtCnfRcj+7HKLkpKo5pJnLVpmeNrZT46uaHF6Zl697Pnlh3Y+xHwXeya7Ni+tH3OfQmJ9wQ9VllTQOvdUwmiKDFmGTlD7QpOx00KKnw7p7Cs1kzpZmYNLSDuzezzbKi9xHF49bG1oCKOoFrT1b0zvmWKYT3eTFZaqn3KRcBr4mltqbPp/sqwN92WqWNKlPCQ52BxCzdyyT8NCt7Tulb1MdNLndZebdEbgo+0CHo1xx3VYusnH7KinbrrX5H897kLJE9j+GdQD6kT8H0GdoANfX4ptv4h21281moJThcpUp7hLFWzNuU/OFM3ZFpeuRkZdQLtxFdi6sVWd6lb1gS1eU7UIEeMSreoS6HP/a1NIbHIM+qp4FMKt5+cemz+nOXCUNd9cNVNR3LqELpU6wLHOhg+WeXHDcGd1B9iyKdIu5C+uuhfcyd+F6mKPso+WkuU5l2E5v51a5rJW/bxvlvxs3N3lvs4yfIJQKP5F5R/cJfaX9P55zGv+q2D9pfDYRrW+BlnOhRrFJD4StyGzpCKVVmkWNRu1s06TMycEBeydiC2zs3HbmaW0RHrAHZ49AtXam9oGui+7oHnLLya/j3LI6sK7mp5tEk5YMirurBM89UImD8YQWSf7UXRcI953S+wzuhO+ay97KvZT7aGU/tzLFRgfNdX4XuCeNmyf/tED4T2IePGDfUZfsZXB11ffDWxTen7Q25qEMOfb9FCy2A0OXb3LsItrO1g5xIWuHcmdrp9AO6Hsr5Lq3gjdIXbhAi5SU6MHLqnoLxbLIJfGwnifAepFBqtdWLim3XtFFF3dbBcJn5Blrsuh7KyzLXJb3ytgj9xRgeC/FPjP3UtmL2vdXaDnJFwdxmAtlfhc4+mT8H5AmPrefDB78eACPm2LUaZPbzeimLhqudfeSsi3RQTPehr2D2JplswzR2dc1pjfqshkj9B53lqbFOG2I0V3nOvYRdIyWsa4HLCnIXAqGsJtOE/Ge1RGT1hym3b0Bj2yKgXpGiXZQ5lTRQXWYNOQUKnPUrO8A9zV9d68jcLCu1/0q4MGPBDCnwtVFuXIds2hwnTdmHPtWNNOyFc2wdfW2qI9zK3CIjdV1S+TcEDHiZTcvaxA5sDZz9r74Dl4/L9kWIUj3OR4sANKrllPHVJiJPtaZXixEzs6z7WjQ4aPb0cx1VhmnOEyz0Hy7bZV6VRlu2nuB6/fvHwIO/gnw4AMAfvWVHtsIqtG68o/H0ZscxxabLNrQ2sby1tKmhDZehHjKoizUmecuFYVGloZ8jm3CnO0lZIWlJfvSz9Ny9sXCpUS/Byq9ANZ9I6iI6p7H7EVCMJM5p2LSUsLQ4CB7Isq0rg4cN4JSzNJhjrarNzUrl63yw6YxZz7qKvt9+4eBg38SPHgPgA938ioluB0GLmu5PJTBQwy2RzOOHnMcWt2YvpsX9ujQptijvXzNshHUIhhuqQsVLH3wOoqGZ0DoON7ZYq21tA1piATSeKk7pVcy22tt6ZznW7DR5hZlUjvfgq1Mx330NM0RMau1elt3lYtW72+E+Mvs4AU/A3jwCIDn29T8dQh2y07Mn02FednV6xCDSwyOGOwcIcfBw0mnBI9elIJg3QyxDU4NiCEilib9/nJXVNDKvn5my5gHnFhnH/OoS6l+ZvYK73CF0utQ0dxMFe0MyPdsfhiHdlMvKuW272J5bwvSX2bvPPiZwIMPALhuO7rZdCbWp4U2FS5ruWq7kkWD53XL0RiIRY+LHK2zrUdbG8qy/SjRJUSOwK1zvQhBi+J3N/xtSkNJMo1Z8qkdQJFL5bdrM1WlVOzjtqMU16qY+di2o/XbnrB477aj8I8GJ4/ZzwYePAIg8M44uO6H/nsF01Sou3LVasmyHzyXweNYqNPgYShj1eCoAy7Fav1YOmi2y+DsjDsHL0N2doGM1VJdgCHSK3j9U2dVLGXn6hXgak0u9dENf+e5aWz1/7oNf1c7Asj1aavt9+2Pvo6H81yIiKu2K5m1sM0uY5itMPbjWOuANuEhi52L+AxdjamyiND0zX5xdDEpp1D00l6lWTf9tVMDS4MHCacSfjzlPAz1/7mttlc7Acj7WfjmWVfPXfeVLSV4oyBrufosuiykLsPZCtLpKMUq+YQUtCKLoKSoBCM4S/97fc90A33FaQYGej+cSUoza9fTul+6e0X4epT7Rvc3P2QSS6HQ/62b3J/bGYh9QffhWPjVd/dB3D/parpFXTg0Iq4iuujMvss7LYFJP65qTMMgtyaGIlrr7LvXDjxBhCnF1GaV0ptE7aQMPoK2tFlp19/fZCaZSzGsk7pUeN0D7VnvKfiP5718oYMG8Iuw7dx+UfDgAQvPXekRxNc6MvHL78V/l643WUoXDl2BnHd6El0Zz3UWm01nXKtiHOVaO3C7Xc+zPrRhMPs9lN6Byjy7A0cyTdYwWul8m70n4wjY9rbX7Ly5NL9ryevPfWTal18+AA3WgAR+WeDgVwBvtXdA/PPiSs9BfPGiK939dehSvXefdXnkJ0/E3/8eXF6Kw07sDl3IbjvpybyV69w3uZm76Jpr14zhkt6TD2joahaMk7npX78dD+aw6Y2j+63Z7s3trfnii+Tt217if/FDL3n8qibPnvm4HLaCBvSyhV8PtNV+0qrCP2PrBXUQr91367iGa8zL1ycx7MNB8Mxsq9ge4M0fxPZ7AV33bPpBfP+kKxEeLvV2OogvtPzexSJAIz4DENAWIahWu0TGNMGTrfl7hbzsjYzfX5jdD2a4NNBZefsH88V37nsxfm4Or/r3vn0BvOzlCtcv+jUs9Sa/Fmir/WrMO7f7LIR77hQ6G//ESbzu+fMul/zmjeDrrnl9cyN43oXt/g1OQmt/6If9rfgd8N/Abm3O/1s/XF72nu+LJ4ZXcHXVK5X5S+9HfPbMvHrl5W/3ho/fnwcicM40+PWBg38ReOf2AEgd60SPspF/hhf/30ks+/VrwYuuBbraPY20r0+H778Xn3/uU6vb8c39Zv2/PjMs7hCWKrn/7XUzn7OQH5ZABP41gJ3bvxy81d7LxtXONUBXZsKJnQ/t9evT5ysoD23tgPoGzjtyjmABnwrLHrNPBrxzexdIeAdMuA/oQ+sa2d1+//v3X+Q92RIeBQs+HcDO7ZME76E9DiY8CuhPsWt4DCj4NMF6aL8J8B7a+8H8x+23ANZD+02C92PsHODfIjA/xv6vBe//BftIc+X/2Kds/weVJX0pA2zecAAAAABJRU5ErkJggg=="
              style="opacity: 0.5" />
            <ellipse
              cx="626.82"
              cy="103.48"
              rx="36.93"
              ry="31.34"
              style="fill: #14919b" />
          </g>
          <ellipse
            cx="626.33"
            cy="67.41"
            rx="44.77"
            ry="31.34"
            style="fill: #14919b" />
          <path
            d="M928.93,105c0,17.31-20,31.34-44.77,31.34s-44.77-14-44.77-31.34l.49,36.07c0,17.31,20,31.34,44.77,31.34s44.77-14,44.77-31.34Z"
            transform="translate(-257.83 -37.56)"
            style="fill: url(#linear-gradient-22)" />
        </g>
        <g style="opacity: 0.4">
          <path
            d="M928.69,68.9c0,17.31-20.05,31.34-44.78,31.34s-44.77-14-44.77-31.34l.49,36.07c0,17.31,20,31.34,44.77,31.34s44.78-14,44.78-31.34Z"
            transform="translate(-257.83 -37.56)"
            style="fill: url(#linear-gradient-23)" />
          <path
            d="M884.4,37.56c-24.72,0-44.77,14-44.77,31.34V105c0-17.31,20-31.34,44.77-31.34s44.78,14,44.78,31.34V68.9C929.18,51.59,909.13,37.56,884.4,37.56Z"
            transform="translate(-257.83 -37.56)"
            style="fill: url(#linear-gradient-24)" />
        </g>
        {#if showSkillsTitle}
          <g id="Title-3" data-name="Title" transition:fade>
            <line
              x1="680.09"
              y1="134.82"
              x2="896.09"
              y2="134.82"
              style="fill: #0e7c86;stroke: #2cb1bc;stroke-miterlimit: 10" />
            <text
              transform="translate(772.52 129.08)"
              style="font-size: 22.420000076293945px;fill: #2cb1bc;">
              Habilidades
            </text>
          </g>
        {/if}
      </g>
    </g>
  </svg>
{/if}
