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
          <p>Light is electromagnetic radiation that exhibits both wave and particle properties. Understanding its nature is essential for studying optical phenomena.</p>
          <h3>Wave Characteristics</h3>
          <p>Electromagnetic radiation can be described by:</p>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>λ - Wavelength</h4>
              <p>Distance between successive wave peaks (measured in nanometers for visible light)</p>
            </div>
            <div class="concept-card">
              <h4>ν - Frequency</h4>
              <p>Number of waves passing a point per second (Hz)</p>
            </div>
            <div class="concept-card">
              <h4>c - Velocity</h4>
              <p>Speed of light in vacuum: 3 × 10⁸ m/s</p>
            </div>
            <div class="concept-card">
              <h4>E - Energy</h4>
              <p>Energy of photons: E = hν (h is Planck's constant)</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>The Electromagnetic Spectrum</h4>
            <p>Visible light (400-700 nm) is just a small portion of the electromagnetic spectrum, which ranges from radio waves to gamma rays. Different materials interact differently with various wavelengths.</p>
          </div>
          <p><strong>Key Relationship:</strong> c = λν (velocity = wavelength × frequency)</p>
          <p>This relationship means that as wavelength increases, frequency decreases, and vice versa.</p>
        `
      },
      {
        id: "sec-21-3",
        number: "21.3",
        title: "Light Interactions with Solids",
        content: `
          <p>When light encounters a solid material, several phenomena can occur simultaneously. The relative magnitude of each determines the material's optical behavior.</p>
          <h3>Primary Interactions</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>📐 Reflection</h4>
              <p>Light bounces off the surface, following the law of reflection (angle of incidence = angle of reflection)</p>
            </div>
            <div class="concept-card">
              <h4>🔄 Refraction</h4>
              <p>Light bends as it enters the material due to a change in velocity</p>
            </div>
            <div class="concept-card">
              <h4>🎯 Absorption</h4>
              <p>Light energy is converted to other forms (typically heat) as photons interact with atoms</p>
            </div>
            <div class="concept-card">
              <h4>➡️ Transmission</h4>
              <p>Light passes through the material without being absorbed or scattered</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>Energy Conservation</h4>
            <p>The sum of reflected, absorbed, and transmitted light must equal the incident light intensity. This principle allows us to predict material behavior.</p>
          </div>
          <h3>Material Classification</h3>
          <p><strong>Transparent:</strong> High transmission, low absorption (glass, clear plastics)</p>
          <p><strong>Translucent:</strong> Partial transmission with scattering (frosted glass, wax paper)</p>
          <p><strong>Opaque:</strong> No transmission, high reflection or absorption (metals, wood)</p>
        `
      },
      {
        id: "sec-21-4",
        number: "21.4",
        title: "Atomic and Electronic Interactions",
        content: `
          <p>The optical behavior of materials is fundamentally determined by how photons interact with electrons in atoms. Different materials have different electronic structures, leading to vastly different optical properties.</p>
          <h3>Mechanisms of Light-Electron Interaction</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>⚡ Electronic Polarization</h4>
              <p>Electric field of light displaces electron clouds relative to nuclei</p>
            </div>
            <div class="concept-card">
              <h4>🎢 Electronic Transitions</h4>
              <p>Photons excite electrons to higher energy levels</p>
            </div>
            <div class="concept-card">
              <h4>📊 Band Gaps</h4>
              <p>Energy difference between valence and conduction bands determines absorption</p>
            </div>
            <div class="concept-card">
              <h4>🔗 Free Electrons</h4>
              <p>In metals, free electrons interact strongly with light</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>Band Gap Energy</h4>
            <p>For a photon to be absorbed by promoting an electron across a band gap, its energy (E = hν) must be greater than or equal to the band gap energy. This is why different materials absorb different wavelengths.</p>
          </div>
          <h3>Energy Level Diagrams</h3>
          <p>In insulators and semiconductors, electrons occupy discrete energy levels. Photon absorption occurs when photon energy matches the energy difference between levels. In metals, the continuous distribution of energy states in the conduction band allows absorption across a wide range of wavelengths.</p>
        `
      },
      {
        id: "sec-21-5",
        number: "21.5",
        title: "Refraction",
        content: `
          <p>Refraction is the bending of light as it passes from one medium to another due to a change in velocity. This phenomenon is responsible for lenses, prisms, and many optical devices.</p>
          <h3>Index of Refraction</h3>
          <p>The index of refraction (n) quantifies how much light slows down in a material:</p>
          <p><strong>n = c / v</strong></p>
          <p>where c is the speed of light in vacuum and v is the speed in the material.</p>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>Vacuum: n = 1.0</h4>
              <p>Reference value (fastest possible speed)</p>
            </div>
            <div class="concept-card">
              <h4>Air: n ≈ 1.0003</h4>
              <p>Essentially the same as vacuum</p>
            </div>
            <div class="concept-card">
              <h4>Water: n = 1.33</h4>
              <p>Light travels 33% slower than in vacuum</p>
            </div>
            <div class="concept-card">
              <h4>Glass: n ≈ 1.5-1.9</h4>
              <p>Varies with composition</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>Snell's Law</h4>
            <p>n₁ sin(θ₁) = n₂ sin(θ₂) - This relationship predicts the angle of refraction when light passes between materials with different refractive indices.</p>
          </div>
          <h3>Applications</h3>
          <p><strong>Lenses:</strong> Curved surfaces with specific refractive indices focus or diverge light</p>
          <p><strong>Optical Fibers:</strong> Total internal reflection keeps light confined in the fiber core</p>
          <p><strong>Prisms:</strong> Dispersion separates white light into its component colors</p>
        `
      },
      {
        id: "sec-21-6",
        number: "21.6",
        title: "Reflection",
        content: `
          <p>Reflection occurs at the interface between materials with different refractive indices. The reflectivity depends on the difference between the indices and the angle of incidence.</p>
          <h3>Types of Reflection</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>🪞 Specular Reflection</h4>
              <p>Mirror-like reflection from smooth surfaces (angle in = angle out)</p>
            </div>
            <div class="concept-card">
              <h4>🌫️ Diffuse Reflection</h4>
              <p>Scattering in many directions from rough surfaces</p>
            </div>
          </div>
          <h3>Reflectivity</h3>
          <p>The fraction of light reflected at normal incidence is given by:</p>
          <p><strong>R = [(n₁ - n₂) / (n₁ + n₂)]²</strong></p>
          <p>where n₁ and n₂ are the refractive indices of the two materials.</p>
          <div class="highlight-box">
            <h4>Metals vs. Non-metals</h4>
            <p>Metals are highly reflective (R > 0.9) because free electrons can re-radiate the absorbed light. Non-metals typically have lower reflectivity (R < 0.2) at visible wavelengths.</p>
          </div>
          <h3>Factors Affecting Reflectivity</h3>
          <p><strong>Surface roughness:</strong> Smooth surfaces produce specular reflection; rough surfaces produce diffuse reflection</p>
          <p><strong>Wavelength:</strong> Reflectivity varies with wavelength, causing selective reflection (color)</p>
          <p><strong>Angle of incidence:</strong> Reflectivity increases at grazing angles</p>
          <p><strong>Material properties:</strong> Electronic structure determines the complex refractive index</p>
        `
      },
      {
        id: "sec-21-7",
        number: "21.7",
        title: "Absorption",
        content: `
          <p>Absorption is the conversion of light energy to other forms (usually heat) through interaction with the material's atoms and electrons. The extent of absorption determines how transparent or opaque a material appears.</p>
          <h3>Absorption Mechanisms</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>🎯 Electronic Excitation</h4>
              <p>Photons promote electrons to higher energy states</p>
            </div>
            <div class="concept-card">
              <h4>🔥 Phonon Generation</h4>
              <p>Light energy converts to lattice vibrations (heat)</p>
            </div>
            <div class="concept-card">
              <h4>⚛️ Impurity Absorption</h4>
              <p>Defects and impurities create additional energy levels</p>
            </div>
            <div class="concept-card">
              <h4>📡 Free Carrier Absorption</h4>
              <p>Conduction electrons in metals absorb photons</p>
            </div>
          </div>
          <h3>Beer-Lambert Law</h3>
          <p>Light intensity decreases exponentially as it passes through an absorbing material:</p>
          <p><strong>I = I₀ e^(-βx)</strong></p>
          <p>where I₀ is initial intensity, β is absorption coefficient, and x is path length.</p>
          <div class="highlight-box">
            <h4>Absorption Coefficient</h4>
            <p>The absorption coefficient (β) is material-specific and wavelength-dependent. A high β means light is absorbed over short distances, while a low β indicates the material is relatively transparent at that wavelength.</p>
          </div>
          <h3>Material Examples</h3>
          <p><strong>Metals:</strong> High absorption across all visible wavelengths due to free electrons</p>
          <p><strong>Insulators:</strong> Transparent if photon energy < band gap; absorbing if photon energy ≥ band gap</p>
          <p><strong>Semiconductors:</strong> Selective absorption based on band gap energy (e.g., silicon absorbs visible light)</p>
        `
      },
      {
        id: "sec-21-8",
        number: "21.8",
        title: "Transmission",
        content: `
          <p>Transmission is the passage of light through a material without absorption. High transmission is essential for applications like windows, lenses, and optical fibers.</p>
          <h3>Transmission Requirements</h3>
          <p>For a material to be transparent, several conditions must be met:</p>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>✨ Low Absorption</h4>
              <p>Photon energy must be less than band gap</p>
            </div>
            <div class="concept-card">
              <h4>🎯 Minimal Scattering</h4>
              <p>Few internal defects or grain boundaries</p>
            </div>
            <div class="concept-card">
              <h4>🔬 High Purity</h4>
              <p>Few impurities that could absorb light</p>
            </div>
            <div class="concept-card">
              <h4>📏 Appropriate Thickness</h4>
              <p>Even slight absorption becomes significant in thick materials</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>Transmission Percentage</h4>
            <p>Transmission (T) is the fraction of incident light that passes through: T = I_transmitted / I_incident. Combined with reflection (R) and absorption (A): T + R + A = 1</p>
          </div>
          <h3>Factors Reducing Transmission</h3>
          <p><strong>Scattering:</strong> Caused by grain boundaries, pores, inclusions, and crystalline defects</p>
          <p><strong>Reflection losses:</strong> Light reflected at entry and exit surfaces</p>
          <p><strong>Absorption:</strong> Even nominally transparent materials have some absorption</p>
          <p><strong>Thickness:</strong> Longer path length increases probability of absorption or scattering events</p>
          <h3>Applications</h3>
          <p>Optical fibers require extremely high transmission (>99.99% per meter) achieved through ultra-pure silica glass with minimal defects.</p>
        `
      },
      {
        id: "sec-21-9",
        number: "21.9",
        title: "Color",
        content: `
          <p>Color is the result of selective absorption and reflection of different wavelengths of visible light. The perceived color depends on which wavelengths are reflected or transmitted to our eyes.</p>
          <h3>Origin of Color</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>🌈 Selective Absorption</h4>
              <p>Material absorbs certain wavelengths, reflects others</p>
            </div>
            <div class="concept-card">
              <h4>🎨 Electronic Transitions</h4>
              <p>Specific photon energies excite electrons</p>
            </div>
            <div class="concept-card">
              <h4>💎 Impurities</h4>
              <p>Trace elements create color centers (rubies, sapphires)</p>
            </div>
            <div class="concept-card">
              <h4>📐 Structural Color</h4>
              <p>Interference and diffraction effects (opals, butterfly wings)</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>Complementary Colors</h4>
            <p>If a material absorbs one color, it appears as the complementary color. For example, if green light (520 nm) is absorbed, the material appears red-violet.</p>
          </div>
          <h3>Visible Spectrum</h3>
          <p><strong>Violet:</strong> 400-450 nm (highest energy)</p>
          <p><strong>Blue:</strong> 450-495 nm</p>
          <p><strong>Green:</strong> 495-570 nm</p>
          <p><strong>Yellow:</strong> 570-590 nm</p>
          <p><strong>Orange:</strong> 590-620 nm</p>
          <p><strong>Red:</strong> 620-700 nm (lowest energy)</p>
          <h3>Examples</h3>
          <p><strong>Ruby:</strong> Chromium impurities (Cr³⁺) in aluminum oxide absorb green and blue light, appearing red</p>
          <p><strong>Copper:</strong> Electronic band structure absorbs blue and green, reflects red and yellow, appearing reddish-brown</p>
          <p><strong>Gold:</strong> Relativistic effects cause selective absorption of blue light, appearing yellow</p>
        `
      },
      {
        id: "sec-21-10",
        number: "21.10",
        title: "Opacity and Translucency in Insulators",
        content: `
          <p>While many insulators can be transparent if pure and defect-free, they often appear opaque or translucent due to scattering of light by internal features.</p>
          <h3>Causes of Opacity</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>🔲 Grain Boundaries</h4>
              <p>Polycrystalline materials scatter light at boundaries between grains</p>
            </div>
            <div class="concept-card">
              <h4>💨 Porosity</h4>
              <p>Pores create interfaces with different refractive indices</p>
            </div>
            <div class="concept-card">
              <h4>🎯 Inclusions</h4>
              <p>Second-phase particles scatter light</p>
            </div>
            <div class="concept-card">
              <h4>⚡ Surface Roughness</h4>
              <p>Irregular surfaces cause diffuse reflection</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>Scattering vs. Absorption</h4>
            <p>Opacity from scattering (translucent) is different from absorption (opaque). Translucent materials allow light through but scatter it, preventing clear image transmission. Examples include frosted glass and porcelain.</p>
          </div>
          <h3>Making Insulators Transparent</h3>
          <p><strong>Single crystals:</strong> Eliminate grain boundaries (sapphire windows)</p>
          <p><strong>Fine grain size:</strong> If grains are smaller than wavelength of light, scattering is reduced</p>
          <p><strong>Index matching:</strong> If second phase has similar refractive index, scattering is minimized</p>
          <p><strong>Dense materials:</strong> Eliminate porosity through proper processing</p>
          <h3>Applications</h3>
          <p><strong>Translucent ceramics:</strong> Used for lighting (alumina lamp envelopes)</p>
          <p><strong>Opal glass:</strong> Intentional scattering for diffuse lighting</p>
          <p><strong>Transparent ceramics:</strong> High-power laser windows, armor applications</p>
        `
      },
      {
        id: "sec-21-11",
        number: "21.11",
        title: "Luminescence",
        content: `
          <p>Luminescence is the emission of light by a material that is not caused solely by heating (non-thermal emission). It occurs when electrons in excited states return to lower energy levels, releasing photons.</p>
          <h3>Types of Luminescence</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>💡 Fluorescence</h4>
              <p>Immediate light emission (< 10⁻⁸ s) after excitation stops</p>
            </div>
            <div class="concept-card">
              <h4>🌟 Phosphorescence</h4>
              <p>Delayed light emission (continues after excitation stops)</p>
            </div>
            <div class="concept-card">
              <h4>⚡ Electroluminescence</h4>
              <p>Light emission from electrical excitation (LEDs)</p>
            </div>
            <div class="concept-card">
              <h4>🔬 Chemiluminescence</h4>
              <p>Light from chemical reactions (glow sticks)</p>
            </div>
          </div>
          <h3>The Luminescence Process</h3>
          <p>1. <strong>Excitation:</strong> Energy is absorbed, promoting electrons to higher energy states</p>
          <p>2. <strong>Relaxation:</strong> Electrons lose some energy non-radiatively (as heat)</p>
          <p>3. <strong>Emission:</strong> Electrons return to ground state, emitting photons</p>
          <div class="highlight-box">
            <h4>Stokes Shift</h4>
            <p>Emitted light typically has longer wavelength (lower energy) than absorbed light because some energy is lost as heat during relaxation. This is why UV-excited materials often glow in visible wavelengths.</p>
          </div>
          <h3>Applications</h3>
          <p><strong>Fluorescent lamps:</strong> UV excitation of phosphors produces visible light</p>
          <p><strong>Screens and displays:</strong> Phosphors convert electron beam energy to light (CRTs)</p>
          <p><strong>Security features:</strong> UV-fluorescent inks in currency and documents</p>
          <p><strong>Biological markers:</strong> Fluorescent dyes for microscopy and cell tracking</p>
        `
      },
      {
        id: "sec-21-12",
        number: "21.12",
        title: "Photoconductivity",
        content: `
          <p>Photoconductivity is the increase in electrical conductivity of a material when exposed to light. This phenomenon is the basis for photodetectors, solar cells, and imaging devices.</p>
          <h3>Mechanism</h3>
          <p>When photons with sufficient energy strike a semiconductor or insulator:</p>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>⚡ Photon Absorption</h4>
              <p>Photons with E ≥ band gap are absorbed</p>
            </div>
            <div class="concept-card">
              <h4>🎯 Carrier Generation</h4>
              <p>Electrons excited to conduction band, leaving holes in valence band</p>
            </div>
            <div class="concept-card">
              <h4>📊 Conductivity Increase</h4>
              <p>Additional charge carriers increase conductivity</p>
            </div>
            <div class="concept-card">
              <h4>🔄 Carrier Lifetime</h4>
              <p>Conductivity persists until carriers recombine</p>
            </div>
          </div>
          <div class="highlight-box">
            <h4>Spectral Response</h4>
            <p>Materials are photoconductive only for photon energies greater than their band gap. This allows selective detection of specific wavelengths: Si for visible light, Ge for near-infrared, GaN for UV.</p>
          </div>
          <h3>Key Parameters</h3>
          <p><strong>Quantum efficiency:</strong> Number of electron-hole pairs generated per incident photon</p>
          <p><strong>Responsivity:</strong> Photocurrent generated per unit of incident optical power</p>
          <p><strong>Response time:</strong> How quickly conductivity changes with light intensity</p>
          <p><strong>Dark current:</strong> Small current flowing in absence of light (noise source)</p>
          <h3>Applications</h3>
          <p><strong>Solar cells:</strong> Convert sunlight to electricity (photovoltaic effect)</p>
          <p><strong>Photodetectors:</strong> Light sensors, cameras, optical communication receivers</p>
          <p><strong>Image sensors:</strong> Digital camera CCDs and CMOS sensors</p>
          <p><strong>Light meters:</strong> Exposure control in photography</p>
        `
      },
      {
        id: "sec-21-13",
        number: "21.13",
        title: "Lasers",
        content: `
          <p>LASER (Light Amplification by Stimulated Emission of Radiation) devices produce highly coherent, monochromatic, and directional light through the process of stimulated emission.</p>
          <h3>Operating Principles</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>⚡ Population Inversion</h4>
              <p>More atoms in excited state than ground state</p>
            </div>
            <div class="concept-card">
              <h4>🎯 Stimulated Emission</h4>
              <p>Photon triggers emission of identical photon</p>
            </div>
            <div class="concept-card">
              <h4>🔄 Optical Feedback</h4>
              <p>Mirrors create resonant cavity for amplification</p>
            </div>
            <div class="concept-card">
              <h4>💡 Coherent Output</h4>
              <p>All photons have same wavelength and phase</p>
            </div>
          </div>
          <h3>Laser Components</h3>
          <p><strong>Gain medium:</strong> Material that can be excited (gas, solid crystal, semiconductor, liquid dye)</p>
          <p><strong>Pump source:</strong> Energy source to create population inversion (electrical, optical, chemical)</p>
          <p><strong>Optical cavity:</strong> Two mirrors (one partially transparent) to provide feedback</p>
          <p><strong>Output coupler:</strong> Partially transparent mirror that allows laser beam to escape</p>
          <div class="highlight-box">
            <h4>Stimulated vs. Spontaneous Emission</h4>
            <p>In spontaneous emission (normal light), photons are emitted randomly. In stimulated emission (lasers), an incoming photon triggers emission of an identical photon, creating coherent light.</p>
          </div>
          <h3>Types of Lasers</h3>
          <p><strong>Gas lasers:</strong> HeNe (632.8 nm), CO₂ (10.6 μm), Argon ion (multiple visible lines)</p>
          <p><strong>Solid-state lasers:</strong> Ruby (694 nm), Nd:YAG (1064 nm), Ti:Sapphire (tunable)</p>
          <p><strong>Semiconductor lasers:</strong> Diode lasers (variable wavelength), VCSELs</p>
          <p><strong>Fiber lasers:</strong> Rare-earth doped optical fibers (high power, excellent beam quality)</p>
          <h3>Applications</h3>
          <p><strong>Industrial:</strong> Cutting, welding, marking, 3D printing</p>
          <p><strong>Medical:</strong> Surgery, vision correction, therapy, diagnostics</p>
          <p><strong>Communications:</strong> Fiber optic transmitters, free-space optical links</p>
          <p><strong>Scientific:</strong> Spectroscopy, microscopy, interferometry, precision measurements</p>
          <p><strong>Consumer:</strong> Barcode scanners, laser pointers, optical storage (CD/DVD)</p>
        `
      },
      {
        id: "sec-21-14",
        number: "21.14",
        title: "Optical Fibers in Communications",
        content: `
          <p>Optical fibers transmit information as light pulses through thin strands of ultra-pure glass or plastic. They have revolutionized telecommunications by enabling high-speed, long-distance data transmission.</p>
          <h3>Fiber Structure</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>🎯 Core</h4>
              <p>Central region (high refractive index) that guides light</p>
            </div>
            <div class="concept-card">
              <h4>🔄 Cladding</h4>
              <p>Surrounding layer (lower refractive index) for confinement</p>
            </div>
            <div class="concept-card">
              <h4>🛡️ Coating</h4>
              <p>Protective polymer jacket prevents damage</p>
            </div>
            <div class="concept-card">
              <h4>💪 Buffer</h4>
              <p>Additional layers for mechanical protection</p>
            </div>
          </div>
          <h3>Light Guidance - Total Internal Reflection</h3>
          <p>Light is confined in the fiber core through total internal reflection. When light hits the core-cladding interface at angles greater than the critical angle:</p>
          <p><strong>θ_c = sin⁻¹(n₂/n₁)</strong></p>
          <p>where n₁ (core) > n₂ (cladding), all light is reflected back into the core.</p>
          <div class="highlight-box">
            <h4>Ultra-Low Loss</h4>
            <p>Modern optical fibers have attenuation < 0.2 dB/km at 1550 nm wavelength. This means a signal can travel over 50 km and still retain 50% of its original power - far superior to copper cables.</p>
          </div>
          <h3>Types of Optical Fibers</h3>
          <p><strong>Single-mode fiber:</strong> Small core (~9 μm), one light path, long distance, high bandwidth</p>
          <p><strong>Multi-mode fiber:</strong> Larger core (~50-62.5 μm), multiple light paths, shorter distance, lower cost</p>
          <p><strong>Step-index:</strong> Abrupt refractive index change between core and cladding</p>
          <p><strong>Graded-index:</strong> Gradual refractive index change reduces modal dispersion</p>
          <h3>Advantages Over Copper</h3>
          <p><strong>Bandwidth:</strong> Terabits per second possible (vs. Gigabits for copper)</p>
          <p><strong>Distance:</strong> Signals travel tens of kilometers without amplification</p>
          <p><strong>Immunity:</strong> No electromagnetic interference or crosstalk</p>
          <p><strong>Size/Weight:</strong> Much smaller and lighter than equivalent copper cables</p>
          <p><strong>Security:</strong> Difficult to tap without detection</p>
          <h3>Applications</h3>
          <p><strong>Telecommunications:</strong> Internet backbone, long-distance phone lines, undersea cables</p>
          <p><strong>Data centers:</strong> High-speed server interconnects</p>
          <p><strong>Medical:</strong> Endoscopes, surgical illumination, laser delivery</p>
          <p><strong>Sensing:</strong> Temperature, pressure, strain, and chemical sensors</p>
          <p><strong>Industrial:</strong> Remote monitoring, harsh environment communication</p>
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
