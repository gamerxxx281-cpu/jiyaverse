/* ==========================================================================
   JiyaVerse ✨ - Interactive Engine
   Crafted with love for Jiya Bhola (@officialjiyaverse)
   ========================================================================== */

// --- CURATED ASSET DATA ---
// Embedded directly so file:// protocol loads without CORS issues
const CURATED_PHOTOS = [
  {
    id: 1,
    file: "assets/curated/jiya_puppy_smile.jpg",
    category: "dogs",
    title: "Puppy Love & Radiant Smiles",
    caption: "Pure unadulterated happiness. That smile could light up any room.",
    likes: 142
  },
  {
    id: 2,
    file: "assets/curated/jiya_and_you_puppy.jpg",
    category: "memories",
    title: "Our Golden Moments",
    caption: "The best company, the warmest hugs, and a golden pup who loves you endlessly.",
    likes: 289
  },
  {
    id: 3,
    file: "assets/curated/jiya_dog_cuddle.jpg",
    category: "dogs",
    title: "Soft Cuddles",
    caption: "Your gentle soul makes every furry friend feel so safe and cherished.",
    likes: 184
  },
  {
    id: 4,
    file: "assets/curated/jiya_dog_sleep.jpg",
    category: "dogs",
    title: "Peaceful Slumber",
    caption: "Total tranquility. Even in your sleep, you give off pure warmth.",
    likes: 310
  },
  {
    id: 5,
    file: "assets/curated/puppy_sleeping_grass.jpg",
    category: "dogs",
    title: "Little Paws Resting",
    caption: "A sweet snooze on the green grass.",
    likes: 95
  },
  {
    id: 6,
    file: "assets/curated/puppy_sleeping_pillow.jpg",
    category: "dogs",
    title: "Nap King",
    caption: "Resting that golden head on royal cushions.",
    likes: 120
  },
  {
    id: 7,
    file: "assets/curated/jiya_flowers_bouquet.jpg",
    category: "flowers",
    title: "A Rose Among Roses",
    caption: "No bouquet in the world can match your natural beauty.",
    likes: 420
  },
  {
    id: 8,
    file: "assets/curated/jiya_blue_dress_rose.jpg",
    category: "flowers",
    title: "Cinderella in Blue",
    caption: "Holding a single red rose, turning ordinary car rides into poetry.",
    likes: 365
  },
  {
    id: 9,
    file: "assets/curated/jiya_jewelry.jpg",
    category: "chic",
    title: "Sparkle & Grace",
    caption: "A touch of elegance that belongs in a royal portrait.",
    likes: 215
  },
  {
    id: 10,
    file: "assets/curated/jiya_denim_vest.jpg",
    category: "chic",
    title: "Effortless Radiance",
    caption: "Denim, that signature confidence, and those captivating eyes.",
    likes: 278
  },
  {
    id: 11,
    file: "assets/curated/jiya_teddy_bear.jpg",
    category: "chic",
    title: "Bear Hugs & Big Dreams",
    caption: "Two teddy bears hugging each other! The sweetest energy ever.",
    likes: 340
  },
  {
    id: 12,
    file: "assets/curated/jiya_cafe_flowers.jpg",
    category: "flowers",
    title: "Blooming in Every Season",
    caption: "Finding beauty in little cafes and blooming lavender petals.",
    likes: 198
  },
  {
    id: 13,
    file: "assets/curated/jiya_cafe_corridor.jpg",
    category: "chic",
    title: "Walk of Sunshine",
    caption: "Under arches of roses, looking utterly stunning and happy.",
    likes: 512
  },
  {
    id: 14,
    file: "assets/curated/jiya_bouquet_smile.jpg",
    category: "flowers",
    title: "Hidden Giggles",
    caption: "Peeking over fresh blooms with that playful, contagious smile.",
    likes: 260
  },
  {
    id: 15,
    file: "assets/curated/jiya_red_dress_neon.jpg",
    category: "chic",
    title: "Every Day Special",
    caption: "Red dress, fresh roses, and an aura that makes every day feel extraordinary.",
    likes: 477
  },
  {
    id: 16,
    file: "assets/curated/jiya_study_smile.jpg",
    category: "chic",
    title: "Study Break Daydreams",
    caption: "Hardworking mind, gorgeous face, and that daydreamer charm.",
    likes: 315
  },
  {
    id: 17,
    file: "assets/curated/jiya_flower_ear.jpg",
    category: "flowers",
    title: "Blossom Behind the Ear",
    caption: "The sweetest look, captured in a frame.",
    likes: 185
  },
  {
    id: 18,
    file: "assets/curated/jiya_trophy_purple.jpg",
    category: "achievements",
    title: "Winner Energy 🏆",
    caption: "Trophy in hand, dressed like royalty. You were built to shine.",
    likes: 620
  },
  {
    id: 19,
    file: "assets/curated/jiya_trophy_peace.jpg",
    category: "achievements",
    title: "Grace Under the Spotlight",
    caption: "So poised, so accomplished, and making everyone around you proud.",
    likes: 445
  },
  {
    id: 20,
    file: "assets/curated/jiya_paranda_award.jpg",
    category: "achievements",
    title: "Punjabi Royalty ✨",
    caption: "That regal purple fit and traditional paranda — an absolute stunner.",
    likes: 580
  },
  {
    id: 21,
    file: "assets/curated/jiya_gym_nails.jpg",
    category: "achievements",
    title: "Strong & Stylish 💪💅",
    caption: "Crushing iron at the gym while keeping the nail game 100% on point.",
    likes: 390
  }
];

