---
layout: post
title: Joint Pneumatic-Electromechanical Energy Harvesting System
context: Cornell HAPPI Lab · LSAMP Research · Mar–Jul 2025
description: >-
  Designed and tested three pneumatic pouch configurations for a passive 
  wearable energy harvesting system powered by human foot strikes, targeting 
  the power threshold of a cardiac monitor.
skills:
  - Experimental Design
  - MATLAB
  - DAQ Systems
  - Pneumatic Systems
  - Data Analysis
  - Ansys Maxwell
  - Wearable Systems
  - Research & Documentation

main-image: /images_coming_soon.png
---

## Project Overview

At Cornell University's HAPPI Lab (Human Augmentation in Physical and Perceptual Interactions, Sibley School of Mechanical and Aerospace Engineering), I contributed to the development of a joint pneumatic-electromechanical energy harvesting system powered by human movement, funded by the LSAMP program through Cornell's Engineering Learning Initiatives.

The system captures pneumatic energy from foot strikes during walking, stores it in an on-body pouch, and releases it to drive a 2-inch diameter axial flux induction generator to produce electricity — targeting the 10–50 mW power threshold required to run a passive cardiac monitor continuously.

---

## My Contributions

<div class="contrib-grid">
  <div class="contrib-card">
    <p class="contrib-title">Pouch Design & Iteration</p>
    <p>Designed and tested three pouch configurations — Square (6.8" × 6.8"), Small Pill (10" × 3.5"), and Large Pill (10" × 5") — iterating on geometry to maximize pneumatic power output.</p>
  </div>
  <div class="contrib-card">
    <p class="contrib-title">Experimental Testing</p>
    <p>Built and operated a test setup with a hand pump, flow meter, pressure sensor, and DAQ system with MATLAB analysis. Measured steady-state pressure and flowrate in the 3–7 second window using P = Pressure × Flowrate.</p>
  </div>
  <div class="contrib-card">
    <p class="contrib-title">Insole Mechanism</p>
    <p>Developed a foam insole compression mechanism to pump air into a one-way valve balloon reservoir, evaluating airflow profiles and calculating turbine power output at faster walking speeds.</p>
  </div>
  <div class="contrib-card">
    <p class="contrib-title">Viscoelastic Analysis</p>
    <p>Investigated the viscoelastic behavior of latex balloons through hysteresis analysis, identifying how repeated inflation cycles affect system pressure consistency.</p>
  </div>
</div>

---

## Pouch Comparison

| Pouch | Dimensions | Pressure | Flowrate | Pneumatic Output | Projected Electrical |
|---|---|---|---|---|---|
| Small Pill ✓ | 10" × 3.5" | 14.8 psi | 7 LPM | ~11.9 W | ~86.9 mW |
| Large Pill | 10" × 5" | 14.75 psi | 6 LPM | ~10.2 W | ~74.2 mW |
| Square | 6.8" × 6.8" | 14.75 psi | 6 LPM | ~10.2 W | ~74.2 mW |

---

## Results

<div class="results-row">
  <div class="result-card">
    <p class="result-number">86.9 mW</p>
    <p class="result-unit">projected electrical output</p>
    <p class="result-label">Exceeds the 10–50 mW cardiac monitor threshold</p>
  </div>
  <div class="result-card">
    <p class="result-number">14.8 psi</p>
    <p class="result-unit">at 7 LPM</p>
    <p class="result-label">Highest steady-state pressure and flowrate of all three designs</p>
  </div>
  <div class="result-card">
    <p class="result-number">11.9 W</p>
    <p class="result-unit">pneumatic output</p>
    <p class="result-label">17% higher than both competing pouch designs</p>
  </div>
</div>

---

## Future Work

- Full system integration connecting the pouch directly to the turbine to measure actual electrical output
- Incorporating an air valve and pressure sensor for automated air release
- Validating performance during live human walking trials

---

> Projected electrical outputs derived using turbine pneumatic-to-electric efficiency of 0.73%, calculated from Faraday's Law and validated via Ansys Maxwell magnetic field simulations by Devin Simmons (M.S., Cornell 2025).