---
layout: page
title: Interactive Monty Hall Problem Explorer
description: Educational game demonstrating conditional probability through interactive MATLAB app
img: assets/img/monty-hall-demo.png
importance: 2
category: teaching
---

## Overview

[![Project Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/amithjkamath/montyhall)
[![Video Demo](https://img.shields.io/badge/Video-Demo-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=lyCoBqALM_Q)

An interactive MATLAB application that teaches conditional probability through the famous Monty Hall problem, transforming a counterintuitive mathematical concept into an engaging, hands-on learning experience.

**Educational Focus:** Conditional Probability, Game Theory, Interactive Learning

## How It Works

The game provides:
- **Three-door interface**: Classic Monty Hall setup with interactive gameplay
- **Real-time statistics**: Track win/loss ratios for "stay" vs. "switch" strategies
- **Immediate feedback**: See results after each round
- **Multiple rounds**: Build statistical evidence through repeated trials

## Why Interactive Demos Matter

The Monty Hall problem is famously counterintuitive—most people incorrectly assume 50/50 odds after a door is revealed. Mathematical proofs alone rarely convince. This game lets you play repeatedly and see the empirical evidence: switching wins ~67% of the time, staying wins ~33%.

## Using the Game

1. **Choose a door** where you think the prize is hidden
2. **Host reveals** a non-winning door
3. **Decide** whether to switch or stay with your original choice
4. **See the result** and watch statistics accumulate
5. **Play multiple rounds** until the pattern becomes clear

## The Mathematics

When you first choose, you have 1/3 chance of being correct. The host, knowing where the prize is, reveals a non-winning door from the remaining two. Now:
- If you **stay**: still 1/3 chance of winning
- If you **switch**: 2/3 chance of winning

Switching is optimal because the host's action provides information that updates the probabilities.

## Educational Value

Students gain:
- **Conditional probability** understanding through hands-on experience
- **Statistical evidence** appreciation via large sample sizes
- **Cognitive bias** awareness by confronting counterintuitive results
- **Computational thinking**: Monte Carlo simulation for probability demonstration

This experiential approach transforms abstract probability theory into memorable, visceral understanding.

## Repository & Resources

All source code, documentation, and educational materials are available in the [GitHub repository](https://github.com/amithjkamath/montyhall), enabling educators to adapt and extend the tool for their specific teaching needs.