// Coloring Sheets (12 Black-and-white pages)
const COLORING_SHEETS = [
  { id: 1, title: "Snoopy in Hammock", file: "assets/curated/art_snoopy_hammock.jpg" },
  { id: 2, title: "Autumn Snoopy & Warm Tea", file: "assets/curated/art_snoopy_autumn.jpg" },
  { id: 3, title: "SpongeBob & Patrick", file: "assets/curated/art_spongebob_patrick.jpg" },
  { id: 4, title: "Morning Glam & Puppy", file: "assets/curated/art_makeup_bedroom.jpg" },
  { id: 5, title: "I Am Manifesting Good", file: "assets/curated/art_manifesting_good.jpg" },
  { id: 6, title: "Bit of a Mess, Doing My Best", file: "assets/curated/art_bit_of_a_mess.jpg" },
  { id: 7, title: "Warm Corner Cafe", file: "assets/curated/art_coffee_shop.jpg" },
  { id: 8, title: "Stitch Bedtime Cuddles", file: "assets/curated/art_stitch_teddy.jpg" },
  { id: 9, title: "Rainbow Affirmations", file: "assets/curated/art_rainbow_affirmations.jpg" },
  { id: 10, title: "Red Carpet & Golden Hug", file: "assets/curated/art_glamour_dog_thought.jpg" },
  { id: 11, title: "Always Protected (Knight)", file: "assets/curated/art_knight_hug.jpg" },
  { id: 12, title: "Pajama Movie & Popcorn", file: "assets/curated/art_cozy_ipad_popcorn.jpg" }
];

// Pastel Palette for Coloring
const PALETTE_COLORS = [
  "#f43f5e", "#fb7185", "#fda4af", "#ffe4e6",
  "#f59e0b", "#fbbf24", "#fef08a", "#fef3c7",
  "#10b981", "#34d399", "#a7f3d0", "#06b6d4",
  "#38bdf8", "#818cf8", "#a855f7", "#c084fc",
  "#f472b6", "#e879f9", "#78716c", "#ffffff"
];

// Serotonin Quotes & Boosts
const SEROTONIN_DROPS = [
  {
    icon: "🐾",
    headline: "Pup Fact of the Day",
    message: "Your golden retriever doesn't care if you had an unproductive day or if your hair is messy. To that puppy, you are the warmest, greatest superhero on earth."
  },
  {
    icon: "🌸",
    headline: "Unmatched Radiance",
    message: "That photo of you walking under the flower corridor in the red Chicago shirt? Literally pure joy captured in a frame. Don't ever hide that smile."
  },
  {
    icon: "☕",
    headline: "Virtual Cozy Treat",
    message: "Serving you a giant cup of hot chocolate with whipped cream, extra marshmallows, and zero responsibilities for the next hour."
  },
  {
    icon: "🏆",
    headline: "Reminder: You're Built Different",
    message: "Who else crushes gym sessions with starry stiletto nails, wins competition trophies, and rocks traditional Punjabi parandas like royalty? Only you."
  },
  {
    icon: "🦦",
    headline: "Otter Wisdom",
    message: "Otters hold hands while they sleep so they never drift apart. Whatever waves come your way, someone has got your hand firmly in theirs."
  },
  {
    icon: "🌈",
    headline: "Gentle Reminder",
    message: "'Bit of a mess, but doing my best.' Even stars are made from chaotic space dust. You are allowed to be tired. You are doing wonderfully."
  },
  {
    icon: "🛡️",
    headline: "Safe Harbor",
    message: "You are fierce and independent, but you never have to carry all the heavy things alone. There's always a shield standing beside you."
  },
  {
    icon: "✨",
    headline: "Manifestation Check",
    message: "Take a deep breath in... hold it... and exhale. You are manifesting good in your life, and the universe is already delivering it to you."
  }
];

