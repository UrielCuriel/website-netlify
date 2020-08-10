<style>
  @keyframes flip-diagonal-2-fwd {
    0% {
      -webkit-transform: translateZ(0) rotate3d(-1, 1, 0, 0deg);
      transform: translateZ(0) rotate3d(-1, 1, 0, 0deg);
    }
    30% {
      -webkit-transform: translateZ(160px) rotate3d(-1, 1, 0, 180deg);
      transform: translateZ(160px) rotate3d(-1, 1, 0, 180deg);
    }
    70% {
      -webkit-transform: translateZ(160px) rotate3d(-1, 1, 0, 180deg);
      transform: translateZ(160px) rotate3d(-1, 1, 0, 180deg);
    }
    100% {
      -webkit-transform: translateZ(0) rotate3d(-1, 1, 0, 0deg);
      transform: translateZ(0) rotate3d(-1, 1, 0, 0deg);
    }
  }
  .flip {
    animation: flip-diagonal-2-fwd 1.2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both infinite;
      transform-style: preserve-3d;
  }
  .sqr-2,
  .sqr-4 {
    animation-delay: 200ms, 1.2s;
  }
  .sqr-3,
  .sqr-5,
  .sqr-7 {
    animation-delay: 400ms, 1.2s;
  }
  .sqr-6,
  .sqr-8 {
    animation-delay: 600ms, 1.2s;
  }
  .sqr-9 {
    animation-delay: 800ms, 1.2s;
  }
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
    text-align: center;
  }
  .back {
    transform: rotate3d(-1, 1, 0, -180deg);
  }
</style>

<div class="h-32 w-32 grid grid-cols-3 grid-rows-3 gap-2">
  <div class="rounded-lg sqr-1 flip ">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-2 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-3 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-4 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-5 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-6 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-7 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-8 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
  <div class="rounded-lg sqr-9 flip">
    <div class="front z-20 face bg-support-500" />
    <div class="back z-10 face bg-primary-500" />
  </div>
</div>
