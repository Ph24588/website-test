const pads1 = new Howl({
  src: ['/beatblocks/assets/sounds/pads 1.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const pads2 = new Howl({
  src: ['/beatblocks/assets/sounds/pads 2.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const pads3 = new Howl({
  src: ['/beatblocks/assets/sounds/pads 3.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const pads4 = new Howl({
  src: ['/beatblocks/assets/sounds/pads 4.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const arp1 = new Howl({
  src: ['/beatblocks/assets/sounds/arp 1.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const arp2 = new Howl({
  src: ['/beatblocks/assets/sounds/arp 2.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const arp3 = new Howl({
  src: ['/beatblocks/assets/sounds/arp 3.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const arp4 = new Howl({
  src: ['/beatblocks/assets/sounds/arp 4.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const melody1 = new Howl({
  src: ['/beatblocks/assets/sounds/melody 1.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const melody2 = new Howl({
  src: ['/beatblocks/assets/sounds/melody 2.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const melody3 = new Howl({
  src: ['/beatblocks/assets/sounds/melody 3.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const melody4 = new Howl({
  src: ['/beatblocks/assets/sounds/melody 4.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const perc1 = new Howl({
  src: ['/beatblocks/assets/sounds/perc 1.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const perc2 = new Howl({
  src: ['/beatblocks/assets/sounds/perc 2.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const perc3 = new Howl({
  src: ['/beatblocks/assets/sounds/perc 3.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const perc4 = new Howl({
  src: ['/beatblocks/assets/sounds/perc 4.ogg'],
  autoplay: true,
  loop: true,
  volume: 0,
  preload: true,
  usingWebAudio: true
});

const sounds = [


  // blues
  {
    color: "blue",
    shape: "triangle",
    sound: melody1
  },
  {
    color: "blue",
    shape: "square",
    sound: melody2
  },
  {
    color: "blue",
    shape: "pentagon",
    sound: melody3
  },
  {
    color: "blue",
    shape: "circle",
    sound: melody4
  },


  // oranges
  {
    color: "orange",
    shape: "triangle",
    sound: perc1
  },
  {
    color: "orange",
    shape: "square",
    sound: perc2
  },
  {
    color: "orange",
    shape: "pentagon",
    sound: perc3
  },
  {
    color: "orange",
    shape: "circle",
    sound: perc4
  },


  // purples
  {
    color: "purple",
    shape: "triangle",
    sound: arp1
  },
  {
    color: "purple",
    shape: "square",
    sound: arp2
  },
  {
    color: "purple",
    shape: "pentagon",
    sound: arp3
  },
  {
    color: "purple",
    shape: "circle",
    sound: arp4
  },


  // pinks
  {
    color: "pink",
    shape: "triangle",
    sound: pads1
  },
  {
    color: "pink",
    shape: "square",
    sound: pads2
  },
  {
    color: "pink",
    shape: "pentagon",
    sound: pads3
  },
  {
    color: "pink",
    shape: "circle",
    sound: pads4
  }
];

const colors = ["blue", "pink", "purple", "orange"];
const shapes = ["triangle", "square", "pentagon", "circle"];

let blocks = [];
for (c of colors) {
  for (s of shapes) {
    blocks.push(`${c} ${s}`)
  }
}

let activeBlocks = new Set();

const table = document.querySelector("#bb-table");
const layoutColorMapping = {
  "blue": "left",
  "pink": "top",
  "purple": "bottom",
  "orange": "right"
};
const blocksElements = blocks.map((b) => {
  const block = document.createElement("div");
  block.classList.add(...b.split(" "), "shape");
  const [color, shape] = b.split(" ");
  block.setAttribute("data-color", color);
  block.setAttribute("data-shape", shape);
  document.querySelector("#" + layoutColorMapping[color]).appendChild(block);
  return block;
});

function isInsideCenter(element) {
  const block = element.getBoundingClientRect();
  const center = document.querySelector("#bb-table-center").getBoundingClientRect();

  return (
    block.x + (block.width / 2) > center.x &&
    block.y + (block.height / 2) > center.y &&
    block.x + (block.width / 2) < center.x + center.width &&
    block.y + (block.height / 2) < center.y + center.height
  )
}

window.onload = function() {
  setTimeout(() => {
    $('.shape').draggable({
      stop: (e, ui) => {
        const element = e.target;
        const color = element.getAttribute("data-color");
        const shape = element.getAttribute("data-shape");
        const s = sounds.find(
          block => (block.color == color && block.shape == shape)
        ).sound;

        if (isInsideCenter(element)) {
          console.log(`Element is inside`);
          if (!activeBlocks.has(element)) {
            s.fade(0, 1, 500);
            activeBlocks.add(element);
          }
          console.log(`activeBlocks: ${[...activeBlocks]}`);
        } else {
          console.log("Element is outside")
          if (activeBlocks.has(element)) {
            s.fade(1, 0, 500);
            activeBlocks.delete(element);
          }
          console.log(`activeBlocks: ${[...activeBlocks]}`);
        }
      }
    });
  }, 500);
}