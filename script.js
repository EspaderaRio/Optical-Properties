    const defaultConfig = {
      course_title: "Optical Properties",
      chapter_info: "Chapter 21 - Materials Science and Engineering",
      complete_button: "Mark Complete",
      quiz_button: "Take Quiz",
      primary_color: "#3b82f6",
      secondary_color: "#1e3a8a",
      success_color: "#22c55e",
      background_color: "#1e3a8a",
      card_background: "#ffffff",
      font_family: "Inter",
      font_size: 16
    };

    const sections = [
{
  id: "sec-21-1",
  number: "21.1",
  title: "Introduction",
  content: `
    <p>Optical properties describe how materials interact with electromagnetic radiation—primarily in the visible spectrum, but often extending into the ultraviolet (UV) and infrared (IR) regions. These interactions determine how materials absorb, transmit, reflect, scatter, and emit light. Understanding these behaviors is essential not only for scientific research but also for engineering advanced technologies such as fiber optics, solar panels, sensors, and display systems.</p>

    <h3>Why Study Optical Properties?</h3>
    <p>Materials scientists, physicists, and engineers examine optical phenomena to understand, design, and optimize how materials manipulate light. This knowledge is applied in a wide range of modern technologies:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🔬 Design Materials</h4>
        <p>Create materials with precise optical responses—such as high-transparency glass, anti-reflective coatings, or photochromic lenses.</p>
      </div>
      <div class="concept-card">
        <h4>💡 Develop Technologies</h4>
        <p>Engineer LEDs, lasers, photodetectors, optical fibers, and photovoltaic devices for energy harvesting.</p>
      </div>
      <div class="concept-card">
        <h4>🎨 Control Appearance</h4>
        <p>Manipulate color, brightness, glossiness, and transparency to influence how products look and feel.</p>
      </div>
      <div class="concept-card">
        <h4>📡 Enable Communication</h4>
        <p>Build high-speed optical communication systems using light to transmit information across long distances with minimal loss.</p>
      </div>
      <div class="concept-card">
        <h4>🔭 Explore the Micro & Nano World</h4>
        <p>Use optical interactions to study materials at extremely small scales through microscopy and spectroscopy.</p>
      </div>
      <div class="concept-card">
        <h4>⚡ Enhance Energy Efficiency</h4>
        <p>Develop coatings and materials that control heat flow, such as low-emissivity windows and reflective insulators.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Key Insight</h4>
      <p>Optical properties arise from the interaction between photons and a material’s electrons. The electronic structure—that is, how electrons are arranged and how freely they move—determines how the material absorbs, transmits, reflects, or emits light.</p>
    </div>

    <h3>Core Optical Behaviors</h3>
    <p>When light encounters a material, several outcomes are possible. These fundamental processes define how a material appears and behaves under illumination:</p>

    <ul class="styled-list">
      <li><strong>Absorption:</strong> Photons transfer their energy to electrons, causing electronic transitions or vibrational excitations.</li>
      <li><strong>Reflection:</strong> Light bounces off the surface, influenced by surface roughness and refractive index.</li>
      <li><strong>Transmission:</strong> Light passes through the material, depending on transparency and thickness.</li>
      <li><strong>Refraction:</strong> Light bends as it enters a material with a different optical density.</li>
      <li><strong>Scattering:</strong> Light is redirected in multiple directions due to irregularities or small particles.</li>
      <li><strong>Emission:</strong> Materials can release light after absorbing energy, as seen in fluorescence or phosphorescence.</li>
    </ul>

    <div class="note-box">
      <h4>Did You Know?</h4>
      <p>The brilliant colors of gemstones, stained glass, and even butterfly wings are the result of specific optical interactions—some caused by chemical composition, others by microscopic structural patterns.</p>
    </div>

    <h3>Applications Across Industries</h3>
    <p>Mastering optical properties enables innovations in a wide range of fields:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🛰 Aerospace & Defense</h4>
        <p>Thermal control coatings, laser sensors, and advanced imaging systems.</p>
      </div>
      <div class="concept-card">
        <h4>🔋 Renewable Energy</h4>
        <p>High-efficiency solar cells and light-absorbing materials for clean energy technologies.</p>
      </div>
      <div class="concept-card">
        <h4>📱 Consumer Electronics</h4>
        <p>High-resolution displays, camera lenses, augmented reality systems, and protective screen coatings.</p>
      </div>
      <div class="concept-card">
        <h4>🧪 Medical Technologies</h4>
        <p>Optical sensors, imaging tools (e.g., endoscopy, MRI contrast), and laser-based surgical devices.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>In Summary</h4>
      <p>Optical properties are at the heart of many technologies that define modern life. From the screens we use daily to the solar panels powering clean energy, understanding how materials respond to light allows scientists and engineers to design smarter, more efficient, and more beautiful solutions.</p>
    </div>
  `
},
      {
  id: "sec-21-2",
  number: "21.2",
  title: "Electromagnetic Radiation",
  content: `
    <p>Light is a form of <strong>electromagnetic (EM) radiation</strong>, meaning it consists of oscillating electric and magnetic fields that travel through space. These fields vibrate perpendicular to each other and to the direction of wave propagation, making light a <strong>transverse wave</strong>. Electromagnetic radiation does not require a medium and can travel through a vacuum, distinguishing it from mechanical waves such as sound.</p>

    <h3>Dual Nature of Light</h3>
    <p>Light exhibits both <strong>wave-like</strong> and <strong>particle-like</strong> behavior, a concept known as <em>wave–particle duality</em>. As a wave, it shows interference, diffraction, and refraction. As particles, light is composed of tiny packets of energy called <strong>photons</strong>, each carrying a discrete amount of energy.</p>

    <h3>Wave Characteristics</h3>
    <p>Electromagnetic radiation can be described by several fundamental wave properties:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>λ — Wavelength</h4>
        <p>The distance between two consecutive peaks or troughs in a wave. For visible light, wavelengths range from 400–700 nm. Shorter wavelengths correspond to higher energy.</p>
      </div>

      <div class="concept-card">
        <h4>ν — Frequency</h4>
        <p>The number of complete wave cycles that pass a point per second (measured in Hz). Higher frequency means higher photon energy.</p>
      </div>

      <div class="concept-card">
        <h4>c — Velocity</h4>
        <p>The speed of light in a vacuum is a constant: <strong>c = 3 × 10⁸ m/s</strong>. In materials (like glass or water), light slows down depending on the material's optical density.</p>
      </div>

      <div class="concept-card">
        <h4>E — Energy</h4>
        <p>The energy of a single photon is given by <strong>E = hν</strong>, where h is Planck’s constant (6.626 × 10⁻³⁴ J·s). Higher frequency → higher energy.</p>
      </div>
    </div>

    <h3>Polarization</h3>
    <p>Because light is a transverse wave, its electric field can oscillate in different orientations. <strong>Polarization</strong> refers to restricting the direction of this oscillation. Polarized light is used in sunglasses, optical filters, LCD displays, and scattering studies.</p>

    <div class="highlight-box">
      <h4>The Electromagnetic Spectrum</h4>
      <p>The EM spectrum spans a vast range of wavelengths, from long-wavelength <strong>radio waves</strong> to extremely short <strong>gamma rays</strong>. Visible light (400–700 nm) represents only a tiny portion. Different wavelengths interact with matter in distinct ways:</p>
      <ul>
        <li><strong>Infrared</strong> heats materials and is absorbed strongly by water.</li>
        <li><strong>Ultraviolet</strong> can excite electrons and cause fluorescence.</li>
        <li><strong>X-rays</strong> penetrate soft tissue but are absorbed by bone.</li>
      </ul>
      <p>Understanding how materials absorb, transmit, scatter, or reflect different wavelengths is crucial for optical analysis.</p>
    </div>

    <h3>Key Relationship</h3>
    <p><strong>c = λν</strong> — The speed of light equals wavelength multiplied by frequency.</p>
    <p>This relationship implies that:</p>
    <ul>
      <li>If wavelength increases, frequency decreases.</li>
      <li>If wavelength decreases, energy increases.</li>
      <li>In a medium, light slows down but its frequency stays constant — only wavelength changes.</li>
    </ul>

    <h3>Light in Materials</h3>
    <p>When electromagnetic radiation enters a material, it can be:</p>
    <ul>
      <li><strong>absorbed</strong> — energy is taken up by atoms or molecules, often converting to heat</li>
      <li><strong>reflected</strong> — light bounces off the surface depending on roughness and refractive index</li>
      <li><strong>transmitted</strong> — light passes through the material</li>
      <li><strong>refracted</strong> — direction changes due to varying speed in different media</li>
      <li><strong>scattered</strong> — redirected in multiple directions</li>
    </ul>
    <p>The balance between these behaviors defines the <strong>optical properties</strong> of a material and determines how it interacts with specific wavelengths.</p>

    <h3>Photon Model</h3>
    <p>In the photon view, EM radiation consists of discrete packets of energy. The energy determines how photons interact with matter:</p>
    <ul>
      <li>Low-energy photons (radio, microwave) cause molecular rotation or vibration.</li>
      <li>Mid-energy photons (visible light) can promote electrons to higher energy levels.</li>
      <li>High-energy photons (UV, X-ray) can ionize atoms and damage molecules.</li>
    </ul>

    <p>Understanding these interactions is essential in fields such as spectroscopy, imaging, photonics, and optical engineering.</p>
  `
},
     {
  id: "sec-21-3",
  number: "21.3",
  title: "Light Interactions with Solids",
  content: `
    <p>When light encounters a solid material, it undergoes a combination of interactions that determine how the material looks and behaves under illumination. These interactions depend on the material’s electronic structure, bonding, microstructure, and surface characteristics. Understanding these interactions is essential for designing optical components, coatings, and technologically advanced materials.</p>

    <h3>Primary Interactions with Light</h3>
    <p>A single beam of light may experience multiple outcomes when striking a solid. The main processes include:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>📐 Reflection</h4>
        <p>Light bounces off the surface of a material. Reflection may be <strong>specular</strong> (mirror-like, smooth surfaces) or <strong>diffuse</strong> (scattered in many directions due to surface roughness). The angle of reflection always equals the angle of incidence.</p>
      </div>

      <div class="concept-card">
        <h4>🔄 Refraction</h4>
        <p>Light changes direction as it enters a material with a different optical density. This bending is described by <strong>Snell’s Law</strong>, and the magnitude of bending depends on the refractive index. Higher refractive index → slower light → stronger bending.</p>
      </div>

      <div class="concept-card">
        <h4>🎯 Absorption</h4>
        <p>Photons transfer their energy to electrons or lattice vibrations (phonons), causing electronic transitions or heat generation. Materials with strong absorption appear dark or colored depending on which wavelengths are absorbed.</p>
      </div>

      <div class="concept-card">
        <h4>➡️ Transmission</h4>
        <p>Light passes through the material with minimal absorption. Transmission quality depends on purity, thickness, crystal structure, and band gap.</p>
      </div>

      <div class="concept-card">
        <h4>🌫 Scattering</h4>
        <p>Light is redirected by irregularities, defects, or microscopic structures. Scattering affects brightness, haze, and translucency. Larger particles cause Mie scattering; smaller particles cause Rayleigh scattering.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Energy Conservation in Optics</h4>
      <p>The optical interactions follow the relationship:</p>
      <p style="text-align:center; font-weight:bold;">R + A + T = 1</p>
      <p>where <strong>R</strong> = reflection, <strong>A</strong> = absorption, and <strong>T</strong> = transmission, each expressed as fractions of the incident light. This balance allows scientists to quantify material transparency, color, and reflectivity.</p>
    </div>

    <h3>How Electronic Structure Influences Behavior</h3>
    <p>The way a material interacts with light is controlled primarily by its electronic band structure:</p>
    <ul>
      <li><strong>Insulators:</strong> Large band gaps prevent electrons from absorbing visible light → materials appear transparent or colorless.</li>
      <li><strong>Semiconductors:</strong> Moderate band gaps absorb specific wavelengths → responsible for solar cell and LED behavior.</li>
      <li><strong>Metals:</strong> Free electrons reflect most incident light → metals appear shiny and opaque.</li>
    </ul>

    <h3>Material Classification</h3>
    <p>Based on how they allow or restrict transmission of light, materials fall into three broad categories:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🔍 Transparent</h4>
        <p>Transmit light with minimal scattering or absorption. Examples include clear glass, acrylic, and certain crystals. Common in lenses, screens, and optical fibers.</p>
      </div>

      <div class="concept-card">
        <h4>🌥 Translucent</h4>
        <p>Allow light to pass but scatter it strongly, producing a diffuse glow. Examples include frosted glass, wax paper, and some ceramics. Used for soft lighting and privacy panels.</p>
      </div>

      <div class="concept-card">
        <h4>⬛ Opaque</h4>
        <p>Absorb or reflect nearly all incident light; no transmission occurs. Examples include metals, wood, stone, and heavily pigmented plastics.</p>
      </div>
    </div>

    <h3>Advanced Light–Material Interactions</h3>
    <p>Modern optical technologies rely on more complex interactions beyond simple reflection or absorption:</p>
    <ul class="styled-list">
      <li><strong>Interference:</strong> Thin films (soap bubbles, anti-reflective coatings) produce color patterns due to phase differences.</li>
      <li><strong>Diffraction:</strong> Light bends around edges or passes through periodic structures, enabling holography and grating spectrometers.</li>
      <li><strong>Photoluminescence:</strong> Materials absorb high-energy light and re-emit it at lower energies (fluorescent lamps, quantum dots).</li>
      <li><strong>Nonlinear optics:</strong> At high intensities, materials generate new frequencies of light (harmonic generation, optical switching).</li>
    </ul>

    <div class="note-box">
      <h4>Did You Know?</h4>
      <p>The bright colors of butterfly wings and peacock feathers are not caused by pigments, but by <strong>structural coloration</strong>—microscopic layers that manipulate light through interference and scattering.</p>
    </div>

    <h3>Real-World Applications</h3>
    <p>Understanding how solids interact with light enables innovations across science and industry:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>📱 Display Technologies</h4>
        <p>LCD and OLED screens rely on precise control of absorption, transmission, and emission.</p>
      </div>

      <div class="concept-card">
        <h4>🔋 Renewable Energy</h4>
        <p>Solar cells use engineered semiconductors to maximize absorption while minimizing reflection.</p>
      </div>

      <div class="concept-card">
        <h4>⚙️ Optics & Imaging</h4>
        <p>Lenses, prisms, and mirrors are designed using controlled refraction and reflective coatings.</p>
      </div>

      <div class="concept-card">
        <h4>🎨 Materials Design</h4>
        <p>Coatings, pigments, and photonic structures create specific colors, gloss levels, and finishes.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>The interaction of light with solids is governed by fundamental physical principles involving electronic structure, surface roughness, and microstructure. By understanding these interactions, engineers and scientists design materials for advanced optical technologies—from everyday glass windows to complex photonic devices.</p>
    </div>
  `
},
    {
  id: "sec-21-4",
  number: "21.4",
  title: "Atomic and Electronic Interactions",
  content: `
    <p>The interaction between photons and electrons forms the foundation of all optical behavior in solids. Because electrons occupy discrete or semi-continuous energy states, the absorption, emission, and scattering of light depend heavily on a material’s atomic structure, bonding type, and electronic band configuration. These microscopic interactions ultimately determine macroscopic properties such as transparency, reflectivity, color, and optical conductivity.</p>

    <h3>Mechanisms of Light–Electron Interaction</h3>
    <p>When light encounters a material, electrons respond to the oscillating electromagnetic field in several key ways:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>⚡ Electronic Polarization</h4>
        <p>The electric field of light shifts electron clouds relative to atomic nuclei, creating temporary dipoles. This process influences the refractive index and is responsible for dielectric behavior in insulators and semiconductors.</p>
      </div>

      <div class="concept-card">
        <h4>🎢 Electronic Transitions</h4>
        <p>Photons promote electrons to higher energy levels—either between atomic orbitals or across band gaps. Selective transitions cause wavelength-dependent absorption, which gives materials their distinct colors.</p>
      </div>

      <div class="concept-card">
        <h4>📊 Band Gaps</h4>
        <p>The energy difference between the valence and conduction bands determines which wavelengths can be absorbed. Only photons with energy equal to or greater than this gap can excite electrons into conductive states.</p>
      </div>

      <div class="concept-card">
        <h4>🔗 Free Electrons</h4>
        <p>Metals contain delocalized electrons that oscillate collectively in response to light. This leads to strong reflection, high absorption of visible light, and phenomena such as plasmon resonance.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Band Gap Energy</h4>
      <p>For absorption to occur, photon energy must satisfy <strong>E = hν ≥ E<sub>g</sub></strong>, where E<sub>g</sub> is the material’s band gap. This principle explains why semiconductors absorb specific wavelength ranges and why wide-band-gap materials (like diamond) are transparent to visible light.</p>
    </div>

    <h3>Energy Level Diagrams</h3>
    <p>Atoms contain discrete electronic states, but in solids these states broaden into energy bands. The behavior of electrons within these bands dictates how materials respond to light:</p>

    <ul class="styled-list">
      <li><strong>Insulators:</strong> A large band gap prevents excitation of electrons under visible light, leading to transparency or neutrality.</li>
      <li><strong>Semiconductors:</strong> Moderate gaps allow selective absorption and are essential for photodetectors, solar cells, and LEDs.</li>
      <li><strong>Metals:</strong> Overlapping valence and conduction bands allow electrons to move freely, enabling strong reflection and high electrical conductivity.</li>
    </ul>

    <h3>Advanced Electron–Photon Processes</h3>
    <p>Beyond basic transitions, materials exhibit additional interactions when photons engage with atomic structures:</p>

    <ul class="styled-list">
      <li><strong>Excitons:</strong> Bound electron–hole pairs that form after photon absorption and significantly contribute to optical behavior in crystals and semiconductors.</li>
      <li><strong>Phonon Interactions:</strong> Coupling between lattice vibrations and electrons causes absorption in the infrared region and contributes to thermal emission.</li>
      <li><strong>Charge Transfer Transitions:</strong> Movement of electrons between atoms or ions within a compound—common in transition-metal oxides and responsible for intense coloration.</li>
      <li><strong>Plasmonics:</strong> Collective oscillations of free electrons at metal surfaces create strong light confinement and unique color effects seen in gold or nanostructured metals.</li>
    </ul>

    <div class="note-box">
      <h4>Did You Know?</h4>
      <p>Gold appears yellow not because of pigments, but because its free electrons absorb blue light through relativistic band-structure effects—leaving reflected light enriched in yellow and red wavelengths.</p>
    </div>

    <h3>Real-World Impact</h3>
    <p>Understanding how electrons interact with light enables development of key optical technologies:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🔦 LEDs & Lasers</h4>
        <p>Controlled electron transitions in semiconductors generate monochromatic light through radiative recombination.</p>
      </div>

      <div class="concept-card">
        <h4>🔍 Transparent Conductors</h4>
        <p>Oxides like ITO balance free-electron conduction with visible-light transparency—vital for touchscreens and displays.</p>
      </div>

      <div class="concept-card">
        <h4>📡 Photodetectors</h4>
        <p>Semiconductors convert absorbed photons into electrical signals by generating electron–hole pairs.</p>
      </div>

      <div class="concept-card">
        <h4>💎 Optical Coatings</h4>
        <p>Thin films engineered at the atomic level manipulate reflection, absorption, and interference for camera lenses, solar panels, and mirrors.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>The optical properties of materials arise from the intricate interplay between photons and electrons. By understanding energy levels, band gaps, and electron dynamics, scientists can engineer materials with customized optical behavior—from transparent ceramics to plasmonic metals and advanced photonic devices.</p>
    </div>
  `
},
     {
  id: "sec-21-5",
  number: "21.5",
  title: "Refraction",
  content: `
    <p>Refraction is the change in direction of light as it passes from one medium to another with a different optical density. Because light travels at different speeds in different materials, its path bends at the interface. This fundamental phenomenon enables focusing, image formation, fiber-optic communication, and countless optical technologies used in modern science and engineering.</p>

    <h3>The Origin of Refraction</h3>
    <p>Refraction occurs because the oscillating electric field of light interacts with the electrons in a material. As photons enter a medium, these interactions cause light to slow down—without changing its frequency. The change in speed, combined with the requirement that wavefronts remain continuous, causes the light beam to bend.</p>

    <div class="highlight-box">
      <h4>Key Principle</h4>
      <p>Light always bends <strong>toward the normal</strong> when entering a slower medium and <strong>away from the normal</strong> when entering a faster medium.</p>
    </div>

    <h3>Index of Refraction</h3>
    <p>The index of refraction (n) quantifies how much the speed of light is reduced in a material:</p>

    <p class="equation"><strong>n = c / v</strong></p>

    <p>where c is the speed of light in vacuum (3 × 10⁸ m/s) and v is the speed of light in the material. A higher refractive index means stronger interaction between light and the material's electrons.</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>Vacuum: n = 1.0</h4>
        <p>No interaction; maximum speed of light</p>
      </div>
      <div class="concept-card">
        <h4>Air: n ≈ 1.0003</h4>
        <p>Very weak interaction; nearly identical to vacuum</p>
      </div>
      <div class="concept-card">
        <h4>Water: n = 1.33</h4>
        <p>Moderate slowing due to polar molecules</p>
      </div>
      <div class="concept-card">
        <h4>Glass: n ≈ 1.5–1.9</h4>
        <p>Strong slowing; depends on chemical composition and wavelength</p>
      </div>
    </div>

    <h3>Snell's Law</h3>
    <p>Snell's Law precisely predicts how much light bends when crossing an interface:</p>

    <p class="equation"><strong>n₁ sin(θ₁) = n₂ sin(θ₂)</strong></p>

    <p>where:</p>
    <ul class="styled-list">
      <li><strong>n₁, n₂</strong> are the refractive indices of each medium</li>
      <li><strong>θ₁</strong> is the angle of incidence</li>
      <li><strong>θ₂</strong> is the angle of refraction</li>
    </ul>

    <div class="note-box">
      <h4>Did You Know?</h4>
      <p>Refraction is the reason a straw appears “bent” in a glass of water—it is not the straw changing shape, but light changing direction as it leaves the water.</p>
    </div>

    <h3>Dispersion</h3>
    <p>Because the refractive index varies slightly with wavelength, different colors of light refract by different amounts. Shorter wavelengths (blue/violet) slow down more than longer wavelengths (red), resulting in separation of colors.</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🌈 Prisms</h4>
        <p>Use dispersion to break white light into a spectrum of colors</p>
      </div>
      <div class="concept-card">
        <h4>🎥 Lenses</h4>
        <p>Chromatic aberration occurs when different colors focus at different points</p>
      </div>
      <div class="concept-card">
        <h4>📡 Fiber Optics</h4>
        <p>Engineers must minimize dispersion to prevent signal distortion</p>
      </div>
    </div>

    <h3>Total Internal Reflection</h3>
    <p>When light attempts to move from a slower to a faster medium (e.g., water to air) at a sufficiently large incident angle, it reflects entirely back into the original medium rather than refracting. This phenomenon is known as <strong>Total Internal Reflection (TIR)</strong>.</p>

    <div class="highlight-box">
      <h4>Critical Angle</h4>
      <p>TIR occurs when <strong>θ₁ ≥ θ<sub>c</sub></strong>, where θ<sub>c</sub> is the critical angle:</p>
      <p class="equation"><strong>sin(θ<sub>c</sub>) = n₂ / n₁</strong></p>
    </div>

    <h3>Applications of Refraction</h3>
    <p>Refraction is foundational to numerous technologies and natural phenomena:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🔍 Lenses</h4>
        <p>Convex lenses focus light for microscopes, cameras, and eyeglasses</p>
      </div>
      <div class="concept-card">
        <h4>🌐 Optical Fibers</h4>
        <p>Total internal reflection enables long-distance, high-speed data transmission</p>
      </div>
      <div class="concept-card">
        <h4>🔎 Prisms & Spectrometers</h4>
        <p>Separate or analyze wavelengths for scientific measurement</p>
      </div>
      <div class="concept-card">
        <h4>🌅 Atmospheric Effects</h4>
        <p>Sunsets appear red and objects near the horizon appear distorted due to refraction in varying air densities</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Refraction arises from the change in light's speed as it enters different materials. This bending behavior—governed by Snell's Law—enables focusing, dispersion, and total internal reflection, forming the basis for essential optical technologies such as lenses, telescopes, fiber-optic cables, and modern imaging systems.</p>
    </div>
  `
},
     {
  id: "sec-21-6",
  number: "21.6",
  title: "Reflection",
  content: `
    <p>Reflection is the process by which light bounces off the surface of a material instead of being transmitted or absorbed. It occurs whenever light encounters a boundary between two media with different optical properties. The amount and type of reflection depend on surface smoothness, angle of incidence, wavelength, and the material’s electronic structure.</p>

    <h3>The Physical Origin of Reflection</h3>
    <p>Reflection arises from the interaction between the electric field of incoming light and the electrons at a material’s surface. When electrons in the boundary layer oscillate in response to the electromagnetic wave, they re-radiate energy back into the original medium—this re-radiated wave is what we observe as reflected light.</p>

    <div class="highlight-box">
      <h4>Key Principle</h4>
      <p>The angle of reflection always equals the angle of incidence: <strong>θ<sub>r</sub> = θ<sub>i</sub></strong>. This law holds for all reflecting surfaces, regardless of material.</p>
    </div>

    <h3>Types of Reflection</h3>
    <p>Materials reflect light in different ways depending on the smoothness of their surfaces and the microscopic interactions at the boundary.</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🪞 Specular Reflection</h4>
        <p>Occurs when light reflects from a smooth, polished surface such as glass, water, or metal. Rays maintain their relative angles, producing clear images. This is the dominant mechanism in mirrors, telescopes, and optical instruments.</p>
      </div>

      <div class="concept-card">
        <h4>🌫️ Diffuse Reflection</h4>
        <p>Light reflects in many different directions due to surface roughness at the microscopic level. This prevents image formation and results in matte appearance. Most everyday objects (clothing, paper, skin, walls) exhibit diffuse reflection.</p>
      </div>

      <div class="concept-card">
        <h4>🔀 Mixed Reflection</h4>
        <p>A combination of specular and diffuse reflection, common in semi-gloss materials, polished stones, varnished wood, and plastics.</p>
      </div>
    </div>

    <h3>Reflectivity at Normal Incidence</h3>
    <p>The reflectivity (or reflectance), which is the fraction of incident light reflected by a surface, is given by the Fresnel equation at normal incidence:</p>

    <p class="equation"><strong>R = [(n₁ - n₂) / (n₁ + n₂)]²</strong></p>

    <p>where:</p>
    <ul class="styled-list">
      <li><strong>n₁</strong> = refractive index of the medium the light comes from</li>
      <li><strong>n₂</strong> = refractive index of the second medium</li>
    </ul>

    <div class="highlight-box">
      <h4>Interpretation</h4>
      <p>Greater differences in refractive index lead to stronger reflection. This is why air–glass interfaces reflect only ~4%, while metal surfaces reflect more than 90%.</p>
    </div>

    <h3>Metals vs. Non-Metals</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>⚙️ Metals</h4>
        <p>Metals contain abundant free electrons. These electrons oscillate collectively (plasmons) and re-emit light efficiently, causing extremely high reflectivity (often R > 0.9). Reflection is strongly wavelength-dependent, giving metals their color (e.g., gold, copper).</p>
      </div>
      <div class="concept-card">
        <h4>📦 Non-Metals</h4>
        <p>Insulators and semiconductors reflect only a small fraction of light at normal incidence (typically R < 0.2). Their reflection arises mainly from polarization effects, not free electrons.</p>
      </div>
    </div>

    <div class="note-box">
      <h4>Did You Know?</h4>
      <p>The sky is visible at all because air molecules diffusely reflect (Rayleigh scatter) sunlight. Without scattering, the sky would appear black except where the Sun is located.</p>
    </div>

    <h3>Angle Dependence and Fresnel Reflection</h3>
    <p>Reflectivity increases dramatically at oblique (grazing) angles, especially for non-metals. Polarization also plays a major role: S-polarized and P-polarized light reflect differently.</p>

    <div class="highlight-box">
      <h4>Brewster’s Angle</h4>
      <p>At a special angle <strong>θ<sub>B</sub></strong>, P-polarized light is not reflected at all:</p>
      <p class="equation"><strong>tan(θ<sub>B</sub>) = n₂ / n₁</strong></p>
      <p>This property is used in polarized sunglasses and anti-reflection photography.</p>
    </div>

    <h3>Factors Affecting Reflectivity</h3>
    <ul class="styled-list">
      <li><strong>Surface roughness:</strong> Smooth surfaces produce specular reflection; rough surfaces scatter light diffusely.</li>
      <li><strong>Wavelength:</strong> Reflectivity varies with wavelength, often dramatically (e.g., UV reflectivity of metals is low).</li>
      <li><strong>Angle of incidence:</strong> Grazing angles increase reflectivity for all materials.</li>
      <li><strong>Electronic structure:</strong> Determines the complex refractive index <strong>n + ik</strong>, which governs how much light is reflected or absorbed.</li>
      <li><strong>Thin films:</strong> Multiple internal reflections cause interference, creating iridescent colors in soap bubbles, butterfly wings, and anti-reflection coatings.</li>
    </ul>

    <h3>Real-World Examples of Reflection</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>🔭 Mirrors & Telescopes</h4>
        <p>Highly polished aluminum or silver coatings reflect light with minimal distortion, enabling precision imaging.</p>
      </div>

      <div class="concept-card">
        <h4>📱 Smartphone Screens</h4>
        <p>Anti-reflective coatings reduce glare by destructive interference, improving readability in sunlight.</p>
      </div>

      <div class="concept-card">
        <h4>🌈 Soap Bubbles</h4>
        <p>Colorful patterns arise from thin-film interference between reflected waves on the inner and outer surfaces.</p>
      </div>

      <div class="concept-card">
        <h4>🏞️ Natural Surfaces</h4>
        <p>Water reflects the sky specularly when calm, but diffusely when disturbed by ripples.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Reflection is governed by the interaction of light with surface electrons and by changes in refractive index at material boundaries. Depending on surface conditions and material properties, light can reflect specularly, diffusely, or in a mixed fashion. These principles underpin technologies such as mirrors, sensors, optical coatings, and imaging devices.</p>
    </div>
  `
},
{
  id: "sec-21-7",
  number: "21.7",
  title: "Absorption",
  content: `
    <p>Absorption is the process by which light transfers its energy to a material, often converting it into heat, chemical energy, or other forms of energy. When light encounters a material, the photons interact with atoms, electrons, or molecular vibrations, resulting in a reduction of transmitted light. The extent and mechanism of absorption determine whether a material is transparent, translucent, or opaque.</p>

    <h3>The Physical Origin of Absorption</h3>
    <p>Absorption occurs due to interactions between the electromagnetic field of light and the charged particles within a material. Electrons, ions, or molecules can absorb photons if the photon energy matches the energy difference between quantum states. The absorbed energy can then manifest as:</p>
    <ul class="styled-list">
      <li>Increased kinetic energy of free carriers (metals)</li>
      <li>Excitation of electrons across a band gap (semiconductors/insulators)</li>
      <li>Vibrational or rotational motion in molecules (infrared absorption)</li>
      <li>Local heating through lattice vibrations (phonons)</li>
    </ul>

    <div class="highlight-box">
      <h4>Key Principle</h4>
      <p>A material absorbs light most strongly when the photon energy corresponds exactly to one of its available energy transitions.</p>
    </div>

    <h3>Absorption Mechanisms</h3>
    <p>Different mechanisms dominate depending on the material and the wavelength of light:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🎯 Electronic Excitation</h4>
        <p>Photons promote electrons from lower to higher energy levels, such as valence to conduction band transitions in semiconductors. This is the main mechanism for absorption in visible and ultraviolet light.</p>
      </div>
      <div class="concept-card">
        <h4>🔥 Phonon Generation</h4>
        <p>Light interacts with lattice vibrations, especially in infrared. Energy is transferred to atoms’ oscillations, producing heat. This explains why some materials absorb IR strongly but are transparent in the visible range.</p>
      </div>
      <div class="concept-card">
        <h4>⚛️ Impurity & Defect Absorption</h4>
        <p>Impurities, dopants, and defects introduce additional energy levels, allowing photons of otherwise non-absorbed energies to be absorbed. This mechanism governs colored gemstones, doped glasses, and semiconductors.</p>
      </div>
      <div class="concept-card">
        <h4>📡 Free Carrier Absorption</h4>
        <p>In metals and doped semiconductors, free electrons absorb photons by gaining kinetic energy. This is why metals are shiny yet opaque and why they heat quickly under sunlight.</p>
      </div>
    </div>

    <h3>Beer–Lambert Law</h3>
    <p>The decrease in light intensity through an absorbing medium is described mathematically by the Beer–Lambert Law:</p>
    <p class="equation"><strong>I = I₀ e<sup>−βx</sup></strong></p>
    <ul class="styled-list">
      <li><strong>I₀</strong> — incident light intensity</li>
      <li><strong>I</strong> — transmitted intensity after traveling distance x</li>
      <li><strong>β</strong> — absorption coefficient (material- and wavelength-dependent)</li>
      <li><strong>x</strong> — thickness of the material</li>
    </ul>

    <div class="highlight-box">
      <h4>Absorption Coefficient</h4>
      <p>The absorption coefficient β quantifies how strongly a material absorbs light at a given wavelength. High β → strong absorption over short distances. Low β → material appears transparent.</p>
    </div>

    <h3>Wavelength Dependence</h3>
    <p>Absorption varies strongly with wavelength due to the energy-level structure of materials. This wavelength dependence explains phenomena such as color, selective transparency, and UV protection:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🌈 Visible Light</h4>
        <p>Determines the color of objects. A red material absorbs green and blue light but transmits red light.</p>
      </div>
      <div class="concept-card">
        <h4>☀️ UV Light</h4>
        <p>Absorbed by ozone, sunscreens, and many polymers, preventing it from reaching living tissue.</p>
      </div>
      <div class="concept-card">
        <h4>🔥 Infrared</h4>
        <p>Absorbed by water, CO₂, and many organic materials, producing heating effects. Used in thermal cameras and IR spectroscopy.</p>
      </div>
    </div>

    <h3>Material Examples</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>⚙️ Metals</h4>
        <p>Strong absorption due to free electrons over a wide wavelength range. Metals appear shiny because absorption is accompanied by reflection of unabsorbed wavelengths.</p>
      </div>
      <div class="concept-card">
        <h4>📦 Insulators</h4>
        <p>Large band gaps → transparent to visible light. Absorb UV photons and IR photons via phonons.</p>
      </div>
      <div class="concept-card">
        <h4>💻 Semiconductors</h4>
        <p>Selective absorption based on band gap. Silicon absorbs visible and near-IR, transparent to longer IR. Crucial for photovoltaics, photodetectors, and optoelectronic devices.</p>
      </div>
    </div>

    <h3>Factors Affecting Absorption</h3>
    <ul class="styled-list">
      <li><strong>Thickness:</strong> Thicker materials absorb more light according to Beer-Lambert Law.</li>
      <li><strong>Wavelength:</strong> Strongly wavelength-dependent due to electronic or vibrational resonances.</li>
      <li><strong>Temperature:</strong> Can modify band gaps and lattice vibrations, slightly changing absorption.</li>
      <li><strong>Impurities:</strong> Introduce extra absorption bands and colors.</li>
      <li><strong>Surface coatings:</strong> Anti-reflective or absorptive coatings enhance or reduce absorption for specific wavelengths.</li>
    </ul>

    <h3>Real-World Examples of Absorption</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>☀️ Solar Panels</h4>
        <p>Semiconductor materials absorb sunlight efficiently to generate electricity.</p>
      </div>
      <div class="concept-card">
        <h4>🌡️ Thermal Materials</h4>
        <p>Black paints and carbon materials absorb light to convert it into heat for solar thermal applications.</p>
      </div>
      <div class="concept-card">
        <h4>🕶️ Sunglasses & Filters</h4>
        <p>Selective absorption blocks harmful UV light while transmitting visible light.</p>
      </div>
      <div class="concept-card">
        <h4>📡 Optical Sensors</h4>
        <p>Absorption by specific materials enables photodetectors and spectroscopy devices to measure light intensity and wavelength.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Absorption is a critical phenomenon that governs how light interacts with materials. It arises from electronic transitions, lattice vibrations, impurity states, and free carriers. By understanding absorption, scientists and engineers can control material transparency, color, and energy conversion in applications ranging from solar cells to optical coatings and sensors.</p>
    </div>
  `
},
{
  id: "sec-21-8",
  number: "21.8",
  title: "Transmission",
  content: `
    <p>Transmission is the process by which light passes through a material without being absorbed. The ability of a material to transmit light depends on its intrinsic absorption, scattering, and reflection properties. High transmission is crucial for applications such as windows, lenses, optical fibers, and transparent coatings.</p>

    <h3>The Physical Basis of Transmission</h3>
    <p>Transmission occurs when photons pass through a medium without interacting strongly with its electrons or lattice vibrations. At the microscopic level, light continues in the same general direction while only slightly deviating due to scattering or refraction.</p>

    <div class="highlight-box">
      <h4>Key Principle</h4>
      <p>For maximum transmission, a material should have minimal absorption (low β), low scattering, and controlled surface reflections.</p>
    </div>

    <h3>Transmission Requirements</h3>
    <p>Several conditions determine whether a material appears transparent and transmits light efficiently:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>✨ Low Absorption</h4>
        <p>Photon energies must be below the band gap for insulators or semiconductors. Otherwise, photons are absorbed and converted into heat or electronic excitations.</p>
      </div>
      <div class="concept-card">
        <h4>🎯 Minimal Scattering</h4>
        <p>Defects, grain boundaries, or inhomogeneities can scatter light in random directions, reducing effective transmission.</p>
      </div>
      <div class="concept-card">
        <h4>🔬 High Purity</h4>
        <p>Impurities can introduce localized absorption bands, reducing transmitted intensity and affecting color.</p>
      </div>
      <div class="concept-card">
        <h4>📏 Appropriate Thickness</h4>
        <p>Even small absorption or scattering can accumulate in thick materials, reducing overall transmission.</p>
      </div>
      <div class="concept-card">
        <h4>🧴 Smooth Surfaces</h4>
        <p>Polished, anti-reflection coated surfaces reduce reflection losses at material interfaces.</p>
      </div>
    </div>

    <h3>Transmission Quantification</h3>
    <p>The fraction of incident light that successfully passes through a material is called the transmission coefficient (T):</p>
    <p class="equation"><strong>T = I_transmitted / I_incident</strong></p>
    <p>Considering all light interactions, the sum of transmitted (T), reflected (R), and absorbed (A) fractions equals unity:</p>
    <p class="equation"><strong>T + R + A = 1</strong></p>

    <div class="highlight-box">
      <h4>Interpretation</h4>
      <p>High T requires minimizing both R and A. This principle underpins optical design for lenses, windows, displays, and fiber optics.</p>
    </div>

    <h3>Factors Affecting Transmission</h3>
    <ul class="styled-list">
      <li><strong>Scattering:</strong> Irregularities such as inclusions, pores, or grain boundaries scatter light, reducing transmission.</li>
      <li><strong>Reflection:</strong> Occurs at entry and exit surfaces; anti-reflective coatings can improve T.</li>
      <li><strong>Absorption:</strong> Even nominally transparent materials absorb some light, depending on wavelength and thickness.</li>
      <li><strong>Thickness:</strong> Longer path lengths increase probability of absorption or scattering events.</li>
      <li><strong>Wavelength:</strong> Transmission varies with photon energy; UV and IR may be blocked even if visible light passes.</li>
      <li><strong>Surface quality:</strong> Smooth, clean, polished surfaces improve transmission by reducing scattering and reflection.</li>
    </ul>

    <h3>Real-World Examples of Transmission</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>🌐 Optical Fibers</h4>
        <p>Require ultra-high transmission (>99.99% per meter) achieved with ultra-pure silica glass and minimal defects. Total internal reflection guides light efficiently over long distances.</p>
      </div>
      <div class="concept-card">
        <h4>🏠 Windows & Lenses</h4>
        <p>Glass and plastic windows are designed for high visible-light transmission while sometimes blocking UV or IR radiation for comfort and safety.</p>
      </div>
      <div class="concept-card">
        <h4>📱 Displays</h4>
        <p>High-transmission coatings and polarizers improve brightness and clarity of smartphone and monitor screens.</p>
      </div>
      <div class="concept-card">
        <h4>🔬 Microscopy</h4>
        <p>High-transparency lenses allow maximum light passage, enhancing resolution and image contrast.</p>
      </div>
    </div>

    <h3>Enhancing Transmission</h3>
    <ul class="styled-list">
      <li><strong>Anti-reflective coatings:</strong> Thin-film interference reduces reflection losses.</li>
      <li><strong>Purification:</strong> Removing impurities reduces absorption bands.</li>
      <li><strong>Polishing:</strong> Smooth surfaces decrease scattering.</li>
      <li><strong>Optimized thickness:</strong> Minimizes cumulative absorption and scattering.</li>
    </ul>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Transmission is a critical optical property determined by absorption, scattering, reflection, and material purity. High-transmission materials are essential for optical fibers, lenses, displays, and scientific instruments. Understanding the factors influencing transmission allows engineers to design materials and devices that maximize light throughput and performance.</p>
    </div>
  `
},
{
  id: "sec-21-9",
  number: "21.9",
  title: "Color",
  content: `
    <p>Color is a perceptual property of light arising from the interaction of visible wavelengths with matter. When light interacts with a material, certain wavelengths are absorbed while others are reflected or transmitted. The combination of these effects determines the color that reaches our eyes.</p>

    <h3>The Physical Origin of Color</h3>
    <p>The color of a material is determined by multiple physical mechanisms at the atomic, electronic, and structural level. These mechanisms can be intrinsic to the material or influenced by impurities, defects, or structural arrangements.</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🌈 Selective Absorption</h4>
        <p>Materials absorb specific wavelengths of light depending on the electronic transitions of their atoms or molecules. The wavelengths not absorbed are either reflected or transmitted, giving the material its perceived color.</p>
      </div>

      <div class="concept-card">
        <h4>🎨 Electronic Transitions</h4>
        <p>Photons with energies matching the energy gap between electron orbitals are absorbed, exciting electrons to higher states. This mechanism dominates in colored solutions, semiconductors, and transition-metal compounds.</p>
      </div>

      <div class="concept-card">
        <h4>💎 Impurities and Dopants</h4>
        <p>Trace elements introduce localized energy levels (color centers). For example, Cr³⁺ in Al₂O₃ (ruby) absorbs green and blue, leaving red light to be reflected.</p>
      </div>

      <div class="concept-card">
        <h4>📐 Structural Color</h4>
        <p>Some materials produce color via interference, diffraction, or scattering rather than absorption. Examples include opals, butterfly wings, and thin films like soap bubbles.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Complementary Colors</h4>
      <p>The perceived color is often the complement of the absorbed wavelengths. For example, if green light (~520 nm) is absorbed, the material appears red-violet to the observer.</p>
    </div>

    <h3>Visible Spectrum</h3>
    <p>The visible spectrum ranges from approximately 400 nm (violet) to 700 nm (red). Colors and their approximate wavelengths are:</p>
    <ul class="styled-list">
      <li><strong>Violet:</strong> 400–450 nm (highest energy)</li>
      <li><strong>Blue:</strong> 450–495 nm</li>
      <li><strong>Green:</strong> 495–570 nm</li>
      <li><strong>Yellow:</strong> 570–590 nm</li>
      <li><strong>Orange:</strong> 590–620 nm</li>
      <li><strong>Red:</strong> 620–700 nm (lowest energy)</li>
    </ul>

    <h3>Factors Affecting Color Perception</h3>
    <ul class="styled-list">
      <li><strong>Light source:</strong> The spectrum of illumination changes the perceived color.</li>
      <li><strong>Material thickness:</strong> Thin layers may appear different due to interference or partial transmission.</li>
      <li><strong>Surface texture:</strong> Matte or glossy surfaces scatter light differently, altering color intensity and saturation.</li>
      <li><strong>Viewing angle:</strong> Especially for structural colors, the apparent color can change with angle.</li>
    </ul>

    <h3>Real-World Examples of Color</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>💎 Ruby</h4>
        <p>Chromium (Cr³⁺) impurities in Al₂O₃ absorb green and blue light, leaving red light to be reflected. The result is the characteristic deep red color of rubies.</p>
      </div>
      <div class="concept-card">
        <h4>🟤 Copper</h4>
        <p>The electronic band structure absorbs blue and green light while reflecting red and yellow, giving copper its reddish-brown hue.</p>
      </div>
      <div class="concept-card">
        <h4>🟡 Gold</h4>
        <p>Relativistic effects in gold cause selective absorption of blue light, reflecting yellowish wavelengths, which explains gold’s characteristic color.</p>
      </div>
      <div class="concept-card">
        <h4>🦋 Butterfly Wings</h4>
        <p>Structural color from nanostructured scales causes interference, producing vivid, iridescent patterns without pigments.</p>
      </div>
    </div>

    <h3>Applications of Color</h3>
    <ul class="styled-list">
      <li><strong>Pigments and dyes:</strong> For paints, fabrics, and inks.</li>
      <li><strong>Optical filters:</strong> Selectively transmit or block wavelengths for sensors and cameras.</li>
      <li><strong>Display technologies:</strong> LCD, OLED, and LED screens rely on selective emission and absorption.</li>
      <li><strong>Structural coloration:</strong> Biomimetic applications inspired by butterfly wings, peacock feathers, and opals.</li>
    </ul>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Color is determined by selective absorption, electronic transitions, impurities, and structural effects. By understanding these mechanisms, scientists and engineers can manipulate color for pigments, coatings, displays, and advanced optical devices. Both material composition and microstructure play crucial roles in the perceived color.</p>
    </div>
  `
},
{
  id: "sec-21-10",
  number: "21.10",
  title: "Opacity and Translucency in Insulators",
  content: `
    <p>Insulators, when pure and defect-free, can be highly transparent. However, in real-world materials, internal features often scatter light, giving them opaque or translucent appearances. Understanding the factors that affect opacity is crucial for materials design in optics, lighting, and protective applications.</p>

    <h3>Causes of Opacity and Translucency</h3>
    <p>Light scattering inside an insulator is primarily responsible for translucency and opacity. The main mechanisms include:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>🔲 Grain Boundaries</h4>
        <p>Polycrystalline materials consist of many small crystals. Interfaces between these grains scatter light due to sudden changes in refractive index, causing translucency.</p>
      </div>
      <div class="concept-card">
        <h4>💨 Porosity</h4>
        <p>Pores or voids within the material act as microscopic lenses with different refractive indices, scattering light in multiple directions.</p>
      </div>
      <div class="concept-card">
        <h4>🎯 Inclusions</h4>
        <p>Embedded particles, second-phase inclusions, or impurities scatter light and reduce clarity. Even small concentrations can significantly affect transparency.</p>
      </div>
      <div class="concept-card">
        <h4>⚡ Surface Roughness</h4>
        <p>Microscopic irregularities on the surface lead to diffuse reflection and scattering, making smooth surfaces critical for optical applications.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Scattering vs. Absorption</h4>
      <p>Opacity can arise from two distinct mechanisms:</p>
      <ul>
        <li><strong>Scattering:</strong> Light passes through but is redirected, resulting in translucency. Examples: frosted glass, porcelain, diffusing ceramics.</li>
        <li><strong>Absorption:</strong> Light is converted into other forms (usually heat) and does not transmit, resulting in true opacity. Examples: dark plastics, colored glasses, metals.</li>
      </ul>
    </div>

    <h3>Strategies to Make Insulators Transparent</h3>
    <p>Advanced materials engineering can minimize scattering and enhance transparency:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>💎 Single Crystals</h4>
        <p>Eliminating grain boundaries removes a major source of scattering. Example: sapphire windows used in high-precision optics.</p>
      </div>
      <div class="concept-card">
        <h4>⚖️ Fine Grain Size</h4>
        <p>In polycrystalline materials, reducing grains below the wavelength of visible light minimizes scattering, making ceramics appear transparent.</p>
      </div>
      <div class="concept-card">
        <h4>🔗 Index Matching</h4>
        <p>Ensuring the second-phase particles have a refractive index similar to the matrix reduces internal scattering. Example: optical glasses with dopants engineered for minimal haze.</p>
      </div>
      <div class="concept-card">
        <h4>🏭 Dense Materials</h4>
        <p>Reducing porosity during processing ensures light is less likely to scatter, improving clarity. Example: sintering techniques for transparent ceramics.</p>
      </div>
    </div>

    <h3>Real-World Applications</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>💡 Translucent Ceramics</h4>
        <p>Used for lighting applications, such as alumina lamp envelopes, which diffuse light uniformly while maintaining mechanical strength.</p>
      </div>
      <div class="concept-card">
        <h4>🌫️ Opal Glass</h4>
        <p>Engineered scattering produces soft, diffuse light. Common in lamps, decorative panels, and architectural elements.</p>
      </div>
      <div class="concept-card">
        <h4>🔬 Transparent Ceramics</h4>
        <p>High-performance applications like laser windows, armor, or infrared-transparent domes require elimination of grain boundaries and porosity.</p>
      </div>
      <div class="concept-card">
        <h4>🖼️ Optical Lenses and Screens</h4>
        <p>High-quality insulators such as fused silica or alumina are polished and processed to minimize scattering for precise imaging.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Opacity and translucency in insulators arise mainly from scattering at grain boundaries, pores, inclusions, and surface roughness. By controlling crystal structure, grain size, refractive index matching, and porosity, engineers can design materials ranging from fully transparent to diffusely translucent, enabling applications in optics, lighting, and protective devices.</p>
    </div>
  `
},
{
  id: "sec-21-11",
  number: "21.11",
  title: "Luminescence",
  content: `
    <p>Luminescence is the emission of light by a material without relying solely on heat (non-thermal emission). It occurs when electrons in excited states release energy in the form of photons as they return to lower energy levels. This process differs from incandescence, where light is produced by heating a material.</p>

    <h3>Types of Luminescence</h3>
    <p>Luminescence can arise from a variety of excitation sources. Different types are classified based on the energy input and timing of emission:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>💡 Fluorescence</h4>
        <p>Immediate light emission occurs within nanoseconds (<10⁻⁸ s) after the excitation source is removed. Common in organic dyes, minerals, and fluorescent lamps.</p>
      </div>
      <div class="concept-card">
        <h4>🌟 Phosphorescence</h4>
        <p>Delayed emission continues long after excitation stops, ranging from milliseconds to hours. This is due to electron trapping in metastable states, seen in glow-in-the-dark materials.</p>
      </div>
      <div class="concept-card">
        <h4>⚡ Electroluminescence</h4>
        <p>Light is produced through electrical excitation, as in LEDs and electroluminescent panels. Electrons gain energy from an electric field and recombine with holes, emitting photons.</p>
      </div>
      <div class="concept-card">
        <h4>🔬 Chemiluminescence</h4>
        <p>Light arises from chemical reactions without external illumination. Example: glow sticks, firefly bioluminescence, and certain enzymatic reactions in biology.</p>
      </div>
      <div class="concept-card">
        <h4>🌞 Photoluminescence</h4>
        <p>Absorption of photons excites electrons, which then emit light upon relaxation. Fluorescence and phosphorescence are subtypes of photoluminescence.</p>
      </div>
      <div class="concept-card">
        <h4>🔌 Cathodoluminescence</h4>
        <p>Electron beam excitation causes light emission, widely used in CRT screens and electron microscopy imaging of materials.</p>
      </div>
    </div>

    <h3>The Luminescence Process</h3>
    <p>The general sequence of luminescence involves three key steps:</p>
    <ol>
      <li><strong>Excitation:</strong> The material absorbs energy from photons, electrons, chemical reactions, or electrical fields, promoting electrons to higher energy levels.</li>
      <li><strong>Non-Radiative Relaxation:</strong> Excited electrons may lose part of their energy as heat before photon emission.</li>
      <li><strong>Emission:</strong> Electrons return to lower energy levels or the ground state, releasing photons that we perceive as light.</li>
    </ol>

    <div class="highlight-box">
      <h4>Stokes Shift</h4>
      <p>Emitted light generally has a longer wavelength (lower energy) than the absorbed energy because some energy is dissipated as heat during relaxation. For example, UV excitation often produces visible emission.</p>
    </div>

    <h3>Factors Affecting Luminescence</h3>
    <ul class="styled-list">
      <li><strong>Energy gap:</strong> The difference between excited and ground states determines emission wavelength.</li>
      <li><strong>Traps and defects:</strong> Electron traps in phosphorescent materials extend emission duration.</li>
      <li><strong>Temperature:</strong> Higher temperatures can increase non-radiative losses, reducing luminescence efficiency.</li>
      <li><strong>Concentration quenching:</strong> High dopant concentrations can lead to energy transfer between luminescent centers, decreasing brightness.</li>
      <li><strong>Excitation source:</strong> UV, visible light, electric field, or chemical energy influences the type and efficiency of luminescence.</li>
    </ul>

    <h3>Real-World Applications</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>💡 Fluorescent Lamps</h4>
        <p>Phosphors absorb UV light generated by mercury discharge and re-emit visible light efficiently.</p>
      </div>
      <div class="concept-card">
        <h4>📺 Screens and Displays</h4>
        <p>Phosphors convert electron beam energy into visible light in CRTs and plasma displays. LEDs use electroluminescence for direct emission.</p>
      </div>
      <div class="concept-card">
        <h4>🛡️ Security Features</h4>
        <p>UV-fluorescent inks are used in banknotes, passports, and identity cards to prevent counterfeiting.</p>
      </div>
      <div class="concept-card">
        <h4>🔬 Biological Markers</h4>
        <p>Fluorescent dyes and proteins (e.g., GFP) enable visualization and tracking of cells, tissues, and biomolecules in microscopy and medical diagnostics.</p>
      </div>
      <div class="concept-card">
        <h4>🎨 Decorative and Emergency Lighting</h4>
        <p>Glow-in-the-dark paints, watch dials, and exit signs rely on phosphorescence for long-lasting emission without power.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Luminescence is a versatile phenomenon where materials emit light without relying on heat. By manipulating excitation sources, electronic states, and defects, engineers can design materials for illumination, display technology, security, biological imaging, and decorative applications. The study of luminescence bridges physics, chemistry, materials science, and biology.</p>
    </div>
  `
},
    {
  id: "sec-21-12",
  number: "21.12",
  title: "Photoconductivity",
  content: `
    <p>Photoconductivity is the phenomenon in which a material’s electrical conductivity increases when it is exposed to light. This occurs because photons with sufficient energy generate additional charge carriers (electrons and holes) in semiconductors or insulators. Photoconductivity forms the basis for numerous optical and optoelectronic devices, including photodetectors, solar cells, and imaging systems.</p>

    <h3>Mechanism of Photoconductivity</h3>
    <p>The process of photoconductivity can be understood in a sequence of steps:</p>

    <div class="concept-grid">
      <div class="concept-card">
        <h4>⚡ Photon Absorption</h4>
        <p>Incident photons with energy equal to or greater than the material's band gap are absorbed, promoting electrons from the valence band to the conduction band.</p>
      </div>
      <div class="concept-card">
        <h4>🎯 Carrier Generation</h4>
        <p>Excitation produces electron-hole pairs. Free electrons contribute to conduction, while holes act as positive charge carriers.</p>
      </div>
      <div class="concept-card">
        <h4>📊 Conductivity Increase</h4>
        <p>The additional charge carriers reduce the material’s electrical resistance, increasing current under applied voltage.</p>
      </div>
      <div class="concept-card">
        <h4>🔄 Carrier Lifetime</h4>
        <p>The photoconductive state persists until electrons and holes recombine. Longer carrier lifetimes lead to stronger and more sustained conductivity changes.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Spectral Response</h4>
      <p>Materials exhibit photoconductivity only for photons with energy greater than their band gap. This allows selective sensitivity to certain wavelengths:</p>
      <ul>
        <li><strong>Silicon (Si):</strong> Sensitive to visible light (400–1100 nm)</li>
        <li><strong>Germanium (Ge):</strong> Sensitive to near-infrared (900–1800 nm)</li>
        <li><strong>Gallium Nitride (GaN):</strong> Sensitive to UV light (200–400 nm)</li>
      </ul>
      <p>By choosing appropriate materials, photoconductive devices can detect specific regions of the electromagnetic spectrum.</p>
    </div>

    <h3>Key Parameters of Photoconductive Materials</h3>
    <ul class="styled-list">
      <li><strong>Quantum Efficiency (η):</strong> The number of electron-hole pairs generated per incident photon. Higher values indicate more efficient conversion of light to charge carriers.</li>
      <li><strong>Responsivity (R):</strong> Photocurrent produced per unit of incident optical power, typically measured in A/W. Determines sensitivity of the device.</li>
      <li><strong>Response Time (τ):</strong> The time required for conductivity to change in response to illumination. Faster response times are essential for high-speed photodetectors.</li>
      <li><strong>Dark Current:</strong> The small current present in the absence of light. Lower dark current improves signal-to-noise ratio.</li>
      <li><strong>Linearity:</strong> How proportional the photocurrent is to incident light intensity. Linear response simplifies calibration and measurement.</li>
    </ul>

    <h3>Factors Affecting Photoconductivity</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>🔹 Material Band Gap</h4>
        <p>Determines the threshold photon energy required to generate carriers. Narrow band gaps allow infrared sensitivity; wide band gaps allow UV sensitivity.</p>
      </div>
      <div class="concept-card">
        <h4>🔹 Carrier Lifetime and Mobility</h4>
        <p>High carrier mobility and long lifetime enhance photoconductive gain and device efficiency.</p>
      </div>
      <div class="concept-card">
        <h4>🔹 Temperature</h4>
        <p>Increased temperature can increase intrinsic carrier concentration but also enhance recombination rates, affecting sensitivity.</p>
      </div>
      <div class="concept-card">
        <h4>🔹 Impurities and Defects</h4>
        <p>Defects can trap carriers, increasing or decreasing photoconductivity depending on material and application.</p>
      </div>
    </div>

    <h3>Applications of Photoconductivity</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>☀️ Solar Cells</h4>
        <p>Photoconductivity is the basis of photovoltaic devices, where light generates carriers that are collected as electrical current.</p>
      </div>
      <div class="concept-card">
        <h4>📡 Photodetectors</h4>
        <p>Used in cameras, light meters, optical communication receivers, and environmental sensors for detecting light intensity or wavelength.</p>
      </div>
      <div class="concept-card">
        <h4>📷 Image Sensors</h4>
        <p>CCD and CMOS sensors convert incident light into electrical signals in digital cameras and scientific imaging devices.</p>
      </div>
      <div class="concept-card">
        <h4>💡 Light Meters and Exposure Control</h4>
        <p>Photoconductive cells regulate exposure in photography and control lighting systems automatically.</p>
      </div>
      <div class="concept-card">
        <h4>⚡ Optical Switches</h4>
        <p>Fast photoconductive materials are used in high-speed optical communication and modulators.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Photoconductivity arises from light-induced generation of charge carriers, leading to increased electrical conductivity. Its efficiency depends on material band gap, carrier lifetime, mobility, and purity. By tailoring these properties, engineers develop devices for solar energy conversion, light detection, imaging, and high-speed optical communication.</p>
    </div>
  `
},
      {
  id: "sec-21-13",
  number: "21.13",
  title: "Lasers",
  content: `
    <p>LASER (Light Amplification by Stimulated Emission of Radiation) devices produce highly coherent, monochromatic, and directional light through the process of stimulated emission. Lasers are unique in that they emit light with well-defined phase, frequency, and direction, making them indispensable in science, industry, medicine, and communications.</p>

    <h3>Operating Principles</h3>
    <p>Lasers rely on three fundamental principles:</p>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>⚡ Population Inversion</h4>
        <p>A condition in which more atoms or molecules occupy an excited energy state than the ground state. This is necessary for net stimulated emission to occur.</p>
      </div>
      <div class="concept-card">
        <h4>🎯 Stimulated Emission</h4>
        <p>An incoming photon induces an excited atom to emit an identical photon, matching phase, frequency, and direction, amplifying the light.</p>
      </div>
      <div class="concept-card">
        <h4>🔄 Optical Feedback</h4>
        <p>Mirrors form a resonant optical cavity, allowing photons to pass multiple times through the gain medium, amplifying the light with each pass.</p>
      </div>
      <div class="concept-card">
        <h4>💡 Coherent Output</h4>
        <p>The resulting laser beam is highly directional, with photons having the same wavelength and phase.</p>
      </div>
    </div>

    <h3>Laser Components</h3>
    <ul class="styled-list">
      <li><strong>Gain medium:</strong> Material capable of population inversion and stimulated emission (gas, solid crystal, semiconductor, or liquid dye).</li>
      <li><strong>Pump source:</strong> Supplies energy to the gain medium to achieve population inversion (electrical discharge, optical pumping, chemical reaction).</li>
      <li><strong>Optical cavity:</strong> Two mirrors (one fully reflective, one partially transparent) form a resonator that reinforces specific wavelengths and directions of light.</li>
      <li><strong>Output coupler:</strong> Partially transparent mirror that allows a portion of the amplified light to exit as the usable laser beam.</li>
    </ul>

    <div class="highlight-box">
      <h4>Stimulated vs. Spontaneous Emission</h4>
      <p>In spontaneous emission, atoms emit photons randomly in time, direction, and phase. In stimulated emission, an incoming photon triggers an identical photon emission, producing coherent light. This is the core principle of laser operation.</p>
    </div>

    <h3>Types of Lasers</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>🧪 Gas Lasers</h4>
        <p>Examples: HeNe (632.8 nm), CO₂ (10.6 μm), Argon ion (multiple visible wavelengths). Gas lasers have stable output and are widely used in laboratories and industrial applications.</p>
      </div>
      <div class="concept-card">
        <h4>💎 Solid-State Lasers</h4>
        <p>Examples: Ruby (694 nm), Nd:YAG (1064 nm), Ti:Sapphire (tunable 650–1100 nm). Solid-state lasers are versatile, offering high power and tunability.</p>
      </div>
      <div class="concept-card">
        <h4>💻 Semiconductor Lasers</h4>
        <p>Diode lasers and VCSELs emit directly from a semiconductor junction. They are compact, energy-efficient, and used in communications, laser pointers, and optical storage.</p>
      </div>
      <div class="concept-card">
        <h4>🧵 Fiber Lasers</h4>
        <p>Rare-earth doped optical fibers act as the gain medium. Fiber lasers provide high beam quality, excellent efficiency, and are widely used in industrial cutting, telecommunications, and medical applications.</p>
      </div>
      <div class="concept-card">
        <h4>🎨 Dye Lasers</h4>
        <p>Liquid dyes in solution act as the gain medium. They are tunable across a wide wavelength range, useful in spectroscopy and research requiring variable wavelengths.</p>
      </div>
    </div>

    <h3>Applications of Lasers</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>🏭 Industrial</h4>
        <p>Cutting, welding, marking, 3D printing, and material processing with high precision.</p>
      </div>
      <div class="concept-card">
        <h4>🩺 Medical</h4>
        <p>Surgical procedures, vision correction (LASIK), phototherapy, and diagnostic imaging.</p>
      </div>
      <div class="concept-card">
        <h4>📡 Communications</h4>
        <p>Fiber optic transmitters, free-space optical communication, and laser-based data transmission.</p>
      </div>
      <div class="concept-card">
        <h4>🔬 Scientific Research</h4>
        <p>High-resolution spectroscopy, microscopy, interferometry, atomic clocks, and precision measurements.</p>
      </div>
      <div class="concept-card">
        <h4>🎯 Consumer Devices</h4>
        <p>Barcode scanners, laser pointers, CD/DVD/Blu-ray optical storage, and laser projectors.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Lasers operate through stimulated emission in a gain medium within an optical cavity, producing coherent, monochromatic, and directional light. They are classified by gain medium and application, with uses spanning industrial, medical, communications, scientific, and consumer technologies. Their precise and powerful light output has transformed modern technology.</p>
    </div>
  `
},
     {
  id: "sec-21-14",
  number: "21.14",
  title: "Optical Fibers in Communications",
  content: `
    <p>Optical fibers are thin, flexible strands of ultra-pure glass or plastic that transmit information as light pulses. They have transformed telecommunications by providing high-speed, long-distance, and high-bandwidth data transmission, far exceeding the performance of traditional copper cables.</p>

    <h3>Fiber Structure</h3>
    <p>An optical fiber consists of multiple layers designed for light guidance, mechanical protection, and durability:</p>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>🎯 Core</h4>
        <p>The central region with the highest refractive index. It guides light by total internal reflection and defines the fiber’s mode structure.</p>
      </div>
      <div class="concept-card">
        <h4>🔄 Cladding</h4>
        <p>Surrounds the core with a slightly lower refractive index. Maintains light confinement within the core through total internal reflection.</p>
      </div>
      <div class="concept-card">
        <h4>🛡️ Coating</h4>
        <p>A polymer layer that protects the fiber from scratches, moisture, and chemical damage.</p>
      </div>
      <div class="concept-card">
        <h4>💪 Buffer</h4>
        <p>Additional layers providing mechanical strength, flexibility, and resistance to environmental stress.</p>
      </div>
    </div>

    <h3>Light Guidance - Total Internal Reflection</h3>
    <p>Light is confined in the core because it strikes the core-cladding boundary at angles exceeding the critical angle. This phenomenon is called total internal reflection:</p>
    <p><strong>θ_c = sin⁻¹(n₂/n₁)</strong></p>
    <p>Where n₁ is the refractive index of the core and n₂ is the refractive index of the cladding (n₁ > n₂).</p>
    <div class="highlight-box">
      <h4>Ultra-Low Loss</h4>
      <p>Modern optical fibers have attenuation less than 0.2 dB/km at 1550 nm. This allows light signals to travel over 50 km while retaining more than 50% of their original power, far outperforming copper cables.</p>
    </div>

    <h3>Types of Optical Fibers</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>🌐 Single-Mode Fiber</h4>
        <p>Core diameter ~9 μm, supports only one light path, ideal for long-distance communication and extremely high bandwidth.</p>
      </div>
      <div class="concept-card">
        <h4>🌀 Multi-Mode Fiber</h4>
        <p>Core diameter ~50–62.5 μm, allows multiple light paths. Used for shorter distances and lower cost applications.</p>
      </div>
      <div class="concept-card">
        <h4>📏 Step-Index Fiber</h4>
        <p>Core and cladding have an abrupt refractive index change, simple design but higher modal dispersion in multi-mode fibers.</p>
      </div>
      <div class="concept-card">
        <h4>🎚️ Graded-Index Fiber</h4>
        <p>Core refractive index gradually decreases from center to edge, reducing modal dispersion and improving bandwidth for multi-mode fibers.</p>
      </div>
    </div>

    <h3>Advantages Over Copper</h3>
    <ul class="styled-list">
      <li><strong>Bandwidth:</strong> Terabits per second possible, compared to gigabits for copper.</li>
      <li><strong>Distance:</strong> Signals travel tens of kilometers without repeaters or amplification.</li>
      <li><strong>Immunity to Interference:</strong> Not affected by electromagnetic interference or crosstalk.</li>
      <li><strong>Size and Weight:</strong> Optical fibers are smaller and lighter than copper cables, ideal for dense installations.</li>
      <li><strong>Security:</strong> Tapping optical fibers is difficult without detection, enhancing communication security.</li>
    </ul>

    <h3>Applications</h3>
    <div class="concept-grid">
      <div class="concept-card">
        <h4>📡 Telecommunications</h4>
        <p>Internet backbone, long-distance telephone lines, and undersea fiber optic cables.</p>
      </div>
      <div class="concept-card">
        <h4>💾 Data Centers</h4>
        <p>High-speed interconnects between servers, storage systems, and switches.</p>
      </div>
      <div class="concept-card">
        <h4>🩺 Medical</h4>
        <p>Endoscopes, surgical illumination, and delivery of laser energy in procedures.</p>
      </div>
      <div class="concept-card">
        <h4>🔬 Sensing</h4>
        <p>Fiber optic sensors for temperature, pressure, strain, vibration, and chemical detection.</p>
      </div>
      <div class="concept-card">
        <h4>🏭 Industrial</h4>
        <p>Remote monitoring and communication in harsh environments or explosive atmospheres.</p>
      </div>
    </div>

    <div class="highlight-box">
      <h4>Summary</h4>
      <p>Optical fibers are essential for modern communications due to their high bandwidth, low loss, immunity to interference, and small size. With single-mode and multi-mode designs, as well as step-index and graded-index profiles, they meet the needs of telecommunications, data centers, medical, sensing, and industrial applications worldwide.</p>
    </div>
  `
}
    ];

    const quizData = {
      "sec-21-1": [
        {
          question: "What is the primary purpose of studying optical properties in materials science?",
          options: [
            "To understand chemical reactions",
            "To design materials with specific light interaction characteristics",
            "To measure material hardness",
            "To determine melting points"
          ],
          correct: 1
        },
        {
          question: "Optical properties are fundamentally determined by:",
          options: [
            "Material density",
            "Crystal structure only",
            "Electronic structure and electron-photon interactions",
            "Surface roughness"
          ],
          correct: 2
        }
      ],
      "sec-21-2": [
        {
          question: "What is the relationship between wavelength (λ), frequency (ν), and velocity (c) of light?",
          options: [
            "c = λ + ν",
            "c = λν",
            "c = λ/ν",
            "c = ν/λ"
          ],
          correct: 1
        },
        {
          question: "Which has higher energy?",
          options: [
            "Long wavelength light",
            "Low frequency light",
            "Short wavelength light",
            "All light has equal energy"
          ],
          correct: 2
        }
      ],
      "sec-21-3": [
        {
          question: "Which is NOT a primary interaction when light encounters a solid?",
          options: [
            "Reflection",
            "Refraction",
            "Diffusion",
            "Absorption"
          ],
          correct: 2
        },
        {
          question: "A material that allows partial transmission with scattering is:",
          options: [
            "Transparent",
            "Translucent",
            "Opaque",
            "Reflective"
          ],
          correct: 1
        }
      ],
      "sec-21-4": [
        {
          question: "For a photon to be absorbed by an electron across a band gap:",
          options: [
            "Photon energy must be less than band gap",
            "Photon energy must equal band gap",
            "Photon energy must be greater than or equal to band gap",
            "Band gap doesn't affect absorption"
          ],
          correct: 2
        }
      ],
      "sec-21-5": [
        {
          question: "The index of refraction (n) is calculated as:",
          options: [
            "n = v / c",
            "n = c / v",
            "n = c × v",
            "n = c + v"
          ],
          correct: 1
        },
        {
          question: "What phenomenon keeps light confined in optical fiber cores?",
          options: [
            "Absorption",
            "Diffraction",
            "Total internal reflection",
            "Polarization"
          ],
          correct: 2
        }
      ],
      "sec-21-6": [
        {
          question: "Why are metals highly reflective?",
          options: [
            "They have rough surfaces",
            "Free electrons can re-radiate absorbed light",
            "They have low density",
            "They absorb all wavelengths"
          ],
          correct: 1
        }
      ],
      "sec-21-7": [
        {
          question: "According to the Beer-Lambert Law, light intensity through an absorbing material:",
          options: [
            "Increases linearly",
            "Remains constant",
            "Decreases exponentially",
            "Decreases linearly"
          ],
          correct: 2
        }
      ],
      "sec-21-8": [
        {
          question: "For high transmission, a material should have:",
          options: [
            "High absorption and many defects",
            "Low absorption and minimal scattering",
            "High reflectivity",
            "Many grain boundaries"
          ],
          correct: 1
        }
      ],
      "sec-21-9": [
        {
          question: "If a material absorbs green light, what color does it appear?",
          options: [
            "Green",
            "Red-violet (complementary color)",
            "Blue",
            "Yellow"
          ],
          correct: 1
        }
      ],
      "sec-21-10": [
        {
          question: "What causes opacity in otherwise transparent insulators?",
          options: [
            "Perfect crystal structure",
            "Grain boundaries and porosity causing scattering",
            "High purity",
            "Low refractive index"
          ],
          correct: 1
        }
      ],
      "sec-21-11": [
        {
          question: "What is the Stokes Shift?",
          options: [
            "Emitted light has longer wavelength than absorbed light",
            "Emitted light has shorter wavelength than absorbed light",
            "Emitted and absorbed light have the same wavelength",
            "No relationship between absorbed and emitted light"
          ],
          correct: 0
        }
      ],
      "sec-21-12": [
        {
          question: "Photoconductivity occurs when:",
          options: [
            "Material is heated",
            "Photons generate additional charge carriers",
            "Material is cooled",
            "Material is placed in darkness"
          ],
          correct: 1
        }
      ],
      "sec-21-13": [
        {
          question: "What makes laser light unique?",
          options: [
            "It's incoherent and random",
            "It has multiple wavelengths",
            "It's coherent, monochromatic, and directional",
            "It's always invisible"
          ],
          correct: 2
        }
      ],
      "sec-21-14": [
        {
          question: "Modern optical fibers have attenuation of:",
          options: [
            "< 0.2 dB/km at 1550 nm",
            "> 10 dB/km",
            "50 dB/km",
            "100 dB/km"
          ],
          correct: 0
        },
        {
          question: "Why do optical fibers use a core with higher refractive index than cladding?",
          options: [
            "To increase absorption",
            "To enable total internal reflection",
            "To reduce cost",
            "To increase weight"
          ],
          correct: 1
        }
      ]
    };

    let currentSection = sections[0];
    let userData = [];
    let initialized = false;
    let currentQuizAnswers = {};

    const dataHandler = {
      onDataChanged(data) {
        userData = data;
        updateProgressDisplay();
        updateSectionList();
      }
    };

    async function initializeApp() {
      const result = await window.dataSdk.init(dataHandler);
      if (!result.isOk) {
        console.error("Failed to initialize data SDK");
        return;
      }
      initialized = true;
      renderSectionList();
      loadSection(sections[0]);
    }

    function getUserDataForSection(sectionId) {
      return userData.find(record => record.section_id === sectionId);
    }

    function updateProgressDisplay() {
      if (!initialized) return;

      const completedSections = userData.filter(record => record.completed);
      const completedCount = completedSections.length;
      const totalCount = sections.length;
      const progressPercent = (completedCount / totalCount) * 100;

      document.getElementById('progress-bar').style.width = progressPercent + '%';
      document.getElementById('progress-text').textContent = 
        `${completedCount} of ${totalCount} sections completed`;
    }

    function renderSectionList() {
      const listContainer = document.getElementById('section-list');
      listContainer.innerHTML = '';

      sections.forEach(section => {
        const li = document.createElement('li');
        li.className = 'section-item';
        
        const sectionData = getUserDataForSection(section.id);
        if (sectionData && sectionData.completed) {
          li.classList.add('completed');
        }
        
        if (section.id === currentSection.id) {
          li.classList.add('active');
        }

        const numberSpan = document.createElement('span');
        numberSpan.className = 'section-number';
        numberSpan.textContent = section.number;

        const titleSpan = document.createElement('span');
        titleSpan.textContent = section.title;

        li.appendChild(numberSpan);
        li.appendChild(titleSpan);

        if (sectionData && sectionData.completed) {
          const checkSpan = document.createElement('span');
          checkSpan.className = 'check-icon';
          checkSpan.textContent = '✓';
          li.appendChild(checkSpan);
        }

        li.addEventListener('click', () => loadSection(section));
        listContainer.appendChild(li);
      });
    }

    function updateSectionList() {
      const items = document.querySelectorAll('.section-item');
      items.forEach((item, index) => {
        const section = sections[index];
        const sectionData = getUserDataForSection(section.id);
        
        item.classList.remove('completed', 'active');
        
        if (sectionData && sectionData.completed) {
          item.classList.add('completed');
          
          const existingCheck = item.querySelector('.check-icon');
          if (!existingCheck) {
            const checkSpan = document.createElement('span');
            checkSpan.className = 'check-icon';
            checkSpan.textContent = '✓';
            item.appendChild(checkSpan);
          }
        } else {
          const existingCheck = item.querySelector('.check-icon');
          if (existingCheck) {
            existingCheck.remove();
          }
        }
        
        if (section.id === currentSection.id) {
          item.classList.add('active');
        }
      });
    }

    function loadSection(section) {
      currentSection = section;
      
      document.getElementById('content-area').style.display = 'block';
      document.getElementById('quiz-area').classList.remove('active');
      
      document.getElementById('section-title').textContent = section.title;
      document.getElementById('section-number').textContent = `Section ${section.number}`;
      document.getElementById('section-content').innerHTML = section.content;
      
      const sectionData = getUserDataForSection(section.id);
      const completeBtn = document.getElementById('complete-btn');
      
      if (sectionData && sectionData.completed) {
        completeBtn.textContent = '✓ Completed';
        completeBtn.classList.add('completed');
      } else {
        completeBtn.textContent = defaultConfig.complete_button;
        completeBtn.classList.remove('completed');
      }
      
      updateSectionList();
    }

    async function markSectionComplete() {
      const sectionData = getUserDataForSection(currentSection.id);
      
      if (sectionData && sectionData.completed) {
        return;
      }

      const completeBtn = document.getElementById('complete-btn');
      completeBtn.disabled = true;
      completeBtn.textContent = 'Saving...';

      if (sectionData) {
        sectionData.completed = true;
        sectionData.last_accessed = new Date().toISOString();
        await window.dataSdk.update(sectionData);
      } else {
        await window.dataSdk.create({
          section_id: currentSection.id,
          completed: true,
          quiz_score: 0,
          notes: "",
          last_accessed: new Date().toISOString()
        });
      }

      completeBtn.disabled = false;
    }

    function showQuiz() {
      const quizQuestions = quizData[currentSection.id];
      
      if (!quizQuestions || quizQuestions.length === 0) {
        alert("Quiz not available for this section yet.");
        return;
      }

      document.getElementById('content-area').style.display = 'none';
      document.getElementById('quiz-area').classList.add('active');
      
      currentQuizAnswers = {};
      
      const questionsContainer = document.getElementById('quiz-questions');
      questionsContainer.innerHTML = '';
      
      quizQuestions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        const questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionCard.appendChild(questionText);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        q.options.forEach((option, optIndex) => {
          const optionDiv = document.createElement('div');
          optionDiv.className = 'option';
          optionDiv.textContent = option;
          optionDiv.dataset.questionIndex = index;
          optionDiv.dataset.optionIndex = optIndex;
          
          optionDiv.addEventListener('click', function() {
            const qIndex = parseInt(this.dataset.questionIndex);
            const siblings = this.parentElement.querySelectorAll('.option');
            siblings.forEach(sib => sib.classList.remove('selected'));
            this.classList.add('selected');
            currentQuizAnswers[qIndex] = parseInt(this.dataset.optionIndex);
          });
          
          optionsDiv.appendChild(optionDiv);
        });
        
        questionCard.appendChild(optionsDiv);
        questionsContainer.appendChild(questionCard);
      });
      
      document.getElementById('submit-quiz').style.display = 'block';
      document.getElementById('back-to-content').style.display = 'none';
      document.getElementById('quiz-result').classList.remove('show');
    }

    async function submitQuiz() {
      const quizQuestions = quizData[currentSection.id];
      let correctCount = 0;
      
      quizQuestions.forEach((q, index) => {
        const userAnswer = currentQuizAnswers[index];
        const options = document.querySelectorAll(`[data-question-index="${index}"]`);
        
        options.forEach((option, optIndex) => {
          option.classList.remove('selected');
          if (optIndex === q.correct) {
            option.classList.add('correct');
          } else if (optIndex === userAnswer) {
            option.classList.add('incorrect');
          }
        });
        
        if (userAnswer === q.correct) {
          correctCount++;
        }
      });
      
      const scorePercent = Math.round((correctCount / quizQuestions.length) * 100);
      
      document.getElementById('quiz-score').textContent = `${scorePercent}%`;
      
      let message = '';
      if (scorePercent === 100) {
        message = '🎉 Perfect score! You have mastered this section!';
      } else if (scorePercent >= 80) {
        message = '✨ Excellent work! You have a strong understanding!';
      } else if (scorePercent >= 60) {
        message = '👍 Good job! Review the material to improve further.';
      } else {
        message = '📚 Keep studying! Review the section and try again.';
      }
      
      document.getElementById('quiz-message').textContent = message;
      document.getElementById('quiz-result').classList.add('show');
      
      document.getElementById('submit-quiz').style.display = 'none';
      document.getElementById('back-to-content').style.display = 'block';

      const sectionData = getUserDataForSection(currentSection.id);
      
      if (sectionData) {
        sectionData.quiz_score = scorePercent;
        sectionData.last_accessed = new Date().toISOString();
        await window.dataSdk.update(sectionData);
      } else {
        await window.dataSdk.create({
          section_id: currentSection.id,
          completed: false,
          quiz_score: scorePercent,
          notes: "",
          last_accessed: new Date().toISOString()
        });
      }
    }

    function backToContent() {
      loadSection(currentSection);
    }

    document.getElementById('complete-btn').addEventListener('click', markSectionComplete);
    document.getElementById('quiz-btn').addEventListener('click', showQuiz);
    document.getElementById('submit-quiz').addEventListener('click', submitQuiz);
    document.getElementById('back-to-content').addEventListener('click', backToContent);

    async function onConfigChange(config) {
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontSize = config.font_size || defaultConfig.font_size;
      const baseFontStack = 'Segoe UI, sans-serif';

      document.getElementById('course-title').textContent = config.course_title || defaultConfig.course_title;
      document.getElementById('chapter-info').textContent = config.chapter_info || defaultConfig.chapter_info;
      document.getElementById('complete-btn').textContent = config.complete_button || defaultConfig.complete_button;
      document.getElementById('quiz-btn').textContent = config.quiz_button || defaultConfig.quiz_button;

      document.querySelector('.title').style.fontFamily = `${customFont}, ${baseFontStack}`;
      document.querySelector('.subtitle').style.fontFamily = `${customFont}, ${baseFontStack}`;
      document.querySelectorAll('.content-title').forEach(el => {
        el.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
      document.querySelectorAll('.content-body').forEach(el => {
        el.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });

      document.querySelector('.title').style.fontSize = `${baseFontSize * 2.625}px`;
      document.querySelector('.subtitle').style.fontSize = `${baseFontSize * 1.125}px`;
      document.querySelectorAll('.content-title').forEach(el => {
        el.style.fontSize = `${baseFontSize * 2}px`;
      });
      document.querySelectorAll('.content-body').forEach(el => {
        el.style.fontSize = `${baseFontSize}px`;
      });
      document.querySelectorAll('.btn').forEach(el => {
        el.style.fontSize = `${baseFontSize}px`;
      });

      const primaryColor = config.primary_color || defaultConfig.primary_color;
      document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${primaryColor} 100%)`;
      document.querySelectorAll('.btn-primary').forEach(el => {
        el.style.background = primaryColor;
      });
      document.querySelectorAll('.section-item:hover').forEach(el => {
        el.style.borderColor = primaryColor;
      });

      const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
      document.querySelector('.title').style.color = secondaryColor;
      document.querySelectorAll('.content-title').forEach(el => {
        el.style.color = secondaryColor;
      });

      const successColor = config.success_color || defaultConfig.success_color;
      document.querySelectorAll('.btn-success').forEach(el => {
        el.style.background = successColor;
      });

      const cardBg = config.card_background || defaultConfig.card_background;
      document.querySelectorAll('.header, .sidebar, .main-content').forEach(el => {
        el.style.background = `rgba(255, 255, 255, 0.95)`;
      });
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.card_background || defaultConfig.card_background,
              set: (value) => {
                config.card_background = value;
                window.elementSdk.setConfig({ card_background: value });
              }
            },
            {
              get: () => config.secondary_color || defaultConfig.secondary_color,
              set: (value) => {
                config.secondary_color = value;
                window.elementSdk.setConfig({ secondary_color: value });
              }
            },
            {
              get: () => config.primary_color || defaultConfig.primary_color,
              set: (value) => {
                config.primary_color = value;
                window.elementSdk.setConfig({ primary_color: value });
              }
            },
            {
              get: () => config.success_color || defaultConfig.success_color,
              set: (value) => {
                config.success_color = value;
                window.elementSdk.setConfig({ success_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["course_title", config.course_title || defaultConfig.course_title],
          ["chapter_info", config.chapter_info || defaultConfig.chapter_info],
          ["complete_button", config.complete_button || defaultConfig.complete_button],
          ["quiz_button", config.quiz_button || defaultConfig.quiz_button]
        ])
      });
    }

    initializeApp();