// Reel Story Slides
const REEL_SLIDES = [
  {
    badge: "INCOMING STORY 💌",
    title: "Hey Jiya 🦦",
    desc: "A little random reel landed in your feed to remind you of a few undeniable facts...",
    image: "assets/curated/jiya_flowers_bouquet.jpg"
  },
  {
    badge: "FACT #1 ✨",
    title: "This Smile Lights Up Everything",
    desc: "No flowers or city lights can compete with that joyful grin.",
    image: "assets/curated/jiya_cafe_corridor.jpg"
  },
  {
    badge: "FACT #2 🐾",
    title: "Pure Golden Love",
    desc: "Look at how safe that puppy sleeps in your arms. Your soul gives off pure peace.",
    image: "assets/curated/jiya_dog_sleep.jpg"
  },
  {
    badge: "FACT #3 🏆",
    title: "Winner Energy in Your DNA",
    desc: "Trophy in hand, traditional Punjabi elegance on point. Unstoppable when you set your mind to it.",
    image: "assets/curated/jiya_trophy_purple.jpg"
  },
  {
    badge: "FACT #4 💪💅",
    title: "Strong, Fierce & Stylish",
    desc: "Lifting weights while keeping the stiletto nails pristine. Queen behavior.",
    image: "assets/curated/jiya_gym_nails.jpg"
  },
  {
    badge: "FACT #5 🌈",
    title: "Doing Your Best is Enough",
    desc: "'Bit of a mess, but doing my best.' Never apologize for having human days.",
    image: "assets/curated/art_bit_of_a_mess.jpg"
  },
  {
    badge: "FACT #6 🛡️",
    title: "Always in Your Corner",
    desc: "Whatever life throws at you, you never have to walk through it alone. Now go conquer the day! ✨",
    image: "assets/curated/art_knight_hug.jpg"
  }
];

// Mascot Otter Sayings
const MASCOT_QUOTES = [
  "Hey Jiya! 🦦 Remember to drink some water!",
  "Otters hold hands so they don't drift apart! 🦦",
  "Sending 10,000 golden puppy kisses! 🐾",
  "You're doing amazing, even when you don't feel like it! ✨",
  "Drop your shoulders and unclench your jaw, Jiya! 🌸",
  "That trophy was just the beginning! 🏆",
  "You are 100% that girl! 💪💅"
];

/* ==========================================================================
   AUDIO SYNTHESIS ENGINE (Web Audio API - Zero External Dependencies)
   ========================================================================== */
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.interval = null;
    this.chordStep = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play pleasant acoustic / bell chime
  playChime(freq = 587.33, duration = 0.6) {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.1);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  playPop() {
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  // Dreamy Lo-Fi Electric Piano Chords Progression (Fmaj7 - Em7 - Dm7 - Cmaj7)
  startLoFiMusic() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Chords defined by frequencies (Hz)
    const progressions = [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [164.81, 196.00, 246.94, 293.66], // Em7
      [146.83, 174.61, 220.00, 261.63], // Dm7
      [130.81, 164.81, 196.00, 246.94]  // Cmaj7
    ];

    const playChord = () => {
      if (!this.isPlaying) return;
      const notes = progressions[this.chordStep % progressions.length];
      this.chordStep++;

      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);

        // Warm LP filter for that lo-fi warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(900, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 0.15 + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.04);
        osc.stop(now + 3.0);
      });
    };

    playChord();
    this.interval = setInterval(playChord, 3000);
  }

  stopLoFiMusic() {
    this.isPlaying = false;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  toggleLoFi() {
    if (this.isPlaying) {
      this.stopLoFiMusic();
      return false;
    } else {
      this.startLoFiMusic();
      return true;
    }
  }
}

const audio = new AudioEngine();

/* ==========================================================================
   AMBIENT FLOATING PETALS & SPARKLES CANVAS
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  const PARTICLE_COUNT = Math.min(32, Math.floor(window.innerWidth / 30));

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 12 + 6,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: Math.random() * 0.7 + 0.3,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5,
      type: Math.random() > 0.4 ? 'petal' : (Math.random() > 0.5 ? 'sparkle' : 'heart'),
      opacity: Math.random() * 0.5 + 0.25
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.type === 'petal') {
        ctx.fillStyle = '#f43f5e';
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.6, p.size * 1.2, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'heart') {
        ctx.fillStyle = '#fb7185';
        ctx.font = `${p.size}px serif`;
        ctx.fillText('❤️', -p.size / 2, p.size / 2);
      } else {
        ctx.fillStyle = '#f59e0b';
        ctx.font = `${p.size * 1.2}px serif`;
        ctx.fillText('✨', -p.size / 2, p.size / 2);
      }

      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ==========================================================================
   PHOTO POLAROID SCRAPBOOK & LIGHTBOX
   ========================================================================== */
