---
layout: post
title: Auger-Based Subsurface Soil Collection System
context: Cornell Mars Rover Project · AstroTech Subteam · 2025–26
description: >-
  Engineered a purpose-built auger assembly replacing a scoop-based design 
  to achieve consistent 10 cm drilling depth and reliable sample transfer 
  for the University Rover Competition.
skills:
  - Mechanical Design
  - Autodesk Inventor
  - Motor Selection
  - Tolerance Analysis
  - Manual Lathe & Milling
  - 3D Printing (FDM/SLA)
  - DFM/DFA
  - System Integration & Testing
  - Technical Leadership

main-image: /images_coming_soon.png
---

## Project Overview

The Cornell Mars Rover Project competes annually in the University Rover Competition (URC), a NASA-adjacent collegiate robotics challenge. The AstroTech subteam is responsible for the rover's science payload — specifically collecting and analyzing subsurface soil samples to detect signs of past or present life.

The previous scoop-based collection method was unable to reliably reach target depths or transfer material into the onboard mixing chamber. As AstroTech member and incoming subteam lead, I led the full redesign of this system from concept through manufacturing, replacing it with a purpose-built auger assembly that achieves consistent 10 cm drilling depth and reliable sample transfer.

---

## My Contributions

<div class="contrib-grid">
  <div class="contrib-card">
    <p class="contrib-title">System Architecture</p>
    <p>Defined the overall auger system concept, replacing the prior scoop design with a two-motor vertical translation and rotation assembly tailored to URC constraints — specifically the 5 kg weight limit and jam-tolerant operation requirements.</p>
  </div>
  <div class="contrib-card">
    <p class="contrib-title">Vertical Translation</p>
    <p>Designed the linear stage using an 18-in non-captive lead screw, dual 0.5 in hardened steel guide rods, and linear ball bearings to maximize stability and minimize off-axis moments under drilling loads.</p>
  </div>
  <div class="contrib-card">
    <p class="contrib-title">Motor Selection</p>
    <p>Selected and specified the Maxon EC-Flat 45 (70 W) motor with a 50:1 gearbox to deliver 5.7 Nm torque. The mechanism demonstrated 150–300 N vertical load capacity supporting a 110 lb rover under stall.</p>
  </div>
  <div class="contrib-card">
    <p class="contrib-title">Custom Manufacturing</p>
    <p>Machined and fabricated end mounts, nut carriage, and a detachable auger sheath on a manual lathe and mill. Coordinated FDM and SLA 3D printing for rapid-iteration parts throughout the design cycle.</p>
  </div>
  <div class="contrib-card">
    <p class="contrib-title">Integration & Testing</p>
    <p>System is currently in active testing with soil simulant. Programming and integration with the rover CA system is ongoing ahead of the Late May 2026 competition.</p>
  </div>
</div>

---

## Technical Specifications

| Parameter | Value |
|---|---|
| Target Depth | 10 cm subsurface |
| Translation Mechanism | 18-in non-captive lead screw |
| Guide System | Dual 0.5 in hardened steel rods + linear ball bearings |
| Motor | Maxon EC-Flat 45 (70 W), 50:1 gearbox |
| Torque Output | 5.7 Nm |
| Load Capacity | 150–300 N vertical |
| Custom Parts | End mounts, nut carriage, detachable auger sheath |
| CAD Software | Autodesk Inventor |
| Status | Testing phase — all parts manufactured |

---

## Results & Impact

<div class="results-row">
  <div class="result-card">
    <p class="result-number">80%</p>
    <p class="result-unit">deeper access</p>
    <p class="result-label">Compared to the previous scoop-based design</p>
  </div>
  <div class="result-card">
    <p class="result-number">300–500%</p>
    <p class="result-unit">more sample volume</p>
    <p class="result-label">Per collection cycle, meeting URC requirements</p>
  </div>
  <div class="result-card">
    <p class="result-number">5.7 Nm</p>
    <p class="result-unit">torque delivered</p>
    <p class="result-label">Supporting a 110 lb rover under stall conditions</p>
  </div>
</div>