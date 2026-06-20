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

main-image: /project-main.jpg
---

## Project Overview

At Cornell University's HAPPI Lab (Human Augmentation in Physical and Perceptual Interactions, Sibley School of Mechanical and Aerospace Engineering), I contributed to the development of a joint pneumatic-electromechanical energy harvesting system powered by human movement, funded by the LSAMP program through Cornell's Engineering Learning Initiatives.

The system captures pneumatic energy from foot strikes during walking, stores it in an on-body pouch, and releases it to drive a 2-inch diameter axial flux induction generator to produce electricity — targeting the 10–50 mW power threshold required to run a passive cardiac monitor continuously.

---

## My Contributions

### Pouch Design & Iteration
Designed and experimentally tested three pouch configurations, iterating on geometry to maximize pneumatic power output:

| Pouch | Dimensions |
|---|---|
| Square Pouch | 6.8" × 6.8" |
| Small Pill Pouch | 10" × 3.5" |
| Large Pill Pouch | 10" × 5" |

### Experimental Testing
Built and operated a test setup consisting of a hand pump, flow meter, pressure sensor, and DAQ system with MATLAB data analysis. Measured steady-state pressure and flowrate for each design in the 3–7 second window, applying the power equation **P = Pressure × Flowrate**.

### Insole Mechanism Development
Developed a foam insole compression mechanism to pump air into a one-way valve balloon reservoir, evaluating airflow profiles and calculating turbine power output to optimize performance at faster walking speeds.

### Viscoelastic Analysis
Investigated the viscoelastic behavior of latex balloons through hysteresis analysis, identifying how repeated inflation cycles affect system pressure consistency — a key factor for real-world wearable reliability.

---

## Results

| Pouch | Pressure | Flowrate | Pneumatic Output | Projected Electrical Output |
|---|---|---|---|---|
| Small Pill Pouch ✓ | 14.8 psi | 7 LPM | ~11.9 W | ~86.9 mW |
| Large Pill Pouch | 14.75 psi | 6 LPM | ~10.2 W | ~74.2 mW |
| Square Pouch | 14.75 psi | 6 LPM | ~10.2 W | ~74.2 mW |

The **Small Pill Pouch** achieved the highest pneumatic output at 11.9 W, yielding a projected electrical output of **86.9 mW** — exceeding the 10–50 mW cardiac monitor threshold and outperforming both other designs.

> Projected electrical outputs were derived using the turbine's pneumatic-to-electric efficiency of 0.73%, calculated from Faraday's Law and validated via Ansys Maxwell magnetic field simulations by Devin Simmons (M.S., Cornell 2025).

---

## Future Work

- Full system integration connecting the pouch directly to the turbine to measure actual electrical output
- Incorporating an air valve and pressure sensor for automated air release
- Validating performance during live human walking trials