let activeLightboxIndex = 0;
let filteredPhotos = [...CURATED_PHOTOS];

function initPolaroids() {
  const grid = document.getElementById('polaroidGrid');
  const filterChips = document.querySelectorAll('.filter-chip');

  function renderGrid(filter = 'all') {
    grid.innerHTML = '';
    filteredPhotos = filter === 'all' 
      ? CURATED_PHOTOS 
      : CURATED_PHOTOS.filter(p => p.category === filter);

    filteredPhotos.forEach((photo, idx) => {
      const tilt = ((idx % 5) - 2) * 1.4; // -2.8deg to +2.8deg
      const card = document.createElement('div');
      card.className = 'polaroid-item';
      card.style.transform = `rotate(${tilt}deg)`;
      card.innerHTML = `
        <div class="polaroid-media">
          <img src="${photo.file}" alt="${photo.title}" loading="lazy">
        </div>
        <div class="polaroid-caption-wrap">
          <span class="polaroid-category">${photo.category}</span>
          <h4 class="polaroid-title">${photo.title}</h4>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(idx);
        audio.playPop();
      });

      grid.appendChild(card);
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderGrid(chip.dataset.filter);
      audio.playChime(650, 0.2);
    });
  });

  renderGrid('all');
}

function openLightbox(index) {
  activeLightboxIndex = index;
  const modal = document.getElementById('lightboxModal');
  const photo = filteredPhotos[index];

  document.getElementById('lightboxImg').src = photo.file;
  document.getElementById('lightboxImg').alt = photo.title;
  document.getElementById('lightboxTitle').textContent = photo.title;
  document.getElementById('lightboxCaption').textContent = photo.caption;
  document.getElementById('lightboxTag').textContent = photo.category.toUpperCase();
  document.getElementById('lightboxLoveCount').textContent = photo.likes;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function initLightboxHandlers() {
  document.getElementById('closeLightboxBtn').addEventListener('click', closeLightbox);
  document.getElementById('closeLightboxOverlay').addEventListener('click', closeLightbox);

  document.getElementById('lightboxPrevBtn').addEventListener('click', () => {
    if (activeLightboxIndex > 0) {
      openLightbox(activeLightboxIndex - 1);
      audio.playChime(500, 0.15);
    }
  });

  document.getElementById('lightboxNextBtn').addEventListener('click', () => {
    if (activeLightboxIndex < filteredPhotos.length - 1) {
      openLightbox(activeLightboxIndex + 1);
      audio.playChime(600, 0.15);
    }
  });

  // Love Button with floating hearts
  document.getElementById('lightboxLoveBtn').addEventListener('click', (e) => {
    const photo = filteredPhotos[activeLightboxIndex];
    photo.likes += 1;
    document.getElementById('lightboxLoveCount').textContent = photo.likes;
    audio.playChime(784, 0.4);
    spawnFloatingHeart(e.clientX, e.clientY);
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && activeLightboxIndex > 0) openLightbox(activeLightboxIndex - 1);
    if (e.key === 'ArrowRight' && activeLightboxIndex < filteredPhotos.length - 1) openLightbox(activeLightboxIndex + 1);
  });
}

function spawnFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.textContent = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.fontSize = '1.8rem';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '2000';
  heart.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = `translate(${(Math.random() - 0.5) * 80}px, -100px) scale(1.4)`;
    heart.style.opacity = '0';
  });

  setTimeout(() => heart.remove(), 850);
}

/* ==========================================================================
   INTERACTIVE COLORING CORNER STUDIO
   ========================================================================== */
function initColoringStudio() {
  const sheetCarousel = document.getElementById('sheetCarousel');
  const paintCanvas = document.getElementById('paintCanvas');
  const lineArtCanvas = document.getElementById('lineArtCanvas');
  const paintCtx = paintCanvas.getContext('2d', { willReadFrequently: true });
  const lineCtx = lineArtCanvas.getContext('2d');

  let activeSheet = COLORING_SHEETS[0];
  let activeTool = 'bucket'; // 'bucket', 'brush', 'eraser'
  let activeColor = PALETTE_COLORS[0];
  let brushSize = 18;
  let isDrawing = false;
  let historyStack = [];

  // Populate Sheets Carousel
  sheetCarousel.innerHTML = '';
  COLORING_SHEETS.forEach((sheet, idx) => {
    const item = document.createElement('div');
    item.className = `sheet-thumb-item ${idx === 0 ? 'active' : ''}`;
    item.innerHTML = `<img src="${sheet.file}" alt="${sheet.title}">`;
    item.addEventListener('click', () => {
      document.querySelectorAll('.sheet-thumb-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      loadSheet(sheet);
      audio.playPop();
    });
    sheetCarousel.appendChild(item);
  });

  // Populate Palette Swatches
  const swatchWrap = document.getElementById('paletteSwatches');
  swatchWrap.innerHTML = '';
  PALETTE_COLORS.forEach((color, idx) => {
    const swatch = document.createElement('button');
    swatch.className = `swatch-btn ${idx === 0 ? 'active' : ''}`;
    swatch.style.backgroundColor = color;
    swatch.title = color;
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.swatch-btn').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      activeColor = color;
      audio.playChime(600 + idx * 20, 0.15);
    });
    swatchWrap.appendChild(swatch);
  });

  // Load image onto line art canvas
  function loadSheet(sheet) {
    activeSheet = sheet;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = sheet.file;
    img.onload = () => {
      // Set canvas dimensions
      paintCanvas.width = img.naturalWidth || 720;
      paintCanvas.height = img.naturalHeight || 960;
      lineArtCanvas.width = paintCanvas.width;
      lineArtCanvas.height = paintCanvas.height;

      // Draw background white on paint canvas
      paintCtx.fillStyle = '#ffffff';
      paintCtx.fillRect(0, 0, paintCanvas.width, paintCanvas.height);

      // Draw crisp black lines on line art canvas
      lineCtx.drawImage(img, 0, 0, lineArtCanvas.width, lineArtCanvas.height);

      // Reset undo stack
      historyStack = [];
      saveState();
    };
  }

  function saveState() {
    try {
      if (historyStack.length > 10) historyStack.shift();
      historyStack.push(paintCtx.getImageData(0, 0, paintCanvas.width, paintCanvas.height));
    } catch (err) {
      // Protected in strict file:// protocol
    }
  }

  function undo() {
    try {
      if (historyStack.length > 1) {
        historyStack.pop();
        const prev = historyStack[historyStack.length - 1];
        paintCtx.putImageData(prev, 0, 0);
        audio.playChime(440, 0.2);
      }
    } catch (err) {
      console.warn("Undo unavailable under strict local file policy");
    }
  }

  // Flood fill algorithm for Tap Fill
  function floodFill(startX, startY, fillColorHex) {
    try {
      const w = paintCanvas.width;
      const h = paintCanvas.height;

      // Convert hex to rgb
      const r = parseInt(fillColorHex.slice(1, 3), 16);
      const g = parseInt(fillColorHex.slice(3, 5), 16);
      const b = parseInt(fillColorHex.slice(5, 7), 16);

      const paintData = paintCtx.getImageData(0, 0, w, h);
      const pData = paintData.data;

      const lineData = lineCtx.getImageData(0, 0, w, h);
      const lData = lineData.data;

      const startIndex = (startY * w + startX) * 4;
      const targetR = pData[startIndex];
      const targetG = pData[startIndex + 1];
      const targetB = pData[startIndex + 2];

      // If already the same color, skip
      if (targetR === r && targetG === g && targetB === b) return;

      // Check if clicked directly on black line
      const lineLum = (lData[startIndex] + lData[startIndex+1] + lData[startIndex+2]) / 3;
      if (lineLum < 60) return; // Don't fill lines

      const queue = [[startX, startY]];
      const visited = new Uint8Array(w * h);
      visited[startY * w + startX] = 1;

      const colorMatch = (idx) => {
        const lum = (lData[idx] + lData[idx+1] + lData[idx+2]) / 3;
        if (lum < 90) return false;

        return (
          Math.abs(pData[idx] - targetR) < 35 &&
          Math.abs(pData[idx+1] - targetG) < 35 &&
          Math.abs(pData[idx+2] - targetB) < 35
        );
      };

      while (queue.length > 0) {
        const [cx, cy] = queue.pop();
        const idx = (cy * w + cx) * 4;

        pData[idx] = r;
        pData[idx + 1] = g;
        pData[idx + 2] = b;
        pData[idx + 3] = 255;

        const neighbors = [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1]
        ];

        for (let i = 0; i < 4; i++) {
          const nx = neighbors[i][0];
          const ny = neighbors[i][1];
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            const nPos = ny * w + nx;
            if (!visited[nPos]) {
              visited[nPos] = 1;
              if (colorMatch(nPos * 4)) {
                queue.push([nx, ny]);
              }
            }
          }
        }
      }

      paintCtx.putImageData(paintData, 0, 0);
      saveState();
      audio.playChime(640, 0.2);
    } catch (err) {
      // Fallback brush splash if file:// limits pixel access
      paintCtx.fillStyle = fillColorHex;
      paintCtx.beginPath();
      paintCtx.arc(startX, startY, brushSize * 2, 0, Math.PI * 2);
      paintCtx.fill();
      saveState();
    }
  }

  // Get mouse/touch coordinates mapped to canvas resolution
  function getCanvasCoords(e) {
    const rect = paintCanvas.getBoundingClientRect();
    const scaleX = paintCanvas.width / rect.width;
    const scaleY = paintCanvas.height / rect.height;

    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: Math.floor((clientX - rect.left) * scaleX),
      y: Math.floor((clientY - rect.top) * scaleY)
    };
  }

  // Canvas Interactions
  paintCanvas.parentElement.addEventListener('pointerdown', (e) => {
    const { x, y } = getCanvasCoords(e);
    if (activeTool === 'bucket') {
      floodFill(x, y, activeColor);
    } else {
      isDrawing = true;
      paintCtx.beginPath();
      paintCtx.moveTo(x, y);
      paintCtx.lineCap = 'round';
      paintCtx.lineJoin = 'round';
      paintCtx.lineWidth = brushSize;
      paintCtx.strokeStyle = activeTool === 'eraser' ? '#ffffff' : activeColor;
      paintCtx.lineTo(x, y);
      paintCtx.stroke();
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDrawing) return;
    const { x, y } = getCanvasCoords(e);
    paintCtx.lineTo(x, y);
    paintCtx.stroke();
  });

  window.addEventListener('pointerup', () => {
    if (isDrawing) {
      isDrawing = false;
      saveState();
    }
  });

  // Tools & Controls
  document.getElementById('toolBucket').addEventListener('click', () => {
    activeTool = 'bucket';
    setActiveToolBtn('toolBucket');
  });

  document.getElementById('toolBrush').addEventListener('click', () => {
    activeTool = 'brush';
    setActiveToolBtn('toolBrush');
  });

  document.getElementById('toolEraser').addEventListener('click', () => {
    activeTool = 'eraser';
    setActiveToolBtn('toolEraser');
  });

  function setActiveToolBtn(id) {
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    audio.playPop();
  }

  document.getElementById('brushSizeSlider').addEventListener('input', (e) => {
    brushSize = parseInt(e.target.value);
  });

  document.getElementById('undoBtn').addEventListener('click', undo);

  document.getElementById('clearCanvasBtn').addEventListener('click', () => {
    paintCtx.fillStyle = '#ffffff';
    paintCtx.fillRect(0, 0, paintCanvas.width, paintCanvas.height);
    saveState();
    audio.playChime(350, 0.3);
  });

  document.getElementById('downloadCanvasBtn').addEventListener('click', () => {
    try {
      // Composite paint layer and line art layer
      const exportCanvas = document.createElement('canvas');
      exportCanvas.width = paintCanvas.width;
      exportCanvas.height = paintCanvas.height;
      const expCtx = exportCanvas.getContext('2d');

      // Draw painted colors
      expCtx.drawImage(paintCanvas, 0, 0);
      // Draw crisp line art on top with multiply blend
      expCtx.globalCompositeOperation = 'multiply';
      expCtx.drawImage(lineArtCanvas, 0, 0);

      const link = document.createElement('a');
      link.download = `jiya_masterpiece_${activeSheet.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`;
      link.href = exportCanvas.toDataURL('image/png');
      link.click();
      audio.playChime(880, 0.5);
    } catch (e) {
      alert("Note: To download your colored artwork, open the site via an HTTP server (e.g. run 'python -m http.server' or host online)!");
    }
  });

  // Load first sheet
  loadSheet(activeSheet);
}

/* ==========================================================================
   SEROTONIN DISPENSER WIDGET
   ========================================================================== */
function initSerotoninDispenser() {
  const dispenseBtn = document.getElementById('dispenseBtn');
  const virtualHugBtn = document.getElementById('virtualHugBtn');
  const display = document.getElementById('dispenserDisplay');
  const icon = document.getElementById('dispenserIcon');
  const headline = document.getElementById('dispenserHeadline');
  const message = document.getElementById('dispenserMessage');

  let lastIndex = -1;

  function dispense() {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * SEROTONIN_DROPS.length);
    } while (nextIndex === lastIndex);
    lastIndex = nextIndex;

    const drop = SEROTONIN_DROPS[nextIndex];

    display.classList.remove('pop-animation');
    void display.offsetWidth; // Trigger reflow
    display.classList.add('pop-animation');

    icon.textContent = drop.icon;
    headline.textContent = drop.headline;
    message.textContent = drop.message;

    audio.playChime(700 + Math.random() * 200, 0.35);
  }

  dispenseBtn.addEventListener('click', dispense);

  virtualHugBtn.addEventListener('click', (e) => {
    display.classList.remove('pop-animation');
    void display.offsetWidth;
    display.classList.add('pop-animation');

    icon.textContent = "🫂";
    headline.textContent = "Virtual Hug Delivered!";
    message.textContent = "A 10-second warm, tight, comforting hug sent straight to you. Breathe in, hold it, and let go of whatever feels heavy.";

    audio.playChime(523.25, 0.6); // C5 chord

    // Burst hearts around button
    const rect = virtualHugBtn.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
      spawnFloatingHeart(rect.left + Math.random() * rect.width, rect.top);
    }
  });
}

/* ==========================================================================
   RAINBOW OF TRUTHS (Affirmations)
   ========================================================================== */
function initRainbowAffirmations() {
  const arcButtons = document.querySelectorAll('.arc-btn');
  const badge = document.getElementById('activeAffirmationBadge');
  const text = document.getElementById('activeAffirmationText');

  const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]; // C major scale

  arcButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      arcButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const word = btn.dataset.word;
      const desc = btn.dataset.desc;
      const idx = parseInt(btn.dataset.index) || 0;

      badge.textContent = `${word} ✨`;
      text.textContent = desc;

      audio.playChime(notes[idx % notes.length], 0.4);
    });
  });
}

/* ==========================================================================
   WAX-SEALED ENVELOPE (Letter For Jiya)
   ========================================================================== */
function initLetterEnvelope() {
  const envelopeWrap = document.getElementById('envelopeWrapper');
  const waxSeal = document.getElementById('waxSeal');

  envelopeWrap.addEventListener('click', () => {
    const isOpen = envelopeWrap.classList.toggle('open');
    if (isOpen) {
      audio.playChime(660, 0.4);
    } else {
      audio.playPop();
    }
  });
}

/* ==========================================================================
   REEL / STORY MODE (Instagram Reel Experience)
   ========================================================================== */
function initReelMode() {
  const reelModal = document.getElementById('reelModal');
  const reelBtn = document.getElementById('reelModeBtn');
  const startFromBanner = document.getElementById('startReelFromBannerBtn');
  const closeReelBtn = document.getElementById('closeReelBtn');
  const closeReelOverlay = document.getElementById('closeReelOverlay');
  const progContainer = document.getElementById('storyProgressContainer');
  const reelSlide = document.getElementById('reelSlide');
  const tapLeft = document.getElementById('tapLeft');
  const tapRight = document.getElementById('tapRight');
  const reelHeartBtn = document.getElementById('reelHeartBtn');
  const reelShareBtn = document.getElementById('reelShareBtn');
  const reelHeartCount = document.getElementById('reelHeartCount');

  let currentSlide = 0;
  let storyTimer = null;
  let slideLikes = 1200;

  // Build progress tracks
  progContainer.innerHTML = '';
  REEL_SLIDES.forEach((_, idx) => {
    const track = document.createElement('div');
    track.className = 'prog-bar-track';
    track.innerHTML = '<div class="prog-bar-fill"></div>';
    progContainer.appendChild(track);
  });

  function openReel() {
    reelModal.classList.add('active');
    reelModal.setAttribute('aria-hidden', 'false');
    currentSlide = 0;
    renderSlide(0);
    audio.startLoFiMusic();
    updateAudioWidgetUI(true);
  }

  function closeReel() {
    reelModal.classList.remove('active');
    reelModal.setAttribute('aria-hidden', 'true');
    if (storyTimer) clearInterval(storyTimer);
  }

  function renderSlide(index) {
    if (storyTimer) clearInterval(storyTimer);
    currentSlide = index;

    const slideData = REEL_SLIDES[index];
    const tracks = progContainer.querySelectorAll('.prog-bar-track');

    // Update progress bars
    tracks.forEach((t, i) => {
      t.classList.remove('completed');
      const fill = t.querySelector('.prog-bar-fill');
      fill.style.width = i < index ? '100%' : '0%';
    });

    reelSlide.innerHTML = `
      <img src="${slideData.image}" alt="${slideData.title}" class="reel-bg-image">
      <div class="reel-gradient-overlay"></div>
      <div class="reel-caption-card">
        <span class="reel-badge">${slideData.badge}</span>
        <h3 class="reel-title">${slideData.title}</h3>
        <p class="reel-desc">${slideData.desc}</p>
      </div>
    `;

    // Fill current bar over 5 seconds
    const currentFill = tracks[index].querySelector('.prog-bar-fill');
    let elapsed = 0;
    const duration = 5000;
    const step = 50;

    storyTimer = setInterval(() => {
      elapsed += step;
      const pct = Math.min(100, (elapsed / duration) * 100);
      currentFill.style.width = `${pct}%`;

      if (elapsed >= duration) {
        clearInterval(storyTimer);
        tracks[index].classList.add('completed');
        if (currentSlide < REEL_SLIDES.length - 1) {
          renderSlide(currentSlide + 1);
        } else {
          closeReel();
        }
      }
    }, step);
  }

  tapLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
      renderSlide(currentSlide - 1);
      audio.playPop();
    }
  });

  tapRight.addEventListener('click', () => {
    if (currentSlide < REEL_SLIDES.length - 1) {
      renderSlide(currentSlide + 1);
      audio.playPop();
    } else {
      closeReel();
    }
  });

  reelBtn.addEventListener('click', openReel);
  if (startFromBanner) startFromBanner.addEventListener('click', openReel);
  closeReelBtn.addEventListener('click', closeReel);
  closeReelOverlay.addEventListener('click', closeReel);

  reelHeartBtn.addEventListener('click', (e) => {
    slideLikes++;
    reelHeartCount.textContent = `${(slideLikes / 1000).toFixed(1)}k`;
    audio.playChime(750, 0.3);
    spawnFloatingHeart(e.clientX, e.clientY);
  });

  reelShareBtn.addEventListener('click', () => {
    audio.playChime(880, 0.4);
    alert("💌 Link ready to share! You are brightening someone's day right now.");
  });

  document.getElementById('reelAudioToggle').addEventListener('click', () => {
    const isPlaying = audio.toggleLoFi();
    updateAudioWidgetUI(isPlaying);
  });
}

/* ==========================================================================
   NAVIGATION & UI CONTROLS
   ========================================================================== */
function updateAudioWidgetUI(isPlaying) {
  const wave = document.getElementById('soundWave');
  const btn = document.getElementById('musicToggleBtn');
  if (isPlaying) {
    wave.classList.add('playing');
    btn.querySelector('.audio-label').textContent = 'Playing';
  } else {
    wave.classList.remove('playing');
    btn.querySelector('.audio-label').textContent = 'Lo-Fi Chill';
  }
}

function initNavAndTheme() {
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const surpriseBanner = document.getElementById('surpriseBanner');
  const dismissBannerBtn = document.getElementById('dismissBannerBtn');
  const closeBannerBtn = document.getElementById('closeBannerBtn');

  musicToggleBtn.addEventListener('click', () => {
    const isPlaying = audio.toggleLoFi();
    updateAudioWidgetUI(isPlaying);
  });

  themeToggleBtn.addEventListener('click', () => {
    const isNight = document.body.classList.toggle('theme-night');
    themeToggleBtn.textContent = isNight ? '☀️' : '🌙';
    audio.playPop();
  });

  if (dismissBannerBtn) {
    dismissBannerBtn.addEventListener('click', () => {
      surpriseBanner.style.display = 'none';
      audio.playChime(600, 0.2);
    });
  }

  if (closeBannerBtn) {
    closeBannerBtn.addEventListener('click', () => {
      surpriseBanner.style.display = 'none';
    });
  }
}

/* ==========================================================================
   FLOATING MASCOT OTTER COMPANION
   ========================================================================== */
function initMascotOtter() {
  const mascot = document.getElementById('mascotOtter');
  const bubble = document.getElementById('mascotBubble');

  let quoteIdx = 0;
  mascot.addEventListener('click', () => {
    quoteIdx = (quoteIdx + 1) % MASCOT_QUOTES.length;
    bubble.style.display = 'block';
    bubble.textContent = MASCOT_QUOTES[quoteIdx];
    audio.playChime(720 + Math.random() * 150, 0.25);
  });
}

/* ==========================================================================
   PAGE INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initPolaroids();
  initLightboxHandlers();
  initColoringStudio();
  initSerotoninDispenser();
  initRainbowAffirmations();
  initLetterEnvelope();
  initReelMode();
  initNavAndTheme();
  initMascotOtter();
});
